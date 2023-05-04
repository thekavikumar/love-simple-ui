"use client";
import t from"react";import{styled as e,setup as n}from"goober";n(t.createElement);var s=e("button")`
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
`,i=({title:o,className:r=""})=>t.createElement(s,{className:r,onClick:()=>alert(new Date)},o);export{i as Button};
//# sourceMappingURL=index.mjs.map