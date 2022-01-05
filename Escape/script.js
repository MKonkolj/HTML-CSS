const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu-items-container");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");

burger.addEventListener("click", () => {

    menu.classList.toggle("show");
    bar1.classList.toggle("show");
    bar2.classList.toggle("show");
    bar3.classList.toggle("show");

});

const services = document.querySelector("#services");
const servicesClass = document.querySelector(".dropdown-services");
const team = document.querySelector("#team");
const teamClass = document.querySelector(".dropdown-team");


services.addEventListener("click", () => {
    servicesClass.classList.toggle("hidden");

    if (teamClass.classList.contains("hidden")) {
    } else {
        teamClass.classList.add("hidden");
    }
})

team.addEventListener("click", () => {
    teamClass.classList.toggle("hidden");

    if (servicesClass.classList.contains("hidden")) {
    } else {
        servicesClass.classList.add("hidden");
    }
})
