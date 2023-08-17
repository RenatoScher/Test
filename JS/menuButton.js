const button = document.getElementById("Headshotarow").getElementsByTagName("img")[0]
const menu = document.getElementById("Menupremium")

button.parentElement.addEventListener("click", () => {
    button.classList.toggle("omagaAnimatio")
    menu.classList.toggle("menuOpen")
})