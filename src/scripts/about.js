import { createPar, createTitle, createSection } from "./home";

export function createAbout() {
	const main = document.createElement("main");
	const title = createTitle("About");
	const section = createSection();
	section.classList.add("section--about");

	const wrapperAbout = createWrapper();

	const hours = createAboutItem(
		"Working hours:",
		"Mon - Fri: 9:00 - 22:00",
		"Sat - Sun: 12:00 - 01:00"
	);
	const phone = createAboutItem("Contact us!", "Call us: 123-456-789");
	const socialMedia = () => {
		const aboutItem = createAboutItem("Social media:");
		const iconWrapper = createWrapper("wrapper--icon");

		const fb = createBrandIcon("fa-facebook");
		const insta = createBrandIcon("fa-instagram");

		iconWrapper.append(fb, insta);
		aboutItem.append(iconWrapper);
		return aboutItem;
	};

	wrapperAbout.append(hours, phone, socialMedia());
	section.append(title, wrapperAbout);
	main.append(section);

	return main;
}

function createSubtitle(text) {
	const h2Subtitle = document.createElement("h2");
	h2Subtitle.classList.add("subtitle");
	h2Subtitle.textContent = text;

	return h2Subtitle;
}

function createWrapper(...classCss) {
	const wrapper = document.createElement("div");
	wrapper.classList.add("wrapper");
	if (classCss.length) wrapper.classList.add(`${classCss}`);

	return wrapper;
}

function createBrandIcon(iconClass) {
	const icon = document.createElement("i");
	icon.setAttribute("class", `fab ${iconClass} icon`);

	return icon;
}

function createAboutItem(titleText, ...parText) {
	const aboutItem = document.createElement("div");
	aboutItem.classList.add("about-item");
	const h2Subtitle = createSubtitle(titleText);

	aboutItem.append(h2Subtitle);

	parText.forEach((el) => {
		const para = createPar(el);
		aboutItem.append(para);
	});

	return aboutItem;
}
