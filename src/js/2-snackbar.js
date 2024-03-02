import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import iconOk from '../img/icon-ok.png';
import iconError from '../img/icon-error.png';

const form = document.querySelector('.form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const delayInput = document.querySelector('[name="delay"]');
  const delay = parseInt(delayInput.value);
  
  const stateInputs = document.querySelectorAll('[name="state"]');
  let state;
  stateInputs.forEach(input => {
    if (input.checked) {
      state = input.value;
    }
  });
  
  const promise = new Promise((resolve, reject) => {
    if (state === "fulfilled") {
      setTimeout(() => {
        resolve(delay);
      }, delay);
    } else {
      setTimeout(() => {
        reject(delay);
      }, delay);
    }
  });
  
  promise.then(delay => {
    iziToast.success({
      title: 'OK',
      iconUrl: iconOk,
      message: `Fulfilled promise in ${delay}ms`,
      position: 'topRight',
      backgroundColor: '#59a10d',
      titleColor: '#FFFFFF',
      messageColor: '#FFFFFF',
      theme: 'dark',
    });
  }).catch(delay => {
    iziToast.error({
      iconUrl: iconError,
      message: `Rejected promise in ${delay}ms`,
      position: 'topRight',
      backgroundColor: '#ef4040',
      titleColor: '#FFFFFF',
      messageColor: '#FFFFFF',
      theme: 'dark',
    });
  });
});