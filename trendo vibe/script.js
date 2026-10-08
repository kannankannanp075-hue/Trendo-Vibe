// ===============================
// TRENDO VIBE - JAVASCRIPT
// ===============================


// Watch Now Button
const watchButton = document.querySelector(".watch-btn");

watchButton.addEventListener("click", function () {

    alert("🎬 Welcome to Trendo Vibe! Your video is ready to watch.");

});


// Explore Button
const exploreButton = document.querySelector(".explore-btn");

exploreButton.addEventListener("click", function () {

    document.querySelector(".trending").scrollIntoView({
        behavior: "smooth"
    });

});


// Search Button
const searchButton = document.querySelector(".search-btn");

searchButton.addEventListener("click", function () {

    const searchText = prompt("🔍 What do you want to watch?");

    if (searchText) {
        alert("Searching for: " + searchText);
    }

});


// Login Button
const loginButton = document.querySelector(".login-btn");

loginButton.addEventListener("click", function () {

    alert("👤 Login page coming soon!");

});


// Video Cards
const videoCards = document.querySelectorAll(".video-card");

videoCards.forEach(function (card) {

    card.addEventListener("click", function () {

        const title = card.querySelector("h3").textContent;

        alert("▶ Playing: " + title);

    });

});


// Category Cards
const categories = document.querySelectorAll(".category");

categories.forEach(function (category) {

    category.addEventListener("click", function () {

        const categoryName =
            category.querySelector("h3").textContent;

        alert("✨ Opening " + categoryName + " Vibe...");

    });

});

// ===============================
// REGISTER FORM
// ===============================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword =
            document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {

            alert("❌ Passwords do not match!");
            return;

        }

        const user = {
            name: name,
            email: email,
            password: password
        };

        localStorage.setItem("trendoUser", JSON.stringify(user));

        alert("🎉 Account created successfully!");

        window.location.href = "login.html";

    });

}

// ===============================
// LOGIN FORM
// ===============================

const loginForm = document.querySelector(".auth-container form");

if (
    loginForm &&
    !document.getElementById("registerForm")
) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const emailInput =
            loginForm.querySelector('input[type="email"]');

        const passwordInput =
            loginForm.querySelector('input[type="password"]');

        const email = emailInput.value.trim();
        const password = passwordInput.value;

        const savedUser =
            JSON.parse(localStorage.getItem("trendoUser"));

        if (!savedUser) {

            alert("⚠️ Account not found. Please register first.");

            return;
        }

        if (
            email === savedUser.email &&
            password === savedUser.password
        ) {

            localStorage.setItem("trendoLoggedIn", "true");

            alert(
                "🎉 Welcome back, " +
                savedUser.name + "!"
            );

            window.location.href = "index.html";

        } else {

            alert("❌ Invalid email or password.");

        }

    });

}

// ===============================
// SEARCH BUTTON
// ===============================

const searchBtn = document.getElementById("searchBtn");

if (searchBtn) {

    searchBtn.addEventListener("click", function () {

        const searchText = prompt("🔍 What do you want to search?");

        if (searchText && searchText.trim() !== "") {

            alert(
                "🔎 Searching for: " + searchText
            );

        }

    });

}

// ===============================
// SEARCH
// ===============================

const searchBtn = document.getElementById("searchBtn");
const searchBox = document.getElementById("searchBox");
const searchInput = document.getElementById("searchInput");
const searchSubmit = document.getElementById("searchSubmit");

if (searchBtn) {

    searchBtn.addEventListener("click", function () {

        searchBox.classList.toggle("show");

        if (searchBox.classList.contains("show")) {
            searchInput.focus();
        }

    });

}


if (searchSubmit) {

    searchSubmit.addEventListener("click", function () {

        const searchValue =
            searchInput.value.trim().toLowerCase();

        if (searchValue === "") {
            alert("Please enter something to search 🔍");
            return;
        }

        if (
            searchValue.includes("music") ||
            searchValue.includes("song")
        ) {
            window.location.href = "music.html";
        }

        else if (
            searchValue.includes("movie") ||
            searchValue.includes("film")
        ) {
            window.location.href = "movies.html";
        }

        else if (
            searchValue.includes("short") ||
            searchValue.includes("reel")
        ) {
            window.location.href = "shorts.html";
        }

        else if (
            searchValue.includes("trend") ||
            searchValue.includes("viral")
        ) {
            window.location.href = "trending.html";
        }

        else {
            alert(
                "🔍 No results found for: " + searchValue
            );
        }

    });

}

// ===============================
// USER PROFILE INITIAL
// ===============================

const profileCircle =
    document.getElementById("profileCircle");

const savedUser =
    JSON.parse(localStorage.getItem("trendoUser"));

const loggedIn =
    localStorage.getItem("trendoLoggedIn");

if (profileCircle && savedUser && loggedIn === "true") {

    const firstLetter =
        savedUser.name.charAt(0).toUpperCase();

    profileCircle.textContent = firstLetter;

    profileCircle.style.display = "flex";
}