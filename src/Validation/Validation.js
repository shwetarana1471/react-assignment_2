import React from 'react';

const validation = ( props ) => {
    let validationMessage = 'Long Enough';

    if (props.inputLength <= 5) {
        validationMessage = 'Too short to consider';
    }

    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    );
};

export default validation;