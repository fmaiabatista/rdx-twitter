import React, { Component } from "react";
import "./styles/EngageWhoToFollow.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";

class EngageWhoToFollow extends Component {
  /* eslint-disable class-methods-use-this */
  renderTopNav() {
    const whoToFollowNavItems = [
      {
        label: "Who to follow",
        href: "#",
        active: true
      },
      {
        label: "Refresh",
        href: "#",
        active: false
      },
      {
        label: "See all",
        href: "#",
        active: false
      }
    ];

    return (
      <ul className="top-nav-list">
        {whoToFollowNavItems.map((item, index) => (
          <>
            <li
              className={`item-${item.label.replace(/\s/g, "-")}${
                item.active ? " active" : ""
              }`}
              key={index}
            >
              <a href={item.href}>{item.label}</a>
            </li>
            {index < whoToFollowNavItems.length - 1 && <small>·</small>}
          </>
        ))}
      </ul>
    );
  }

  renderUsers() {
    const whoToFollowUsers = [
      {
        image: "https://imgplaceholder.com/48x48/2196f3/ffffff/fa-child",
        name: "John Smith",
        username: "jsmithy",
        href: "#"
      },
      {
        image: "https://imgplaceholder.com/48x48/ff9800/ffffff/fa-female",
        name: "Jane Doe",
        username: "janedoe",
        href: "#"
      },
      {
        image:
          "https://imgplaceholder.com/48x48/4caf50/ffffff/fa-wheelchair-alt",
        name: "Hacky Oliver",
        username: "hackyollie",
        href: "#"
      }
    ];

    return (
      <ul className="users-list">
        {whoToFollowUsers.map(user => (
          <li key={user.name}>
            <a href={user.href}>
              <img
                src={user.image}
                alt={`user ${user.name}`}
                width="48px"
                height="48px"
              />
            </a>

            <div className="flex-right">
              <div className="top">
                <div className="left">
                  <span className="user-name">
                    <a href={user.href}>{user.name}</a>
                  </span>
                  <span className="user-username">
                    <a href={user.href}>{`@${user.username}`}</a>
                  </span>
                </div>
                <div className="right">
                  <span className="dismiss">
                    <a href={user.href}>
                      <FontAwesomeIcon icon="times" />
                    </a>
                  </span>
                </div>
              </div>

              <div className="bottom">
                <Button classes={["round", "follow"]} label="Follow" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="engage who-to-follow">
        {this.renderTopNav()}

        {this.renderUsers()}

        <div className="import-external">
          <FontAwesomeIcon icon="mail-bulk" />
          <p className="main">Find people you know</p>
          <p className="sub">Import contacts from your mail</p>
          <p className="other">Connect other contact lists</p>
        </div>
      </div>
    );
  }
}

export default EngageWhoToFollow;
