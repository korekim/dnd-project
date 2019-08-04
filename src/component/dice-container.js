import React from "react";
import PropTypes from "prop-types";
import "./dice-container.css"

export default class DiceContainer extends React.Component {
    static propTypes = {
        diceType: PropTypes.number,
        diceNumber: PropTypes.number,
        clickHandler: PropTypes.func,
        changeHandler: PropTypes.func,
        roll: PropTypes.number,
        modifier: PropTypes.number,
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
                        <input  
                            name="diceNumber"
                            type="number"
                            placeholder="# of dice"
                            onChange={this.handleInputChange.bind(this)}

                        />
                        <text><strong>d</strong></text>
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
                            onChange={this.handleInputChange.bind(this)}
                        />
                    </label>
                    <input 
                        type="button" 
                        value="Roll!" 
                        class="button"
                        onClick={ () => {
                                this.props.clickHandler(this.props.diceNumber, this.props.diceType, this.props.modifier)
                            }
                        }
                    />
                </form>
                <br></br>
                <div className="outcome">
                    <div className="outcome-text">
                        <text>Outcome: </text>
                    </div>
                    <h1>{this.props.roll}</h1>
                </div>
            </div>
        )
    }
}