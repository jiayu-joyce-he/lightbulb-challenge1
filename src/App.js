import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isOn: false,
      initialColor: "white",
      switchImage: "https://cdn.pixabay.com/photo/2012/04/16/13/27/switch-36000_640.png",
      bulbImage: "https://previews.123rf.com/images/serhiibrovko/serhiibrovko1806/serhiibrovko180600013/102587430-led-light-bulb-isolated-on-transparent-background-vector-illustration-eps-10-.jpg"
    }
    
  }

handleChange = () => {
    
    let newState = !this.state.isOn
    let newColor = this.state.initialColor === "white" ? "yellow": "white"
    let newSwitchImage = this.state.switchImage === "https://cdn.pixabay.com/photo/2012/04/16/13/27/switch-36000_640.png" ? "http://www.clker.com/cliparts/3/K/n/H/I/H/light-switch-white-on-hi.png" : "https://cdn.pixabay.com/photo/2012/04/16/13/27/switch-36000_640.png"
    let newSwitchBulb = this.state.bulbImage === "https://previews.123rf.com/images/serhiibrovko/serhiibrovko1806/serhiibrovko180600013/102587430-led-light-bulb-isolated-on-transparent-background-vector-illustration-eps-10-.jpg" ? "https://previews.123rf.com/images/serhiibrovko/serhiibrovko1806/serhiibrovko180600074/102730148-glowing-led-bulb-isolated-on-transparent-background-vector-illustration-eps-10-.jpg" : "https://previews.123rf.com/images/serhiibrovko/serhiibrovko1806/serhiibrovko180600013/102587430-led-light-bulb-isolated-on-transparent-background-vector-illustration-eps-10-.jpg"
    this.setState({isOn: newState, initialColor: newColor, switchImage: newSwitchImage, bulbImage: newSwitchBulb})
}

  render() {
    let { isOn } = this.state

    return (
      <div className="App">
       <header className="App-header">
        <img height='200px' src = {this.state.bulbImage}></img>
        <img height='200px' onClick = {this.handleChange} src = {this.state.switchImage}></img>
        <button onClick = {this.handleChange} style={{backgroundColor:this.state.initialColor}}> {this.state.isOn ? "On": "Off"} </button>
        

        </header>
      </div>
    );
  }
}

export default App;
