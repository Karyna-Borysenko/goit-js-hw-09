function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i);var r=i("eWCmQ");const l=document.querySelector("input[name = delay]"),u=document.querySelector("input[name = step]"),a=document.querySelector("input[name = amount]"),d=document.querySelector(".form button");function s(e,t){return new Promise(((n,o)=>{const i=Math.random()>.3;setTimeout((()=>{i&&n({position:e,delay:t}),o({position:e,delay:t})}),t)}))}d.addEventListener("click",(function(t){if(t.preventDefault(),""===l.value||""===u.value||""===a.value)return e(r).Notify.warning("All fields must be filled!");d.disabled=!0;let n=Number(l.value),o=Number(u.value),i=Number(a.value);for(let t=0;t<i;t+=1){s(t+1,n+o*t).then((({position:t,delay:n})=>{e(r).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(r).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)}))}}));
//# sourceMappingURL=03-promises.3e607d9f.js.map
