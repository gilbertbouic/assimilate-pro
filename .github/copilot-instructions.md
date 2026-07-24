# Copilot Instructions for Cultural-Assimilation-Manual

## Project Overview

The Cultural-Assimilation-Manual is an **open-source web application** that provides scenario-based, interactive cultural guidance for immigrants and international professionals. The project helps users navigate cultural integration through interactive quizzes, role-based personalization, and practical scenario guidance.

### Mission
Help immigrants successfully integrate into new cultures by providing depth over breadth with highly structured, scenario-based cultural guidance tailored to specific contexts.

### Key Features
- Interactive quizzes with scoring and progress tracking
- Scenario-based learning modules (workplace, healthcare, bureaucracy, social)
- Role-based personalization (students, remote workers, professionals, etc.)
- Privacy-first design (no tracking, local storage only)
- B2B corporate onboarding capabilities
- Support for multiple cultural regions and countries

## Technology Stack

This is a **pure vanilla JavaScript web application** with no frameworks or build tools:

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Storage**: Browser Local Storage API (for privacy-friendly progress tracking)
- **No Backend**: Runs entirely in the browser, can be served from any static host
- **No Build Process**: Direct file serving, no compilation or bundling required

## Project Structure

```
├── index.html              # Main HTML file with navigation
├── styles.css              # Main stylesheet
├── interactive-styles.css  # Styles for interactive components
├── app.js                  # Core application logic
├── data.js                 # Cultural data for all countries/regions
├── scenarios.js            # Scenario-based guidance content
├── interactive.js          # Interactive components (quizzes, cards, simulations)
├── navigation.js           # Enhanced navigation and section management
├── hand-tracking.js        # Optional hand-tracking features
├── README.md               # Documentation
└── PRIVACY.md              # Privacy policy
```

## Code Style and Conventions

### JavaScript
- **Use vanilla JavaScript** - No frameworks (React, Vue, Angular, etc.)
- **ES6+ syntax** - Use modern JavaScript features (const/let, arrow functions, template literals)
- **Clear variable names** - Descriptive names that explain purpose
- **Comment sparingly** - Code should be self-documenting, comments only when necessary
- **DOM manipulation** - Use standard DOM APIs (querySelector, addEventListener, etc.)
- **Event-driven architecture** - Handle user interactions through event listeners

### HTML
- **Semantic HTML** - Use appropriate semantic tags (section, article, nav, etc.)
- **Accessibility** - Include ARIA labels and proper heading hierarchy
- **Clean structure** - Well-organized, properly indented
- **Data attributes** - Use data-* attributes for storing custom data (e.g., data-country, data-category)

### CSS
- **Class-based styling** - Avoid inline styles, use meaningful class names
- **Responsive design** - Mobile-first approach, use flexbox and grid
- **CSS variables** - Use for colors, spacing, and common values
- **Animations** - Smooth transitions for better UX
- **BEM-like naming** - Use clear, descriptive class names

## Development Guidelines

### Adding New Features

1. **Content additions** (new regions, scenarios, quiz questions):
   - Add data to `data.js` following existing structure
   - Ensure cultural information is accurate and respectful
   - Include proper references and context

2. **Interactive features**:
   - Add to `interactive.js` if it's a reusable component
   - Follow existing patterns for quizzes, cards, and simulations
   - Ensure local storage integration for progress tracking

3. **UI changes**:
   - Maintain responsive design
   - Test on multiple screen sizes
   - Keep accessibility in mind
   - Update both `styles.css` and `interactive-styles.css` as appropriate

### File Organization

- **app.js**: Core application state and navigation
- **data.js**: Static cultural data only
- **scenarios.js**: Scenario content and structure
- **interactive.js**: All interactive components and quiz logic
- **navigation.js**: Section management and routing
- **hand-tracking.js**: Optional advanced features

### Privacy and Security

This project has a **strong privacy commitment**:

- **NO external analytics** - Never add tracking scripts (Google Analytics, etc.)
- **NO advertisements** - Keep the app completely ad-free
- **Local storage only** - All user data stays on their device
- **No server communication** - App runs entirely client-side
- **No user accounts** - No authentication or registration required
- **Respect GDPR** - Design always respects user privacy

When adding features:
- ✅ Use localStorage for saving progress
- ✅ Give users control over their data (clear/reset options)
- ❌ Never send data to external servers
- ❌ Never add cookies beyond local storage
- ❌ Never include third-party tracking

### Cultural Content Guidelines

When adding or modifying cultural content:

1. **Be respectful** - Describe cultures with respect and nuance
2. **Avoid stereotypes** - Focus on patterns, not absolute generalizations
3. **Acknowledge variation** - Note regional and individual differences
4. **Cite context** - Explain the "why" behind cultural practices
5. **Be practical** - Focus on actionable guidance for newcomers
6. **Stay neutral** - Avoid value judgments about cultural differences
7. **Update carefully** - Cultural information should be current and accurate

## Testing and Validation

### Manual Testing

Since this is a pure JavaScript app with no test framework:

1. **Browser testing**:
   - Test in Chrome, Firefox, Safari, and Edge
   - Test on mobile devices (responsive design)
   - Verify all interactive features work

2. **Feature testing**:
   - Quiz functionality (questions, scoring, feedback)
   - Scenario navigation
   - Progress tracking and local storage
   - All navigation buttons and links
   - Responsive design breakpoints

3. **Content validation**:
   - Check for typos and grammar
   - Verify cultural accuracy
   - Ensure all links work
   - Test all interactive elements

### Local Development

To test locally:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

### Before Committing

- ✅ Test all changed functionality manually
- ✅ Check browser console for errors
- ✅ Verify responsive design isn't broken
- ✅ Ensure local storage works correctly
- ✅ Review code for privacy compliance

## Common Tasks

### Adding a New Cultural Region

1. Add region data to `data.js` in the `culturalData` object
2. Include all required categories (relationships, communication, economy, etc.)
3. Add region button in `index.html` country selection section
4. Add corresponding CSS styling in `styles.css`
5. Test navigation and content display

### Creating New Quiz Questions

1. Add questions to the quiz array in `interactive.js`
2. Follow the structure: question, options, correct answer, explanation
3. Categorize appropriately
4. Test quiz functionality and scoring

### Adding New Scenarios

1. Add scenario data to `scenarios.js`
2. Include context, steps, dos/don'ts, and cultural notes
3. Link from appropriate navigation
4. Test flip cards and interactions

## Important Principles

1. **Keep it simple** - No build tools, no dependencies (except optional TensorFlow.js)
2. **Privacy first** - Never compromise user privacy
3. **Accessibility** - Make the app usable for everyone
4. **Cultural sensitivity** - Handle cultural content with care and respect
5. **Open source spirit** - Document changes, be helpful to contributors
6. **No breaking changes** - Maintain backward compatibility with local storage

## File Size Considerations

- `data.js` is large (~440KB) - this is expected for comprehensive cultural data
- Keep JavaScript files modular and focused
- Optimize images if adding any
- Minimize external dependencies

## Version Control

- Use clear, descriptive commit messages
- Keep commits focused on single features or fixes
- Reference issues in commit messages when applicable
- Follow existing branching strategy

## Questions or Clarifications

When in doubt:
- Check existing code for patterns
- Prioritize user privacy
- Maintain cultural sensitivity
- Keep the app simple and accessible
- Refer to README.md for project philosophy

## Resources

- **Repository**: https://github.com/gilbertbouic/The-Cultural-User-Manual
- **Privacy Policy**: See PRIVACY.md
- **Documentation**: See README.md
- **Best Practices**: https://gh.io/copilot-coding-agent-tips
