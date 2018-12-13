export default () => {
  const slidersItems = document.querySelectorAll('.slider__item');
  const slidersItemsArray = Array.from(slidersItems);
  const slidersButtons = document.querySelectorAll('.slider__button');

  slidersItems.forEach((sliderItem) => {
    if (sliderItem.classList.contains('slider__item--no-js')) {
      sliderItem.classList.remove('slider__item--no-js');
      sliderItem.classList.add('slider__item--hidden');
    }
  });

  slidersButtons.forEach((button, index) => {
/* eslint-disable */
    button.addEventListener('click', function () {
      const checked = document.querySelector('.slider__button--checked');
      if (checked) {
        checked.classList.remove('slider__button--checked');
      }
      this.classList.add('slider__button--checked');
      slidersItems.forEach((sliderItem) => {
        sliderItem.classList.remove('slider__item--hidden');
      });
      const slider = slidersItemsArray.filter((item, ind) => ind !== index);
      slider[0].classList.add('slider__item--hidden');
    });
  });
/* eslint-enable */
};
