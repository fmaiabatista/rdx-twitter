import React from "react";
import "./styles/ProfileFeed.scss";
import Tweet from "./Tweet";

export default function ProfileFeed(props) {
  const { user } = props;
  const { tweets } = user;

  function renderTimeline() {
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
      {/* Feed top navigation items */}
      <div className="top-nav">
        <ul>
          {topNavItems.map((item, index) => (
            <li
              className={`top-nav-item item-${item.label.replace(/\s/g, "-")}${
                item.active ? " active" : ""
              }`}
              key={index}
            >
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Tweets timeline */}
      {renderTimeline()}
    </div>
  );
}
