export default () => {
  const slider = document.querySelector('.dismantling__slider');

  function setCurrentSliderClass() {
    const currentSliderClass = 'dismantling__slide--current';
    if (!this.classList.contains(currentSliderClass)) {
      const currentSlider = slider.querySelector(`.${currentSliderClass}`);
      currentSlider.classList.remove(currentSliderClass);
      this.classList.add(currentSliderClass);
    }
  }

  const { children } = slider;
  Array.from(children).forEach(child => child.addEventListener('click', setCurrentSliderClass));
};
