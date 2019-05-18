import React, { Component } from "react";
import "./styles/Tweet.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Tweet extends Component {
  /* eslint-disable class-methods-use-this */
  renderActionsList() {
    const actions = [
      {
        label: "Comment",
        icon: <FontAwesomeIcon icon="comment" />,
        value: 3,
        used: false
      },
      {
        label: "Retweet",
        icon: <FontAwesomeIcon icon="retweet" />,
        value: 14,
        used: true
      },
      {
        label: "Like",
        icon: <FontAwesomeIcon icon="heart" />,
        value: 22,
        used: true
      },
      {
        label: "View Activity",
        icon: <FontAwesomeIcon icon="chart-bar" />,
        value: null,
        used: false
      },
      {
        label: "Direct Message",
        icon: <FontAwesomeIcon icon="envelope" />,
        value: null,
        used: false
      },
      {
        label: "Save to Pocket",
        icon: <FontAwesomeIcon icon={["fab", "get-pocket"]} />,
        value: null,
        used: false
      }
    ];

    return (
      <div className="actions-list">
        <ul>
          {actions.map((action, index) => (
            <li
              className={`action action-${action.label.replace(/\s/g, "-")}`}
              key={index}
            >
              <span className="action-icon">{action.icon}</span>
              <span className="action-value">{action.value}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    const {
      tweet: {
        authorAvatar,
        authorName,
        authorUsername,
        authorLink,
        content,
        date,
        comments,
        retweets,
        likes
      }
    } = this.props;

    return (
      <div className="tweet-card">
        <a className="author-avatar-link" href={authorLink}>
          <img src={authorAvatar} alt="author" width="48px" height="48px" />
        </a>

        <div className="right-content">
          <div className="tweet-meta">
            <div className="authorship-info">
              <span className="author-name">
                <a href={authorLink}>{authorName}</a>
              </span>
              <span className="author-username">
                <a href={authorLink}>{`@${authorUsername}`}</a>
              </span>
              <span className="divider-middot">·</span>
              <span className="tweet-date">{date}</span>
            </div>
            <span className="more-options">
              <FontAwesomeIcon icon="chevron-down" />
            </span>
          </div>

          <div className="tweet-content">{content}</div>

          <div className="translate">
            <span className="translate-icon">
              <FontAwesomeIcon icon="globe-americas" />
            </span>
            <span className="translate-label">Translate tweet</span>
          </div>

          {this.renderActionsList()}
        </div>
      </div>
    );
  }
}

export default Tweet;
