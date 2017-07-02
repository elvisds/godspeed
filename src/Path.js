import React, { Component } from 'react';

export default class Home extends Component {
  
  render() {
    var num_stops = this.props.num_stops;
    var current_stop = this.props.current_stop;

    var points = [];
    for (var i=0; i<num_stops; i++) {
        points.push(<div key={i} className={ current_stop >= i?"point active":"point" }>
                {i}
            </div>)
    }

    return (
      <div className="path">
        { this.props.driver }
        <div>
        <div className="points">
            <div className="trail">
            </div>
            { points }
        </div>
        </div>
      </div>
    );
  }
}