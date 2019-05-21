import React, { Component } from "react";
import "./styles/Page.scss";
import PageProfile from "./PageProfile";

class Page extends Component {
  render() {
    const { type, match } = this.props;

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
}

export default Page;
