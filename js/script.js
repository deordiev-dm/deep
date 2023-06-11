"use strict";

const bodyElement = document.body;

window.addEventListener("load", pageLoad);

function pageLoad(e) {
	// increasing opacity to 1 after loading
	bodyElement.classList.add("loaded");

	// hover effect for portflio items
	// scaling starts from the opposite point of mouse entry
	const portfolioItems = document.querySelectorAll(".portfolio__item");
	portfolioItems.forEach((portfolioItem) => {
		portfolioItem.addEventListener("mouseenter", addTransformOrigin);
	});

	function addTransformOrigin(event) {
		const image = event.target.querySelector("img");
		const itemWidth = event.target.offsetWidth;
		const itemHeight = event.target.offsetHeight;
		image.style.transformOrigin = `${itemWidth - event.offsetX}px ${
			itemHeight - event.offsetY
		}px`;
	}

	// header apearence after loading
	const pageHeaderElement = document.querySelector("header");
	pageHeaderElement.classList.add("load");

	const bodyIntro = document.querySelector(".body-intro");
	bodyIntro.classList.add("load");

	// .intro__image
	const bodyIntroImage = document.querySelector(".intro__image");
	bodyIntroImage.classList.add("load");

	// animation for other elements
}
