import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

console.dir(form);

const formData = {};

const DATA_STORAGE = 'feedback-form-state';

saveCurrentData();

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  evt.currentTarget.reset();

  localStorage.removeItem(DATA_STORAGE);
  const user = {
    email: formData.email,
    message: formData.message,
  };
  console.log(user);
}

form.addEventListener('input', throttle(onTypeInput, 500));

function onTypeInput(event) {
  //   console.log(event.target.name);
  //   console.log(event.target.value);

  formData[event.target.name] = event.target.value;

  localStorage.setItem(DATA_STORAGE, JSON.stringify(formData));
}

function saveCurrentData() {
  const savedData = localStorage.getItem(DATA_STORAGE);

  if (savedData) {
    const parsedSaveData = JSON.parse(savedData);
    console.log(savedData);
    console.log(parsedSaveData);

    form.email.value = parsedSaveData.email;

    form.message.value = parsedSaveData.message;
  }
}
