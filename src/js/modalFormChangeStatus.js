const modal = document.querySelector('.modal');
const formBlock = modal.querySelector('.modal__request-wrapper--form');
const successBlock = modal.querySelector('.modal__request-wrapper--success');
const failureBlock = modal.querySelector('.modal__request-wrapper--failure');

const hide = (node) => {
  if (!node.classList.contains('modal__request-wrapper--hidden')) {
    node.classList.add('modal__request-wrapper--hidden');
  }
};

const show = (node) => {
  node.classList.remove('modal__request-wrapper--hidden');
};

const resetForm = () => {
  const modalForm = document.querySelector('.modal__form');
  const inputs = modalForm.querySelectorAll('input');
  /* eslint-disable */
  inputs.forEach((input) => { 
    input.value = '';
  });
  /* eslint-enable */
};

export const requestStatus = () => {
  show(formBlock);
  hide(successBlock);
  hide(failureBlock);
};

export const successStatus = () => {
  show(successBlock);
  hide(formBlock);
  hide(failureBlock);
  resetForm();
};

export const failureStatus = () => {
  show(failureBlock);
  hide(formBlock);
  hide(successBlock);
};
