import React from 'react';
import './App.css';

function App() {
  const personName = ['Rahim', 'Karim', 'Jabbar']
  const cityName = ['Dhaka', 'Khulna']
  const personAddress = {
    city1: cityName[0],
    city2: cityName[1]
  }
  return (
    <header className="App-header">
      <Person name={personName[0]} address={personAddress.city1}></Person>
      <Person name={personName[1]} address={personAddress.city2}></Person>
    </header>
  );
}

function Person(props) {
  const personStyle = {
    border: '2px solid yellow',
    margin: '5px',
    width: '400px'
  }
  return (
    <div style={personStyle}>
      <h1>Name: {props.name}</h1>
      <h3>City: {props.address}</h3>
    </div>
  )
}

export default App;
