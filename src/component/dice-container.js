import React from "react";
import PropTypes from "prop-types";
import "./dice-container.css"

export default class DiceContainer extends React.Component {
    static propTypes = {
        diceType: PropTypes.number,
        diceNumber: PropTypes.number,
        clickHandler: PropTypes.func,
        changeHandler: PropTypes.func,
        roll: PropTypes.number
    };

    handleInputChange(event) {
        this.props.changeHandler(event);
    }

    render() {

        return(
            <div className="diceContainer">
                <form >
                    <label>
                        <h2>Dice:</h2>
                        <br></br>
                        <input  
                            name="diceNumber"
                            type="number"
                            placeholder="# of dice"
                            onChange={this.handleInputChange.bind(this)}

                        />
                        d
                        <input  
                            name="diceType"
                            type="number"
                            placeholder="dice type"
                            onChange={this.handleInputChange.bind(this)}
                        />
                        +
                        <input
                            name="modifier"
                            class="modifier"
                            placeholder="modifier"
                            type="number"
                        />
                    </label>
                    <input 
                        type="button" 
                        value="Submit" 
                        class="button"
                        onClick={ () => {
                                this.props.clickHandler(this.props.diceNumber, this.props.diceType)
                            }
                        }
                    />
                </form>
                <br></br>
                <div className="outcome">
                    <text>Outcome: </text>
                    <h1>{this.props.roll}</h1>
                </div>
            </div>
        )
    }
}