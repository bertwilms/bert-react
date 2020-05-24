import React from 'react';
import HelloButton from './hello-button';
//import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
     <h1>Hallo React </h1>
      <p>Dit is mijn allereerste React Applicatie.</p>
        <HelloButton name={"Bert Wilms"}/>
    </div>
  );
}

export default App;
