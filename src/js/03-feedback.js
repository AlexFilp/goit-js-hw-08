import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

let formData = {};

const DATA_STORAGE = 'saved-form-data';

form.addEventListener('input', throttle(onTypeInput, 500));
form.addEventListener('submit', onFormSubmit);

getSavedformData();

function onTypeInput(event) {
  formData[event.target.name] = event.target.value;

  // const email = form.elements.email.value;
  // const message = form.elements.message.value;

  // formData = {
  //   email,
  //   message,
  // };

  localStorage.setItem(DATA_STORAGE, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  form.reset();

  console.log(formData);

  localStorage.removeItem(DATA_STORAGE);

  formData = {};
}

function getSavedformData() {
  let savedformData = localStorage.getItem(DATA_STORAGE);

  if (!savedformData) {
    return;
  }

  savedformData = JSON.parse(savedformData);

  Object.keys(savedformData).map(name => {
    form.elements[name].value = savedformData[name];
    formData[name] = form.elements[name].value;
  });
}
