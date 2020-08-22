import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const personName = ['Rahim', 'Karim', 'Jobbar']

  const personAddress = [
    { city: 'Dhaka' },
    { city: 'khulna' }
  ]

  const products = [

    { name: 'Photoshop', price: '$99.9' },
    { name: 'Illustrator', price: '$55' },
    { name: 'PDF Reader', price: '$59' },
    { name: 'Premiere EL', price: '$590' }

  ]

  const friendList = [
    { name: 'Tushar', roll: 328435 },
    { name: 'Emran Nazir', roll: 328435 },
    { name: 'Abdullha ', roll: 328435 },
    { name: 'Sohidul islam', roll: 328435 },
    { name: 'shanto shek', roll: 328435 }
  ]

  return (
    <header className="App-header">
      <h1>I am a React Person</h1>
      <Users></Users>
      <Counter></Counter>
      <ul>
        {
          personName.map(pName => <li>{pName}</li>)

        }
        {
          products.map(product => <li>{product.name}</li>)
        }
      </ul>
      {
        products.map(pd => <Product product={pd}></Product>)
      }
      <Person name={personName[0]} address={personAddress[0].city}></Person>
      <Person name={personName[1]} address={personAddress[1].city}></Person>
      {
        friendList.map(fList => <Friends friends={fList}></Friends>)
      }
    </header>
  );
}

function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    margin: '25px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left',
    textAlign: 'center'
  }
  const { name, price } = props.product
  console.log(name, price);

  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
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

function Friends(props) {
  const friendsStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    margin: '25px',
    backgroundColor: 'red',
    height: '200px',
    width: '200px',
    float: 'left',
    textAlign: 'center'
  }
  const { name, roll } = props.friends
  console.log(name, roll);
  return (
    <div style={friendsStyle}>
      <h4>{name}</h4>
      <h4>{roll}</h4>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0)
  const handelIncrease = () => setCount(count + 1)
  const handelDecrease = () => setCount(count - 1)
  return (
    <div>
      <h2>Count: {count} </h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h2>Dynamic users: {users.length}</h2>
     
        <ol>
        {
           users.map(user => <li>{user.name}</li>)
          }
        </ol>
     
    </div>


  )
}

export default App;
