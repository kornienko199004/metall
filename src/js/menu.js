export default () => {
  const menu = document.querySelector('.main-nav');

  if (menu.classList.contains('main-nav--no-js')) {
    menu.classList.remove('main-nav--no-js');
    menu.classList.add('main-nav--closed');
  }

  const toggle = document.querySelector('.main-nav__toggle');
  console.log(toggle);

  toggle.addEventListener('click', (e) => {
    console.log('click');
    e.preventDefault();
    if (menu.classList.contains('main-nav--closed')) {
      menu.classList.remove('main-nav--closed');
      menu.classList.add('main-nav--opened');
    } else if (menu.classList.contains('main-nav--opened')) {
      menu.classList.remove('main-nav--opened');
      menu.classList.add('main-nav--closed');
    }
  });
};


