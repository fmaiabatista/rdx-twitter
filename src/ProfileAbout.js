import React, { Component } from "react";
import "./styles/ProfileAbout.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ProfileAbout extends Component {
  /* eslint-disable class-methods-use-this */
  renderListUserMore() {
    const { user } = this.props;

    return (
      <ul className="user-more-list">
        <li className="user-more-item user-more-item-location">
          <span className="user-more-item-icon">
            <FontAwesomeIcon icon="map-marker-alt" fixedWidth />
          </span>
          <span className="user-more-item-label">{user.location}</span>
        </li>
        <li className="user-more-item user-more-item-website">
          <span className="user-more-item-icon">
            <FontAwesomeIcon icon="link" fixedWidth />
          </span>
          <span className="user-more-item-label">
            <a href={`https://www.${user.website}`}>{user.website}</a>
          </span>
        </li>
        <li className="user-more-item user-more-item-dateJoined">
          <span className="user-more-item-icon">
            <FontAwesomeIcon icon="calendar-alt" fixedWidth />
          </span>
          <span className="user-more-item-label">{`Member since ${
            user.dateJoined
          }`}</span>
        </li>
        <li className="user-more-item user-more-item-birthdate">
          <span className="user-more-item-icon">
            <FontAwesomeIcon icon="birthday-cake" fixedWidth />
          </span>
          <span className="user-more-item-label">{`Born in ${
            user.birthdate
          }`}</span>
        </li>
      </ul>
    );
  }

  render() {
    const { user } = this.props;

    return (
      <div className="profile-about">
        <div className="user-identity">
          <h1>{user.name}</h1>
          <h2>{`@${user.username}`}</h2>
        </div>
        <div className="user-bio">
          <p>{user.bio}</p>
        </div>
        <div className="user-more">{this.renderListUserMore()}</div>
      </div>
    );
  }
}

export default ProfileAbout;
