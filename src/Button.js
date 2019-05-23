import React from "react";
import "./styles/Button.scss";

function Button(props) {
  const { classes, label, onClick, type } = props;

  const extraClasses = classes.map(each => `btn-${each}`).join(" ");

  if (type === "button") {
    return (
      <button className={`btn btn-${label} ${extraClasses}`} onClick={onClick}>
        {label}
      </button>
    );
  }

  if (type === "submit") {
    return (
      <input
        type="submit"
        className={`btn btn-${label} ${extraClasses}`}
        onClick={onClick}
        value={label}
      />
    );
  }
}

export default Button;
