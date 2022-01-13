import "./styles/main.scss";
import { createHome } from "./scripts/home";
import { createMenu } from "./scripts/menu";

const navController = (function () {
	const divContent = document.getElementById("content");
	let currentTab = "home";

	init();

	function init() {
		divContent.appendChild(createHome());
		addListeners();
	}

	function addListeners() {
		const home = document.querySelector("#home");
		const menu = document.querySelector("#menu");
		const about = document.querySelector("#about");

		home.addEventListener("click", changeTab);
		menu.addEventListener("click", changeTab);
	}

	function changeTab(e) {
		const tabToChange = e.target.getAttribute("id");
		if (currentTab === tabToChange) return;

		currentTab = tabToChange;
		removeCurrentTab();

		switch (tabToChange) {
			case "home":
				divContent.append(createHome());
				break;
			case "menu":
				divContent.append(createMenu());
				break;
		}
	}

	function removeCurrentTab() {
		const main = divContent.lastElementChild;
		divContent.removeChild(main);
	}
})();
