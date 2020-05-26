import React from 'react';

const HelloButton = (props) => {

    function print2Console(name) {
        console.log(`Hello, ${name}!`);
    }

    return (
        <button onClick={() => print2Console (props.name)}>{props.label} </button>
    );
};
export default HelloButton;
