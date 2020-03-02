import React from 'react';

const char = (props) => {
    const style = {
        display: 'inline-block',
        padding: '18px',
        margin: '18px',
        border: '2px solid grey',
        textAlign: 'center'
    };

    return (
        <div style={style} onClick={props.clicked}>
            {props.character}
        </div>
    );
};

export default char;