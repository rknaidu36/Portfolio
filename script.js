
/* ==============================
   MOBILE NAVIGATION
============================== */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.replace("fa-bars", "fa-xmark");
    } else {
        icon.classList.replace("fa-xmark", "fa-bars");
    }

});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.replace("fa-xmark", "fa-bars");

    });

});


/* ==============================
   SCROLL REVEAL ANIMATION
============================== */

const revealElements = document.querySelectorAll(
    ".section-heading, .about-content, .skill-card, .project-card, .education-card, .contact-content"
);

revealElements.forEach(function (element) {
    element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            revealObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


/* ==============================
   DYNAMIC FOOTER YEAR
============================== */

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =
        `&copy; ${new Date().getFullYear()} RK Portfolio. All Rights Reserved.`;

}

/* ==============================
   TYPING ANIMATION
============================== */

const typingText = document.querySelector(".typing-text");

const roles = [
    "Computer Engineering Student",
    "AI & ML Enthusiast",
    "Software Developer",
    "Web Developer",
    "IoT Developer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeAnimation() {

    if (!typingText) return;

    const currentRole = roles[roleIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingText.textContent = currentRole.substring(0, charIndex);

    let speed = deleting ? 50 : 100;

    if (!deleting && charIndex === currentRole.length) {

        deleting = true;
        speed = 1500;

    } else if (deleting && charIndex === 0) {

        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 500;

    }

    setTimeout(typeAnimation, speed);
}

if (typingText) {
    typeAnimation();
}
