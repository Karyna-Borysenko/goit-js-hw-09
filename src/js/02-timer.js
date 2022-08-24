import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const myInput = document.getElementById('datetime-picker');
const buttonStart = document.querySelector('[data-start]');
const timerTime = {
  timerDays: document.querySelector('[data-days]'),
  timerHours: document.querySelector('[data-hours]'),
  timerMinutes: document.querySelector('[data-minutes]'),
  timerSeconds: document.querySelector('[data-seconds]'),
};

let selectedDate = null;

buttonStart.addEventListener('click', () => {
  timer.start();
});

// flatpickr позволяет пользователю кроссбраузерно выбрать конечную дату и время в myInput

const fp = flatpickr(myInput, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const date = new Date();
    selectedDate = selectedDates[0];
    if (date > selectedDate) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      buttonStart.removeAttribute('disabled');
    }
  },
});

// Вычисляет раз в секунду сколько времени осталось до указанной даты и обновляет интерфейс таймера

const timer = {
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    buttonStart.disabled = true;
    myInput.disabled = true;
    this.intervalId = setInterval(() => {
      const currentime = Date.now();
      const deltaTime = selectedDate - currentime;
      const time = convertMs(deltaTime);

      if (deltaTime < 1000) {
        Notiflix.Notify.success("Yeah! It's time!");
        clearInterval(this.intervalId);
        buttonStart.disabled = false;
        myInput.disabled = false;
      }

      updateTimer(time);
    }, 1000);
  },
};

// Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

// Подсчитывает значения в миллисекундах

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

// Обновляет интерфейс таймера

function updateTimer({ days, hours, minutes, seconds }) {
  timerTime.timerDays.textContent = `${days}`;
  timerTime.timerHours.textContent = `${hours}`;
  timerTime.timerMinutes.textContent = `${minutes}`;
  timerTime.timerSeconds.textContent = `${seconds}`;
}
