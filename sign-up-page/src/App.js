import React, { Component } from 'react';
import './App.css';
import Mainbodydiv from "./Components/Mainbodydiv/Mainbodydiv";
import Floatingbutton from "./Components/Floatingbutton/Floatingbutton"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Mainbodydiv />
        <Floatingbutton />
      </div>
    );
  }
}

export default App;
