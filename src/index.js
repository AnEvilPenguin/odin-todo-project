import "./styles.css";
import jpg from "../assets/logo.jpg";

const body = document.querySelector("body");
body.classList.add("background");

const logo = document.createElement("img");
logo.classList.add("logo");
logo.src = jpg;

body.appendChild(logo);

