import axios from 'axios';
import { successStatus, failureStatus } from './modalFormChangeStatus';

export default () => {
  const modalForm = document.querySelector('.modal__form');
  /* eslint-disable */
  modalForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const modalTitle = document.querySelector('.modal__title').textContent;
    const data = new FormData(modalForm);
    const path = modalTitle == 'Обратный звонок' ? '../../action/callBackAction.php' : '../../action/demontagAction.php';
    axios.post(path, data)
      .then(res => {
        successStatus();
      })
      .catch(e => {
        console.log(e);
        failureStatus();
      });
  });
  /* eslint-enable */
};
