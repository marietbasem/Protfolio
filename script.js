// ================================
// Scroll Reveal Animation
// ================================

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach((element) => {

    observer.observe(element);

});


// ================================
// Mobile Menu
// ================================

const menuButton = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");


menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// ================================
// Close Mobile Menu
// ================================

document.querySelectorAll(".nav-links a").forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});