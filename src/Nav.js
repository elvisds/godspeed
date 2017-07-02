import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div
          onClick={this.props.onClick.bind(this, "leaderboard")}
          className={ this.props.active_page === "leaderboard"?"nav_link active":"nav_link"}>Leaderboard</div>
        <div
          onClick={this.props.onClick.bind(this, "routes")}
          className={ this.props.active_page === "routes"?"nav_link active":"nav_link"}>Routes</div>
        <div
          onClick={this.props.onClick.bind(this, "feed")}
          className={ this.props.active_page === "feed"?"nav_link active":"nav_link"}>Activity Feed</div>
        <div
          onClick={this.props.onClick.bind(this, "release")}
          className={ this.props.active_page === "release"?"nav_link active":"nav_link"}>Release Incentives</div>
      </div>
    );
  }
}