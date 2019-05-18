import React from "react";
import "./styles/ProfileAvatar.scss";

function ProfileAvatar(props) {
  const { classes, src, width } = props;

  const extraClasses = classes.join(" ");

  return (
    <div className={`profile-avatar ${extraClasses}`}>
      <img src={src} alt="profile avatar" width={width} height={width} />
    </div>
  );
}

export default ProfileAvatar;
