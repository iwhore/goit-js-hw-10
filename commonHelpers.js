import{i as d}from"./assets/icon-error-c0cab10d.js";import{i as u,f as F}from"./assets/vendor-77e16229.js";const D=document.querySelector("[data-days]"),g=document.querySelector("[data-hours]"),y=document.querySelector("[data-minutes]"),p=document.querySelector("[data-seconds]"),s=document.querySelector("#datetime-picker"),o=document.querySelector("[data-start]"),w=new Date().getTime(),C=new Date(s.value).getTime();C<=w&&(o.disabled=!0);o.addEventListener("click",()=>{const e=new Date(s.value).getTime(),t=new Date().getTime();e>t?(o.disabled=!0,s.disabled=!0,k(e)):u.error({iconUrl:d,message:"Please choose a date in the future",position:"topRight",backgroundColor:"#ef4040",titleColor:"#FFFFFF",messageColor:"#FFFFFF",theme:"dark"})});const T={defaultDate:new Date,enableTime:!0,time_24hr:!0,minuteIncrement:1,onClose(e){const t=new Date(e[0]).getTime(),n=new Date().getTime();t<=n?(o.disabled=!0,u.error({iconUrl:d,message:"Please choose a date in the future",position:"topRight",backgroundColor:"#ef4040",titleColor:"#FFFFFF",messageColor:"#FFFFFF",theme:"dark"})):o.disabled=!1}};let a,c;F("#datetime-picker",T);function b({days:e,hours:t,minutes:n,seconds:i}){D.textContent=`${e}`,g.textContent=`${t}`,y.textContent=`${n}`,p.textContent=`${i}`}function k(e){clearInterval(c),a=e-Date.now(),c=setInterval(S,1e3)}function S(){a>1e3?(a-=1e3,b(v(a))):(clearInterval(c),s.disabled=!1)}function r(e){return String(e).padStart(2,"0")}function v(e){const l=r(Math.floor(e/864e5)),m=r(Math.floor(e%864e5/36e5)),f=r(Math.floor(e%864e5%36e5/6e4)),h=r(Math.floor(e%864e5%36e5%6e4/1e3));return{days:l,hours:m,minutes:f,seconds:h}}
//# sourceMappingURL=commonHelpers.js.map
