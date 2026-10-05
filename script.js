// ==============================
// NAVBAR ACTIVE LINK
// ==============================

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    link.addEventListener("click", function () {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });
});


// ==============================
// BACK TO TOP BUTTON
// ==============================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        if (backToTop) {
            backToTop.style.display = "block";
        }
    } else {
        if (backToTop) {
            backToTop.style.display = "none";
        }
    }
});


if (backToTop) {
    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });
}


// ==============================
// CONTACT FORM
// ==============================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        alert("Thank you! Your message has been submitted.");

        contactForm.reset();

    });

}


// ==============================
// CURRENT YEAR
// ==============================

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// ==============================
// SCROLL ANIMATION
// ==============================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show-section");
            }

        });

    },
    {
        threshold: 0.15
    }
);

sections.forEach(section => {
    observer.observe(section);
});