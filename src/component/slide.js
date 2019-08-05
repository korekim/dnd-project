import React from "react";


const Slide = (props) => {
    return (
        <div className="slide"
            style={{
                marginLeft: `${props.order*100}%`,
                position: 'absolute',
                zIndex: `${props.order}`,
            }}>
            <h1>{props.text}</h1>
        </div>
    );
}

export default Slide