document.addEventListener('DOMContentLoaded', function(){
    const detailsButton = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    for(let i = 0; i < detailsButton.length; i++){
        detailsButton[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            escondeTodasAbas();
            aba.classList.add('details__section__list--is-active');
            activeButton();
            botao.target.classList.add('details__tabs__button--is-active');
        })
    }

    for(let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', abreOuFechaReposta);
    }
})

function escondeTodasAbas(){
    const tabsContent = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContent.length; i++){
        tabsContent[i].classList.remove('details__section__list--is-active');
    }
}

function activeButton(){
    const detailsButton = document.querySelectorAll('[data-tab-button]');

    for(let i = 0; i < detailsButton.length; i++){

        detailsButton[i].classList.remove('details__tabs__button--is-active');
    }
}

function abreOuFechaReposta(elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementoDad = elemento.target.parentNode;

    elementoDad.classList.toggle(classe);
}