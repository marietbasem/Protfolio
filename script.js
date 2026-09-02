document.addEventListener("DOMContentLoaded", () => {

    // ================= SCROLL REVEAL =================

    const revealElements =
        document.querySelectorAll(".reveal");

    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.1
            }
        );


    revealElements.forEach((element) => {
        observer.observe(element);
    });


    // ================= ACTIVE NAVIGATION =================

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(".navbar nav a");


    function updateActiveLink() {

        let current = "";

        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop - 200;

            if (window.scrollY >= sectionTop) {

                current =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach((link) => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                #${current}
            ) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveLink
    );


    updateActiveLink();

});


// ================= CONTACT FORM =================

function sendMessage(event) {

    event.preventDefault();

    alert("Thanks for your message!");

    event.target.reset();

}