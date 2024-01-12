const btn = document.querySelector('.fa-bars');
const nav = document.querySelector('#navbar');

const onClick = (e) => {
  btn.classList.toggle('fa-xmark');
  nav.classList.toggle('active');
  if (!btn) {
    return;
  }
};

btn.addEventListener('click', onClick);
nav.addEventListener('click', onClick);

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

// scrollReveal

const sections = document.querySelectorAll('[data-section]');

const scrollReveal = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      sections[i].classList.add('active');
    } else {
      sections[i].classList.remove('active');
    }
  }
};

scrollReveal();

addEventOnElem(window, 'scroll', scrollReveal);
