import React from "react";
import "./Button.css";

function Button(props) {
  return <button className="btn">Hi {props.label}</button>;
}

export default Button;
