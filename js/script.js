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
	const pageHeaderElementLogo = document.querySelector(".header__logo");
	const pageHeaderLogoAnimationDelay = pageHeaderElementLogo.dataset.animDelay;
	pageHeaderElementLogo.style.transitionDelay = `${+pageHeaderLogoAnimationDelay}ms`;

	const bodyIntro = document.querySelector(".body-intro");
	bodyIntro.classList.add("load");
	const bodyIntroAnimationDelay = bodyIntro.dataset.animDelay;
	bodyIntro.style.transitionDelay = `${+bodyIntroAnimationDelay}ms`;

	// .intro__image
	const bodyIntroImage = document.querySelector(".intro__image");
	bodyIntroImage.classList.add("load");
	const bodyIntroImageAnimationDelay = bodyIntroImage.dataset.animDelay;
	bodyIntroImage.style.transitionDelay = `${+bodyIntroImageAnimationDelay}ms`;

	// animation for other elements
	// Intersection Observer API
	const bodyAboutSect = document.querySelector(".about__body");
	const bodyServices = document.querySelector(".services__body");
	const imagesServices = document.querySelector(".services__images");
	let options = {
		root: null,
		rootMargin: "50px",
		threshold: 0,
	};

	let callback = (entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				if (entry.target.classList.contains("about__body")) {
					bodyAboutSect.classList.add("intersecting");
				} else if (entry.target.classList.contains("services__body")) {
					bodyServices.classList.add("intersecting");
				} else if (entry.target.classList.contains("services__images")) {
					imagesServices.classList.add("intersecting");
				}
			}
		});
	};

	let observer = new IntersectionObserver(callback, options);
	observer.observe(bodyAboutSect);
	observer.observe(bodyServices);
	observer.observe(imagesServices);
}
