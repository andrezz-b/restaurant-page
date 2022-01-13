import { createTitle } from "./home";
import { createImg } from "./home";
import { createSection } from "./home";
import "../assets/images/pizza.jpg";
import "../assets/images/pasta.jpg";
import "../assets/images/steak.jpg";
import "../assets/images/burger.jpg";
import "../assets/images/lasagne.jpg";
import "../assets/images/sushi.jpg";

export function createMenu() {
	const main = document.createElement("main");
	const section = createSection();
	section.classList.add("section--menu");

	const title = createTitle("Menu");
	const divMenuContainer = document.createElement("div");
	divMenuContainer.classList.add("menu-container");

	// Menu items
	const steak = createMenuItem("Steak", "79.99", "./images/steak.jpg");
	const pasta = createMenuItem("Pasta", "39.99", "./images/pasta.jpg");
	const burger = createMenuItem("Burger", "45.99", "./images/burger.jpg");
	const lasagne = createMenuItem("Lasagne", "29.99", "./images/lasagne.jpg");
	const sushi = createMenuItem("Sushi", "27.99", "./images/sushi.jpg");
	const pizza = createMenuItem("Pizza", "19.99", "./images/pizza.jpg");

	divMenuContainer.append(steak, pasta, burger, lasagne, sushi, pizza);
	section.append(title, divMenuContainer);
	main.append(section);

	return main;
}

function createMenuItem(name, price, src) {
	const menuItem = document.createElement("div");
	menuItem.classList.add("menu-item");

	const img = createImg(src);
	const divNamePrice = createMealName(name, price);

	menuItem.append(img, divNamePrice);

	return menuItem;
}

function createMealName(name, price) {
	const divWrapper = document.createElement("div");
	divWrapper.classList.add("wrapper");

	const h2Name = document.createElement("h2");
	const h2Price = document.createElement("h2");

	h2Name.textContent = name;
	h2Price.textContent = price + "$";

	divWrapper.append(h2Name, h2Price);

	return divWrapper;
}
