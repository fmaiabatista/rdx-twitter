import React from "react";
import "./Button.scss";

function Button(props) {
  const types = props.types.map(type => `btn-${type}`).join(" ");

  return (
    <button className={`btn ${types} btn-${props.label}`}>{props.label}</button>
  );
}

export default Button;
