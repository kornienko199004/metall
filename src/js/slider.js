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
    button.addEventListener('click', () => {
      slidersItems.forEach((sliderItem) => {
        sliderItem.classList.remove('slider__item--hidden');
      });
      const slider = slidersItemsArray.filter((item, ind) => ind !== index);
      slider[0].classList.add('slider__item--hidden');
    });
  });
};
