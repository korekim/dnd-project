import React from "react";

import DiceContainer from "./dice-container.js"

const DiceSlide = (props) => {
    return(
        <div className="diceSlide">
            <DiceContainer 
                diceType={props.diceType}
                diceNumber={props.diceNumber}
                clickHandler={props.handleClick}
                changeHandler={props.handleInputChange}
                roll={props.roll}
            />
        </div>
    )
}

export default DiceSlide