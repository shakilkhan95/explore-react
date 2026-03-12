import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Hello react</h1>
     <Student name="Shakil" roll="102"></Student>
     <Student name="Abir" roll="104"></Student>
     <Player name="Messi" goal="500"></Player>
     <Player name="Ronaldo" goal="950"></Player>
    </>
  )
}

function Student (props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>roll: {props.roll}</p>
    </div>
  )
}

function Player ({name, goal}) {
  return (
    <div>
      <h4>Player: {name}</h4>
      <p>Goal: {goal}</p>
    </div>
  )
}

export default App
