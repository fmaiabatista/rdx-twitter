import React from "react";
import "./styles/Welcome.scss";
import { Link } from "react-router-dom";

export default function Welcome(props) {
  const status =
    props.location && props.location.state && props.location.state.status;

  return (
    <div className="welcome-container">
      {/* Error message in case the user has been redirected from a Not Found */}
      {status === "404" && (
        <span className="error">
          You got a 404!
          <br />
          Let's try again, shall we?
        </span>
      )}

      {/* Normal flow of the page */}
      {/* Values were hardcoded but could be turned into a mapped list */}
      <div className="intro">Welcome, choose a user to start:</div>
      <div className="users">
        <ul>
          <li>
            <Link to="/johnsmith">John Smith</Link>
          </li>
          <li>
            <Link to="/janedoe">Jane Doe</Link>
          </li>
          <li>
            <Link to="/hackyoliver">Hacky Oliver</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
