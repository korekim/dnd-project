import React from 'react';
import './App.css';

import DiceSlide from "./dice-slider.js"
import Slide from "./slide.js"
import SlideButtons from "./slide-buttons.js"


class App extends React.Component { // Main component that gets rendered
  constructor(props) {
    super(props);
    this.state = {
      diceType: 0,
      diceNumber: 0,
      roll: 0,
      currentSlideIndex: 0,
      translateValue: 0,
      modifier: 0
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.changeSlides = this.changeSlides.bind(this)
  }

handleClick(diceNumbers, diceTypes, modifiers) {
  let i;
  let outcome = 0;
  for (i = 0; i < diceNumbers; i++) {
    
    outcome += Math.floor(Math.random() * diceTypes) + 1;
  }
  outcome += parseInt(modifiers, 10);
  this.setState({
    diceType: diceTypes,
    diceNumber: diceNumbers,
    modifier: modifiers,
    roll: outcome,

  });
}

handleInputChange(event) {
  const value = event.target.value;
  const name = event.target.name;
  this.setState({
      [name]: value
  });
}

changeSlides(id) {
  this.setState({
    translateValue: `${id*-100}`
  })
}

  render() {
    return(
      <div className = "app">
        <div className="header">
          <h1>Encounter Tools</h1>
          <div className="blue-bar">
            <SlideButtons changeSlides={this.changeSlides}/>
            <div className="header-banner"></div>
          </div>
        </div>
        <div className="slider-wrapper"
            style={{
              transform: `translateX(${this.state.translateValue}%)`,
              transition: 'transform ease-out 0.45s',
            }}>

          <DiceSlide
            diceType={this.state.diceType}
            diceNumber={this.state.diceNumber}
            modifier={this.state.modifier}
            handleClick={this.handleClick}
            handleInputChange={this.handleInputChange}
            roll={this.state.roll}
          />
          <Slide text="works!" order='1'/>
          <Slide text="works 2" order='2'/>
        </div>
        <div className="footer">
          footer
        </div>
      </div>
    );
  }
}
export default App;
