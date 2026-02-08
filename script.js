/**
 * Oracle Fusion Cloud Showcase - Scroll Reveal Animations
 * 
 * This script uses the Intersection Observer API to trigger
 * smooth reveal animations when elements come into view.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Configuration for Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of the element is visible
    };

    // Callback function for when elements intersect
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'active' class to trigger the reveal animation
                entry.target.classList.add('active');
                
                // Optional: Stop observing the element after it's been revealed
                // This improves performance for large pages
                observer.unobserve(entry.target);
            }
        });
    };

    // Create the Intersection Observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Select all elements with the 'reveal' class
    const revealElements = document.querySelectorAll('.reveal');

    // Observe each element
    revealElements.forEach(element => {
        observer.observe(element);
    });

    // Add staggered animation delay for team members
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach((member, index) => {
        member.style.transitionDelay = `${index * 0.1}s`;
    });

    // Optional: Smooth scroll enhancement for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Log initialization for debugging
    console.log('Scroll reveal animations initialized');
    console.log(`Observing ${revealElements.length} elements`);
});
