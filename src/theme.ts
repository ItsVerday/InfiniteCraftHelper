import type { elements } from './index';

const lightmode = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJhIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgNjAwIj48cGF0aCBkPSJNMzAwLjAwMDM0LDM4My43MjA2OGMyMy4yNTU4MywwLDQzLjAyMzMyLTguMTM5NTQsNTkuMzAyMzktMjQuNDE4NjMsMTYuMjc5MDctMTYuMjc5MSwyNC40MTg2My0zNi4wNDY1NSwyNC40MTg2My01OS4zMDIzOXMtOC4xMzk1Ni00My4wMjMzMi0yNC40MTg2My01OS4zMDIzOWMtMTYuMjc5MDctMTYuMjc5MDctMzYuMDQ2NTctMjQuNDE4NjMtNTkuMzAyMzktMjQuNDE4NjNzLTQzLjAyMzMsOC4xMzk1Ni01OS4zMDIzOSwyNC40MTg2M2MtMTYuMjc5MSwxNi4yNzkwNy0yNC40MTg2MywzNi4wNDY1Ny0yNC40MTg2Myw1OS4zMDIzOXM4LjEzOTU0LDQzLjAyMzMsMjQuNDE4NjMsNTkuMzAyMzljMTYuMjc5MSwxNi4yNzkxLDM2LjA0NjU1LDI0LjQxODYzLDU5LjMwMjM5LDI0LjQxODYzWm0wLDQxLjg1OTgxYy0zNC44NDc0OCwwLTY0LjQ4OTU5LTEyLjIxODE1LTg4LjkyNjM4LTM2LjY1NDQ2LTI0LjQzNjMtMjQuNDM2NzktMzYuNjU0NDYtNTQuMDc4OS0zNi42NTQ0Ni04OC45MjYzOHMxMi4yMTgxNS02NC40ODk2MSwzNi42NTQ0Ni04OC45MjYzOGMyNC40MzY3OS0yNC40MzYzLDU0LjA3ODktMzYuNjU0NDgsODguOTI2MzgtMzYuNjU0NDhzNjQuNDg5NjEsMTIuMjE4MTcsODguOTI2MzgsMzYuNjU0NDhjMjQuNDM2MywyNC40MzY3NywzNi42NTQ0OCw1NC4wNzg5LDM2LjY1NDQ4LDg4LjkyNjM4cy0xMi4yMTgxNyw2NC40ODk1OS0zNi42NTQ0OCw4OC45MjYzOGMtMjQuNDM2NzcsMjQuNDM2My01NC4wNzg5LDM2LjY1NDQ2LTg4LjkyNjM4LDM2LjY1NDQ2Wk0yMC45MzAyNiwzMjAuOTI5MjFjLTUuOTMwMjQsMC0xMC45MDA5NC0yLjAwNjUtMTQuOTEyMTEtNi4wMTk1NC00LjAxMjEtNC4wMTM1MS02LjAxODE1LTguOTg2NTMtNi4wMTgxNS0xNC45MTkwOSwwLTUuOTMzMDMsMi4wMDU4Mi0xMC45MDMwMyw2LjAxNzQ1LTE0LjkxMDAyLDQuMDExMTctNC4wMDY5Nyw4Ljk4MTg3LTYuMDEwNDcsMTQuOTEyMTEtNi4wMTA0N2g2Mi43OTE0N2M1LjkyOTc3LDAsMTAuOTAwNDYsMi4wMDY1LDE0LjkxMjExLDYuMDE5NTQsNC4wMTIxMSw0LjAxMzUxLDYuMDE4MTUsOC45ODY1Myw2LjAxODE1LDE0LjkxOTA5LDAsNS45MzMwMy0yLjAwNTgyLDEwLjkwMzAzLTYuMDE3NDUsMTQuOTEwMDItNC4wMTE2Myw0LjAwNjk3LTguOTgyMzQsNi4wMTA0Ny0xNC45MTIxMSw2LjAxMDQ3SDIwLjkzMDI2Wm00OTUuMzQ4NzIsMGMtNS45Mjk3NywwLTEwLjkwMDQ5LTIuMDA2NS0xNC45MTIxMy02LjAxOTU0LTQuMDExNjMtNC4wMTM1MS02LjAxNzQ1LTguOTg2NTMtNi4wMTc0NS0xNC45MTkwOSwwLTUuOTMzMDMsMi4wMDU4Mi0xMC45MDMwMyw2LjAxNzQ1LTE0LjkxMDAyLDQuMDExNjMtNC4wMDY5Nyw4Ljk4MjM2LTYuMDEwNDcsMTQuOTEyMTMtNi4wMTA0N2g2Mi43OTE0NWM1LjkzMDI0LDAsMTAuOTAxMTgsMi4wMDY1LDE0LjkxMjgxLDYuMDE5NTQsNC4wMTExNiw0LjAxMzUxLDYuMDE2NzcsOC45ODY1Myw2LjAxNjc3LDE0LjkxOTA5LDAsNS45MzMwMy0yLjAwNTYsMTAuOTAzMDMtNi4wMTY3NywxNC45MTAwMi00LjAxMTYzLDQuMDA2OTctOC45ODI1Nyw2LjAxMDQ3LTE0LjkxMjgxLDYuMDEwNDdoLTYyLjc5MTQ1Wk0yOTkuOTkxMjcsMTA0LjY1MDZjLTUuOTMzMDMsMC0xMC45MDMwMy0yLjAwNTgyLTE0LjkxMDAyLTYuMDE3NDUtNC4wMDY5Ny00LjAxMTYzLTYuMDEwNDctOC45ODIzNi02LjAxMDQ3LTE0LjkxMjEzVjIwLjkyOTU4YzAtNS45MzAyNCwyLjAwNjUtMTAuOTAxMTgsNi4wMTk1NC0xNC45MTI4MSw0LjAxMzUxLTQuMDExMTYsOC45ODY1My02LjAxNjc3LDE0LjkxOTA5LTYuMDE2NzcsNS45MzMwMywwLDEwLjkwMzAzLDIuMDA1NiwxNC45MTAwMiw2LjAxNjc3LDQuMDA2OTcsNC4wMTE2Myw2LjAxMDQ3LDguOTgyNTcsNi4wMTA0NywxNC45MTI4MXY2Mi43OTE0NWMwLDUuOTI5NzctMi4wMDY1LDEwLjkwMDQ5LTYuMDE5NTQsMTQuOTEyMTMtNC4wMTM1MSw0LjAxMTYzLTguOTg2NTMsNi4wMTc0NS0xNC45MTkwOSw2LjAxNzQ1Wm0wLDQ5NS4zNDk0Yy01LjkzMzAzLDAtMTAuOTAzMDMtMi4wMDYwNS0xNC45MTAwMi02LjAxODE1LTQuMDA2OTctNC4wMTExNy02LjAxMDQ3LTguOTgxODctNi4wMTA0Ny0xNC45MTIxMXYtNjIuNzkxNDdjMC01LjkyOTc2LDIuMDA2NS0xMC45MDA0Nyw2LjAxOTU0LTE0LjkxMjExLDQuMDEzNTEtNC4wMTE2Myw4Ljk4NjUzLTYuMDE3NDUsMTQuOTE5MDktNi4wMTc0NSw1LjkzMzAzLDAsMTAuOTAzMDMsMi4wMDU4MiwxNC45MTAwMiw2LjAxNzQ1LDQuMDA2OTcsNC4wMTE2Myw2LjAxMDQ3LDguOTgyMzQsNi4wMTA0NywxNC45MTIxMXY2Mi43OTE0N2MwLDUuOTMwMjQtMi4wMDY1LDEwLjkwMDk0LTYuMDE5NTQsMTQuOTEyMTEtNC4wMTM1MSw0LjAxMjEtOC45ODY1Myw2LjAxODE1LTE0LjkxOTA5LDYuMDE4MTVaTTEzMi43MjAxNSwxNjEuNTkwNjdsLTM1LjA5ODY0LTM0LjEzMjM1Yy00LjE1MDI0LTMuODY0MjEtNi4xNTM5Ni04LjcyMDktNi4wMTExNy0xNC41NzAyMywuMTQzMjUtNS44NDk4LDIuMTc0MTktMTAuOTM5MDcsNi4wOTI4LTE1LjI2NzksNC4yNzQ0Mi00LjMyOTMsOS4yOTE2NC02LjQ5Mzk5LDE1LjA1MTY1LTYuNDkzOTUsNS43NjA0Ni0uMDAwMDQsMTAuNjYyMTEsMi4xNjQ2NSwxNC43MDQ5LDYuNDkzOTVsMzQuNDAwOTcsMzQuODMwNjZjNC4wNDI3OCw0LjMyOTMsNi4wNjQxOCw5LjIzMDkxLDYuMDY0MTgsMTQuNzA0OTJzLTEuOTc2NzUsMTAuMzc1MzYtNS45MzAyNCwxNC43MDQxOWMtMy45NTMwMiw0LjMyODgzLTguNzM4MTQsNi4zNzY5Ny0xNC4zNTUzNiw2LjE0NDQzLTUuNjE3MjItLjIzMjU0LTEwLjU5MDI1LTIuMzcwMjQtMTQuOTE5MDktNi40MTMwNHYtLjAwMDY4Wk00NzIuNTQwOTksNTAyLjM3NzhsLTM0LjQwMDk2LTM0LjgyOTM1Yy00LjA0MjgtNC4zMjkzLTYuMDY0Mi05LjMwMjM0LTYuMDY0Mi0xNC45MTkwOCwwLTUuNjE3MjEsMi4wMjE0LTEwLjQ0NzIyLDYuMDY0Mi0xNC40OTAwMywzLjc3NDQtNC4zMjg4NSw4LjQ5MjU3LTYuMzc3LDE0LjE1NDQ1LTYuMTQ0NDMsNS42NjE4OCwuMjMyNTcsMTAuNjU3MjYsMi4zNzAyNCwxNC45ODYwNSw2LjQxMzAybDM1LjA5ODYzLDM0LjEzMjM3YzQuMTUwMjQsMy44NjQxOCw2LjE1Mzk3LDguNzIwOTQsNi4wMTExOSwxNC41NzAyNS0uMTQzMjksNS44NDk3OC0yLjE3NDE5LDEwLjkzOTA4LTYuMDkyNzgsMTUuMjY3OTMtNC4yNzQ0NSw0LjMyOTMxLTkuMjkxNjMsNi40OTM5Ni0xNS4wNTE2Myw2LjQ5Mzk2LTUuNzYwNDYsMC0xMC42NjIxMi0yLjE2NDY1LTE0LjcwNDkyLTYuNDkzOTZsLS4wMDAwNC0uMDAwNjhabS0zNC40MDA5Ni0zNDAuMzgzODdjLTQuMzI4ODMtMy45NTMtNi4zNzY5Ny04LjczODE5LTYuMTQ0NDMtMTQuMzU1MzYsLjIzMjU0LTUuNjE3MjEsMi4zNzAyNC0xMC41OTAyNCw2LjQxMzA0LTE0LjkxOTA3bDM0LjEzMjM1LTM1LjA5ODYzYzMuODY0MjEtNC4xNTAyNCw4LjcyMDktNi4xNTM5MywxNC41NzAyMy02LjAxMTE5LDUuODQ5OCwuMTQzMjUsMTAuOTM5MDcsMi4xNzQxNSwxNS4yNjc5LDYuMDkyNzgsNC4zMjkzLDQuMjc0NDEsNi40OTM5OSw5LjI5MTY4LDYuNDkzOTUsMTUuMDUxNjMsLjAwMDA0LDUuNzYwNDYtMi4xNjQ2NSwxMC42NjIwNy02LjQ5Mzk1LDE0LjcwNDkybC0zNC44Mjk5OCwzNC40MDA5NmMtNC4zMjkzLDQuMDQyOC05LjIzMDkxLDYuMDY0Mi0xNC43MDQ5Miw2LjA2NDJzLTEwLjM3NTM2LTEuOTc2NzMtMTQuNzA0MTktNS45MzAyNFpNOTcuNjIxNSw1MDIuNDM3MWMtNC4zMjkzLTQuMzY3OTEtNi40OTM5NS05LjQzMTg4LTYuNDkzOTYtMTUuMTkxODcsLjAwMDAxLTUuNzYwNDcsMi4xNjQ2Ni0xMC42NjIxMSw2LjQ5Mzk2LTE0LjcwNDlsMzQuODMwMDQtMzQuNDAwOThjNC4zMjkzLTQuMDQyNzgsOS4zMDIzNC02LjA2NDE4LDE0LjkxOTA4LTYuMDY0MTgsNS42MTcyMSwwLDEwLjQ0NzIyLDIuMDIxNCwxNC40OTAwMyw2LjA2NDE4LDQuMTUwMjQsMy43NzQ0Myw2LjEwOTA5LDguNDkyNTUsNS44NzY1MiwxNC4xNTQ0My0uMjMyNTQsNS42NjE4Ni0yLjI4MDk0LDEwLjY1NzIzLTYuMTQ1MTMsMTQuOTg2MDZsLTM0LjEzMjM3LDM1LjA5ODY0Yy00LjA0Mjc5LDQuMzI5MzEtOC45NDQ0Miw2LjQyMjM0LTE0LjcwNDksNi4yNzkwOC01Ljc2LS4xNDI3OS0xMC44MDQ0My0yLjIxNjI5LTE1LjEzMzI3LTYuMjIwNDZaIi8+PC9zdmc+';
const darkmode = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJhIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgNTk5LjE3MzI2Ij48cGF0aCBkPSJNMzAzLjc5MDYyLDU5OS4xNzMyNmMtODQuNjc2MjEsMC0xNTYuNDc3MDctMjkuNDYyNzItMjE1LjQwMjQ5LTg4LjM4ODE1QzI5LjQ2MjcyLDQ1MS44NTk2OSwwLDM4MC4wNTg4NSwwLDI5NS4zODI2NCwwLDIyNC44NjU0OCwyMS44MjE3NiwxNjIuMTgzNDUsNjUuNDY1MjksMTA3LjMzNjYsMTA5LjEwODgyLDUyLjQ4OTA5LDE2Ny4yNDMxOSwxNy4xMzgxOCwyMzkuODY4NDMsMS4yODM4OGM3LjUxNDk4LTEuODc4NzQsMTQuMTM2MTItMS42OTU1NSwxOS44NjM0OSwuNTQ5NSw1LjcyNzM3LDIuMjQ1NywxMC4zNzgwNSw1LjU5MDY3LDEzLjk1MjA2LDEwLjAzNDk2LDMuNTc0MDIsNC40NDQyOSw1LjY4MTgsOS44Mzk1Nyw2LjMyMzMzLDE2LjE4NTgyLC42NDE1NSw2LjM0NjI2LS44NDc2NCwxMi42ODA4NS00LjQ2NzUyLDE5LjAwMzkzLTcuMzc2NzYsMTMuNDI1Mi0xMi44NTIxNywyNy4zNzI1Ny0xNi40MjYxOSw0MS44NDE5LTMuNTc0MDIsMTQuNDY4NzgtNS4zNjEwMywyOS42ODYwNi01LjM2MTAzLDQ1LjY1MTg0LDAsNTguNTc0NTUsMjAuNTAxMTcsMTA4LjM2Mjk5LDYxLjUwMzQ3LDE0OS4zNjUzNiw0MS4wMDIzMyw0MS4wMDE3Myw5MC43OTA3OCw2MS41MDI2LDE0OS4zNjUzMyw2MS41MDI2LDE3LjU0OTA0LDAsMzQuMzE5MjYtMi4yMjIxNSw1MC4zMTA1Ni02LjY2NjQ0LDE1Ljk5MTMtNC40NDQyOSwyOS45ODk1NS05LjU5ODkzLDQxLjk5NDcxLTE1LjQ2Mzg5LDUuODY0OTMtMi41NjYxNSwxMS41OTIyNy0zLjQ3MSwxNy4xODIwNy0yLjcxNDQ2LDUuNTkwMzUsLjc1NTkxLDEwLjM2MDU0LDIuNjIzMDYsMTQuMzEwMzYsNS42MDEzOSw0LjM4ODg4LDIuOTc4MzYsNy42NDg3Miw3LjA0NDk2LDkuNzc5NDEsMTIuMTk5OSwyLjEzMDc0LDUuMTU0MzQsMi4zNzEzNSwxMS4yMTQwNywuNzIxOTQsMTguMTc5MjUtMTIuNjkzMTIsNzAuMjg3ODQtNDYuODg2OTUsMTI4LjI5NTkzLTEwMi41ODE0NSwxNzQuMDI0My01NS42OTQ0OSw0NS43Mjg5Ny0xMTkuODc3MzQsNjguNTkzNDQtMTkyLjU0ODM2LDY4LjU5MzQyWm0wLTUzLjYwOTM3YzUyLjQxODg5LDAsOTkuNDc2ODEtMTQuNDQ0OTksMTQxLjE3MzcxLTQzLjMzNDk3LDQxLjY5Njg0LTI4Ljg4OTk5LDcyLjA3NTk5LTY2LjU2NjA4LDkxLjEzNzQ2LTExMy4wMjgzMi0xMS45MTM0MywyLjk3ODM2LTIzLjgyNjgsNS4zNjEwMy0zNS43NDAxOCw3LjE0ODA0LTExLjkxMzQzLDEuNzg3MDEtMjMuODI2OCwyLjY4MDUxLTM1Ljc0MDE4LDIuNjgwNTEtNzMuMjY3MzcsMC0xMzUuNjYzNzctMjUuNzYyNzItMTg3LjE4OTE5LTc3LjI4ODE0LTUxLjUyNTQ0LTUxLjUyNTQyLTc3LjI4ODE2LTExMy45MjE4Mi03Ny4yODgxNC0xODcuMTg5MTktLjAwMDAzLTExLjkxMzM3LC44OTM0OC0yMy44MjY4LDIuNjgwNTEtMzUuNzQwMTgsMS43ODY5OC0xMS45MTMzNyw0LjE2OTY4LTIzLjgyNjgsNy4xNDgwNC0zNS43NDAxOC00Ni40NjIyMywxOS4wNjE0MS04NC4xMzgzMyw0OS40NDA1Ni0xMTMuMDI4MzIsOTEuMTM3NDYtMjguODg5OTcsNDEuNjk2ODktNDMuMzM0OTcsODguNzU0NzYtNDMuMzM0OTcsMTQxLjE3MzcxLDAsNjkuMDk3NjksMjQuNDIyNDUsMTI4LjA2ODk4LDczLjI2NzM3LDE3Ni45MTM4OSw0OC44NDQ5LDQ4Ljg0NDkyLDEwNy44MTYyLDczLjI2NzM3LDE3Ni45MTM4OSw3My4yNjczN1oiLz48L3N2Zz4=';

