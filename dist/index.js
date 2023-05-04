"use client";
"use strict";var c=Object.create;var n=Object.defineProperty;var f=Object.getOwnPropertyDescriptor;var u=Object.getOwnPropertyNames;var d=Object.getPrototypeOf,m=Object.prototype.hasOwnProperty;var x=(t,o)=>{for(var r in o)n(t,r,{get:o[r],enumerable:!0})},p=(t,o,r,l)=>{if(o&&typeof o=="object"||typeof o=="function")for(let e of u(o))!m.call(t,e)&&e!==r&&n(t,e,{get:()=>o[e],enumerable:!(l=f(o,e))||l.enumerable});return t};var g=(t,o,r)=>(r=t!=null?c(d(t)):{},p(o||!t||!t.__esModule?n(r,"default",{value:t,enumerable:!0}):r,t)),B=t=>p(n({},"__esModule",{value:!0}),t);var k={};x(k,{Button:()=>a});module.exports=B(k);var i=g(require("react")),s=require("goober");(0,s.setup)(i.default.createElement);var b=(0,s.styled)("button")`
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 4px;
  color: #000;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  padding: 8px 16px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`,a=({title:t,className:o=""})=>i.default.createElement(b,{className:o,onClick:()=>alert(new Date)},t);0&&(module.exports={Button});
//# sourceMappingURL=index.js.map