import React, { Component } from 'react';

class Control extends Component {
  render() {
    return (
      <ul>
        <li><a href="javascript:void(0)" onClick={function() {
          this.props.onChangeMode('create');
        }.bind(this)}>create</a></li>
        <li><a href="javascript:void(0)" onClick={function() {
          this.props.onChangeMode('updata');
        }.bind(this)}>updata</a></li>
        <li><input type="button" value="delete" onClick={function() {
          this.props.onChangeMode('delete');
        }.bind(this)}></input></li>
      </ul>
    );
  }
}
export default Control;