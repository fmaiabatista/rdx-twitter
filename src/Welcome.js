import React from "react";
import { Link } from "react-router-dom";

export default function Welcome(props) {
  const status =
    props.location && props.location.state && props.location.state.status;

  return (
    <div className="welcome-container">
      {/* Error message in case the user has been redirected from a Not Found */}
      {status === "404" && <span>Page not found! Please start over...</span>}

      {/* Normal flow of the page */}
      <div className="intro">Welcome, choose a user to start:</div>
      <div className="users">
        <Link to="/johnsmith">John Smith</Link>
        <Link to="/janedoe">Jane Doe</Link>
        <Link to="/hackyoliver">Hacky Oliver</Link>
      </div>
    </div>
  );
}
