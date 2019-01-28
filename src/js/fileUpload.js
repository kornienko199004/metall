export default () => {
  const fileUploadInput = document.querySelector('.file-upload__input');
  const fileUploadDescription = document.querySelector('.file-upload__description');

  fileUploadDescription.textContent = 'Файл не выбран';

  fileUploadInput.addEventListener('change', (e) => {
    console.log(e);
    const path = e.target.value.split('\\');
    console.log(e.target.value);
    const fileName = path[path.length - 1];
    fileUploadDescription.textContent = fileName;
    fileUploadDescription.style.color = '#000000';
  });
};
