import React, { Component } from 'react';
import NavBar from './common/NavBar';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
