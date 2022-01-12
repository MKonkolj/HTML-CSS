const burger = document.querySelector (".burger");
const navMenu = document.querySelector (".nav-menu");
const subBtn = document.querySelector ("#subBtn");

burger.addEventListener ("click", () => {
    burger.classList.toggle("open");
    navMenu.classList.toggle("open");
});


function subscribed() {
    alert("Thank you for subscribing <3")
};
