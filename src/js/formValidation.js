export default () => {
  const modalForm = document.querySelector('.modal__form');
  const userNameInput = modalForm.querySelector('.modal__input--name');
  const phoneInput = modalForm.querySelector('.modal__input--phone');
  userNameInput.addEventListener('input', (e) => {
    const { value } = e.target;
    console.log(/\w+( (\w+)? (\w+)?)?/.exec(value));
  });
};
