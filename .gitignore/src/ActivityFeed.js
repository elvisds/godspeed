import React, { Component } from 'react';

export default class ActivityFeed extends Component {
  
  render() {

    var activityFeed = this.props.activityFeed;

    var activityFeedRows = [];

    for (var i=0; i<this.props.activityFeed.length; i++) {
      activityFeedRows.push(<div key={i} className="activity">
        { activityFeed[i] }
      </div>);
    }

    return (
      <div className="activityFeedRows">
        { activityFeedRows }
      </div>
    );
  }
}