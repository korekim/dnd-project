import React from "react";

import "./dice-history.css"

const DiceHistory = props => {
    return (
        <div className="dice-history">
            <div className="history-title">
                <h3>Dice History:</h3>
            </div>
            <div className='history-text'>
                {props.diceHistory.reverse().map((historyText) => ( 
                    <p>{historyText}</p>
                ))}
            </div>
        </div>
    )
}

export default DiceHistory