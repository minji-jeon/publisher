//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

import Info from './components/Info';
import SelectNum from './components/SelectNum';
import ReadDone from './components/ReadDone';
import CreateDone from './components/CreateDone';
import Control from './components/Control';
import Show from './components/Show';
import UpdataDone from './components/UpdataDone';

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode:'updata',
      selected_content_id:2,
      done:{final:'완성', done:'다시'},
      startGame:{final:'시작하세요', done:'이제 시작합니다'},
      doneGame:{final:'끝났습니다', done:'다시 시작합니다'},
      contents: [
        {id:1, final:'완성1', done:'다시1'},
        {id:2, final:'완성2', done:'다시2'},
        {id:3, final:'완성3', done:'다시3'}
      ]
    }
  }
  getDoneContent() {
    var i = 0;
    while(i < this.state.contents.length) {
      var data = this.state.contents[i];
      if(data.id === this.state.selected_content_id) {
        return data;
        break;
      }
      i = i + 1;
    }
  }
  getContent() {
    var _final, _done, _article = null;
    if (this.state.mode === 'startGame') {
      var _content = this.getDoneContent();
      _article = <ReadDone final={_content.final} done={_content.done}></ReadDone>
    } else if (this.state.mode === 'downGame') {
      _final = this.state.startGame.final;
      _done = this.state.startGame.done;
      _article = <ReadDone final={_final} done={_done}></ReadDone>
    } else if (this.state.mode === 'create') {
      _article = <CreateDone onSubmit={function(_title, _desc) {
        //add content to this.state.contents
        this.max_content_id = this.max_content_id + 1;
        /* 방법 1 */
        // this.state.contents.push( //원본을 사용하는 방법 (추천하지 않음)
        //   {id:this.max_content_id, final:_title, done:_desc}
        // )
        /* 방법 2 */
        // var _contents = this.state.contents.concat( //새로운 변수로 만들어 사용하는 방법 (추천함)
        //   {id:this.max_content_id, final:_title, done:_desc}
        // )
        /* 방법 3 */
        var newContents = Array.from(this.state.contents); //배열을 복제하여 같은 배열을 만들어 푸시하는 방법
        newContents.push({id:this.max_content_id, final:_title, done:_desc});
        
        this.setState({
          /* 방법 1 & 방법 2 */
          //contents:_contents
          /* 방법 3 */
          contents:newContents
        });
      }.bind(this)}></CreateDone>
    } else if (this.state.mode === 'updata') {
      var _content = this.getDoneContent();
      _article = <UpdataDone data={_content} onSubmit={function(_title, _desc) {
        this.max_content_id = this.max_content_id + 1;
        var newContents = Array.from(this.state.contents); 
        newContents.push({id:this.max_content_id, final:_title, done:_desc});
        
        this.setState({
          contents:newContents
        });
      }.bind(this)}></UpdataDone>
    }
    return _article;
  }
  render() {
    return (
      <div className="App">
        <Info how={this.state.contents} done={this.state.done.final}
          onChangePages={function(id){
            this.setState({
              mode:'startGame',
              selected_content_id:Number(id)
            });
          }.bind(this)}
        ></Info>

        <SelectNum
          done={this.state.done.final}
          onChangePages={function(){
            this.setState({
              mode:'downGame'
            });
          }.bind(this)}
        ></SelectNum>

        <Control
          onChangeMode={function(_mode) {  
            this.setState({
              mode:_mode
            })
          }.bind(this)}
        ></Control>

        {this.getContent()}

        <Show></Show>
        



      </div>
    );
  }
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


