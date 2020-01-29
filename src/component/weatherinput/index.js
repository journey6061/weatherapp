import React from 'react';

const weatherinput = (props) => {
    const inputStyle = {
        border: '2px solid red'
    };

    return <input 
        type="text" 
        style={inputStyle}
        onChange={props.inputvalue} 
        value={props.currentvalue} 
        
        
        />;
};

export default weatherinput;