let theme = 'light';

const darkCSS = `
	:root {
		--base: #18181b !important;
        --border: #525252 !important;
        --border-hover: #91a8c1 !important;
        --text: #fff !important;
		--selected-gradient: linear-gradient(0deg,#3b0764,#18181b 90%) !important;
	}

	.settings-button, .setting > img, .site-title, .logo, .coffee-link, .clear, .sound, .sort-img {
        filter: invert(1) !important;
    }

	.reset, .sort {
		color: var(--text) !important;
	}

	.particles, .items, .item, .mobile-sound {
		background-color: var(--base) !important;
	}

	.item, .mobile-sound {
		border-color: var(--border) !important;
	}

	.item, .instruction {
		color: var(--text) !important;
		
	}
	.item:hover {
        background: var(--selected-gradient) !important;
        border: 1px solid var(--border-hover) !important;
    }

	.instance {
		background: linear-gradient(0deg, #170326, #18181b 70%) !important;
	}
`;
const darkStyles = document.createElement('style');
darkStyles.appendChild(document.createTextNode(darkCSS.trim()));

function handleParticleTheme(elements: elements) {
	const ctx = elements.particles.getContext('2d');
	if (ctx === null) return;
	if (theme === 'light') {
		ctx.filter = 'invert(0%)';
	} else {
		ctx.filter = 'invert(100%)';
	}
}

