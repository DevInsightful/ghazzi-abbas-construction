const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
    window.scrollY <= 50?
    navbar.style.background = "transparent":
    navbar.style.background = "rgba(39, 20, 18, 0.5)";
});

