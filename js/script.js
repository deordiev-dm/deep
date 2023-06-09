"use strict";

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