export function init(elements: elements) {
	if (localStorage.getItem('theme') === null) {
		localStorage.setItem('theme', theme);
	}
	theme = localStorage.getItem('theme') === 'light' ? 'light' : 'dark';

	const themeContainer = document.createElement('div');
	themeContainer.classList.add('setting');

	const themeText = document.createTextNode('Toggle Theme');
	themeContainer.appendChild(themeText);

	const themeImage = document.createElement('img');
	if (theme === 'light') {
		themeImage.src = lightmode.trim();
	} else {
		themeImage.src = darkmode.trim();
		document.getElementsByTagName('head')[0].appendChild(darkStyles);
	}
	handleParticleTheme(elements);
	themeContainer.appendChild(themeImage);

	elements.settingsContent.appendChild(themeContainer);
	themeContainer.addEventListener('click', (e) => {
		if (theme === 'dark') {
			theme = 'light';
			themeImage.src = lightmode.trim();
			darkStyles.remove();
		} else {
			theme = 'dark';
			themeImage.src = darkmode.trim();
			document.getElementsByTagName('head')[0].appendChild(darkStyles);
		}
		handleParticleTheme(elements);
		localStorage.setItem('theme', theme);
	});

	window.addEventListener('resize', () => {
		handleParticleTheme(elements);
	});
}
