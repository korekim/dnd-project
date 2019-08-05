import React from "react";

import DiceContainer from "./dice-container.js"
import DiceHistory from "./dice-history.js"

import"./dice-slider.css"

const DiceSlide = props => {
    return(
        <div className="diceSlide">
            <DiceContainer 
                diceType={props.diceType}
                diceNumber={props.diceNumber}
                clickHandler={props.handleClick}
                changeHandler={props.handleInputChange}
                modifier={props.modifier}
                roll={props.roll}
            />
            <DiceHistory diceHistory={props.diceHistory}/>
        </div>
    )
}

export default DiceSlide