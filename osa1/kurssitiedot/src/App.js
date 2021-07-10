import React from 'react'
import { Simulate } from 'react-dom/cjs/react-dom-test-utils.production.min'

const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}



const Content = (props) => {
  return (
    <div>
      <Part parr= {props.osat[0]} />
      <Part parr= {props.osat[1]} />
      <Part parr= {props.osat[2]} />

    </div>
  )
}
const Part = (props) => {
  return (
    <div>
      <p>
        {props.parr.name} {props.parr.exercises}
      </p>
    </div>
  )
}





const Total = (props) => {

  

  let p1 = props.yhteensa[0].exercises
  let p2 = props.yhteensa[1].exercises
  let p3 = props.yhteensa[2].exercises

  let kaikki = p1+p2+p3

  return (
   

    <div>
      <p>
        Number of exercises {kaikki}
      </p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content osat= {course.parts} />
      <Total yhteensa ={course.parts} />
    </div>
  )
  
}
export default App