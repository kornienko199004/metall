export default () => {
  const slider = document.querySelector('.dismantling__slider');
  const previewButton = document.querySelector('.dismantling__button--preview');
  const nextwButton = document.querySelector('.dismantling__button--next');
  const currentSliderClass = 'dismantling__slide--current';
  const { children } = slider;

  function setCurrentSliderClass() {
    if (!this.classList.contains(currentSliderClass)) {
      const currentSlider = slider.querySelector(`.${currentSliderClass}`);
      currentSlider.classList.remove(currentSliderClass);
      this.classList.add(currentSliderClass);
    }
  }

  function setNextSliderTheCurrent() {
    const currentSlideIndex = Array.from(children).reduce((acc, item, index) => (item.classList
      .contains(currentSliderClass)
      ? index : acc), '');
    const rest = (currentSlideIndex + 1) % children.length;
    const newCurrentSlideIndex = rest === 0 ? 0 : currentSlideIndex + 1;
    const currentSlide = document.querySelector(`.${currentSliderClass}`);
    currentSlide.classList.remove(currentSliderClass);
    children[newCurrentSlideIndex].classList.add(currentSliderClass);
  }

  function setPreviousSliderTheCurrent() {
    const currentSlideIndex = Array.from(children).reduce((acc, item, index) => (item.classList
      .contains(currentSliderClass)
      ? index : acc), '');
    const newCurrentSlideIndex = currentSlideIndex === 0
      ? children.length - 1
      : currentSlideIndex - 1;
    const currentSlide = document.querySelector(`.${currentSliderClass}`);
    currentSlide.classList.remove(currentSliderClass);
    children[newCurrentSlideIndex].classList.add(currentSliderClass);
  }

  Array.from(children).forEach(child => child.addEventListener('click', setCurrentSliderClass));

  previewButton.addEventListener('click', setPreviousSliderTheCurrent);
  nextwButton.addEventListener('click', setNextSliderTheCurrent);
};
