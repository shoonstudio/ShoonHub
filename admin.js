function logout() {
    window.location.href = "login.html";
}function logout() {
    window.location.href = "login.html";
}

// Welcome Message
document.addEventListener("DOMContentLoaded", function () {
    alert("👋 Welcome to ShoonHub Dashboard!");
});

// Card Animation
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.05)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });
});
