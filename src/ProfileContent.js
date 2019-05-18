import React, { Component } from "react";
import "./styles/ProfileContent.scss";
import ProfileAbout from "./ProfileAbout";
import ProfileFeed from "./ProfileFeed";
import ProfileEngage from "./ProfileEngage";
import Footer from "./Footer";

class ProfileContent extends Component {
  /* eslint-disable class-methods-use-this */
  render() {
    return (
      <div className="profile-content">
        <div className="profile-content-container">
          <div className="profile-content-col profile-content-left-col">
            <ProfileAbout />
          </div>
          <div className="profile-content-col profile-content-middle-col">
            <ProfileFeed />
          </div>
          <div className="profile-content-col profile-content-right-col">
            <ProfileEngage />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileContent;
