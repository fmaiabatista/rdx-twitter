import React, { Component } from "react";
import "./styles/TweetForm.scss";

class TweetForm extends Component {
  /* eslint-disable class-methods-use-this */
  render() {
    const {
      tweetValue,
      handleTweetFormChange,
      handleTweetFormSubmit
    } = this.props;

    return (
      <form>
        <label>
          Input
          <textarea value={tweetValue} onChange={handleTweetFormChange} />
        </label>
        <input type="submit" value="Tweet" onClick={handleTweetFormSubmit} />
      </form>
    );
  }
}

export default TweetForm;
