import React from "react";
import "./styles/Tweet.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Tweet(props) {
  function renderActionsList() {
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
    } = props;

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

  function renderIFrame(src) {
    return (
      <iframe
        title={src}
        width="500"
        height="470"
        src={src}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  const {
    user: { username },
    tweet: {
      author,
      content,
      date,
      retweetedBy,
      media: { type, src }
    }
  } = props;

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
          {/* Top section with meta info */}
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
          {content && <div className="tweet-content">{content}</div>}

          {/* Translation section */}
          {content && (
            <div className="translate">
              <span className="translate-icon">
                <FontAwesomeIcon icon="globe-americas" />
              </span>
              <span className="translate-label">Translate tweet</span>
            </div>
          )}

          {/* Media section */}
          {type && src && (
            <div className="media">
              {type === "image" && (
                <div className="image-container">
                  <img src={src} alt="tweet attached" />
                </div>
              )}
              {type === "video" && (
                <div className="video-container">{renderIFrame(src)}</div>
              )}
            </div>
          )}

          {/* Bottom section */}
          {renderActionsList()}
        </div>
      </div>
    </div>
  );
}
