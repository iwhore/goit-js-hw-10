import{i as a}from"./assets/icon-error-c0cab10d.js";import{i as A}from"./assets/vendor-77e16229.js";const c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAYAAACJfM0wAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEnSURBVHgBrZWNEYIwDIXbDRihG+gIjMAIjOAGsImOoBPoBroBbIAbxFRfpZYm/Jy5e8eRtF8a2hRrBCOigh81a8dycD9ZF9bNWtubNcZAxzrRaD3rBg2R/4jk6fx9DlpislfrkyiJ+zTO7w2S7mNnBec9B1xQaYC26So6qPgLFIHwTZ1ZaRrUhc0wK02EIlinq83u7BooBpz9KYihmNBshmLQ1Z/RxNdKcAnK7wcvFSzBtZVOODgRnclX84XPlU+fpjqnJfxsngDXoOFk1bGz0CZF8IMSz/cBAgNtaxC5DxD0YH9PLG5pVNtBThpUInO3ZOVYzB1zqrnBFcDv0ki+Nhsar9fSLDGaXvQDzug1SiomDma1BPwoWb7M8N171oN14l/T0yj2AtA8RuWnwuCIAAAAAElFTkSuQmCC",l=document.querySelector(".form");l.addEventListener("submit",function(r){r.preventDefault();const s=document.querySelector('[name="delay"]'),o=parseInt(s.value),i=document.querySelectorAll('[name="state"]');let t;i.forEach(e=>{e.checked&&(t=e.value)}),new Promise((e,n)=>{setTimeout(t==="fulfilled"?()=>{e(o)}:()=>{n(o)},o)}).then(e=>{A.success({title:"OK",iconUrl:c,message:`Fulfilled promise in ${e}ms`,position:"topRight",backgroundColor:"#59a10d",titleColor:"#FFFFFF",messageColor:"#FFFFFF",theme:"dark"})}).catch(e=>{A.error({iconUrl:a,message:`Rejected promise in ${e}ms`,position:"topRight",backgroundColor:"#ef4040",titleColor:"#FFFFFF",messageColor:"#FFFFFF",theme:"dark"})})});
//# sourceMappingURL=commonHelpers2.js.map