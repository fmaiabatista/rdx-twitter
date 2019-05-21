import React from "react";
import "./styles/Loading.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Loading(props) {
  return (
    <div className="loading">
      <div className="loading-icon-wrapper">
        <FontAwesomeIcon icon={["fab", "twitter"]} />
      </div>
    </div>
  );
}
