import 'focus-visible';
import './functions/fix-fullheight.js';
import './_settings.js';

import "./functions/dynamic-adapt.js";

import burgerMenu from './components/burgerMenu.js';
import getHeightBlock from './modules/getHeightBlock.js'

import WdTab from './functions/tabs.js';
import WdSpoller from './functions/spollers.js';

document.addEventListener('DOMContentLoaded', () => {

    burgerMenu();
    getHeightBlock('.header', '--header-height');


    document.addEventListener('click', (e) => {
        const target = e.target;
    })

    window.addEventListener('resize', () => {
        getHeightBlock('.header', '--header-height');
    })

    const tabs = document.querySelectorAll('[data-tabs]');
    tabs.forEach(tab => WdTab(tab));

    const spollers = document.querySelectorAll('[data-spollers]');
    spollers.forEach(spoller => WdSpoller(spoller));

});