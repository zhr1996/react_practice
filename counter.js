import React from "react";
import ReactDOM from "react-dom";
import { Grid, Row, Col } from "react-flexbox-grid";

class App extends React.Component {
  render() {
    return (
      <div>
        <Counter />
      </div>
    );
  }
}

class Counter extends React.Component {
  state = {
    count: 0
  };
  handleClick1 = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleClick2 = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div>
        <div>count is : {this.state.count} </div>
        <div>
          <button onClick={this.handleClick2}>decrease</button>
        </div>
        <div>
          <button onClick={this.handleClick1}>increase</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
