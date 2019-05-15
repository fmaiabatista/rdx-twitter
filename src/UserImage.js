import React from "react";
import "./UserImage.scss";

function UserImage(props) {
  const { classes, src, alt, width } = props;

  const extraClasses = classes.join(" ");

  return (
    <div className={`user-image ${extraClasses}`}>
      <img src={src} alt={alt} width={width} height={width} />
    </div>
  );
}

export default UserImage;
