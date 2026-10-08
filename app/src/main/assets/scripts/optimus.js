/**
 * Assimilate Pro · Optimus field
 * HUD language from Integrity Village (honesty.mkweli.tech):
 * void ground, cyan panels, Orbitron / Share Tech Mono, scanlines, stage chips.
 * Content comes from the existing region quizzes, scenarios, and 2026 essentials.
 */
(function () {
  "use strict";

  var KEY = "assimilate-pro-optimus-v1";
  var REGIONS = [
    { key: "today", name: "Shared steps", blurb: "Web, home, work, money", plate: "portal" },
    { key: "united_kingdom", name: "United Kingdom", blurb: "Line, doctor, share code", plate: "queue" },
    { key: "united_states", name: "United States", blurb: "Job, home, 911", plate: "work" },
    { key: "central_europe", name: "Central Europe", blurb: "Address, letters, quiet Sunday", plate: "papers" },
    { key: "scandinavia", name: "Scandinavia", blurb: "ID, coffee, first names", plate: "clinic" },
    { key: "finland", name: "Finland", blurb: "Quiet, winter, ID", plate: "papers" },
    { key: "baltics", name: "Baltics", blurb: "ID, websites, on time", plate: "portal" },
    { key: "balkans", name: "Balkans", blurb: "Coffee, papers, neighbors", plate: "house" },
    { key: "greece", name: "Greece", blurb: "Numbers, appointments", plate: "house" },
    { key: "mediterranean", name: "Mediterranean", blurb: "Late dinner, town hall", plate: "house" }
  ];
  var ROLES = [
    { id: "student", label: "Student" },
    { id: "professional", label: "Job" },
    { id: "family", label: "Family" },
    { id: "awaiting", label: "Waiting" }
  ];
  var STAGE_NAME = { gate: "Place", brief: "Read", drill: "Quiz", scene: "Do", ledger: "Score" };

  var state = load();
  var stage = "gate";
  var pillar = 0;
  var qIndex = 0;
  var sceneIndex = 0;
  var locked = false;

  var canvas = document.getElementById("field");
  var ctx = canvas.getContext("2d");
  var boot = document.getElementById("boot");
  var play = document.getElementById("play");
  var mainPanel = document.getElementById("main-panel");
  var sidePanel = document.getElementById("side-panel");

  document.getElementById("enter-btn").addEventListener("click", enter);
  document.getElementById("reset-game").addEventListener("click", reset);
  document.getElementById("stage-switch").addEventListener("click", function (event) {
    var button = event.target.closest("button[data-stage]");
    if (!button) return;
    stage = button.getAttribute("data-stage");
    locked = false;
    render();
  });

  function load() {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || fresh();
    } catch (err) {
      return fresh();
    }
  }
  function fresh() {
    return { role: "professional", region: "today", read: {}, drills: {}, scenes: {} };
  }
  function save() {
    localStorage.setItem(KEY, JSON.stringify(state));
  }
  function enter() {
    boot.hidden = true;
    play.hidden = false;
    render();
  }
  function reset() {
    state = fresh();
    stage = "gate";
    pillar = 0;
    qIndex = 0;
    sceneIndex = 0;
    locked = false;
    save();
    render();
  }

  function regionMeta() {
    return REGIONS.filter(function (item) { return item.key === state.region; })[0] || REGIONS[0];
  }
  function essentials() {
    return (window.CAM_GUIDES && window.CAM_GUIDES.essentials) || { pillars: [], quiz: null };
  }
  function regionData() {
    return (window.CAM_DATA && window.CAM_DATA.getRegionData(state.region)) || null;
  }
  function questions() {
    var data = regionData();
    return (data && data.questions) || [];
  }
  function scenarioList() {
    var pack = window.CAM_SCENARIOS && window.CAM_SCENARIOS.getRegionScenarios(state.region);
    if (!pack) return [];
    return Object.keys(pack).map(function (key) { return pack[key]; }).filter(Boolean);
  }
  function progressCount() {
    var read = Object.keys(state.read).length;
    var drills = state.drills[state.region] ? 1 : 0;
    var scenes = state.scenes[state.region] ? 1 : 0;
    var gate = state.region ? 1 : 0;
    return gate + (read > 0 ? 1 : 0) + drills + scenes;
  }

  function render() {
    document.querySelectorAll("#stage-switch button").forEach(function (button) {
      button.classList.toggle("on", button.getAttribute("data-stage") === stage);
    });
    var meta = regionMeta();
    document.getElementById("phase-kicker").textContent = STAGE_NAME[stage] || "Place";
    document.getElementById("phase-title").textContent = meta.name;
    document.getElementById("qcount").textContent = progressCount() + "/4";
    renderRoles();
    if (stage === "gate") renderGate();
    if (stage === "brief") renderBrief();
    if (stage === "drill") renderDrill();
    if (stage === "scene") renderScene();
    if (stage === "ledger") renderLedger();
    save();
  }

  function renderRoles() {
    var host = document.getElementById("role-chips");
    host.innerHTML = ROLES.map(function (role) {
      return '<button type="button" class="chip' + (state.role === role.id ? " on" : "") + '" data-role="' + role.id + '">' + role.label + "</button>";
    }).join("");
    host.onclick = function (event) {
      var button = event.target.closest("[data-role]");
      if (!button) return;
      state.role = button.getAttribute("data-role");
      render();
    };
  }

  function renderGate() {
    mainPanel.innerHTML =
      sceneArt("portal") +
      "<h2>Pick a place</h2><p class=\"lede\">Tap a picture. Then read the short lines.</p>";
    sidePanel.innerHTML =
      '<div class="grid-nodes">' +
      REGIONS.map(function (item) {
        return '<button type="button" class="node' + (state.region === item.key ? " on" : "") + '" data-region="' + item.key + '"><img src="assets/figures/' + item.plate + '.png" alt=""><strong>' + item.name + "</strong><small>" + item.blurb + "</small></button>";
      }).join("") +
      "</div>";
    sidePanel.onclick = function (event) {
      var button = event.target.closest("[data-region]");
      if (!button) return;
      state.region = button.getAttribute("data-region");
      pillar = 0;
      qIndex = 0;
      sceneIndex = 0;
      locked = false;
      stage = "brief";
      render();
    };
  }

  function renderBrief() {
    var pillars = essentials().pillars || [];
    var item = pillars[pillar] || pillars[0];
    if (!item) {
      mainPanel.innerHTML = "<p>Reading not loaded.</p>";
      sidePanel.innerHTML = "";
      return;
    }
    state.read[item.id] = true;
    mainPanel.innerHTML =
      sceneArt(item.id) +
      "<p class=\"kicker cyan\">Read " + (pillar + 1) + "/" + pillars.length + "</p>" +
      "<h2>" + item.title + "</h2>" +
      "<ul class=\"points\">" + item.points.map(function (point) { return "<li>" + point + "</li>"; }).join("") + "</ul>";
    var countries = regionData() && regionData().countries;
    var local = "";
    if (countries) {
      var first = countries[Object.keys(countries)[0]];
      if (first && first.sections && first.sections[0]) {
        local = "<p class=\"kicker cyan\">" + first.name + "</p><ul class=\"points\">" +
          first.sections[0].items.map(function (line) { return "<li>" + line + "</li>"; }).join("") + "</ul>";
      }
    }
    sidePanel.innerHTML =
      local +
      '<button type="button" class="cta" id="next-brief">' + (pillar < pillars.length - 1 ? "Next" : "Open quiz") + "</button>";
    document.getElementById("next-brief").onclick = function () {
      if (pillar < pillars.length - 1) pillar += 1;
      else stage = "drill";
      render();
    };
  }

  function renderDrill() {
    var list = questions();
    if (!list.length) {
      mainPanel.innerHTML = sceneArt("papers") + "<h2>No quiz here</h2><p>Pick another place.</p>";
      sidePanel.innerHTML = "";
      return;
    }
    var q = list[qIndex];
    var letters = Object.keys(q.options);
    mainPanel.innerHTML =
      sceneArt("queue") +
      "<p class=\"kicker cyan\">Quiz " + (qIndex + 1) + "/" + list.length + " · right answer is 100</p>" +
      "<h2>" + q.question + "</h2>";
    sidePanel.innerHTML =
      '<div class="bids">' +
      letters.map(function (letter) {
        return '<button type="button" class="bid" data-letter="' + letter + '">' + q.options[letter] + "</button>";
      }).join("") +
      "</div><div id=\"explain\"></div>";
    if (!locked) {
      sidePanel.onclick = function (event) {
        var button = event.target.closest("[data-letter]");
        if (!button || locked) return;
        locked = true;
        var letter = button.getAttribute("data-letter");
        var good = letter === q.correct;
        button.classList.add(good ? "good" : "bad");
        if (!state.drills[state.region]) state.drills[state.region] = { correct: 0, seen: 0 };
        state.drills[state.region].seen += 1;
        if (good) state.drills[state.region].correct += 1;
        document.getElementById("explain").innerHTML =
          '<div class="explain"><strong>' + (good ? "100" : "30") + "</strong><p>" + q.explanation + "</p>" +
          '<button type="button" class="cta alt" id="next-q">' + (qIndex < list.length - 1 ? "Next" : "Open Do and Don't") + "</button></div>";
        document.getElementById("next-q").onclick = function () {
          locked = false;
          if (qIndex < list.length - 1) qIndex += 1;
          else stage = "scene";
          render();
        };
        save();
      };
    }
  }

  function renderScene() {
    var list = scenarioList();
    if (!list.length) {
      mainPanel.innerHTML = sceneArt("house", true) + "<h2>No story here</h2><p>The reading and the quiz still count.</p>";
      sidePanel.innerHTML = '<button type="button" class="cta" id="to-ledger">See my score</button>';
      document.getElementById("to-ledger").onclick = function () { stage = "ledger"; render(); };
      return;
    }
    var scene = list[sceneIndex];
    var step = (scene.steps && scene.steps[0]) || { title: scene.title, description: "", dos: [], donts: [] };
    state.scenes[state.region] = true;
    mainPanel.innerHTML =
      sceneArt("house", true) +
      "<p class=\"kicker cyan\">Story " + (sceneIndex + 1) + "/" + list.length + "</p>" +
      "<h2>" + (step.title || scene.title) + "</h2><p class=\"lede\">" + (step.description || "") + "</p>";
    sidePanel.innerHTML =
      '<div class="split"><div class="do"><h3>Do</h3><ul>' + (step.dos || []).map(function (line) { return "<li>" + line + "</li>"; }).join("") +
      '</ul></div><div class="dont"><h3>Don’t</h3><ul>' + (step.donts || []).map(function (line) { return "<li>" + line + "</li>"; }).join("") +
      "</ul></div></div>" +
      '<button type="button" class="cta" id="next-scene">' + (sceneIndex < list.length - 1 ? "Next" : "See my score") + "</button>";
    document.getElementById("next-scene").onclick = function () {
      if (sceneIndex < list.length - 1) sceneIndex += 1;
      else stage = "ledger";
      render();
    };
  }

  function renderLedger() {
    var drill = state.drills[state.region] || { correct: 0, seen: 0 };
    var who = (ROLES.filter(function (role) { return role.id === state.role; })[0] || {}).label || state.role;
    mainPanel.innerHTML =
      sceneArt("papers") +
      "<h2>Your score</h2><p class=\"lede\">Saved on this phone.</p>" +
      "<ul class=\"points\"><li>Who: " + who + "</li><li>Place: " + regionMeta().name + "</li>" +
      "<li>Pages read: " + Object.keys(state.read).length + "</li>" +
      "<li>Quiz: " + drill.correct + " right / " + drill.seen + " tries</li>" +
      "<li>Story done: " + (state.scenes[state.region] ? "yes" : "not yet") + "</li></ul>";
    sidePanel.innerHTML =
      "<p class=\"lede\">Pick another place.</p>" +
      '<button type="button" class="cta" id="again">Back to places</button>';
    document.getElementById("again").onclick = function () { stage = "gate"; render(); };
  }

  var CAPTIONS = {
    portal: "Use the real website. Skip the ads.",
    house: "See the home and the paper before you pay.",
    work: "A job paper is real. Cash with no paper is not.",
    clinic: "Family doctor first. Hospital for a big emergency.",
    papers: "Keep every letter. Take a photo.",
    queue: "Wait your turn.",
    scam: "A gift card is a trick."
  };

  document.body.addEventListener("error", function (event) {
    var img = event.target;
    if (!img || img.tagName !== "IMG" || !img.getAttribute("data-kind")) return;
    var kind = img.getAttribute("data-kind");
    var fallback = document.createElement("div");
    fallback.innerHTML = svg(kind);
    if (fallback.firstChild) img.replaceWith(fallback.firstChild);
  }, true);

  function sceneArt(kind) {
    var map = {
      digital_state: "portal",
      housing: "house",
      work_rights: "work",
      language_status: "papers",
      scams_safety: "scam",
      money_health: "clinic",
      awaiting_docs: "papers",
      portal: "portal",
      house: "house",
      queue: "queue",
      papers: "papers",
      clinic: "clinic",
      work: "work",
      scam: "scam"
    };
    var plate = map[kind] || "portal";
    var caption = arguments[1] ? "" : "<figcaption>" + CAPTIONS[plate] + "</figcaption>";
    return '<figure class="scene"><img src="assets/figures/' + plate + '.png" alt="" data-kind="' + plate + '">' + caption + "</figure>";
  }

  function svg(kind) {
    var common = '<svg viewBox="0 0 160 112" aria-hidden="true"><rect width="160" height="112" rx="12" fill="#101018" stroke="#00e5ff" stroke-opacity="0.35"/>';
    if (kind === "house") {
      return common + '<path d="M30 62 L80 28 L130 62 V96 H30 Z" fill="none" stroke="#00e5ff"/><rect x="70" y="70" width="20" height="26" fill="none" stroke="#3dff9a"/><circle cx="48" cy="74" r="5" fill="#e07030"/></svg>';
    }
    if (kind === "clinic") {
      return common + '<rect x="58" y="24" width="44" height="64" fill="none" stroke="#00e5ff"/><path d="M80 36 V76 M64 56 H96" stroke="#3dff9a"/><rect x="28" y="70" width="22" height="16" fill="none" stroke="#e07030"/></svg>';
    }
    if (kind === "work") {
      return common + '<rect x="36" y="40" width="88" height="46" fill="none" stroke="#00e5ff"/><path d="M58 40 V30 H102 V40" fill="none" stroke="#3dff9a"/><path d="M48 62 H112" stroke="#e07030"/></svg>';
    }
    if (kind === "scam") {
      return common + '<path d="M80 22 L118 90 H42 Z" fill="none" stroke="#ff3b4e"/><path d="M80 48 V68" stroke="#ff3b4e"/><circle cx="80" cy="78" r="2" fill="#ff3b4e"/></svg>';
    }
    if (kind === "queue") {
      return common + '<circle cx="40" cy="58" r="8" fill="none" stroke="#00e5ff"/><circle cx="68" cy="58" r="8" fill="none" stroke="#00e5ff"/><circle cx="96" cy="58" r="8" fill="none" stroke="#3dff9a"/><path d="M28 84 H124" stroke="#e07030"/></svg>';
    }
    if (kind === "papers") {
      return common + '<rect x="46" y="24" width="58" height="68" fill="none" stroke="#00e5ff"/><path d="M56 42 H94 M56 54 H94 M56 66 H80" stroke="#3dff9a"/></svg>';
    }
    return common + '<rect x="34" y="34" width="92" height="48" fill="none" stroke="#00e5ff"/><circle cx="80" cy="58" r="10" fill="none" stroke="#3dff9a"/><path d="M28 90 H132" stroke="#e07030"/></svg>';
  }

  function draw() {
    var w = canvas.width = window.innerWidth;
    var h = canvas.height = window.innerHeight;
    ctx.fillStyle = "#08080c";
    ctx.fillRect(0, 0, w, h);
    var t = Date.now() / 1000;
    ctx.strokeStyle = "rgba(0,229,255,0.16)";
    ctx.lineWidth = 1;
    var gap = 48;
    var shift = (t * 12) % gap;
    for (var x = -gap; x < w + gap; x += gap) {
      ctx.beginPath();
      ctx.moveTo(x + shift, 0);
      ctx.lineTo(x + shift, h);
      ctx.stroke();
    }
    for (var y = -gap; y < h + gap; y += gap) {
      ctx.beginPath();
      ctx.moveTo(0, y + shift);
      ctx.lineTo(w, y + shift);
      ctx.stroke();
    }
    var nodes = [[0.2, 0.3], [0.55, 0.22], [0.78, 0.48], [0.32, 0.7], [0.66, 0.74]];
    nodes.forEach(function (node, i) {
      var pulse = 4 + Math.sin(t * 2 + i) * 2;
      ctx.beginPath();
      ctx.fillStyle = i % 2 ? "rgba(61,255,154,0.85)" : "rgba(0,229,255,0.9)";
      ctx.arc(node[0] * w, node[1] * h, pulse, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  window.addEventListener("resize", draw);
  draw();
})();
