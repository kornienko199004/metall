import axios from 'axios';

const resetForm = () => {
  const modalForm = document.querySelector('.modal__form');
  const inputs = modalForm.querySelectorAll('input');
  /* eslint-disable */
  inputs.forEach((input) => { 
    input.value = '';
  });
  /* eslint-enable */
};

export default () => {
  const modalForm = document.querySelector('.modal__form');
  /* eslint-disable */
  modalForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const modalTitle = document.querySelector('.modal__title').textContent;
    console.log(modalTitle);
    console.log(this);
    const data = new FormData(modalForm);
    console.log(data.getAll('modal-name'));
    const path = modalTitle == 'Обратный звонок' ? '../../action/callBackAction.php' : '../../action/demontagAction.php';
    axios.post(path, data)
      .then(res => {
        const modal = document.querySelector('.modal');
        const modalWrapper = document.querySelector('.modal__wrapper');
        //console.log(res);
        resetForm();
        modal.classList.remove('modal--show');
        modalWrapper.classList.remove('modal__wrapper--show');
      })
      .catch(e => {
        console.log(e);
      });
  });
  /* eslint-enable */
};
