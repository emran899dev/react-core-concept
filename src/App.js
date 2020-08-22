import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <header className="App-header">
    <div className="App">
        <p>I am a React Person</p>
        <Person></Person>
      </div>
      </header>
  );
}

function Person() {
  return <h1>Name: Mushfiqur Rahim</h1>
}

export default App;
