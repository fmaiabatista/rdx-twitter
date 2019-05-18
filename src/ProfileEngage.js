import React, { Component } from "react";
import "./styles/ProfileEngage.scss";
import EngageWhoToFollow from "./EngageWhoToFollow";

class ProfileEngage extends Component {
  /* eslint-disable class-methods-use-this */
  render() {
    return (
      <div className="profile-engage">
        <EngageWhoToFollow />
        {/* There could be other "Engagement" components here,
            like "Topics of the Moment" from the original app */}
      </div>
    );
  }
}

export default ProfileEngage;
