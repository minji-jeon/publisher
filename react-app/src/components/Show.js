import React, { Component } from 'react';

class Show extends Component {
  
  render() {
    return (
      <div className="list-img">
        <p>{this.props.final}</p>
        <a href="javascript:void(0);" className="all-reset">{this.props.done}</a>
      </div>
    );
  }
}
export default Show;