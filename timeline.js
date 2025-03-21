function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.classList.toggle('active'); 
    navLinks.classList.toggle('show'); 
    document.body.classList.toggle('no-scroll');
}

document.addEventListener("DOMContentLoaded", () => {
    const events = document.querySelectorAll(".event");

    events.forEach(event => {
        event.addEventListener("mouseover", () => {
            event.querySelector(".circle").style.backgroundColor = "#ffcc00";
            event.querySelector(".year").style.color = "#d32f2f";
        });

        event.addEventListener("mouseout", () => {
            event.querySelector(".circle").style.backgroundColor = "white";
            event.querySelector(".year").style.color = "#222";
        });

    });
});


document.addEventListener("DOMContentLoaded", () => {
    const events = document.querySelectorAll(".event img");
    const modal = document.createElement("div");
    modal.classList.add("modal__container");

    modal.innerHTML = `
        <div class="modal__content">
            <div class="modal__img-container">
                <img class="modal__img" src="" alt="Event Image">
            </div>
            <div class="modal__text-container">
                <button class="modal__close">&times;</button>
                <h2 class="modal__title">Event Title</h2>
                <p class="modal__description">Event description goes here...</p>
                <div class="modal__buttons">
                    <button class="modal__prev">Previous</button>
                    <button class="modal__next">Next</button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    const modalImg = modal.querySelector(".modal__img");
    const modalTitle = modal.querySelector(".modal__title");
    const modalDesc = modal.querySelector(".modal__description");
    const closeModal = modal.querySelector(".modal__close");
    const prevBtn = modal.querySelector(".modal__prev");
    const nextBtn = modal.querySelector(".modal__next");

    let currentIndex = 0;

    function openModal(index) {
        if (index < 0 || index >= events.length) return;

        currentIndex = index;
        const img = events[currentIndex];
        modalImg.src = img.src;
        modalTitle.textContent = img.alt || "Event Title";
        modalDesc.textContent = img.getAttribute("data-description") || "No description available.";
        
        prevBtn.style.display = currentIndex === 0 ? "none" : "inline-block";
        nextBtn.style.display = currentIndex === events.length - 1 ? "none" : "inline-block";

        modal.classList.add("show-modal");
        modal.style.visibility = "visible";
        modal.style.opacity = "1";
    }

    events.forEach((img, index) => {
        img.addEventListener("click", () => openModal(index));
    });

    closeModal.addEventListener("click", () => {
        modal.style.visibility = "hidden";
        modal.style.opacity = "0";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.visibility = "hidden";
            modal.style.opacity = "0";
        }
    });

    nextBtn.addEventListener("click", () => openModal(currentIndex + 1));
    prevBtn.addEventListener("click", () => openModal(currentIndex - 1));
});

document.addEventListener("DOMContentLoaded", function () {
    function adjustLines() {
        document.querySelectorAll(".event").forEach((event, index) => {
            const line = document.querySelector(`.line-person${index + 1}`);
            if (line) {
                const eventRect = event.getBoundingClientRect();
                const timelineRect = document.querySelector(".timeline").getBoundingClientRect();

                line.style.height = `${eventRect.top - timelineRect.top + eventRect.height / 2}px`;

                line.style.left = `${event.offsetLeft + event.offsetWidth / 2}px`;
            }
        });
    }

    adjustLines();
    window.addEventListener("resize", adjustLines);
});

document.addEventListener('DOMContentLoaded', function() {
    const leftArrow = document.getElementById('timeline-arrow-left');
    const rightArrow = document.getElementById('timeline-arrow-right');

    if (leftArrow) {
        leftArrow.addEventListener('click', function() {
            window.location.href = 'timeline.html'; 
        });
    } else {
        console.error('Left arrow button not found!');
    }

    if (rightArrow) {
        rightArrow.addEventListener('click', function() {
            window.location.href = 'timeline2.html'; 
        });
    } else {
        console.error('Right arrow button not found!');
    }
});


// combo box1

// Toggle Dropdown Menu
document.querySelector(".combo-button").addEventListener("click", function () {
    document.querySelector(".combo-box").classList.toggle("active");
});

function showVideo(videoId) {
    document.querySelectorAll(".video-wrapper").forEach((wrapper) => {
        wrapper.style.display = "none";
        let video = wrapper.querySelector(".video-player");
        if (video) {
            video.pause(); 
            video.currentTime = 0; 
        }
    });

    let selectedWrapper = document.getElementById(videoId);
    if (selectedWrapper) {
        selectedWrapper.style.display = "block";

        let selectedVideo = selectedWrapper.querySelector(".video-player");
        if (selectedVideo) {
            selectedVideo.play(); 
        }
    }
}

// famous works modal combo-box 2
document.addEventListener("DOMContentLoaded", () => {
    const secondComboBox = document.querySelector(".second-combo");
    const secondComboButton = secondComboBox.querySelector(".combo-button");
    const secondComboContent = secondComboBox.querySelector(".combo-content");

    secondComboButton.addEventListener("click", (e) => {
        e.stopPropagation();

        document.querySelectorAll(".combo-box").forEach(otherBox => {
            if (otherBox !== secondComboBox) {
                otherBox.classList.remove("active");
            }
        });

        secondComboBox.classList.toggle("active");
    });

    document.addEventListener("click", (event) => {
        if (!secondComboBox.contains(event.target)) {
            secondComboBox.classList.remove("active");
        }
    });

    const modal = document.querySelector(".modal__container");
    const modalImg = modal.querySelector(".modal__img");
    const modalTitle = modal.querySelector(".modal__title");
    const modalDesc = modal.querySelector(".modal__description");
    const closeModal = modal.querySelector(".modal__close");

    const bookLinks = secondComboBox.querySelectorAll(".combo-content a");

    bookLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const title = link.getAttribute("data-title");
            const imgSrc = link.getAttribute("data-img");
            const description = link.getAttribute("data-description");

            modalImg.src = imgSrc;
            modalTitle.textContent = title;
            modalDesc.textContent = description;

            modal.style.visibility = "visible";
            modal.style.opacity = "1";
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.visibility = "hidden";
        modal.style.opacity = "0";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.visibility = "hidden";
            modal.style.opacity = "0";
        }
    });
});


function closeVideo() {
    document.querySelectorAll(".video-wrapper").forEach((wrapper) => {
        wrapper.style.display = "none";
        let video = wrapper.querySelector(".video-player");
        if (video) {
            video.pause(); 
            video.currentTime = 0; 
        }
    });
}

// Ensure openModal is globally accessible
function openModal(link) {
    const modal = document.querySelector(".modal__container");
    if (!modal) return; 

    const modalTitle = modal.querySelector(".modal__title");
    const modalImage = modal.querySelector(".modal__img");
    const modalDescription = modal.querySelector(".modal__description");

    modalTitle.textContent = link.getAttribute("data-title");
    modalImage.src = link.getAttribute("data-img");
    modalDescription.textContent = link.getAttribute("data-description");

    modal.style.visibility = "visible";
    modal.style.opacity = "1";
}

document.addEventListener("DOMContentLoaded", function () {
    const comboBox = document.querySelector(".combo-box.second-combo");
    const comboLinks = comboBox.querySelectorAll(".combo-content a");
    const modal = document.querySelector(".modal__container");
    const prevButton = document.querySelector(".modal__prev");
    const nextButton = document.querySelector(".modal__next");

    comboLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            openModal(this); 

            modal.classList.add("hide-nav");
            
            prevButton.style.display = "none";
            nextButton.style.display = "none";
        });
    });

    modal.addEventListener("click", function (event) {
        if (event.target.classList.contains("modal__container")) {
            modal.classList.remove("hide-nav");

            prevButton.style.display = "";
            nextButton.style.display = "";

            modal.style.visibility = "hidden";
            modal.style.opacity = "0";
        }
    });
});

function showVideo(videoId) {
    document.querySelectorAll('.video-wrapper.show').forEach(video => {
        video.classList.remove("show");
        setTimeout(() => { video.style.display = "none"; }, 500); 
    });


    setTimeout(() => {
        const video = document.getElementById(videoId);
        video.style.display = "block";
        setTimeout(() => { video.classList.add("show"); }, 10);
    }, 500); 
}

function closeVideo() {
    const openVideos = document.querySelectorAll('.video-wrapper.show');
    openVideos.forEach(video => {
        video.classList.remove("show");
        setTimeout(() => { video.style.display = "none"; }, 500); 
    });
}

// nav
document.addEventListener("DOMContentLoaded", function () {
    
    const navLinks = document.querySelectorAll(".nav-links a");

    
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); 
            
            let linkText = this.textContent.trim(); 
            
        
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

function createAndShowModal(title, description) {
   
    let existingModal = document.getElementById("navModal");
    if (existingModal) {
        existingModal.remove(); 
    }

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

    let modalContent = document.createElement("div");
    modalContent.style.background = "white";
    modalContent.style.padding = "20px";
    modalContent.style.borderRadius = "8px";
    modalContent.style.width = "50%";
    modalContent.style.maxWidth = "500px";
    modalContent.style.textAlign = "center";
    modalContent.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";

    let modalTitle = document.createElement("h2");
    modalTitle.textContent = title;


    let modalDescription = document.createElement("p");
    modalDescription.innerHTML = description.replace(/\n/g, "<br>"); 

    let closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.style.cursor = "pointer";
    closeButton.style.background = "red";
    closeButton.style.color = "white";
    closeButton.style.padding = "5px 10px";
    closeButton.style.border = "none";
    closeButton.style.borderRadius = "4px";
    closeButton.style.marginTop = "10px";

    closeButton.addEventListener("click", function () {
        document.body.removeChild(modal);
    });

    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            document.body.removeChild(modal);
        }
    });

    modalContent.appendChild(modalTitle);
    modalContent.appendChild(modalDescription);
    modalContent.appendChild(closeButton);

    modal.appendChild(modalContent);

    document.body.appendChild(modal);
}










