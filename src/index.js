import "./styles/main.scss"
import { createHome } from "./scripts/home"
import { createMenu } from "./scripts/menu"

function createSite() {
    const divContent = document.getElementById("content");
    divContent.appendChild(createMenu());
}

createSite();