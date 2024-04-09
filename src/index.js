import "./styles.css";
import jpg from "../assets/logo.jpg";

const body = document.querySelector("body");
body.classList.add("background");

const logo = document.createElement("img");
logo.classList.add("logo");
logo.src = jpg;

body.appendChild(logo);

const name = document.createElement("div");
name.textContent = "Default Project";
name.classList.add("name");

body.appendChild(name);

const sidebar = document.createElement("div");
sidebar.classList.add("sidebar");

body.appendChild(sidebar);

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "content";

body.appendChild(content);


const footer = document.createElement("div");
footer.classList.add("footer");
footer.textContent = "footer";

body.appendChild(footer);

