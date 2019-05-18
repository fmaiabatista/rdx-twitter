import React, { Component } from "react";
import "./styles/Footer.scss";

class Footer extends Component {
  /* eslint-disable class-methods-use-this */
  render() {
    const footerItems = [
      {
        label: "About",
        href: "#"
      },
      {
        label: "Help Center",
        href: "#"
      },
      {
        label: "Terms",
        href: "#"
      },
      {
        label: "Privacy Policy",
        href: "#"
      },
      {
        label: "Cookies",
        href: "#"
      },
      {
        label: "Ads information",
        href: "#"
      }
    ];

    return (
      <footer>
        <ul>
          <li>© 2019 Twiter Clone</li>
          {footerItems.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </footer>
    );
  }
}

export default Footer;
