import './less/style.less';
import menuScript from './js/menu';
import sliderScript from './js/slider';
import modalScript from './js/modal';
import anchorsScript from './js/anchors';
import scrollToTopScript from './js/scrollToTop';
import stickyMenuScript from './js/stickyMenu';
import fileUpload from './js/fileUpload';
import modalFormRequest from './js/modalFormRequest';
import photoFormRequest from './js/photoFormRequest';
import dismantlingSlider from './js/dismantlingSlider';
/* eslint-disable */
import like from '../img/like.svg';
import weight from '../img/weight.svg';
import truck from '../img/truck.svg';
import man from '../img/man.svg';
import money from '../img/money.svg';
import phone from '../img/phone.svg';
import photo from '../img/photo.svg';
import lock from '../img/lock.svg';
import goodMoney from '../img/goodMoney.svg';
import creditCard from '../img/creditCard.svg';
import iconMenuBurger from '../img/iconMenuBurger.svg';
import iconMenuCross from '../img/iconMenuCross.svg';
import clock from '../img/clock.svg';
import cursor from '../img/cursor.svg';
import success from '../img/success.svg';
import error from '../img/error.svg';
import arrowLeft from '../img/arrowLeft.svg';
import arrowLeftHover from '../img/arrowLeftHover.svg';
import arrowRight from '../img/arrowRight.svg';
import arrowRightHover from '../img/arrowRightHover.svg';
/* eslint-enable */

menuScript();
sliderScript();
modalScript();
anchorsScript();
scrollToTopScript();
stickyMenuScript();
fileUpload();
modalFormRequest();
photoFormRequest();
dismantlingSlider();


/*
let arr = [];
Array.from(buttons).forEach((button) => {
  const listener = (e) => {
    console.log(button.textContent);
    e.target.removeEventListener('click', listener);
  }
  arr = [...arr, { fn: listener, element: button }];
  button.addEventListener('click', listener);
});

console.log(arr);
console.log('Start timeout');
setTimeout(() => {
  arr
  .filter((item, index) => index % 2 !== 0)
  .forEach(({ fn, element }) => {
    try {
      element.removeEventListener('click', fn);
    }
    catch(e) {
      console.log(e);
    }
  });
  console.log('Finished timeout');
}, 3000);


let trigger = false;

const someFn = (callback) => {
  try {
    if (!trigger) {
      const element = document.querySelectro('#some6');
      element.parentNode;
    }
    callback();
  }
  catch(e) {
    console.log(e);
    setTimeout(someFn, 1000, callback);
  }
};

someFn(() => {
  console.log('finished callback');
});

setTimeout(() => {
  trigger = true;
}, 10000);
*/