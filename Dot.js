document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('DogeHeader'); // Target the header
    if (!header) {
        console.error('Header not found!');
        return;
    }

    const colors = ['#00c3ff', '#e100ff', '#3cff00', '#ffae00']; // Colors
    const dotCountPerInterval = 1; // Dots per interval
    const dotLifetime = 1000; // Dot lifespan in ms
    const intervalTime = 200; // Interval in ms

    function createDot() {
        for (let i = 0; i < dotCountPerInterval; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot'); // Optional CSS class for styling

            // Get header dimensions
            const rect = header.getBoundingClientRect();
            const headerWidth = rect.width;
            const headerHeight = rect.height;

            // Randomize size, position, and color
            const size = Math.random() * 80 + 40; // Size between 40px and 120px
            const xPos = Math.random() * headerWidth; // X within header width
            const yPos = Math.random() * headerHeight; // Y within header height
            const color = colors[Math.floor(Math.random() * colors.length)]; // Random color

            // Apply styles dynamically
            dot.style.width = `${size}px`;
            dot.style.height = `${size}px`;
            dot.style.left = `${xPos}px`;
            dot.style.top = `${yPos}px`;
            dot.style.backgroundColor = color;
            dot.style.opacity = '0.8';
            dot.style.transition = `opacity ${dotLifetime / 1000}s ease, transform ${dotLifetime / 1000}s ease`;

            // Append the dot to the header
            header.appendChild(dot);

            // Fade out and remove the dot
            setTimeout(() => {
                dot.style.opacity = '0';
                dot.style.transform = 'scale(0.5)';
                setTimeout(() => dot.remove(), dotLifetime / 2);
            }, dotLifetime);
        }
    }

    // Generate dots at intervals
    setInterval(createDot, intervalTime);
});
