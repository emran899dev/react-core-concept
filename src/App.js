import React from 'react';
import './App.css';

function App() {
  return (
    <header className="App-header">
      <div className="App">
        <p>I am a React Person</p>
        <Person name='Ruble Nayok' nayika='Moushumi'></Person>
        <Person name='BappaRaz Nayok' nayika='cheka'></Person>
        <Person name='Razjak' nayika='Bobitha'></Person>
      </div>
    </header>
  );
}

function Person(props) {
  const personStyle = {
    border: '2px solid yellow',
    margin: '5px'
  }
  console.log(props);
  return (
    <div style={personStyle}>
      <h1>Nayok: {props.name}</h1>
      <h3>Hero of {props.nayika}</h3>
    </div>
  )

}

export default App;
