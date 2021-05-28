import React, { Component } from 'react';

class UpdataDone extends Component {
  render() {
    return (
      <div className="list-img">
        <p>UpdataDone</p>
        <form action="./../././" method="post"
          onSubmit={function(e) {
            e.preventDefault();
            this.props.onSubmit(
              e.target.title.value,
              e.target.desc.value
            );
          }.bind(this)}
        >
          <p><input type="text" name="title" placeholder="title"></input></p>
          <p><textarea name="desc" placeholder="description"></textarea></p>
          <p><input type="submit"></input></p>
        </form>
      </div>
    );
  }
}
export default UpdataDone;