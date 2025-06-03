'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close - modal');
const btnsOpenModal = document.querySelectorAll('open - modal');


const openModal = function(){
console.log('Button clicked');
modal.classList.remove('hidden');
overlay.classList.remove('hidden')
};



const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};



for(let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click',function
 (){
 c;

modal.style.display = 'block';

});



btnCloseModal.addEventListener('click' , closeModal ()); 
overlay.addEventListener('click' , closeModal);
