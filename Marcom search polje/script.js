const sidebar = document.querySelector(".sidebar");
const kebab = document.querySelector(".kebab");
const searchIcon = document.querySelector(".search-icon");
const searchBar = document.querySelector(".search-bar");
const dot1 = document.querySelector(".dot1");
const dot2 = document.querySelector(".dot2");
const dot3 = document.querySelector(".dot3");

kebab.addEventListener("click", () => {

    sidebar.classList.toggle("active");

    dot1.classList.toggle("active");
    dot2.classList.toggle("active");
    dot3.classList.toggle("active");

})

searchIcon.addEventListener("click", () => {

    searchBar.classList.toggle("active-search-bar");

})