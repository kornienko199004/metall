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

  let initialPoint;
  let finalPoint;
  slider.addEventListener('touchstart', (e) => {
    e.preventDefault();
    e.stopPropagation();
    [initialPoint] = e.changedTouches;
  }, false);

  slider.addEventListener('touchend', (e) => {
    e.preventDefault();
    e.stopPropagation();
    [finalPoint] = e.changedTouches;
    const xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
    const yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
    if (xAbs > 20 || yAbs > 20) {
      if (xAbs > yAbs) {
        if (finalPoint.pageX < initialPoint.pageX) {
          setNextSliderTheCurrent();
        } else {
          setNextSliderTheCurrent();
        }
      }
    }
  }, false);
};
