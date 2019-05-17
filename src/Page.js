import React, { Component } from "react";
import "./Page.scss";
import ProfileAvatar from "./ProfileAvatar";
import Button from "./Button";

class Page extends Component {
  constructor(props) {
    super(props);

    this.middleNavOptions = (
      <ul>
        <li>Tweets</li>
        <li>Following</li>
        <li>Followers</li>
        <li>Likes</li>
        <li>Moments</li>
      </ul>
    );
  }

  render() {
    const { type } = this.props;
    return (
      <div className={`page page-${type}`}>
        <div className="profile-background">
          <img src="https://placehold.it/2000x500" alt="profile background" />
        </div>

        <div className="page-content">
          <div className="middle-nav">
            <div className="foo">
              <div className="profile-avatar-wrapper">
                <ProfileAvatar
                  classes={["border"]}
                  src="https://imgplaceholder.com/32x32/1937cd/fff?text=User" // will become variable
                  width="200"
                />
              </div>

              <div className="middle-nav-container">
                {this.middleNavOptions}

                <Button
                  classes={["round", "edit-profile"]}
                  label="Edit Profile"
                />
              </div>
            </div>
          </div>
          feed e colunas
        </div>
      </div>
    );
  }
}

export default Page;
