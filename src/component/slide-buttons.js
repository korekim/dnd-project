import React from "react";

const SlideButtons = (props) => {
    return(
        <div className="slide-buttons"
        style={{
            display: 'flex',
            flexDirection: 'row'
          }}>
            <button onClick={() => {props.changeSlides('0')}}>Dice</button>
            <button onClick={() => {props.changeSlides('1')}}>works!</button>
            <button onClick={() => {props.changeSlides('2')}}>works more!</button>
        </div>
    )
}

export default SlideButtons;