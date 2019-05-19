import React, { Component } from "react";
import "./styles/ProfileMiddleNav.scss";
import ProfileAvatar from "./ProfileAvatar";
import Button from "./Button";

class ProfileMiddleNav extends Component {
  /* eslint-disable class-methods-use-this */
  render() {
    const { user } = this.props;

    const options = [
      {
        label: "Tweets",
        value: user.tweets.length,
        href: "#",
        active: true
      },
      {
        label: "Following",
        value: user.following,
        href: "#",
        active: false
      },
      {
        label: "Followers",
        value: user.followers,
        href: "#",
        active: false
      },
      {
        label: "Likes",
        value: user.likes,
        href: "#",
        active: false
      },
      {
        label: "Lists",
        value: user.lists,
        href: "#",
        active: false
      },
      {
        label: "Moments",
        value: user.moments,
        href: "#",
        active: false
      }
    ];

    return (
      <div className="middle-nav">
        <div className="middle-nav-wrapper">
          <div className="profile-avatar-wrapper">
            <ProfileAvatar classes={["border"]} src={user.avatar} width="200" />
          </div>

          <div className="middle-nav-container">
            <ul>
              {options.map((option, index) => (
                <li
                  className={`middle-nav-item-link${
                    option.active ? " active" : ""
                  }`}
                  key={index}
                >
                  <a href={option.href}>
                    <span className={`label label-${option.label}`}>
                      {option.label}
                    </span>
                    <span className={`value value-${option.value}`}>
                      {option.value}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <Button classes={["round", "edit-profile"]} label="Edit Profile" />
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileMiddleNav;
