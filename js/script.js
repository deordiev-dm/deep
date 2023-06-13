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
	const sectionAbout = document.querySelector(".about");
	const sectionServices = document.querySelector(".services");
	const imagesServices = document.querySelector(".services__images");
	const itemsPortfolio = document.querySelector(".portfolio__items");
	const allItemsPortfolio = document.querySelectorAll(".portfolio__item");

	// effect for portfolio items
	let index = 0;
	allItemsPortfolio.forEach((itemPortfolio) => {
		index++;
		itemPortfolio.style.transitionDelay = `${2 * index * 100}ms`;
	});
	// effect for portfolio items

	//! Intersection Observer API
	let options = {
		root: null,
		rootMargin: "0px",
		threshold: 0.35,
	};

	let callback = (entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				if (entry.target.classList.contains("about")) {
					sectionAbout.classList.add("intersecting");
				} else if (entry.target.classList.contains("services")) {
					sectionServices.classList.add("intersecting");
				} else if (entry.target.classList.contains("services__images")) {
					imagesServices.classList.add("intersecting");
				} else if (entry.target.classList.contains("portfolio__items")) {
					itemsPortfolio.classList.add("intersecting");
				}
			}
		});
	};

	let observer = new IntersectionObserver(callback, options);
	observer.observe(sectionAbout);
	observer.observe(sectionServices);
	observer.observe(imagesServices);
	observer.observe(itemsPortfolio);

	const itemsTeam = document.querySelectorAll(".team__item");
	itemsTeam.forEach((itemTeam) => {
		itemTeam.addEventListener("touchstart", (e) => {
			if (e.target.closest(".item-team__info")) {
				null;
			} else if (e.target.closest(".team__item")) {
				itemTeam.classList.add("touched");
			}
		});
	});

	const buttonFooter = document.querySelector(".footer-up");
	buttonFooter.addEventListener("click", (e) => {
		e.preventDefault;
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	});
}
