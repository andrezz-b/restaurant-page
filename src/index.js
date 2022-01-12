import "./styles/main.scss"
import "./assets/images/meals.jpg"
import "./assets/images/setting.jpg" 
import { createHome } from "./scripts/home"

function createSite() {
    const divContent = document.getElementById("content");
    divContent.appendChild(createHome());
}

createSite();