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

function typeAboutMe(index, text) {
  const typingTextElement = document.getElementById("about-me");

  if (index < text.length) {
    if (text.charAt(index) === "\n") {
      typingTextElement.innerHTML += "<br>";
    } else {
      typingTextElement.innerHTML += text.charAt(index);
    }
    index++;
    setTimeout(() => typeAboutMe(index, text), 20);
  }
}

const textAboutMe =
  "Russian developer with expertise in Go, C#, and JavaScript. I also have experience with frameworks like .NET, Gin, React, React Native, and Express.js";

typeAboutMe(0, textAboutMe);

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showNotification();
  });
}

function showNotification(message = "Successfully copied") {
  const notification = document.getElementById("notification");
  notification.textContent = message;
  notification.style.display = "block";

  setTimeout(() => {
    notification.classList.add("show");
  }, 10);

  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => {
      notification.style.display = "none";
    }, 300);
  }, 3000);
}

document
  .querySelector(".navbar li:nth-child(3) a")
  .addEventListener("click", (event) => {
    event.preventDefault();
    copyToClipboard("x3wnl0x");
  });

function typeAndErase(index, text) {
  const title = document.getElementById("title");
  const words = text.split(" ");

  if (index < words.length) {
    let currentText = " " + words[index];
    title.innerHTML += currentText;

    index++;

    setTimeout(() => {
      title.innerHTML = "Nezilot";

      setTimeout(() => typeAndErase(index, text), 500);
    }, 1000);
  } else {
    typeAndErase(0, text);
  }
}

typeAndErase(0, ":D xD =D");
