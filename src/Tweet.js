import React, { Component } from "react";
import "./styles/Tweet.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Tweet extends Component {
  /* eslint-disable class-methods-use-this */
  renderActionsList() {
    const {
      user: { username },
      tweet: {
        retweetedBy,
        comments,
        retweets,
        likes,
        commented,
        liked,
        savedToPocket
      }
    } = this.props;

    const retweeted = retweetedBy.indexOf(username) >= 0;

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
      user: { username },
      tweet: { author, content, date, retweetedBy }
    } = this.props;

    const retweeted = retweetedBy.indexOf(username) >= 0;

    return (
      <div className="tweet-card">
        {/* Retweet label */}
        {retweeted && (
          <div className="tweet-retweeted">
            <span className="tweet-retweeted-icon">
              <FontAwesomeIcon icon="retweet" />
            </span>
            <span className="tweet-retweeted-label">You retweeted</span>
          </div>
        )}

        <div className="main">
          {/* Author image on the left side */}
          <a className="author-avatar-link" href={author.link}>
            <img src={author.avatar} alt="author" width="48px" height="48px" />
          </a>

          <div className="right-content">
            {/* Top section */}
            <div className="tweet-meta">
              <div className="authorship-info">
                <span className="author-name">
                  <a href={author.link}>{author.name}</a>
                </span>
                <span className="author-username">
                  <a href={author.link}>{`@${author.username}`}</a>
                </span>
                <span className="divider-middot">·</span>
                <span className="tweet-date">{date}</span>
              </div>

              <span className="more-options">
                <FontAwesomeIcon icon="chevron-down" />
              </span>
            </div>

            {/* Content */}
            <div className="tweet-content">{content}</div>

            {/* Translation section */}
            <div className="translate">
              <span className="translate-icon">
                <FontAwesomeIcon icon="globe-americas" />
              </span>
              <span className="translate-label">Translate tweet</span>
            </div>

            {/* Bottom section */}
            {this.renderActionsList()}
          </div>
        </div>
      </div>
    );
  }
}

export default Tweet;
