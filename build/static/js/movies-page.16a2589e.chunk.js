(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[2],{32:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,c=!1,o=void 0;try{for(var a,i=e[Symbol.iterator]();!(n=(a=i.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(u){c=!0,o=u}finally{try{n||null==i.return||i.return()}finally{if(c)throw o}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,"a",(function(){return c}))},44:function(e,t,r){e.exports={form:"MoviesPage_form__3zqtq",input:"MoviesPage_input__18c9W",button:"MoviesPage_button__19msP"}},52:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.r(t);var a=r(32),i=r(0),u=r(1),s=r(9),l=r(44),f=r.n(l),b=r(3);t.default=function(){var e=Object(u.g)(),t=Object(u.f)(),r=Object(i.useState)(""),n=Object(a.a)(r,2),c=n[0],l=n[1],h=Object(i.useState)(null),p=Object(a.a)(h,2),j=p[0],m=p[1],O=Object(i.useState)(null),y=Object(a.a)(O,2),d=y[0],g=y[1],v=new URLSearchParams(e.search).get("query");Object(i.useEffect)((function(){v&&fetch("https://api.themoviedb.org/3/search/movie?api_key=597522cf6881ad12863cfcef806a7c6d&language=en-US&query=".concat(v,"&page=1&include_adult=false")).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u043f\u043e \u0412\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u0444\u0438\u043b\u044c\u043c\u043e\u0432 \u043d\u0435\u0442"))})).then((function(e){return m(e.results)})).catch((function(e){return g(e)}))}),[v]);var w=function(e){fetch("https://api.themoviedb.org/3/search/movie?api_key=597522cf6881ad12863cfcef806a7c6d&language=en-US&query=".concat(e,"&page=1&include_adult=false")).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u043f\u043e \u0412\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u0444\u0438\u043b\u044c\u043c\u043e\u0432 \u043d\u0435\u0442"))})).then((function(e){return m(e.results)})).catch((function(e){return g(e)})),l("")};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("form",{className:f.a.form,onSubmit:function(r){if(r.preventDefault(),""===c.trim())return alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430");w(c),t.push(o(o({},e),{},{search:"query=".concat(c)}))},children:[Object(b.jsx)("input",{className:f.a.input,type:"text",value:c,onChange:function(e){var t=e.currentTarget.value;l(t.toLowerCase())},placeholder:"Enter a word to search for movies"}),Object(b.jsx)("button",{type:"subnit",className:f.a.button,children:"Search"})]}),Object(b.jsxs)("section",{className:f.a.movies,children:[d&&Object(b.jsx)("h1",{children:d.message}),j&&Object(b.jsx)("ul",{children:j.map((function(t){return Object(b.jsx)("li",{children:Object(b.jsx)(s.b,{className:f.a.link,to:{pathname:"/movies/".concat(t.id),state:{from:e}},children:t.title})},t.id)}))})]})]})}}}]);
//# sourceMappingURL=movies-page.16a2589e.chunk.js.map