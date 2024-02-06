import { elements } from "./index";

declare const window: any;

export function createRandomInstance(elements: elements) {
    const items = elements.getItems();
    const target = items[Math.floor(Math.random() * items.length)];
    const { width, height } = target.getBoundingClientRect();
    const canvasWidth = window.unsafeWindow.innerWidth - elements.sidebar.getBoundingClientRect().width;
    const canvasHeight = window.unsafeWindow.innerHeight;

    const positionX = Math.random() * (canvasWidth - width) + width / 2;
    const positionY = Math.random() * (canvasHeight - height) + height / 2;

    createInstance(target, positionX, positionY, false);
}

export function createInstance(targetElement: HTMLDivElement, positionX: number, positionY: number, isClicked: boolean) {
    const gameInstance: any = window.unsafeWindow.$nuxt.$root.$children[2].$children[0].$children[0];
    gameInstance.playInstanceSound();
    const { x, y, width, height } = targetElement.getBoundingClientRect();
    const data = {
        id: gameInstance._data.instanceId++,
        text: targetElement.childNodes[1].textContent?.trim(),
        emoji: targetElement.childNodes[0].textContent?.trim(),
        discovered: targetElement.classList.contains('instance-discovered'),
        disabled: false,
        left: x,
        top: y,
        offsetX: 0.5,
        offsetY: 0.5,
    };
    gameInstance._data.selectedInstance = data;
    gameInstance._data.instances.push(gameInstance._data.selectedInstance);

    gameInstance.$nextTick(() => {
        if (!isClicked) {
            gameInstance.mouseDown = 1;
            gameInstance.moveInstance({clientX: positionX - width / 2, clientY: positionY - height / 2});
            gameInstance.mouseDown = 0;
        }

        gameInstance.setInstancePosition(gameInstance._data.selectedInstance, positionX - width / 2, positionY - height / 2);
        gameInstance.setInstanceZIndex(gameInstance._data.selectedInstance, data.id);
    });
}