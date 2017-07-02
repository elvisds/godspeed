import React, { Component } from 'react';

import _ from 'underscore';

import LeaderBoard from './LeaderBoard';
import ActivityFeed from './ActivityFeed';
import Release from './Release';
import Path from './Path';
import Nav from './Nav';
import Data from './data';

class App extends Component {

  constructor(props) {
    super(props)
    var data = new Data();
    this.state = {
      paths: [{
        stops: 8,
        current_stop: 2,
      },{
        stops: 10,
        current_stop: 3,
      },{
        stops: 7,
        current_stop: 5,
      },{
        stops: 11,
        current_stop: 1,
      },{
        stops: 8,
        current_stop: 4,
      },],
      data: data,
      drivers: data.getDrivers(5),
      incentives: {},
      activityFeed: [],
      active_page: "leaderboard"
    }
    this.incentivizeRandomDriver = this.incentivizeRandomDriver.bind(this);
    this.releaseIncentives = this.releaseIncentives.bind(this);
    this.onNavClick = this.onNavClick.bind(this);
  }

  onNavClick(active_page) {
    this.setState({
      active_page: active_page
    })
    console.log("page to", arguments);
  }

  incentivizeRandomDriver() {

    var index = _.sample([0, 1, 2, 3, 4]);

    var incentives = this.state.incentives;
    var activityFeed = this.state.activityFeed;
    var paths = this.state.paths;

    var driver = this.state.drivers[index];
    var path = paths[index];

    path.current_stop = (path.current_stop + 1) % path.stops;
    incentives[driver] = (incentives[driver] || 0) + 1;

    activityFeed.unshift(driver + " made a GOOD stop");
    activityFeed = activityFeed.splice(5);
    this.setState({
      incentives: incentives,
      paths: paths
    })
  }

  releaseIncentives(driver, incentives) {
    alert("Releasing incentives worth " + incentives + " for " + driver);
    var incentives = this.state.incentives;
    incentives[driver] = Math.max(0, (incentives[driver] || 0) - incentives);
    this.setState({
      incentives: incentives
    })
  }

  componentDidMount() {
    var that = this;
    setInterval(function() {
      that.incentivizeRandomDriver();
    }, 1000);
  }

  render() {

    var paths = [];

    for (var i=0; i<this.state.paths.length; i++) {
      var path = this.state.paths[i];
      paths.push(<Path key={i} driver={this.state.drivers[i]} num_stops={path.stops} current_stop={path.current_stop} />);
    }

    var active_page = this.state.active_page;

    return (
      <div className="app">
        <div className="demo-notice">For a demo of the hardware in action, please visit <a href="https://vimeo.com/222448655">https://vimeo.com/222448655</a></div>
        <div className="app-body container-fluid">
          
          <div className="row">
            <div className="col-md-2">
              <Nav active_page={active_page} onClick={this.onNavClick} />
            </div>
            {
              (active_page === "routes") &&
              <div className="col-md-10">
                {paths}
              </div>
            }
            {
              (active_page === "leaderboard") &&
              <div className="col-md-3">
                <LeaderBoard 
                  drivers={this.state.drivers}
                  incentives={this.state.incentives} />
              </div>
            }
            {
              (active_page === "feed") &&
              <div className="col-md-3">
                <div>
                  <ActivityFeed
                    activityFeed={this.state.activityFeed} />
                </div>
              </div>
            }
            {
              (active_page === "release") &&
              <div className="col-md-3">
                <div>
                  <Release
                    releaseIncentives={this.releaseIncentives}
                    drivers={this.state.drivers}
                    incentives={this.state.incentives} />
                </div>
              </div>
            }

          </div>
        </div>
      </div>
    );
  }
}

export default App;