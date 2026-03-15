import Assignment from './Assignment';
import Counter from './Counter';
import Batsman from './Batsman';
import Users from './Users';
import Friends from './Friends';
import './App.css'
import { Suspense } from 'react';
import UserName from './UserName';
import Posts from './Posts';

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());

const fetchFriends = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

const fetchUserName = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

const fetchPosts = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

function App() {
  const friendsPromise = fetchFriends();
  const userNamePromise = fetchUserName();

  const postsPromise = fetchPosts();

  return (
    <>
     <h1>Hello react</h1>

    <Suspense fallback={<h4>Posts are loading...</h4>}>
      <Posts postsPromise={postsPromise}></Posts>
    </Suspense>

    <Suspense fallback={<h4>User name are loading...</h4>}>
      <UserName userNamePromise={userNamePromise}></UserName>
    </Suspense>
    <Suspense fallback={<h4>Friends are coming...</h4>}>
      <Friends friendsPromise={friendsPromise}></Friends>
    </Suspense>
     <Suspense fallback={<h4>Users are loading...</h4>}>
      <Users fetchUsers={fetchUsers}></Users>
     </Suspense>
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
