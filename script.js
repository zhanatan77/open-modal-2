const modalWindow = document.querySelector("#modal")
const btn = document.querySelector(".open-btn")
const close = document.querySelector(".close-btn")
const blur = document.querySelector(".blur-window")

btn.addEventListener("click", () => {
    modalWindow.style.transform = "scale(1)"
    modalWindow.style.    transition = "1s"
    blur.style.display = "block"
})


close.addEventListener("click", () => {
    modalWindow.style.transform = "scale(0)"
    modalWindow.style.    transition = ".4s"
    blur.style.display = "none"
})



window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal") && ! e.target.classList("open-btn"))
        modalWindow.style.transform = "scale(0)"
    modalWindow.style.    transition = ".4s"
    blur.style.display = "none"
})




// const burgerMenu = document.querySelector(".burger-menu")
// const navMenu = document.querySelector(".header-nav")
// const burgerItems = document.querySelectorAll(".burger-item")
//
//
// burgerMenu.addEventListener("click",() => {
//     if (!burgerMenu.classList.contains("active")) {
//         burgerMenu.classList.add("active")
//         navMenu.style.transform = "translateX(0)"
//     } else {
//         burgerMenu.classList.remove("active")
//         navMenu.style.transform = "translateX(100%)"
//
//     }
// })



















