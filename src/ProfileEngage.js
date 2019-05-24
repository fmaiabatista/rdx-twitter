import React from "react";
import "./styles/ProfileEngage.scss";
import ProfileWhoToFollow from "./ProfileWhoToFollow";

export default function ProfileEngage(props) {
  const { user } = props;

  return (
    <div className="profile-engage">
      <ProfileWhoToFollow user={user} />
      {/* There could be other "Engagement" components here,
          like "Topics of the Moment" from the original app */}
    </div>
  );
}
