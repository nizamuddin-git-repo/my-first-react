import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo"
import Actor from "./Actor"
import Singers from "./Singers";
import BookStore from "./BookStore";

const books = [
  {id: 1, name: 'Physics', price: 100},
  {id: 1, name: 'Math', price: 120},
  {id: 1, name: 'Chemistry', price: 130},
  {id: 1, name: 'Biology', price: 150}
]

function App() {
  // const [count, setCount] = useState(0)

  const actors = ['sakib', 'Soriful Raj', 'Josim', 'Rubel', 'Salman Shah'];

  const singers = [
    {id: 1, name: 'Mhafuzur Rahman', age: 68},
    {id: 2, name: 'Eva Rhaman', age: 38},
    {id: 3, name: 'Shuvro Dev', age: 58},
    {id: 4, name: 'Protom Babu', age: 28}
  ];

  return (
    <>
      <h3>Vite + React</h3>
      <BookStore books={books}></BookStore>

    {
      singers.map(singer => <Singers singer={singer}></Singers>)
    }


      
      <Actor name={'Nizam Uddin'}></Actor>

      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }


      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Core Concepts" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo> */}

      {/* <Device name="Laptop" price="5500"></Device>
      <Device name="mobile" price="1700"></Device>
      <Device name="watch" price="700"></Device>
      <Person></Person>
      <Student grade="5" score="78"></Student>
      <Student grade="7" score="88"></Student>
      <Student grade="15" score="57"></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  );
}
function Device (props){
  return (
    <h2>This device: {props.name} price: {props.price}</h2>
  )
}

function Person() {
  const age = 35;
  const money = 20;
  const person = { name: "sakib", age: 25 };
  return (
    <h3>
      I am {person.name} age: {age + money}
    </h3>
  );
}
const {grade, score} = {grade:"5", score:"78"}



function Student({grade=1, score=0}) {
  return (
    <div className="student">
      <h3>This is a Student</h3>
      <p>Class: {grade}</p>
      <p>score: {score}</p>
    </div>
  );
}

function Developer () {
  const DeveloperStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid red',
    borderRadius: '20px'
  }
  return (
    <div style={DeveloperStyle}>
      <h5>Devoloper</h5>
      <p>Codeing</p>
    </div>
  )
}

export default App;
