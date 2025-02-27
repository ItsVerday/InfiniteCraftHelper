import type { elements } from './index';

const css = `
    :root {
        --base: #fff;
        --border: #c8c8c8;
        --border-hover: #91a8c1;
        --text: #000;
        --selected-gradient: linear-gradient(0deg,#d6fcff,#fff 90%);
    }

    .sidebar-controls {
        display: flex;
        position: sticky;
        height: auto !important;
        top: 0px;
        background-color: var(--base) !important;
        max-width: 900px;
        margin-left: auto;
        margin-right: auto;
        padding: 9px;
    }

    .sidebar-input {
        height: 40px !important;
        margin: 4px;
        border-radius: 5px;
        border: 1px solid var(--border) !important;
        font-family: Roboto, sans-serif;
        background-size: 21px 21px !important;
        background-position: 10px 10px !important;
        background-color: var(--base) !important;
        color: var(--text);
    }

    .settings-details {
        margin: 4px;
        height: 40px;
    }

    .settings-summary {
        list-style: none;
    }

    .settings-button {
        height: 40px;
        padding: 8px 8px 7px;
        border: 1px solid var(--border);
        border-radius: 5px;
        cursor: pointer;
        opacity: .8;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
    }
    .settings-button:hover {
        transform: scale(1.05)
    }

    .settings-content {
        display: flex;
        flex-direction: column;
        gap: 5px;
        position: absolute;
        right: 13px;
        padding: 8px 8px 7px;
        border: 1px solid var(--border);
        border-radius: 5px;
        background-color: var(--base);
    }

    .setting {
        display: flex;
        gap: 5px;
        justify-content: flex-end;
        cursor: pointer;
        padding: 8px 8px 7px;
        border: 1px solid var(--border);
        border-radius: 5px;
        user-select: none;
        line-height: 1em;
        font-family: Roboto, sans-serif;
        font-size: 15.4px;
        color: var(--text);
    }
    .setting:hover {
        background: var(--selected-gradient);
        border: 1px solid var(--border-hover);
    }

    .setting > img {
        height: 1em;
        opacity: .8;
        aspect-ratio: 1 / 1;
    }

    #import-save {
        display: none;
    }

    .search-hidden {
        height: 0px !important;
        border: 0px !important;
        font-size: 0px !important;
        margin: 0px !important;
        visibility: hidden;
    }

    .search-hidden .item-emoji {
        font-size: 0px;
    }

    .site-title {
        z-index: 1;
    }

    .version {
        position: fixed;
        top: 80px;
        right: 320px;
        user-select: none;
        pointer-events: none;
        color: var(--text);
        font-family: Roboto, sans-serif;
        font-size: 11px;
    }

    @media screen and (min-width: 1150px) {
        .version {
            top: 85px;
            right: 362px;
        }
    }

    .side-controls {
        z-index: 1;
    }

    .instance-emoji {
        pointer-events: none;
    }
`;

export function init(elements: elements) {
	elements.styles.appendChild(document.createTextNode(css.trim()));
	document.getElementsByTagName('head')[0].appendChild(elements.styles);
}
