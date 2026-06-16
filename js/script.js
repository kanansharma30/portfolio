/* FORM VALIDATION */

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {

        e.preventDefault();

        alert("Please fill out all required fields.");
    }
});

/* TYPING EFFECT */

const typingText = document.querySelector(".typing-text");

const words = [
    "Developer",
    "Creative Thinker",
    "Problem Solver",
    "Continuous Learner"
];

let wordIndex = 0;

let charIndex = 0;

let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1000);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex === words.length) {

                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();

/* DARK LIGHT MODE */

const themeToggle =
    document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const icon =
        themeToggle.querySelector("i");

    if (document.body.classList.contains("light-mode")) {

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");
    }
});

/* REVEAL ON SCROLL */

const reveals =
    document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach((section) => {

        const windowHeight = window.innerHeight;

        const revealTop =
            section.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            section.classList.add("active");
        }
    });
});

/* BACK TO TOP */

const topBtn =
    document.getElementById("top-btn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"
    });
});