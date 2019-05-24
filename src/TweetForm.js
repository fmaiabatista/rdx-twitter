import React from "react";
import "./styles/TweetForm.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfileAvatar from "./ProfileAvatar";
import Button from "./Button";

export default function TweetForm(props) {
  const {
    user: { avatar },
    tweetValue,
    handleTweetFormChange,
    handleTweetFormSubmit,
    handleTweetFormClose
  } = props;

  return (
    <div className="tweet-form-container">
      <div className="tweet-form-overlay" onClick={handleTweetFormClose} />
      <form className="tweet-form">
        {/* Form header */}
        <div className="header">
          <label htmlFor="content">Publish a new Tweet</label>
          <span className="dismiss" onClick={handleTweetFormClose}>
            <FontAwesomeIcon icon="times" />
          </span>
        </div>

        {/* Form body */}
        <div className="body">
          {/* Content section */}
          <div className="content-container">
            <ProfileAvatar classes={["no-border"]} src={avatar} width="32" />
            <textarea
              name="content"
              rows="3"
              placeholder="What is happening?"
              value={tweetValue}
              onChange={handleTweetFormChange}
            />
          </div>

          {/* Toolbox section */}
          <div className="toolbox-container">
            {renderToolbox()}

            <Button
              type="submit"
              classes={["round", "tweet"]}
              label="Tweet"
              onClick={handleTweetFormSubmit}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

function renderToolbox() {
  const items = [
    {
      icon: <FontAwesomeIcon icon="image" fixedWidth />,
      href: "#"
    },
    {
      icon: <FontAwesomeIcon icon="film" fixedWidth />,
      href: "#"
    },
    {
      icon: <FontAwesomeIcon icon="chart-bar" fixedWidth />,
      href: "#"
    },
    {
      icon: <FontAwesomeIcon icon="map-marker-alt" fixedWidth />,
      href: "#"
    }
  ];

  return (
    <ul>
      {items.map((item, index) => (
        <a className="toolbox-item-link" href={item.href}>
          <li className="toolbox-item" key={index}>
            {item.icon}
          </li>
        </a>
      ))}
    </ul>
  );
}
