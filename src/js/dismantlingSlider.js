export default () => {
  const slider = document.querySelector('.dismantling__slider');

  slider.addEventListener('click', (e) => {
    //const { target } = e.target;
    console.log(e);
    console.log(e.target);
  });
};
