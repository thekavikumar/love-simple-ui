"use client";
var d=Object.defineProperty;var p=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var c=(t,n,e)=>n in t?d(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,s=(t,n)=>{for(var e in n||(n={}))f.call(n,e)&&c(t,e,n[e]);if(p)for(var e of p(n))u.call(n,e)&&c(t,e,n[e]);return t};var i=(t,n)=>{var e={};for(var r in t)f.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(t!=null&&p)for(var r of p(t))n.indexOf(r)<0&&u.call(t,r)&&(e[r]=t[r]);return e};import a from"react";import{styled as l,setup as g}from"goober";g(a.createElement);var m=l("button")`
  background-color: "#fff";
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
`,b=l("button")`
  background-color: "#fff";
  border: 1px solid #000;
  border-radius: 4px;
  color: #000;
  cursor: not-allowed;
  font-size: 16px;
  font-weight: 600;
  padding: 8px 16px;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`,h=r=>{var o=r,{text:t,className:n=""}=o,e=i(o,["text","className"]);return a.createElement(m,s({className:n},e),t)},B=o=>{var x=o,{text:t,className:n="",loading:e}=x,r=i(x,["text","className","loading"]);return a.createElement(b,s({className:n},r),e&&a.createElement("img",{src:"https://res.cloudinary.com/dfmbuzf7l/image/upload/v1683257888/loading_fkc6bc.svg",alt:"loading",width:"25px"}),t)},y=l("button")`
  align-items: center;
  appearance: none;
  background-image: radial-gradient(
    100% 100% at 100% 0,
    #5adaff 0,
    #5468ff 100%
  );
  border: 0;
  border-radius: 6px;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, rgba(58, 65, 111, 0.5) 0 -3px 0 inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: "JetBrains Mono", monospace;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow 0.15s, transform 0.15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 18px;

  &:focus {
    box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
  }
  &:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: #3c4fe0 0 3px 7px inset;
    transform: translateY(2px);
  }
`,v=r=>{var o=r,{text:t,className:n=""}=o,e=i(o,["text","className"]);return a.createElement(y,s({className:n},e),t)},w=l("button")`
  cursor: pointer;
  &,
  &:after {
    width: 150px;
    height: 76px;
    line-height: 78px;
    font-size: 20px;
    font-family: "Bebas Neue", sans-serif;
    background: linear-gradient(45deg, transparent 5%, #ff013c 5%);
    border: 0;
    color: #fff;
    letter-spacing: 3px;
    box-shadow: 6px 0px 0px #00e6f6;
    outline: transparent;
    position: relative;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  &:after {
    --slice-0: inset(50% 50% 50% 50%);
    --slice-1: inset(80% -6px 0 0);
    --slice-2: inset(50% -6px 30% 0);
    --slice-3: inset(10% -6px 85% 0);
    --slice-4: inset(40% -6px 43% 0);
    --slice-5: inset(80% -6px 5% 0);

    content: "ALTERNATE TEXT";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      transparent 3%,
      #00e6f6 3%,
      #00e6f6 5%,
      #ff013c 5%
    );
    text-shadow: -3px -3px 0px #f8f005, 3px 3px 0px #00e6f6;
    clip-path: var(--slice-0);
  }

  &:hover:after {
    animation: 1s glitch;
    animation-timing-function: steps(2, end);
  }

  @keyframes glitch {
    0% {
      clip-path: var(--slice-1);
      transform: translate(-20px, -10px);
    }
    10% {
      clip-path: var(--slice-3);
      transform: translate(10px, 10px);
    }
    20% {
      clip-path: var(--slice-1);
      transform: translate(-10px, 10px);
    }
    30% {
      clip-path: var(--slice-3);
      transform: translate(0px, 5px);
    }
    40% {
      clip-path: var(--slice-2);
      transform: translate(-5px, 0px);
    }
    50% {
      clip-path: var(--slice-3);
      transform: translate(5px, 0px);
    }
    60% {
      clip-path: var(--slice-4);
      transform: translate(5px, 10px);
    }
    70% {
      clip-path: var(--slice-2);
      transform: translate(-10px, 10px);
    }
    80% {
      clip-path: var(--slice-5);
      transform: translate(20px, -10px);
    }
    90% {
      clip-path: var(--slice-1);
      transform: translate(-10px, 0px);
    }
    100% {
      clip-path: var(--slice-1);
      transform: translate(0);
    }
  }
`,L=r=>{var o=r,{text:t,className:n=""}=o,e=i(o,["text","className"]);return a.createElement(w,s({className:n},e),t)};export{v as Button3,L as Button4,B as LoadingButton,h as PrimaryButton};
//# sourceMappingURL=index.mjs.map