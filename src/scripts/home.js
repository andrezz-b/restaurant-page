import "../assets/images/meals.jpg"
import "../assets/images/setting.jpg" 

export function createHome() {
    const main = document.createElement("main");

	// First section
	const imgSection = createSection();
	const welcomeTitle = createTitle("Welcome to Barbacoa");

	const mealImg = createImg("./images/meals.jpg");
	const mealImgText = createTitle("Enjoy our tasty meals...");
	const mealContainer = createContainer(mealImg, mealImgText);

	const settingImg = createImg("./images/setting.jpg");
	const settingImgText = createTitle("...in a luxurious setting.");
	const settingContainer = createContainer(settingImgText, settingImg);

	imgSection.append(welcomeTitle, mealContainer, settingContainer);

	// Second section
	const textSection = createSection();
	const textSectionTitle = createTitle("Come and have a taste");
    const textSectionPar = createPar("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident quis illo nulla quasi, mollitia laudantium.");

    textSection.append(textSectionTitle, textSectionPar);

    main.append(imgSection, textSection);

    return main;
}

export function createTitle(text) {
	const h1Title = document.createElement("h1");
	h1Title.classList.add("title");

	h1Title.textContent = text;

	return h1Title;
}

export function createImg(src) {
	const img = document.createElement("img");
	img.src = src;

	return img;
}

function createPar(text) {
	const par = document.createElement("p");
    par.classList.add("par-large")
	par.textContent = text;

	return par;
}

function createContainer(firstEl, secondEl) {
	const div = document.createElement("div");
	div.classList.add("img-container");

	div.append(firstEl, secondEl);

	return div;
}

export function createSection() {
	const section = document.createElement("section");
	section.classList.add("section");

	return section;
}

