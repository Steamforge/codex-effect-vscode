import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { noun: 'World' };
  }
 
  componentDidMount() {}

  render() {
    return <div className="some-class">Hello {this.state.noun}!!!</div>;
  }
}
export default App;

//comment
