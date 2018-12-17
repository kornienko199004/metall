import './less/style.less';
import menuScript from './js/menu';
import sliderScript from './js/slider';
import modalScript from './js/modal';
import anchorsScript from './js/anchors';
import scrollToTopScript from './js/scrollToTop';
import stickyMenuScript from './js/stickyMenu';
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

console.log('hello, dudde!');
const fn = () => {
  const objA = { a: 1 };
  const objB = { b: 2 };
  const objC = { ...objA, ...objB };
  console.log(objC);
};

fn();
console.log('hello');
menuScript();
sliderScript();
modalScript();
anchorsScript();
scrollToTopScript();
stickyMenuScript();
