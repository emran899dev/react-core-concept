import React from 'react';
import './App.css';

function App() {
  const personName = ['Rahim', 'Karim', 'Jabbar']
  const cityName = ['Dhaka', 'Khulna']

  const personAddress = {
    city1: cityName[0],
    city2: cityName[1]
  }

  const products = [

    { name: 'Photoshop', price: '$99.9' },
    { name: 'Illustrator', price: '$55' }

  ]
  return (
    <header className="App-header">
      <Product product={products[0]}></Product>
      <Person name={personName[0]} address={personAddress.city1}></Person>
      <Person name={personName[1]} address={personAddress.city2}></Person>
    </header>
  );
}

function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left',
    textAlign: 'center'
  }
  console.log(props);
  return (
    <div style={productStyle}>
      <h3>{props.product.name}</h3>
      <h5>{props.product.price}</h5>
      <button>Click here</button>
    </div>
  )
}

function Person(props) {
  const personStyle = {
    border: '2px solid yellow',
    margin: '5px',
    width: '400px'
  }
  return (
    <div style={personStyle}>
      <h3>Name: {props.name}</h3>
      <h4>City: {props.address}</h4>
    </div>
  )
}

export default App;
