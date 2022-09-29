document.addEventListener("DOMContentLoaded", () => {
	const buttonList = document.querySelectorAll(".next-tabs");
	const selectSectionList = document.querySelectorAll(".select-section");
	const pollTabList = document.querySelectorAll(".quiz_quizContent__2JVfG");
	const pollHeader = document.querySelector(".quiz_indicator__1aZ7_");
	const pollNumber = document.querySelector(".header_currentProgress___WB0Q");
	const pollLine = document.querySelector(".quiz-indicator_barFilled__DOO5T");
	const pollBack = document.querySelector(".arrow-back_arrowBack__1_s8A");
	const leftImage = document.querySelector(".container-with-left-image_image__1gNM1");
	const leftImageWebp = document.querySelector(".container-with-left-image_image__1gNM1-webp");

	const loaderText = document.querySelector(".loader__bar-text");
	const loaderImage = document.querySelector(".loader__bar-img");
	const loaderImageWebp = document.querySelector(".loader__bar-img-webp");
	const loaderProgress = document.querySelector(".loader__bar-after");

	const leftImageSrc = [
		"https://iquiz.me/diet/ru/1/img/y6rk4bdypfwyusj0t3cw.png",
		"https://iquiz.me/diet/ru/1/img/h8rkti4gvuljp84srer1.png",
		"https://iquiz.me/diet/ru/1/img/vsrwvnlntifjbrkalbsc.png",
		"https://iquiz.me/diet/ru/1/img/test-img4.8c195e37.png",
		"https://iquiz.me/diet/ru/1/img/test-img5.32bb422d.png",
		"https://iquiz.me/diet/ru/1/img/test-img6.acb7ad24.png",
		"https://iquiz.me/diet/ru/1/img/test-img7.790d7a74.png",
		"https://iquiz.me/diet/ru/1/img/test-img8.1ab30382.png",
		"https://iquiz.me/diet/ru/1/img/test-img9.782cc449.png",
		"https://iquiz.me/diet/ru/1/img/test-img10.2675e469.png",
		"https://iquiz.me/diet/ru/1/img/test-img11.e9749c8e.png",
		"https://iquiz.me/diet/ru/1/img/test-img12.3a436643.png",
		"https://iquiz.me/diet/ru/1/img/test-img13.c349be63.png",
		"https://iquiz.me/diet/ru/1/img/test-img14.98eab7cc.png",
		"https://iquiz.me/diet/ru/1/img/test-img15-tt.fcc7529d.png",
		"https://iquiz.me/diet/ru/1/img/test-img16-tt.9dfa8ed7.png",
	];
	const leftImageSrcWebp = [
		"https://iquiz.me/diet/ru/1/img/y6rk4bdypfwyusj0t3cw.webp",
		"https://iquiz.me/diet/ru/1/img/h8rkti4gvuljp84srer1.webp",
		"https://iquiz.me/diet/ru/1/img/vsrwvnlntifjbrkalbsc.webp",
		"https://iquiz.me/diet/ru/1/img/test-img4.8c195e37.webp",
		"https://iquiz.me/diet/ru/1/img/test-img5.32bb422d.webp",
		"https://iquiz.me/diet/ru/1/img/test-img6.acb7ad24.webp",
		"https://iquiz.me/diet/ru/1/img/test-img7.790d7a74.webp",
		"https://iquiz.me/diet/ru/1/img/test-img8.1ab30382.webp",
		"https://iquiz.me/diet/ru/1/img/test-img9.782cc449.webp",
		"https://iquiz.me/diet/ru/1/img/test-img10.2675e469.webp",
		"https://iquiz.me/diet/ru/1/img/test-img11.e9749c8e.webp",
		"https://iquiz.me/diet/ru/1/img/test-img12.3a436643.webp",
		"https://iquiz.me/diet/ru/1/img/test-img13.c349be63.webp",
		"https://iquiz.me/diet/ru/1/img/test-img14.98eab7cc.webp",
		"https://iquiz.me/diet/ru/1/img/test-img15-tt.fcc7529d.webp",
		"https://iquiz.me/diet/ru/1/img/test-img16-tt.9dfa8ed7.webp",
	];

	const loaderObjs = [
		{
			text: "Обработка ваших ответов",
			img: "https://iquiz.me/diet/ru/1/img/loader-title/1.png",
			imgWepb: "https://iquiz.me/diet/ru/1/img/loader-title/1.webp",
		},
		{
			text: "Анализ вашего диетического профиля",
			img: "https://iquiz.me/diet/ru/1/img/loader-title/2.png",
			imgWepb: "https://iquiz.me/diet/ru/1/img/loader-title/2.webp",
		},
		{
			text: "Оценка вашего биологического возраста",
			img: "https://iquiz.me/diet/ru/1/img/loader-title/3.png",
			imgWepb: "https://iquiz.me/diet/ru/1/img/loader-title/3.webp",
		},
		{
			text: "Адаптация плана к вашему распорядку дня",
			img: "https://iquiz.me/diet/ru/1/img/loader-title/4.png",
			imgWepb: "https://iquiz.me/diet/ru/1/img/loader-title/4.webp",
		},
		{
			text: "Выбор подходящих рецептов",
			img: "https://iquiz.me/diet/ru/1/img/loader-title/5.png",
			imgWepb: "https://iquiz.me/diet/ru/1/img/loader-title/5.webp",
		},
		{
			text: "Выбор подходящих активностей",
			img: "https://iquiz.me/diet/ru/1/img/loader-title/6.png",
			imgWepb: "https://iquiz.me/diet/ru/1/img/loader-title/6.webp",
		},
	];

	changeTab();
	function checkInputs() {
		const input = document.querySelector(`div [data-tab="${pollHeader.dataset.tabOrder}"]`).querySelector(".test-input");
		if (!input) {
			return false;
		} else {
			return input;
		}
	}

	function inputsValidation() {
		const input = checkInputs();
		if (input) {
			input.addEventListener("input", (e) => {
				const testbtn = document.querySelector(`#testbtn${pollHeader.dataset.tabOrder}`);
				if (e.target.value !== "") {
					if (testbtn) testbtn.disabled = false;
					questions[pollHeader.dataset.tabOrder].a.push(e.target.value);
				} else {
					if (testbtn) testbtn.disabled = true;
				}
			});
		}
	}

	// Чистит чеки вообще со всех кнопок
	function uncheckOthers() {
		for (let radio of document.querySelector(`div [data-tab="${pollHeader.dataset.tabOrder}"]`).querySelectorAll(".quiz_quizCardContainer__1J1f3")) {
			if (radio.classList.contains("selectable-card_isSelected__21R4y")) {
				radio.classList.remove("selectable-card_isSelected__21R4y");
				radio.querySelector("input").checked = false;
				radio.querySelector(".quiz_isTransparent__2xwAS").style.opacity = 0;
			}
		}
	}

	let questions = {};
	const q = document.querySelectorAll(".generated-single-select-question_headerTitle__1UqQP");
	q.forEach((value, key) => {
		questions[key + 1] = {
			q: value.innerText.replaceAll("\n", "").trim().split(/\s+/).join(" "),
			a: [],
		};
	});

	// Вешает события на кнопки.
	function selectValidation() {
		for (let radio of document.querySelector(`div [data-tab="${pollHeader.dataset.tabOrder}"]`).querySelectorAll(".quiz_quizCardContainer__1J1f3")) {
			radio.onclick = () => {
				questions[pollHeader.dataset.tabOrder].a.push(radio.innerText.replaceAll("\n", "").trim().split(/\s+/).join(" "));
				uncheckOthers();
				radio.classList.add("selectable-card_isSelected__21R4y");
				radio.querySelector("input").checked = true;
				radio.querySelector(".quiz_isTransparent__2xwAS").style.opacity = 1;
				click();
			};
		}
	}

	function multiSelectValidation() {
		const radios = document.querySelector(`div [data-tab="${pollHeader.dataset.tabOrder}"]`).querySelectorAll(".quiz_quizCardContainer__1J1f3");
		for (let radio of radios) {
			radio.onclick = () => {
				if (!radio.querySelector("input").checked) {
					radio.classList.add("selectable-card_isSelected__21R4y");
					radio.querySelector("input").checked = true;
					radio.querySelector(".quiz_isTransparent__2xwAS").style.opacity = 1;
				} else {
					radio.classList.remove("selectable-card_isSelected__21R4y");
					radio.querySelector("input").checked = false;
					radio.querySelector(".quiz_isTransparent__2xwAS").style.opacity = 0;
				}
				const checked = Array.from(radios).filter((el) => el.querySelector("input").checked === true);

				const testbtn = document.querySelector(`#testbtn${pollHeader.dataset.tabOrder}`);
				if (checked.length) {
					if (testbtn) testbtn.disabled = false;
				} else {
					if (testbtn) testbtn.disabled = true;
				}
			};
		}
	}

	function currentTabValidations() {
		if (document.querySelector(`div [data-tab="${pollHeader.dataset.tabOrder}"]`).querySelector(".select-section")) {
			selectValidation();
		} else if (document.querySelector(`div [data-tab="${pollHeader.dataset.tabOrder}"]`).querySelector(".input-section")) {
			inputsValidation();
		} else if (document.querySelector(`div [data-tab="${pollHeader.dataset.tabOrder}"]`).querySelector(".multiselect-section")) {
			multiSelectValidation();
		}
	}

	// Для того чтобы все работало, на section в каждом табе в html, нужно вешать соответствующий класс
	// select-section - для одиночного выбора
	// input-section - для строки ввода
	// multiselect-section - для множественного выбора

	currentTabValidations();

	const click = () => {
		if (pollHeader.dataset.tabOrder == 16) {
			document.querySelector(".loader-box").style.display = "flex";
			loaderText.innerText = loaderObjs[0].text;
			loaderImageWebp.srcset = loaderObjs[0].imgWepb;
			loaderImage.src = loaderObjs[0].img;
			let count = 1;
			const interval = setInterval(() => {
				if (count !== 6) {
					loaderProgress.style.width = `${20 * count}%`;
					loaderText.innerText = loaderObjs[count].text;
					loaderImageWebp.srcset = loaderObjs[count].imgWepb;
					loaderImage.src = loaderObjs[count].img;
					count++;
				} else {
					if (window.ASIP) {
						setTimeout(() => {
							window.ASIP.addQuestions(questions);
						}, 0);
					}

					clearInterval(interval);

					window.addEventListener("unload", () => {
						document.querySelector(".loader-box").style.display = "none";
					});

					window.location.href = `land.php${window.location.search}`;
				}
			}, 800);
		} else {
			setTimeout(() => {
				pollHeader.dataset.tabOrder = `${+pollHeader.dataset.tabOrder + 1}`;
				changeTab();
				currentTabValidations();
				pollLine.style.width = `${6.25 * pollHeader.dataset.tabOrder}%`;
			});
		}
	};

	for (let button of buttonList) {
		button.addEventListener("click", click);
	}

	pollBack.addEventListener("click", () => {
		if (+pollHeader.dataset.tabOrder > 1) {
			pollHeader.dataset.tabOrder = `${+pollHeader.dataset.tabOrder - 1}`;
			changeTab();
			pollLine.style.width = `${6.25 * pollHeader.dataset.tabOrder}%`;
		} else {
			window.history.back();
		}
	});

	function changeTab() {
		for (let pollTab of pollTabList) {
			if (+pollTab.dataset.tab !== +pollHeader.dataset.tabOrder) {
				pollTab.classList.add("quiz_quizContent--hidden");
				setTimeout(() => {
					pollTab.style.display = "none";
				}, 250);
			} else {
				pollTab.classList.remove("quiz_quizContent--hidden");

				leftImageWebp.srcset = leftImageSrcWebp[+pollTab.dataset.tab - 1];
				leftImage.src = leftImageSrc[+pollTab.dataset.tab - 1];

				setTimeout(() => {
					pollTab.style.display = "block";
				}, 250);
			}
		}

		pollNumber.innerHTML = pollHeader.dataset.tabOrder;
	}
});
