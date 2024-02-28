import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


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
        message: `✅ Fulfilled promise in ${delay}ms`,
        backgroundColor: 'light-green',
        position: 'topRight',
        messageColor: 'white'
    });
  }).catch(delay => {
    iziToast.error({
        message: `❌ Rejected promise in ${delay}ms`,
        backgroundColor: 'red',
        position: 'topRight',
        messageColor: 'white'
    });
  });
});