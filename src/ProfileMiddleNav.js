import React, { Component } from "react";
import "./styles/ProfileMiddleNav.scss";
import Button from "./Button";

class ProfileMiddleNav extends Component {
  /* eslint-disable class-methods-use-this */
  render() {
    const options = [
      {
        label: "Tweets",
        value: 15,
        href: "#",
        active: true
      },
      {
        label: "Following",
        value: 4,
        href: "#",
        active: false
      },
      {
        label: "Followers",
        value: 7,
        href: "#",
        active: false
      },
      {
        label: "Likes",
        value: 64,
        href: "#",
        active: false
      },
      {
        label: "Lists",
        value: 1,
        href: "#",
        active: false
      },
      {
        label: "Moments",
        value: 0,
        href: "#",
        active: false
      }
    ];

    return (
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
    );
  }
}

export default ProfileMiddleNav;
