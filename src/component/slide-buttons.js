import React from "react";
import './slide-buttons.css';


const SlideButtons = (props) => {
    return(
        <div className="slide-buttons">
            <button class='dice' onClick={() => {props.changeSlides('0')}}>Dice</button>
            <button class='dice' onClick={() => {props.changeSlides('1')}}>works!</button>
            <button class='dice' onClick={() => {props.changeSlides('2')}}>works more!</button>        </div>
    )
}

export default SlideButtons;