const estimating = document.querySelector('.estimating');
const formBlock = estimating.querySelector('.estimating__request-wrapper--form');
const successBlock = estimating.querySelector('.estimating__request-wrapper--success');
const failureBlock = estimating.querySelector('.estimating__request-wrapper--failure');

const hide = (node) => {
  if (!node.classList.contains('estimating__request-wrapper--hidden')) {
    node.classList.add('estimating__request-wrapper--hidden');
  }
};

const show = (node) => {
  node.classList.remove('estimating__request-wrapper--hidden');
};

const resetForm = () => {
  const form = document.querySelector('.estimating__form');
  const inputs = form.querySelectorAll('input');
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
