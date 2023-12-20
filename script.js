document.addEventListener("DOMContentLoaded", function () {
    const loadingPage = document.getElementById("loading-page");
    const loadingText = document.getElementById("loading-text");
    const loadingBar = document.getElementById("loading-bar");
    const loadingPercentage = document.getElementById("loading-percentage");
    const mainContent = document.getElementById("main-content");

    // Prompt user for name
    const nameInput = prompt("Please enter your name:");

    if (nameInput) {
        // If the user provides a name
        loadingText.textContent = `Assalamu Alaikkum ${nameInput}! Welcome to the world of Muhammad ﷺ !`;

        // Simulate a loading process
        let progress = 0;
        const interval = setInterval(function () {
            progress += Math.random() * 10;

            if (progress >= 100) {
                clearInterval(interval);
                loadingBar.style.width = "100%";
                loadingPercentage.textContent = "Loading complete!";
                setTimeout(function () {
                    loadingPage.style.display = "none";
                    mainContent.style.display = "block";
                }, 1000);
            } else {
                loadingBar.style.width = `${progress}%`;
                loadingPercentage.textContent = `${Math.round(progress)}%`;
            }
        }, 500);
    } else{ 
        function showError(message) {
        // Display an error message
        const errorBox = document.createElement("div");
        errorBox.className = "error-box";
        errorBox.textContent = message;

        // Add a reload button
        const reloadButton = document.createElement("button");
        reloadButton.className = "reload-button";
        reloadButton.textContent = "Reload";
        reloadButton.addEventListener("click", function () {
            location.reload();
        });

        // Append error box and reload button to the body
        errorBox.appendChild(reloadButton);
        document.body.appendChild(errorBox);
    }}

    // Example usage
    showError("Error 404!!! Please enter a valid name.");

});

document.addEventListener('DOMContentLoaded', function () {
    const scrollLinks = document.querySelectorAll('.scroll-btn');

    scrollLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    }
});

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  }); 

  document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');
    const header = document.querySelector('.header');
  
    menuToggle.addEventListener('click', function () {
      header.classList.toggle('active');
    });
  
    // Close the menu when a link is clicked
    navbar.addEventListener('click', function () {
      header.classList.remove('active');
    });
  });
  