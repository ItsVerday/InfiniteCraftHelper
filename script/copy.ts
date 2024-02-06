import type { elements } from './index';
import { createInstance } from './utils';

export function setMiddleClickOnMutations(mutations: MutationRecord[], elements: elements) {
	for (const mutation of mutations) {
		if (mutation.addedNodes.length > 0) {
			for (const node of mutation.addedNodes) {
				node.addEventListener('mousedown', (e) => {
					e.preventDefault();
					if (e instanceof MouseEvent && (e as MouseEvent).button === 1 && e.target instanceof HTMLDivElement && e.target.childNodes.length >= 2) {
						createInstance(e.target as HTMLDivElement, e.clientX, e.clientY, true);
					}
				});
			}
		}
	}
}
