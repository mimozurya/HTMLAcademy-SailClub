let gridButton = document.querySelector('.card-view-button-grid');
let listButton = document.querySelector('.card-view-button-list');
let cards = document.querySelector('.cards');

gridButton.onclick = function () {
    cards.classList.remove('list')
    gridButton.classList.add('active');
    listButton.classList.remove('active');
};

listButton.onclick = function () {
    cards.classList.add('list');
    gridButton.classList.remove('active');
    listButton.classList.add('active');
};