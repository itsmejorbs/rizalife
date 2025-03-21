document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("fade-in"); // Apply fade-in effect on page load

    // Fade-in effect when clicking the START button (index to timeline)
    const startBtn = document.querySelector(".start-btn");
    if (startBtn) {
        startBtn.addEventListener("click", function (event) {
            event.preventDefault();
            document.body.classList.add("fade-out");
            setTimeout(() => {
                window.location.href = "timeline.html";
            }, 500);
        });
    }

    // Fade-out effect when clicking the logo (timeline to index)
    const logoLink = document.querySelector("#logo-link");
    if (logoLink) {
        logoLink.addEventListener("click", function (event) {
            event.preventDefault();
            document.body.classList.add("fade-out");
            setTimeout(() => {
                window.location.href = "index.html";
            }, 500);
        });
    }
});
