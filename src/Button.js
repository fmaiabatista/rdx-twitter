import React from "react";
import "./styles/Button.scss";

function Button(props) {
  const { classes, label } = props;

  const extraClasses = classes.map(each => `btn-${each}`).join(" ");

  return (
    <button className={`btn btn-${label} ${extraClasses}`}>{label}</button>
  );
}

export default Button;
