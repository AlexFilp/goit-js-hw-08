import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

let formData = {};

const DATA_STORAGE = 'feedback-form-state';

form.addEventListener('input', throttle(onTypeInput, 500));
form.addEventListener('submit', onFormSubmit);

function onTypeInput(event) {
  formData[event.target.name] = event.target.value;

  localStorage.setItem(DATA_STORAGE, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();

  localStorage.removeItem(DATA_STORAGE);

  if (formData !== {}) {
    console.log(formData);
    formData = {};
  }
}

saveCurrentData();

function saveCurrentData() {
  let savedData = localStorage.getItem(DATA_STORAGE);

  if (savedData) {
    savedData = JSON.parse(savedData);

    Object.entries(savedData).forEach(([name, value]) => {
      formData[name] = value;
      form.elements[name].value = value;
    });

    // form.email.value = parsedSaveData.email;

    // form.message.value = parsedSaveData.message;
  }
}
