import React, { Fragment } from "react";
import "./styles/ProfileWhoToFollow.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";

export default function ProfileWhoToFollow(props) {
  function renderTopNav() {
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
          <Fragment key={index}>
            <li
              className={`item-${item.label.replace(/\s/g, "-")}${
                item.active ? " active" : ""
              }`}
            >
              <a href={item.href}>{item.label}</a>
            </li>
            {index < whoToFollowNavItems.length - 1 && <small>·</small>}
          </Fragment>
        ))}
      </ul>
    );
  }

  function renderUsers() {
    const {
      user: { suggestedFollows }
    } = props;

    return (
      <ul className="users-list">
        {suggestedFollows.map((user, index) => (
          <li key={index}>
            <Link to={user.link}>
              <img
                src={user.avatar}
                alt={`user ${user.name}`}
                width="48px"
                height="48px"
              />
            </Link>

            <div className="flex-right">
              <div className="top">
                <div className="left">
                  <span className="user-name">
                    <Link to={user.link}>{user.name}</Link>
                  </span>
                  <span className="user-username">
                    <Link to={user.link}>{`@${user.username}`}</Link>
                  </span>
                </div>
                <div className="right">
                  <span className="dismiss">
                    <Link to={user.link}>
                      <FontAwesomeIcon icon="times" />
                    </Link>
                  </span>
                </div>
              </div>

              <div className="bottom">
                <Button
                  type="button"
                  classes={["round", "follow"]}
                  label="Follow"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="engage who-to-follow">
      {renderTopNav()}

      {renderUsers()}

      <div className="import-external">
        <FontAwesomeIcon icon="mail-bulk" />
        <p className="main">Find people you know</p>
        <p className="sub">Import contacts from your mail</p>
        <p className="other">Connect other contact lists</p>
      </div>
    </div>
  );
}
