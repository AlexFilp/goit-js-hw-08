function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,p=function(){return l.Date.now()};function m(e,t,n){var i,o,r,a,f,u,c=0,l=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,r=o;return i=o=void 0,c=t,a=e.apply(r,n)}function j(e){return c=e,f=setTimeout(h,t),l?b(e):a}function O(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=r}function h(){var e=p();if(O(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-u);return s?v(n,r-(e-c)):n}(e))}function w(e){return f=void 0,m&&i?b(e):(i=o=void 0,a)}function T(){var e=p(),n=O(e);if(i=arguments,o=this,u=e,n){if(void 0===f)return j(u);if(s)return f=setTimeout(h,t),b(u)}return void 0===f&&(f=setTimeout(h,t)),a}return t=y(t)||0,g(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(y(n.maxWait)||0,t):r,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=u=o=f=void 0},T.flush=function(){return void 0===f?a:w(p())},T}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),m(e,t,{leading:i,maxWait:t,trailing:o})};const b=document.querySelector(".feedback-form");let j={};b.addEventListener("input",e(t)((function(e){j[e.target.name]=e.target.value,localStorage.setItem("saved-form-data",JSON.stringify(j))}),500)),b.addEventListener("submit",(function(e){e.preventDefault(),b.reset(),console.log(j),localStorage.removeItem("saved-form-data"),j={}})),function(){let e=localStorage.getItem("saved-form-data");if(!e)return;e=JSON.parse(e),Object.keys(e).map((t=>{b.elements[t].value=e[t],j[t]=b.elements[t].value}))}();
//# sourceMappingURL=03-feedback.6d800202.js.map
