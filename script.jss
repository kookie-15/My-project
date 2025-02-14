// Open Letter Animation
function openLetter() {
    const flap = document.querySelector(".flap");
    const letter = document.querySelector(".letter");
    const message = document.querySelector(".hidden-message");

    flap.style.transform = "rotateX(180deg)";
    letter.style.transform = "translateY(0)";
    letter.style.opacity = "1";
    message.style.display = "block";
}

// Floating Hearts Effect
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 500);

// Play Music
function playMusic() {
    document.getElementById("bg-music").play();
}
