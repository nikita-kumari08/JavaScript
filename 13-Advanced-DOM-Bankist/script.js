'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};


btnsOpenModal.forEach(btn => btn.addEventListener
  ('click', openModal));


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


// selecting elements

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSelection = document.querySelectorAll('.
section');
console.log(allSelections);


document.getElementById('scetion -- 1');
const allButtons = document.getElementsByName
('button');
console.log(allButtons);


console.log(document.getElementsByClassName('btn'));


// creating and inserting elements
// .insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-messsage');
//message.textContext = 'We use cookie for improved
//  functionality and analytics';
message.innerHTML = 
'we use cookied for improved functonality and
analytics. <button class ="btn
btn--close--cookie">Got it!<button>';

headers.prepend (message);
header.append(message);
//header.append(message.cloneNode(true));

header.before(message);
header.after(message);


// delete elements
document
.querySelector('.btn--close--cookie')
.addEventListener('click',function () {
  //message.remove();
  message.parentElement.removeChild(message);
});


//styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);


message.style.height = Number.parseFloat(getComputedStyle(messsage).height,
10) + 30 + 'px';

document.documentElement.style.setProperty
('--color-primary', 'orangered');

//attributes
const logo =  document.querySelector('.nav__logo');
console.log(log.alt);
console.log(logo.src);
console.log(logo.classNmae);

logo.alt = 'Beautiful minimalist logo';
// non standard 

console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Baankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

//data attribute 
console.log(logo.CDATA_SECTION_NODE.versionNumber);

//classes
logo.claasslist.add('c', 'j');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c'); //not includes

//don't use
logo.className = 'Jonas';