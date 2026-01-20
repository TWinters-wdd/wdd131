// Set variables for the menu button and the content
let button = document.querySelector(".menu-btn");
let navigation = document.querySelector("nav a");
let navContainer = document.querySelector("nav");

// Add an event listener so when the menu button is clicked, it toggles the nav menu
button.addEventListener("click", myFunction);

function myFunction() {
    if (navigation.style.display === "none") {
        navContainer.style.display = "flex";
        navContainer.style.justifyContent = "center";
        navigation.style.display = "flex";
    } else {
        navigation.style.display = "none";
    }
}