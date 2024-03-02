import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import iconError from '../img/icon-error.png';

const showDays = document.querySelector('[data-days]');
const showHours = document.querySelector('[data-hours]');
const showMinutes = document.querySelector('[data-minutes]');
const showSeconds = document.querySelector('[data-seconds]');
const inputfield = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');

// Перевірка на майбутню дату під час ініціалізації сторінки
const currentDate = new Date().getTime();
const selectedDate = new Date(inputfield.value).getTime();
if (selectedDate <= currentDate) {
  startBtn.disabled = true;
}

startBtn.addEventListener('click', () => {
  const selectedDate = new Date(inputfield.value).getTime();
  const currentDate = new Date().getTime();
  
  if (selectedDate > currentDate) {
    startBtn.disabled = true;
    inputfield.disabled = true;
    startTimer(selectedDate);
  } else {
    iziToast.error({
      iconUrl: iconError,
      message: 'Please choose a date in the future',
      position: 'topCenter',
      backgroundColor: '#ef4040',
      titleColor: '#FFFFFF',
      messageColor: '#FFFFFF',
      theme: 'dark',
    });
  }
});

const options = {
  defaultDate: new Date(),
  enableTime: true,
  time_24hr: true,
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = new Date(selectedDates[0]).getTime();
    const currentDate = new Date().getTime();

    if (selectedDate <= currentDate) {
      startBtn.disabled = true;
      iziToast.error({
        iconUrl: iconError,
          message: 'Please choose a date in the future',
          position: 'topCenter',
          backgroundColor: '#ef4040',
          titleColor: '#FFFFFF',
          messageColor: '#FFFFFF',
          theme: 'dark',
      });
    } else {
      startBtn.disabled = false;
    }
  }
};

let timeDifference; 
let intervalId;        

flatpickr('#datetime-picker', options);

function updateClockface({ days, hours, minutes, seconds }) {
  showDays.textContent = `${days}`;
  showHours.textContent = `${hours}`;
  showMinutes.textContent = `${minutes}`;
  showSeconds.textContent = `${seconds}`;
}

function startTimer(selectedDate) {
  clearInterval(intervalId);
  timeDifference = selectedDate - Date.now();
  intervalId = setInterval(timer, 1000);
}

function timer() {
  if (timeDifference > 1000) {
    timeDifference -= 1000;
    updateClockface(convertMs(timeDifference))
  } else {
    clearInterval(intervalId);
    inputfield.disabled = false;
  }
}

function addLeadingZero(value){
  return String(value).padStart(2, "0");
}

function convertMs(time) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  
  // Remaining days
  const days = addLeadingZero(Math.floor(time / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((time % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((time % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((time % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}