import React, { Component } from "react";
import "./styles/Tweet.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Tweet extends Component {
  /* eslint-disable class-methods-use-this */
  renderActionsList() {
    const {
      tweet: {
        comments,
        retweets,
        likes,
        commented,
        retweeted,
        liked,
        savedToPocket
      }
    } = this.props;

    const actions = [
      {
        label: "Comment",
        icon: <FontAwesomeIcon icon="comment" />,
        value: comments,
        used: commented
      },
      {
        label: "Retweet",
        icon: <FontAwesomeIcon icon="retweet" />,
        value: retweets,
        used: retweeted
      },
      {
        label: "Like",
        icon: <FontAwesomeIcon icon="heart" />,
        value: likes,
        used: liked
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
        used: savedToPocket
      }
    ];

    return (
      <ul className="actions-list">
        {actions.map((action, index) => (
          <li
            className={`action action-${action.label.replace(/\s/g, "-")}${
              action.used ? " used" : ""
            }`}
            key={index}
          >
            <span className="action-icon">{action.icon}</span>
            <span className="action-value">{action.value}</span>
          </li>
        ))}
      </ul>
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
        retweeted
      }
    } = this.props;

    return (
      <div className="tweet-card">
        {retweeted && (
          <div className="tweet-retweeted">
            <span className="tweet-retweeted-icon">
              <FontAwesomeIcon icon="retweet" />
            </span>
            <span className="tweet-retweeted-label">You retweeted</span>
          </div>
        )}

        <div className="main">
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
      </div>
    );
  }
}

export default Tweet;
