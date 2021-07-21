import React from 'react'


const Header = ({course}) => {
    return (
  
        <h2>
          {course.name}
        </h2>
  
    )
  }
  
  
  
  const Content = ({course}) => {
    return (
      <div>
          {course.parts.map(part => 
            <Part key={part.id} part={part} />)}
      </div>
       
  
  
    )
  }
  const Part = (props) => {
    return (
      <p>{props.part.name} {props.part.exercises}   </p>
    )
  }
  
  
  const Course = ( {course} ) => (
    <div>
     <Header course={course} />
     <Content course={course} />
     <Total course={course} />
    </div>
  )
  
  
  const Total = ({course}) => {
  
    let sum = course.parts.reduce((s, t) => s + t.exercises,0)
  
  
  
    return (
     
      <div>
        <p>
          Number of exercises {sum}
        </p>
      </div>
    )
  }
  
  export default Course