// ==UserScript==
// @name         YandexSearchBot2
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Lebedev Nikolay 
// @match        https://yandex.ru/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==


document.getElementById('text').value = 'Дом'
document.getElementsByClassName('mini-suggest__button button_theme_search button_size_search i-bem button_js_inited')[0].click();
