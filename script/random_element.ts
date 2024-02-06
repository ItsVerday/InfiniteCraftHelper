import { elements } from "./index";
import { createRandomInstance } from "./utils";

declare const window: any;

export function init(elements: elements) {
	const randomElement = document.createElement('button');
    randomElement.innerText = "Random element";
	randomElement.classList.add('random-element-icon');
	(document.querySelector('.side-controls') as HTMLImageElement).prepend(randomElement);
	randomElement.addEventListener('click', async (e) => {
        createRandomInstance(elements);
	});
}