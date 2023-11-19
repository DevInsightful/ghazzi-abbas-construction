const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
    window.scrollY <= 50?
    navbar.style.background = "transparent":
    navbar.style.background = "rgba(39, 20, 18, 0.5)";
});

const homeBtn = document.getElementById("homeBtn");

window.addEventListener("scroll", function () {
  window.scrollY <= 500
    ? (homeBtn.style.display = "none")
    : (homeBtn.style.display = "block");
});

const togglerBtn = document.getElementById("togglerBtn");
const navUl = document.getElementById("navUl");
togglerBtn.addEventListener("click", () => {
  navUl.style.display = "flex";
  togglerBtn.innerText = "Change";
});