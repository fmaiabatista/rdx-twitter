import React, { Component } from "react";
import "./styles/ProfileContent.scss";
import ProfileAbout from "./ProfileAbout";
import ProfileFeed from "./ProfileFeed";
import ProfileEngage from "./ProfileEngage";
import Footer from "./Footer";

class ProfileContent extends Component {
  /* eslint-disable class-methods-use-this */
  render() {
    const { user } = this.props;

    return (
      <div className="profile-content">
        <div className="profile-content-container">
          {/* Left column */}
          <div className="profile-content-col profile-content-left-col">
            <ProfileAbout user={user} />
          </div>

          {/* Middle column */}
          <div className="profile-content-col profile-content-middle-col">
            <ProfileFeed user={user} />
          </div>

          {/* Right column */}
          <div className="profile-content-col profile-content-right-col">
            <ProfileEngage user={user} />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileContent;
