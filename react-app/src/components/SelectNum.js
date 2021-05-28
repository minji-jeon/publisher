import React, { Component } from 'react';

class SelectNum extends Component {
  render() {
    return (
      <div className="num-ball">
      <div className="selec-num-btn">
        <a href="#" className="selec-num">3</a>
        <a href="#" className="selec-num">4</a>
        <a href="#" className="selec-num is-active">5</a>
      </div>
      <div className="num">
        <p className="num-01"></p>
        <p className="num-02"></p>
        <p className="num-03"></p>
        <p className="num-04"></p>
        <p className="num-05"></p>
      </div>
      <div className="push-num">
      <a href="javascript:void(0);" onClick={function() {
          this.props.onChangePages();
        }.bind(this)}>{this.props.done}</a>
      </div>
    </div>
    );
  }
}
export default SelectNum;