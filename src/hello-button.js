import React from 'react';

const HelloButton = (props) => {

    function print2Console(name) {
        console.log(`Hello, ${name}!`);
    }

    return (
        <button onClick={() => print2Console (props.name)}>Print 2 console </button>
    );
};
export default HelloButton;
