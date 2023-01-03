'use strict';

const navimg = document.querySelector('nav img');
const modal = document.querySelector('.Modal');
// const overlay = document.querySelector('.overlay');
const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
console.log(btnShowModal);

for (let i = 0; i < btnShowModal.length; i++)
btnShowModal[i].addEventListener('click', function() {
    modal.classList.remove('hidden');
    navimg.classList.remove('nav');
    // overlay.classList.remove('hidden');
});

const closeModal = function() {
    modal.classList.add('hidden');
    // overlay.classList.add('hidden');
};
btnCloseModal.addEventListener('click', closeModal);