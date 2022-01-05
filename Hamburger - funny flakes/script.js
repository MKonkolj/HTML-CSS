const burger = document.querySelector("#burger");

burger.addEventListener("click", () => {
	document.querySelector("ul").classList.toggle("show");
    document.querySelector(".menu-items").classList.toggle("animate");
    document.querySelector(".black-overlay").classList.toggle("animate");
    document.querySelector("#bar1").classList.toggle("animate");
    document.querySelector("#bar2").classList.toggle("animate");
    document.querySelector("#bar3").classList.toggle("animate");
});