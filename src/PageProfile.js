import React, { Component } from "react";
import "./styles/PageProfile.scss";
import { Redirect } from "react-router-dom";
import TweetForm from "./TweetForm";
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
      error: undefined,
      showTweetForm: false,
      tweetValue: undefined,
      tweetId: 3 // Hardcoded for mocking purposes
    };

    this.handleTweetFormOpen = this.handleTweetFormOpen.bind(this);
    this.handleTweetFormClose = this.handleTweetFormClose.bind(this);
    this.handleTweetFormChange = this.handleTweetFormChange.bind(this);
    this.handleTweetFormSubmit = this.handleTweetFormSubmit.bind(this);
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
    const { loading, user, error, showTweetForm, tweetValue } = this.state;

    return (
      <>
        {/* Loading */}
        {(loading || (!user && !error)) && <Loading />}

        {/* Success */}
        {user && !error && (
          <>
            {true && (
              <TweetForm
                tweetValue={tweetValue}
                handleTweetFormChange={this.handleTweetFormChange}
                handleTweetFormSubmit={this.handleTweetFormSubmit}
              />
            )}
            <Header
              user={user}
              handleTweetFormOpen={this.handleTweetFormOpen}
            />
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

  // Related to UserAPI

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

  postTweet(username, tweet) {
    this.setState({ loading: true });
    UserAPI.post(username, tweet).then(
      res => {
        this.setState(state => ({
          user: res,
          tweetValue: "",
          tweetId: state.tweetId + 1,
          loading: false
        }));
      },
      err => {
        this.setState({ error: err, loading: false });
      }
    );
  }

  // Related to Tweet Form

  handleTweetFormOpen() {
    this.setState({ showTweetForm: true });
  }

  handleTweetFormClose() {
    this.setState({ showTweetForm: false });
  }

  handleTweetFormChange(e) {
    this.setState({ tweetValue: e.target.value });
  }

  handleTweetFormSubmit(e) {
    const {
      user: { username },
      tweetValue,
      tweetId
    } = this.state;

    // Mount mock tweet
    const tweet = {
      id: tweetId,
      author: {
        name: "Jane Doe",
        username: "janedoe",
        link: "/janedoe",
        avatar: "./assets/images/avatar_janedoe.png"
      },
      retweetedBy: ["johnsmith", "hackyoliver"],
      content: tweetValue,
      date: "now",
      comments: 0,
      retweets: 2,
      likes: 0,
      commented: false,
      liked: false,
      savedToPocket: false
    };

    e.preventDefault();
    this.postTweet(username, tweet);
  }
}

export default PageProfile;
