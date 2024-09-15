// levitate.js

// Function to generate random levitation-like effects
function applyLevitation() {
    $('.levitate').each(function(index, element) {
        const duration = 3;
        const delay = 2 * (index % 2);

        // Apply animation properties to the element
        $(this).css({
            'animation': `levitate ${duration}s ease-in-out infinite`,
            'animation-duration': `${duration}s`,
            'animation-delay': `${delay}s`,
        });
    });
}

$(document).ready(function() {
    // Levitate the testimonials
    $('.testimonial > .image > img').addClass('levitate');
    applyLevitation();
})