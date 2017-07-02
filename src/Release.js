import React, { Component } from 'react';

export default class Release extends Component {

  constructor(props) {
    super(props)
    this.state = {
      driver: null,
      incentives: 0
    }

    this.setDriver = this.setDriver.bind(this);
    this.onClickYes = this.onClickYes.bind(this);
    this.onClickNo = this.onClickNo.bind(this);
  }

  setDriver(driver, incentives) {
    console.log(arguments);
    this.setState({
      driver: driver,
      incentives: incentives
    })
  }

  onClickYes() {
    this.props.releaseIncentives(this.state.driver, this.state.incentives)
    this.setState({
      driver: null,
      incentives: 0
    })
  }

  onClickNo() {
    this.setState({
      driver: null,
      incentives: 0
    })
  }
  
  render() {

    if (this.state.driver) {
      return <div className="well">
        <div>Release incentives worth {this.state.incentives} to {this.state.driver}?</div>
        <a onClick={this.onClickYes} className="btn btn-primary">Yes</a>
        <a onClick={this.onClickNo} className="btn btn-default">No</a>
      </div>
    }

    var drivers = this.props.drivers;
    var incentives = this.props.incentives;

    var incentivesRows = [];

    for (var i=0; i<drivers.length; i++) {
      incentivesRows.push(<tr key={i}>
          <td>{ drivers[i] }</td><td>{ incentives[drivers[i]] || 0 }</td>
          <td><a onClick={this.setDriver.bind(this, drivers[i], incentives[drivers[i]])}>Select</a></td>
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
            <th>
            </th>
          </tr>
        </thead>
        <tbody>
          {incentivesRows}
        </tbody>
      </table>);
  }
}