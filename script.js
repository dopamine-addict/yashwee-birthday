// =============================
// TYPEWRITER TITLE
// =============================

const titleText = "Happy Birthday, Yashwee";
const titleElement = document.getElementById("typewriter");

let currentChar = 0;

function typeWriter() {
    if (currentChar < titleText.length) {
        titleElement.innerHTML += titleText.charAt(currentChar);
        currentChar++;
        setTimeout(typeWriter, 90);
    }
}

typeWriter();

// =============================
// IMAGE CONFIG
// =============================

const imagePaths = [
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg",
    "images/img5.jpg"
];

const imageStyles = [
    "cloud",
    "cloud",
    "bubble",
    "bubble",
    "polaroid"
];

// Positioned around the message
const positions = [
    { x: 25, y: 18 }, // cloud
    { x: 60, y: 15 }, // cloud
    { x: 18, y: 45 }, // bubble
    { x: 68, y: 45 }, // bubble
    { x: 43, y: 68 }  // polaroid
];

const floatingContainer =
    document.getElementById("floating-images");

// =============================
// CREATE FLOATING IMAGES
// =============================

imagePaths.forEach((path, index) => {

    const wrapper =
        document.createElement("div");

    wrapper.classList.add("float-item");
    wrapper.classList.add(imageStyles[index]);

    let size;

    if (imageStyles[index] === "cloud") {
        size = 240;
    }
    else if (imageStyles[index] === "bubble") {
        size = 170;
    }
    else {
        size = 180;
    }

    wrapper.style.width = `${size}px`;
    wrapper.style.height = `${size}px`;

    wrapper.style.left =
        positions[index].x + "%";

    wrapper.style.top =
        positions[index].y + "%";

    const rotation =
        Math.random() * 16 - 8;

    wrapper.style.transform =
        `rotate(${rotation}deg)`;

    wrapper.style.animationDuration =
        `${5 + Math.random() * 3}s`;

    const image =
        document.createElement("img");

    image.src = path;
    image.alt = "Birthday Character";

    wrapper.appendChild(image);

    floatingContainer.appendChild(wrapper);
});

// =============================
// FLOATING DECORATIONS
// =============================

const decorations =
    document.getElementById("decorations");

const emojis = [
    "🌸",
    "✨",
    "🎀",
    "⭐",
    "🧁"
];

for (let i = 0; i < 25; i++) {

    const emoji =
        document.createElement("div");

    emoji.classList.add("decoration");

    emoji.innerText =
        emojis[
            Math.floor(
                Math.random() * emojis.length
            )
        ];

    emoji.style.left =
        Math.random() * 100 + "%";

    emoji.style.top =
        Math.random() * 100 + "%";

    emoji.style.animationDuration =
        `${4 + Math.random() * 6}s`;

    emoji.style.fontSize =
        `${0.8 + Math.random()}rem`;

    decorations.appendChild(emoji);
}

// =============================
// MESSAGE POPUP
// =============================

const popup =
    document.getElementById("messagePopup");

const openBtn =
    document.getElementById("openMessage");

const closeBtn =
    document.getElementById("closePopup");

openBtn.addEventListener("click", () => {

    popup.classList.remove("hidden");

});

closeBtn.addEventListener("click", () => {

    popup.classList.add("hidden");

});

popup.addEventListener("click", (event) => {

    if (event.target === popup) {

        popup.classList.add("hidden");

    }

});

// =============================
// MUSIC PLAYER
// =============================

const music =
    document.getElementById("bgMusic");

const musicButton =
    document.getElementById("musicBtn");

musicButton.addEventListener("click", () => {

    if (music.paused) {

        music.play();

        musicButton.innerHTML =
            "⏸ Pause Music";

    }
    else {

        music.pause();

        musicButton.innerHTML =
            "🎵 Play Music";

    }

});

// =============================
// SUBTLE PARALLAX
// =============================

document.addEventListener("mousemove", (e) => {

    const items =
        document.querySelectorAll(".float-item");

    const mouseX =
        (e.clientX / window.innerWidth - 0.5) * 8;

    const mouseY =
        (e.clientY / window.innerHeight - 0.5) * 8;

    items.forEach((item, index) => {

        const amount =
            (index + 1) * 0.8;

        item.style.marginLeft =
            `${mouseX * amount}px`;

        item.style.marginTop =
            `${mouseY * amount}px`;

    });

});