import React from "react";
import "./styles/ProfileCoverImage.scss";

export default function ProfileCoverImage(props) {
  const { user } = props;

  return <img className="profile-cover" src={user.cover} alt="profile cover" />;
}
