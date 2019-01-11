export default () => {
  const demontagButtons = [...document.querySelectorAll('.demontag-button')];
  const phoneLink = document.querySelector('.phone__link');
  const close = document.querySelector('.modal__close');
  const modal = document.querySelector('.modal');
  const modalForm = modal.querySelector('.modal__form');
  const modalWrapper = document.querySelector('.modal__wrapper');
  const title = document.querySelector('.modal__title');
  const userPhone = document.querySelector("[name='user-phone']");

  /*
    При нажатии на кнопку "Заказать демонтаж"
    открывается модальное окно с заголовком "Заказать демонтаж"
  */
  demontagButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      title.textContent = 'Заказать демонтаж';
      if (modal.classList.contains('modal--show')) {
        modal.classList.remove('modal--show');
        modalWrapper.classList.remove('modal__wrapper--show');
      } else {
        modal.classList.add('modal--show');
        modalWrapper.classList.add('modal__wrapper--show');
        modalForm.action = 'action/demontagAction.php';
        userPhone.focus();
      }
    });
  });

  /*
    При нажатии на кнопку "Обратный звонок"
    открывается модальное окно с заголовком "Обратный звонок"
  */
  phoneLink.addEventListener('click', (e) => {
    e.preventDefault();
    title.textContent = 'Обратный звонок';
    if (modal.classList.contains('modal--show')) {
      modal.classList.remove('modal--show');
      modalWrapper.classList.remove('modal__wrapper--show');
    } else {
      modal.classList.add('modal--show');
      modalWrapper.classList.add('modal__wrapper--show');
      modalForm.action = 'action/callBackAction.php';
      userPhone.focus();
    }
  });

  /*
    При нажатии на кнопку "Крестик"
    модальное окно закрывается
  */
  close.addEventListener('click', (e) => {
    e.preventDefault();
    if (modal.classList.contains('modal--show')) {
      modal.classList.remove('modal--show');
      modalWrapper.classList.remove('modal__wrapper--show');
    }
  });

  /*
    При клике на темной области вокруг модального окна
    модальное окно закрывается
  */
  modal.addEventListener('click', (e) => {
    if (e.target.className === 'modal modal--show') {
      if (modal.classList.contains('modal--show')) {
        modal.classList.remove('modal--show');
        modalWrapper.classList.remove('modal__wrapper--show');
      }
    }
  });

  /*
    При нажатии клавиши "ESC"
    модальное окно закрывается
  */
  window.addEventListener('keydown', (e) => {
    if (e.keyCode === 27) {
      if (modal.classList.contains('modal--show')) {
        modal.classList.remove('modal--show');
        modalWrapper.classList.remove('modal__wrapper--show');
      }
    }
  });
};
