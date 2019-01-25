import axios from 'axios';

export default () => {
  const modalForm = document.querySelector('.modal__form');
  modalForm.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(this);
    const data = new FormData(modalForm);
    console.log(data.getAll('modal-name'));
    //axios.post()
  });
};
