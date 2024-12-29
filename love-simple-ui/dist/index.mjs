// src/components/Button/Button.tsx
import React from "react";

// src/components/Button/Button.module.css
var _default = {};

// src/components/Button/Button.tsx
var Button = ({
  variant = "primary",
  onClick,
  children
}) => {
  return /* @__PURE__ */ React.createElement("button", { className: _default[variant], onClick }, children);
};
export {
  Button
};
