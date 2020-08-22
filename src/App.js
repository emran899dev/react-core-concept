import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <header className="App-header">
      <div className="App">
        <p>I am a React Person</p>
        <Person></Person>
        <Person></Person>
        <Person></Person>
      </div>
    </header>
  );
}

function Person() {
 const personStyle = {
    border: '2px solid yellow',
    margin: '5px'
  }
  return (
    <div style={personStyle}>
      <h1>Name: Mushfiqur Rahim</h1>
      <h3>I am a student</h3>
    </div>
  )

}

export default App;
