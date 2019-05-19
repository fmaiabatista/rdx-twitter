import React, { Component } from "react";
import "./styles/PageProfile.scss";
import { Redirect } from "react-router-dom";
import ProfileCoverImage from "./ProfileCoverImage";
import ProfileMiddleNav from "./ProfileMiddleNav";
import ProfileContent from "./ProfileContent";
import UserAPI from "./api/userAPI";

class PageProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: UserAPI.get(this.props.username)
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.username !== this.props.username) {
      this.setState({
        user: UserAPI.get(this.props.username)
      });
    }
  }

  render() {
    const { user } = this.state;

    return (
      <>
        {user && (
          <>
            <ProfileCoverImage user={user} />
            <ProfileMiddleNav user={user} />
            <ProfileContent user={user} />
          </>
        )}

        {!user && <Redirect to={{ pathname: "/", state: { status: "404" } }} />}
      </>
    );
  }
}

export default PageProfile;
