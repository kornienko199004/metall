import axios from 'axios';
import { successStatus, failureStatus } from './photoFormChangeStatus';

export default () => {
  const estimatingForm = document.querySelector('.estimating__form');
  /* eslint-disable */
  estimatingForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = new FormData(estimatingForm);
    const path = '../../action/photoAction.php';

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
