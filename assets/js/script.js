VANTA.BIRDS({
    el: "#background",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    color1: `#ff0101`,
    color2: `#9500ff`,
    colorMode: "variance",
});

const text =
    "A Russian developer with expertise in C++,  \nC#, and JavaScript, I also have experience with \nframeworks like .NET, React, React Native, and Express.js.";
let index = 0;
const typingTextElement = document.getElementById("about-me");

function typeAboutMe() {
    if (index < text.length) {
        if (text.charAt(index) === "\n") {
            typingTextElement.innerHTML += "<br>";
        } else {
            typingTextElement.innerHTML += text.charAt(index);
        }
        index++;
        setTimeout(typeAboutMe, 50);
    }
}

typeAboutMe();

function copyToClipboard(text) {
    navigator.clipboard
        .writeText(text)
        .then(() => {
            showNotification();
        })
        .catch((err) => {
            console.error("Ошибка при копировании: ", err);
        });
}

function showNotification() {
    const notification = document.getElementById("notification");
    notification.style.display = "block";
    setTimeout(() => {
        notification.style.display = "none";
    }, 3000);
}

document
    .querySelector(".navbar li:nth-child(3) a")
    .addEventListener("click", (event) => {
        event.preventDefault();
        copyToClipboard("x3wnl0x");
    });
