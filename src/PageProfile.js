import React, { Component } from "react";
import "./styles/PageProfile.scss";
import ProfileAvatar from "./ProfileAvatar";
import ProfileMiddleNav from "./ProfileMiddleNav";
import ProfileContent from "./ProfileContent";

class PageProfile extends Component {
  /* eslint-disable class-methods-use-this */
  render() {
    return (
      <>
        <img
          className="profile-background-img"
          src="https://pbs.twimg.com/profile_banners/257577878/1494510511/1500x500"
          alt="profile background"
        />

        <div className="middle-nav">
          <div className="middle-nav-wrapper">
            <div className="profile-avatar-wrapper">
              <ProfileAvatar
                classes={["border"]}
                src="https://imgplaceholder.com/200x200/cccccc/757575/fa-user" // will become variable
                width="200"
              />
            </div>

            <ProfileMiddleNav />
          </div>
        </div>

        <ProfileContent />
      </>
    );
  }
}

export default PageProfile;
