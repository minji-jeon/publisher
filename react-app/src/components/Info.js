import React, { Component } from 'react';

class Info extends Component {
  shouldComponentUpdate(newProps, newState) {
    console.log('-d-dled>',
      newProps.how,
      this.props.how
    );
    if (this.props.how === newProps.how) return false;
    return true;
  }
  render() {
    console.log('11111-d-dled>')
    var howList = [];
    var how = this.props.how;
    var i = 0;
    while(i < how.length) {
      howList.push(<a href="javascript:void(0);" /* data-id={how[i].id} */  key={how[i].id}
      onClick={function(id, e) {
        // e.target
         this.props.onChangePages(id);
       }.bind(this, how[i].id)}
       >{how[i].final}</a>);
      i = i + 1;
    }

    return (
      <div className="how-text">
        <div className="how-text-wrap">
          {howList}
        </div>
        <a href="javascript:void(0);" onClick={function(e) {
         // e.target
          this.props.onChangePages();
        }.bind(this)}>{this.props.done}</a>
      </div>
    );
  }
}
export default Info;