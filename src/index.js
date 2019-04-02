import "../src/sass/main.scss";
import helloWorld from "../src/script.js";

//helloWorld();

const navBtn = document.querySelector(".nav__hamburger");
const navList = document.getElementById("navList");

navBtn.addEventListener("click", () => {
    navList.classList.toggle("nav__list--sm-hidden");
})