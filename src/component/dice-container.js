import React from "react";
import PropTypes from "prop-types";

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
        const styles = {
            padding: '5px',
            zIndex: '0'
        }
        return(
            <div className="diceContainer" style={styles}>
                <form >
                    <label>
                        Roll:
                        <br></br>
                        <input  
                            name="diceNumber"
                            type="number"
                            onChange={this.handleInputChange.bind(this)}

                        />
                        d
                        <input  
                            name="diceType"
                            type="number"
                            onChange={this.handleInputChange.bind(this)}
                        />
                    </label>
                    <input 
                        type="button" 
                        value="Submit" 
                        onClick={ () => {
                                this.props.clickHandler(this.props.diceNumber, this.props.diceType)
                            }
                        }
                    />
                </form>
                <h1>{this.props.roll}</h1>
            </div>
        )
    }
}