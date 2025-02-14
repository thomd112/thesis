// Wait for the DOM to load before adding event listeners
document.addEventListener('DOMContentLoaded', function () {
    // Select all link items
    const linkItems = document.querySelectorAll('.link-item');
    
    // Select the message container to display dynamic messages
    const messageContainer = document.getElementById('message-container');

    // Function to handle link click
    linkItems.forEach(item => {
        item.addEventListener('click', function (e) {
            // Prevent default behavior (just in case we have actual links)
            e.preventDefault();

            // Get the link text
            const linkText = item.querySelector('a').textContent;

            // Add the 'clicked' class to highlight the link
            item.classList.add('clicked');

            // Display a dynamic message in the message container
            messageContainer.style.display = 'block';
            messageContainer.textContent = `You clicked on ${linkText}!`;

            // Reset the class after 2 seconds (so the effect goes away after a short time)
            setTimeout(() => {
                item.classList.remove('clicked');
            }, 2000);
        });
    });
});

