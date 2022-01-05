const hamburgerMenuItems = document.querySelectorAll (".nav-list > li");

function showMenu () {
    if (hamburgerMenuItems[0].classList.value == "hidden") {
        for (i = 0; i < hamburgerMenuItems.length; i++) {
            hamburgerMenuItems[i].classList.remove ("hidden");
        }
    } else {
        for (i = 0; i < hamburgerMenuItems.length; i++) {
            hamburgerMenuItems[i].classList.add ("hidden");
        }
    }
}