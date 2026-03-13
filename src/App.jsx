import Assignment from './Assignment';
import Counter from './Counter';
import Batsman from './Batsman';
import './App.css'

function App() {

  return (
    <>
     <h1>Hello react</h1>
     <Batsman name="Tamim"></Batsman>
     <Counter></Counter>
     <Student name="Shakil" roll="102"></Student>
     <Student name="Abir" roll="14"></Student>
     <Player name="Messi" goal="500"></Player>
     <Player name="Ronaldo" goal="950"></Player>
     <Assignment number="01" marks="60"></Assignment>
     <Assignment number="02" marks="60"></Assignment>
     <Assignment number="03" marks="60"></Assignment>
     <Assignment number="04" marks="60"></Assignment>
     <Assignment number="05"></Assignment>
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
