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
import { parseMedia } from "./helpers/helpers";

class PageProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      user: undefined,
      error: undefined,
      showTweetForm: false,
      tweetContent: undefined,
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
    const { loading, user, error, showTweetForm, tweetContent } = this.state;

    return (
      <>
        {/* Loading */}
        {(loading || (!user && !error)) && <Loading />}

        {/* Success */}
        {user && !error && (
          <>
            {showTweetForm && (
              <TweetForm
                user={user}
                tweetContent={tweetContent}
                handleTweetFormChange={this.handleTweetFormChange}
                handleTweetFormSubmit={this.handleTweetFormSubmit}
                handleTweetFormClose={this.handleTweetFormClose}
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
    UserAPI.post(username, tweet).then(
      res => {
        this.setState(state => ({
          user: res,
          tweetContent: "",
          tweetId: state.tweetId + 1,
          showTweetForm: false
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
    this.setState({ tweetContent: e.target.value });
  }

  handleTweetFormSubmit(e) {
    const { user, tweetContent, tweetId } = this.state;
    e.preventDefault();

    if (!tweetContent) {
      return;
    }

    // Mount mock tweet
    const tweet = {
      id: tweetId,
      author: {
        name: user.name,
        username: user.username,
        link: user.link,
        avatar: user.avatar
      },
      retweetedBy: [],
      content: tweetContent,
      media: parseMedia(tweetContent),
      date: "now",
      comments: 0,
      retweets: 0,
      likes: 0,
      commented: false,
      liked: false,
      savedToPocket: false
    };

    this.postTweet(user.username, tweet);
  }
}

export default PageProfile;
