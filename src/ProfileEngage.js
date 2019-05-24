import React, { Component } from "react";
import "./styles/ProfileEngage.scss";
import ProfileWhoToFollow from "./ProfileWhoToFollow";

class ProfileEngage extends Component {
  /* eslint-disable class-methods-use-this */
  render() {
    const { user } = this.props;

    return (
      <div className="profile-engage">
        <ProfileWhoToFollow user={user} />
        {/* There could be other "Engagement" components here,
            like "Topics of the Moment" from the original app */}
      </div>
    );
  }
}

export default ProfileEngage;
