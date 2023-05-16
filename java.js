function changebg() {
    var bground = document.getElementById("bground");
    var scrollWindow = window.scrollY;
    if (scrollWindow < 100) {
        Navbar.classList.remove("bground");
    }
    else {
        Navbar.classList.add("bground");
    }
}
    window.addEventListener("scroll",changebg)