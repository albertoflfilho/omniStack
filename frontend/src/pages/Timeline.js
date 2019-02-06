import React, { Component } from 'react';

import twitterLogo from '../twitter.svg';
import './Timeline.css';

export default class Timeline extends Component {
  state = {
    newTweet: '',
  };

  handleNewTweet = (e) => {
    if (e.keyCode !== 13) return;

    const content = this.state.newTweet;
    const author = localStorage.getItem('@TwitterAFL');

    console.log(content, author);
  };

  handleInputChange = (e) => {
    this.setState({ newTweet: e.target.value });
  };

  render() {
    return (
      <div className="timeline-wrapper">
        <img height={24} src={twitterLogo} alt="twitterLogo" />

        <form>
          <textarea
            value={this.newTweet}
            onChange={this.handleInputChange}
            onKeyDown={this.handleNewTweet}
            placeholde="What's up?"
          />
        </form>
      </div>
    );
  }
}
