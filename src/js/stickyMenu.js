export default () => {
  const features = document.querySelector('.features');
  const pageHeaderMiddle = document.querySelector('.page-header__wrapper--middle');
  const pageHeaderTop = document.querySelector('.page-header__wrapper--top');
  window.addEventListener('scroll', () => {
    if (window.pageYOffset >= features.offsetTop) {
      if (!pageHeaderMiddle.classList.contains('page-header__wrapper--sticky')) {
        pageHeaderMiddle.classList.add('page-header__wrapper--sticky');
        pageHeaderTop.classList.add('page-header__wrapper--sticky');
      }
    } else {
      pageHeaderMiddle.classList.remove('page-header__wrapper--sticky');
      pageHeaderTop.classList.remove('page-header__wrapper--sticky');
    }
  });
};
