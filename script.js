document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       SMOOTH SCROLL
    ========================= */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function(event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =========================
       SCROLL REVEAL
    ========================= */

    const revealElements = document.querySelectorAll(
        ".service, .why-card, .about-box, .contact-box, .heading"
    );

    revealElements.forEach(element => {

        element.style.opacity = "0";
        element.style.transform = "translateY(25px)";
        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

    });


    const observer = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    revealElements.forEach(element => {
        observer.observe(element);
    });


    /* =========================
       FOOTER YEAR
    ========================= */

    const yearElement =
        document.querySelector("#year");

    if (yearElement) {
        yearElement.textContent =
            new Date().getFullYear();
    }


    /* =========================
       NAVBAR SCROLL EFFECT
    ========================= */

    const navbar = document.querySelector("nav");

    window.addEventListener("scroll", () => {

        if (!navbar) return;

        if (window.scrollY > 40) {

            navbar.style.background =
                "rgba(5,6,11,0.94)";

        } else {

            navbar.style.background =
                "rgba(5,6,11,0.78)";

        }

    });

});