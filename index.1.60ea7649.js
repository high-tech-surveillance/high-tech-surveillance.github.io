(()=>{var e={348:(e,t,n)=>{var o=n(645),r=n(278)(o);r.push([e.id,'#reel *{max-width:100%}#reel:after,#reel:before{display:"inline-block";width:1em;height:1em}',""]),e.exports=r},278:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,c){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(a[i]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);o&&a[u[0]]||(void 0!==c&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=c),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},645:e=>{"use strict";e.exports=function(e){return e[1]}},492:e=>{e.exports=""}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={id:o,exports:{}};return e[o](c,c.exports,n),c.exports}(()=>{const e=n(492),t=n(348);class o extends HTMLElement{constructor(){super(),console.log(this.children)}static get observedAttributes(){}static get is(){return"showcase-carousel"}connectedCallback(){const n=this.attachShadow({mode:"open"});n.innerHTML=`<style>${t}</style>`,n.innerHTML+=e;const o=document.createElement("div");o.setAttribute("id","reel"),o.append(...this.children),n.append(o)}disconnectedCallback(){console.log("Custom square element removed from page.")}adoptedCallback(){console.log("Custom square element moved to new page.")}attributeChangedCallback(e,t,n){console.log("Custom square element attributes changed."),updateStyle(this)}}customElements.define(o.is,o)})()})();