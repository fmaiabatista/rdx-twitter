import React, { Component } from "react";
import "./styles/Page.scss";
import PageProfile from "./PageProfile";

class Page extends Component {
  render() {
    const { type } = this.props;

    return (
      <div className={`page page-${type}`}>
        {type === "profile" && <PageProfile />}
      </div>
    );
  }
}

export default Page;
