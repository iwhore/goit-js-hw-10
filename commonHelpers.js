import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as f,f as h}from"./assets/vendor-77e16229.js";const y=document.querySelector("[data-days]"),p=document.querySelector("[data-hours]"),S=document.querySelector("[data-minutes]"),g=document.querySelector("[data-seconds]"),r=document.querySelector("#datetime-picker"),i=document.querySelector("[data-start]");i.addEventListener("click",()=>{const e=new Date(r.value).getTime(),t=new Date().getTime();e>t?(i.disabled=!0,r.disabled=!0,C(e)):f.error({fontSize:"large",close:!1,position:"topRight",messageColor:"white",timeout:2e3,backgroundColor:"red",message:"Please choose a date in the future"})});const D={defaultDate:null,enableTime:!0,time_24hr:!0,minuteIncrement:1,onClose(e){}};let n,s;h("#datetime-picker",D);function w({days:e,hours:t,minutes:a,seconds:c}){y.textContent=`${e}`,p.textContent=`${t}`,S.textContent=`${a}`,g.textContent=`${c}`}function C(e){clearInterval(s),n=e-Date.now(),s=setInterval(v,1e3)}function v(){n>1e3?(n-=1e3,w(k(n))):(clearInterval(s),r.disabled=!1)}function o(e){return String(e).padStart(2,"0")}function k(e){const u=o(Math.floor(e/864e5)),d=o(Math.floor(e%864e5/36e5)),l=o(Math.floor(e%864e5%36e5/6e4)),m=o(Math.floor(e%864e5%36e5%6e4/1e3));return{days:u,hours:d,minutes:l,seconds:m}}
//# sourceMappingURL=commonHelpers.js.map
