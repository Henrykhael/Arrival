function escondeTodasAbas(){var e=document.querySelectorAll("[data-tab-id]");for(let t=0;t<e.length;t++)e[t].classList.remove("details__section__list--is-active")}function activeButton(){var e=document.querySelectorAll("[data-tab-button]");for(let t=0;t<e.length;t++)e[t].classList.remove("details__tabs__button--is-active")}function abreOuFechaReposta(t){t.target.parentNode.classList.toggle("faq__questions__item--is-open")}document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll("[data-tab-button]"),a=document.querySelectorAll("[data-faq-question]");for(let t=0;t<e.length;t++)e[t].addEventListener("click",function(t){var e=t.target.dataset.tabButton,e=document.querySelector(`[data-tab-id=${e}]`);escondeTodasAbas(),e.classList.add("details__section__list--is-active"),activeButton(),t.target.classList.add("details__tabs__button--is-active")});for(let t=0;t<a.length;t++)a[t].addEventListener("click",abreOuFechaReposta)});