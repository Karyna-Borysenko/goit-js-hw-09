import Notiflix from 'notiflix';

const formDelay = document.querySelector('input[name = delay]');
const formStep = document.querySelector('input[name = step]');
const formAmount = document.querySelector('input[name = amount]');
const formButton = document.querySelector('.form button');

formButton.addEventListener('click', onformButtonClick);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      }
      reject({ position, delay });
    }, delay);
  });
}

function onformButtonClick(event) {
  event.preventDefault();

  if (
    formDelay.value === '' ||
    formStep.value === '' ||
    formAmount.value === ''
  ) {
    return Notiflix.Notify.warning('All fields must be filled!');
  }

  formButton.disabled = true;

  let delay = Number(formDelay.value);
  let step = Number(formStep.value);
  let amount = Number(formAmount.value);

  for (let i = 0; i < amount; i += 1) {
    let position = i + 1;
    let newDelay = delay + step * i;

    createPromise(position, newDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}
