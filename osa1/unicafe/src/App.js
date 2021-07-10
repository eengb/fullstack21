import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)



const StatisticLine = (props) => {
 
  
  return (
    
    
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
    
    
    
  )
}

const Statistics = (props) => {

  const good = props.good
  const neutral = props.neutral
  const bad = props.bad


  const all = good + bad + neutral
  const avg = (good*1 + bad*-1 + neutral*0) / all
  const pos = good / all *100 + ' %'
  
  if (all === 0) {
    return (
      <div>
        no feedback given
      </div>
    )
  }
  return(
    <table>
      <tbody>
        <StatisticLine text='good' value={good} />
        <StatisticLine text='neutral' value={neutral} />
        <StatisticLine text='bad' value={bad} />
        <StatisticLine text='all' value={all} />
        <StatisticLine text='average' value={avg} />
        <StatisticLine text='positive' value={pos} />
      </tbody>
    </table>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handlepositive =()=> {
    setGood(good +1)

  }

  const handleneutral =()=> {
    setNeutral(neutral +1)
    
  }

  const handlebad =()=> {
    setBad(bad +1)
    
  }
  

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handlepositive} text= 'good' />
      <Button handleClick={handleneutral} text= 'neutral' />
      <Button handleClick={handlebad} text= 'bad' />
      <h1>statistics</h1>

      < Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App
