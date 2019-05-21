import React, { Component } from "react";
import "./styles/PageProfile.scss";
import { Redirect } from "react-router-dom";
import Header from "./Header";
import ProfileCoverImage from "./ProfileCoverImage";
import ProfileMiddleNav from "./ProfileMiddleNav";
import ProfileContent from "./ProfileContent";
import Loading from "./Loading";
import UserAPI from "./api/userAPI";

class PageProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      user: undefined,
      error: undefined
    };
  }

  componentDidMount() {
    this.getUser(this.props.username);
  }

  // Handle change of Page URL
  componentDidUpdate(prevProps) {
    if (prevProps.username !== this.props.username) {
      this.getUser(this.props.username);
    }
  }

  render() {
    const { loading, user, error } = this.state;

    return (
      <>
        {/* Loading */}
        {(loading || (!user && !error)) && <Loading />}

        {/* Success */}
        {user && !error && (
          <>
            <Header user={user} />
            <ProfileCoverImage user={user} />
            <ProfileMiddleNav user={user} />
            <ProfileContent user={user} />
          </>
        )}

        {/* Error */}
        {!user && error && (
          <Redirect to={{ pathname: "/", state: { status: "404" } }} />
        )}
      </>
    );
  }

  getUser(username) {
    this.setState({ loading: true });
    UserAPI.get(username).then(
      res => {
        this.setState({ user: res, loading: false });
      },
      err => {
        this.setState({ error: err, loading: false });
      }
    );
  }
}

export default PageProfile;
