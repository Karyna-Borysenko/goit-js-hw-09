const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let timerId = null;

buttonStart.addEventListener('click', onbuttonStartClick);
buttonStop.addEventListener('click', onbuttonStopClick);

function onbuttonStartClick() {
  buttonStart.setAttribute('disabled', 'disabled');
  buttonStop.removeAttribute('disabled');
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onbuttonStopClick() {
  buttonStart.removeAttribute('disabled');
  buttonStop.setAttribute('disabled', 'disabled');
  clearInterval(timerId);
}
