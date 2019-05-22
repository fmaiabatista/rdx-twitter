import React from "react";
import "./styles/Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";
import ProfileAvatar from "./ProfileAvatar";

function Header(props) {
  const {
    user: { avatar },
    handleTweetFormOpen
  } = props;

  const links = [
    {
      icon: "home",
      label: "Home",
      href: "/",
      active: false
    },
    {
      icon: "bolt",
      label: "Moments",
      href: "#",
      active: false
    },
    {
      icon: "bell",
      label: "Notifications",
      href: "#",
      active: false
    },
    {
      icon: "envelope",
      label: "Messages",
      href: "#",
      active: false
    }
  ];

  const extras = [
    {
      // We can consider turning this into a separate component if it is reused elsewhere
      component: (
        <div className="search-container">
          <input
            type="text"
            className="input input-search"
            placeholder="Search Twitter"
          />
          <span className="search-icon">
            <FontAwesomeIcon icon="search" />
          </span>
        </div>
      )
    },
    {
      component: (
        <ProfileAvatar classes={["no-border"]} src={avatar} width="32" />
      )
    },
    {
      component: <Button classes={["round", "tweet"]} label="Tweet" />,
      onclick: () => handleTweetFormOpen()
    }
  ];

  return (
    <header>
      <div className="header-container">
        {/* Left side of the header */}
        <div className="header-part header-part-left">
          <ul className="header-list-link">
            {links.map((link, index) => (
              <li
                className={`header-item-link${link.active ? " active" : ""}`}
                key={index}
              >
                <a className="header-link" href={link.href}>
                  <span className="header-link-icon">
                    <FontAwesomeIcon icon={link.icon} />
                  </span>
                  <span className="header-link-label">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Middle of the header */}
        <div className="header-part header-part-middle">
          <span className="header-logo">
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </span>
        </div>

        {/* Right side of the header */}
        <div className="header-part header-part-right">
          <ul className="header-list-extra">
            {extras.map((extra, index) => (
              <li className="header-item-extra" key={index}>
                <span className="header-extra" onClick={extra.onclick}>
                  {extra.component}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
