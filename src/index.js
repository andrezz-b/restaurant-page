import "./styles/main.scss";
import { createHome } from "./scripts/home";
import { createMenu } from "./scripts/menu";
import { createAbout } from "./scripts/about";

const navController = (function () {
	const divContent = document.getElementById("content");
	let currentTab = "home";

	init();

	function init() {
		divContent.appendChild(createHome());
		addListeners();
	}

	function addListeners() {
		const btns = document.querySelectorAll("nav > button");
		btns.forEach((btn) => {
			btn.addEventListener("click", changeTab);
		});
	}

	function changeTab(e) {
		const tabToChange = e.target.getAttribute("data-page");
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
			case "about":
				divContent.append(createAbout());
		}
	}

	function removeCurrentTab() {
		const main = divContent.lastElementChild;
		divContent.removeChild(main);
	}
})();
