let darkButton = document.querySelector('.theme-button-dark');
let lightButton = document.querySelector('.theme-button-light');
let sansSerifButton = document.querySelector('.font-button-sans-serif');
let serifButton = document.querySelector('.font-button-serif');

darkButton.onclick = function () {
    document.body.classList.add('dark');
    darkButton.classList.add('active');
    lightButton.classList.remove('active');
};

lightButton.onclick = function () {
    document.body.classList.remove('dark');
    darkButton.classList.remove('active');
    lightButton.classList.add('active');
};

sansSerifButton.onclick = function () {
    document.body.classList.remove('serif');
    sansSerifButton.classList.add('active');
    serifButton.classList.remove('active');
};

serifButton.onclick = function () {
    document.body.classList.add('serif');
    sansSerifButton.classList.remove('active');
    serifButton.classList.add('active');
};