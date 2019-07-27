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
      diceNumber: 1,
      roll: 0,
      currentSlideIndex: 0,
      translateValue: 0
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.changeSlides = this.changeSlides.bind(this)
  }

handleClick(diceNumbers, diceTypes) {
  let i;
  let outcome = 0;
  //let temp;
  //alert(diceNumbers)
  //alert(diceTypes)
  for (i = 0; i < diceNumbers; i++) {
    
    //temp = Math.floor(Math.random() * diceNumbers) + 1;
    outcome += Math.floor(Math.random() * diceTypes) + 1;
    //alert(temp)
  }
  this.setState({
    diceType: diceTypes,
    diceNumber: diceNumbers,
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
          <SlideButtons changeSlides={this.changeSlides}/>
        <div className="slider-wrapper"
            style={{
              transform: `translateX(${this.state.translateValue}%)`,
              transition: 'transform ease-out 0.45s',
              display: 'flex',
              flexDirection: 'row'
            }}>

          <DiceSlide
            diceType={this.state.diceType}
            diceNumber={this.state.diceNumber}
            handleClick={this.handleClick}
            handleInputChange={this.handleInputChange}
            roll={this.state.roll}
          />
          <Slide text="works!" order='1'/>
          <Slide text="works more!" order='2'/>
        </div>
      </div>
    );
  }
}
export default App;
