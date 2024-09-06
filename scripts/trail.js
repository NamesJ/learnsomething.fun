/* cursorTrail constants */
const trailCount = 10; // Number of trail elements
const trails = []; // Array to hold the trail elements

/* cursorTrail variables */
let mouseX = 0;  // screen x-position of the mouse
let mouseY = 0;  // screen y-position of the mouse

const trailPositions = Array(trailCount).fill({ x: 0, y: 0 });

// Create a trail effect with multiple circles
function cursorTrail() {
    // Create trail elements and add them to the document
    for (let i = 0; i < trailCount; i++) {
        const $trail = $('<div class="trail"></div>');
        $('body').append($trail);
        trails.push($trail);
    }

    // Function to animate the trail
    function animateTrail() {
        trails.forEach(($trail, index) => {
            // Get the last recorded position for this trail element
            const lastPos = trailPositions[index];

            // Smoothly move towards the current mouse position
            const xPos = lastPos.x + (mouseX - lastPos.x) * 0.2;
            const yPos = lastPos.y + (mouseY - lastPos.y) * 0.2;

            // Update position
            trailPositions[index] = { x: xPos, y: yPos };

            // Apply styles with slight delay
            $trail.css({
                left: `${xPos}px`,
                top: `${yPos}px`,
                transition: `left ${0.1 + index * 0.02}s ease-out, top ${0.1 + index * 0.02}s ease-out`,
            });
        });

        // Continuously update the animation frame
        requestAnimationFrame(animateTrail);
    }

    // Start the trail animation
    animateTrail();
}