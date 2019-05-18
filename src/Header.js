import React from "react";
import "./styles/Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";
import ProfileAvatar from "./ProfileAvatar";

function Header() {
  const links = [
    {
      icon: "home",
      label: "Home",
      href: "#",
      active: true
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
      component: "Search"
    },
    {
      component: (
        <ProfileAvatar
          classes={["no-border"]}
          src="https://imgplaceholder.com/32x32/cccccc/757575/fa-user" // will become variable
          width="32"
        />
      )
    },
    {
      component: <Button classes={["round", "tweet"]} label="Tweet" />
    }
  ];

  return (
    <header>
      <div className="header-container">
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

        <div className="header-part header-part-middle">
          <span className="header-logo">
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </span>
        </div>

        <div className="header-part header-part-right">
          <ul className="header-list-extra">
            {extras.map((extra, index) => (
              <li className="header-item-extra" key={index}>
                <span className="header-extra">{extra.component}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
