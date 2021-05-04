var menu = document.getElementById("navigation");
menu.style.maxHeight = "0vh";
function toggleMenu() {
    if(menu.style.maxHeight == "0vh") {
        menu.style.maxHeight = "100vh";
    } else {
        menu.style.maxHeight = "0vh";
    }
}