import React, { Component } from 'react';

export default class LeaderBoard extends Component {
  
  render() {

    var drivers = this.props.drivers;
    var incentives = this.props.incentives;

    var incentivesRows = [];

    for (var i=0; i<drivers.length; i++) {
      incentivesRows.push(<tr key={i}>
          <td>{ drivers[i] }</td><td>{ incentives[drivers[i]] || 0 }</td>
        </tr>);
    }

    return (
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>
              Driver
            </th>
            <th>
              Points
            </th>
          </tr>
        </thead>
        <tbody>
          {incentivesRows}
        </tbody>
      </table>);
  }
}