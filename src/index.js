import "./styles.css";

const body = document.querySelector("body");
body.classList.add("background");

const hello = document.createElement("h1");
hello.textContent = "Hello cruel world!";

body.appendChild(hello);

