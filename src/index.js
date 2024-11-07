import "./styles.css";
import { Main } from "./Main";
import { Menu } from "./Menu";
import { About } from "./About";

const container = document.querySelector("#content")
const home_btn = document.querySelector("#nav_btn_home")
const menu_btn = document.querySelector("#nav_btn_menu")
const about_btn = document.querySelector("#nav_btn_about")

Main()

function clearContainer(){
    container.textContent = ""
}

home_btn.addEventListener("click", () => {
    clearContainer()
    Main()
})

menu_btn.addEventListener("click", () => {
    clearContainer()
    Menu()
})

about_btn.addEventListener("click", () => {
    clearContainer()
    About()
})