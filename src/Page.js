import React from "react";
import "./styles/Page.scss";
import PageProfile from "./PageProfile";

export default function Page(props) {
  const { type, match } = props;

  return (
    <div className={`page page-${type}`}>
      {type === "profile" && <PageProfile username={match.params.username} />}

      {/* Show error in case there's no page type */}
      {!type && (
        <div className="page-type-not-found">
          <p>Ops! That's an error.</p>
          <p>Please check the page you're trying to access and try again.</p>
        </div>
      )}
    </div>
  );
}
