import React, { Component } from "react";
import "./styles/ProfileFeed.scss";
import Tweet from "./Tweet";

class ProfileFeed extends Component {
  /* eslint-disable class-methods-use-this */
  renderTimeline() {
    const { user } = this.props;
    const { tweets } = user;

    return (
      <ul className="tweet-list">
        {tweets.map(tweet => (
          <li className={`tweet-list-item tweet-${tweet.id}`} key={tweet.id}>
            <Tweet user={user} tweet={tweet} />
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const topNavItems = [
      {
        label: "Tweets",
        href: "#",
        active: true
      },
      {
        label: "Tweets and Answers",
        href: "#",
        active: false
      }
    ];

    return (
      <div className="profile-feed">
        <div className="top-nav">
          <ul>
            {topNavItems.map((item, index) => (
              <li
                className={`top-nav-item item-${item.label.replace(
                  /\s/g,
                  "-"
                )}${item.active ? " active" : ""}`}
                key={index}
              >
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {this.renderTimeline()}
      </div>
    );
  }
}

export default ProfileFeed;
