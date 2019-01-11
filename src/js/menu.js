export default () => {
  const menu = document.querySelector('.main-nav');
  const information = document.querySelector('.information');

  if (menu.classList.contains('main-nav--no-js')) {
    menu.classList.remove('main-nav--no-js');
    menu.classList.add('main-nav--closed');
  }

  const toggle = document.querySelector('.main-nav__toggle');

  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    if (menu.classList.contains('main-nav--closed')) {
      menu.classList.remove('main-nav--closed');
      menu.classList.add('main-nav--opened');
    } else if (menu.classList.contains('main-nav--opened')) {
      menu.classList.remove('main-nav--opened');
      menu.classList.add('main-nav--closed');
    }
    if (information.classList.contains('show-menu')) {
      information.classList.remove('show-menu');
    } else {
      information.classList.add('show-menu');
    }
  });
};
