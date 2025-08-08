<script>
    let lastScrollTop = 0; // Store the last scroll position
    const navbar = document.querySelector('.navlist'); // Select the navbar

    window.addEventListener('scroll', function() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop; // Get current scroll position

        // If the user scrolls down, hide the navbar
        if (currentScroll > lastScrollTop) {
            navbar.style.top = "-80px"; // Hide the navbar (adjust based on navbar height)
        } else {
            navbar.style.top = "0"; // Show the navbar
        }

        // Update the last scroll position
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
</script>

