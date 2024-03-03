const navbar_toggler_btn = document.querySelector(".navbar-toggler");

function toggleMenu () {
    navbar_toggler_btn.classList.toggle("collapsed");
    document.getElementById("navbarNavDropdown").classList.toggle("show");
    if (navbar_toggler_btn.getAttribute("area-expanded") === "false"){
        navbar_toggler_btn.removeAttribute("area-expanded")
        navbar_toggler_btn.setAttribute("area-expanded","true")
    } else {
        navbar_toggler_btn.removeAttribute("area-expanded")
        navbar_toggler_btn.setAttribute("area-expanded","false")
    }
}
