/**
 * Cultural Assimilation Manual - Navigation Module
 * Handles responsive menu toggle and smooth scrolling navigation.
 * No dependencies on data or scenarios modules.
 */
(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', () => {
        const menuToggle = document.getElementById('menu-toggle');
        const mainNav = document.getElementById('main-nav');
        const navLinks = mainNav.querySelectorAll('a');

        // Toggle mobile menu visibility
        menuToggle.addEventListener('click', () => {
            const isActive = mainNav.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', isActive);
        });

        // Handle navigation link clicks with smooth scrolling
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = e.target.getAttribute('href');
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                    mainNav.classList.remove('active'); // Close menu on link click
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    });
})();
