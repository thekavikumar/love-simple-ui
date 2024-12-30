// src/components/Button.tsx
import React from "react";

// src/utils/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...args) {
  return twMerge(clsx(args));
}

// src/components/Button.tsx
var Button = ({
  variant = "primary",
  className,
  onClick,
  children
}) => {
  const baseClasses = "px-4 py-2 rounded font-medium";
  const variantClasses = variant === "primary" ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-500 text-white hover:bg-gray-600";
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      className: cn(baseClasses, variantClasses, className),
      onClick
    },
    children
  );
};
export {
  Button
};
