function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.classList.toggle('active'); // Animates to 'X'
    navLinks.classList.toggle('show'); // Opens/closes menu
}

// nav
document.addEventListener("DOMContentLoaded", function () {
    // Select all nav-links
    const navLinks = document.querySelectorAll(".nav-links a");

    // Add click event to each nav-link
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior
            
            let linkText = this.textContent.trim(); // Get link text
            
            // Define content based on link text
            let content = {
                "About":"Subject:\n\n Rizal's Life and Works\n\nProfessor:\n\nMr. Jojo G. Guntang\n\n\n\n For Project Purposes Only.",
                "Members": "Keisha Andreas\n\nPatrisha Cabacang\n\nEddielyn Cano\n\nJoanna Mirando\n\nAj Perez\n\nCarlson Gorospe\n\nJm Legua\n\nRio Sidaya\n\nWilliam Gojo Cruz",
                "Programmer": "Mishael Jorbyne Maraño\n\nVince Christopher G. Diaz"
            };

            if (content[linkText]) {
                createAndShowModal(linkText, content[linkText]);
            }
        });
    });
});

// Function to dynamically create and show the modal
function createAndShowModal(title, description) {
    // Check if modal already exists
    let existingModal = document.getElementById("navModal");
    if (existingModal) {
        existingModal.remove(); // Remove existing modal before creating a new one
    }

    // Create modal container
    let modal = document.createElement("div");
    modal.id = "navModal";
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.background = "rgba(0, 0, 0, 0.5)";
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.style.zIndex = "1000";

    // Create modal content box
    let modalContent = document.createElement("div");
    modalContent.style.background = "white";
    modalContent.style.padding = "20px";
    modalContent.style.borderRadius = "8px";
    modalContent.style.width = "50%";
    modalContent.style.maxWidth = "500px";
    modalContent.style.textAlign = "center";
    modalContent.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";

    // Create title element
    let modalTitle = document.createElement("h2");
    modalTitle.textContent = title;

    // Create description element (Fix line breaks)
    let modalDescription = document.createElement("p");
    modalDescription.innerHTML = description.replace(/\n/g, "<br>"); // Convert \n to <br>

    // Create close button
    let closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.style.cursor = "pointer";
    closeButton.style.background = "red";
    closeButton.style.color = "white";
    closeButton.style.padding = "5px 10px";
    closeButton.style.border = "none";
    closeButton.style.borderRadius = "4px";
    closeButton.style.marginTop = "10px";

    // Close modal when clicking the button
    closeButton.addEventListener("click", function () {
        document.body.removeChild(modal);
    });

    // Close modal when clicking outside
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            document.body.removeChild(modal);
        }
    });

    // Append elements to modal content
    modalContent.appendChild(modalTitle);
    modalContent.appendChild(modalDescription);
    modalContent.appendChild(closeButton);

    // Append modal content to modal container
    modal.appendChild(modalContent);

    // Append modal to body
    document.body.appendChild(modal);
}

