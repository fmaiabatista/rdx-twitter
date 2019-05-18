import React, { Component } from "react";
import "./styles/ProfileFeed.scss";
import Tweet from "./Tweet";

class ProfileFeed extends Component {
  /* eslint-disable class-methods-use-this */
  renderTimeline() {
    const tweets = [
      {
        id: 1,
        authorAvatar: "https://imgplaceholder.com/48x48/cccccc/757575/fa-user",
        authorName: "foo",
        authorUsername: "foo",
        authorLink: "#",
        content: "bar",
        date: "Apr 19th",
        comments: 3,
        retweets: 14,
        likes: 22
      },
      {
        id: 2,
        authorAvatar: "https://imgplaceholder.com/48x48/cccccc/757575/fa-user",
        authorName: "hey",
        authorUsername: "hey",
        authorLink: "#",
        content: "hai",
        date: "Dec 22nd",
        comments: 18,
        retweets: 62,
        likes: 58
      }
    ];

    return (
      <ul className="tweet-list">
        {tweets.map(tweet => (
          <li className={`tweet-list-item tweet-${tweet.id}`} key={tweet.id}>
            <Tweet tweet={tweet} />
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
