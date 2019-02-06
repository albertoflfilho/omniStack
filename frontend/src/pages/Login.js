import React, { Component } from 'react';

import twitterLogo from '../twitter.svg';
import './Login.css';

export default class Login extends Component {
  state = {
    username: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { username } = this.state;

    if (!username.length) return;

    localStorage.setItem('@TwitterAFL', username);

    this.props.history.push('/timeline');
  };

  handleInputChange = (e) => {
    this.setState({ username: e.target.value });
  };

  render() {
    return (
      <div className="login-wrapper">
        <img src={twitterLogo} alt="twitterLogo" />
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.username}
            onChange={this.handleInputChange}
            placeholder="username"
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
