const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {

        e.preventDefault();

        alert("Please fill out all required fields.");
    }
});