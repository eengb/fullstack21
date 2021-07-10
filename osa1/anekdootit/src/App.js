import React, { useState } from 'react'


const Button = (props) => (
    <button onClick = {props.handleClick}> {props.text} </button>
    )

const Plural = (props) => {

    const temp = props.maxVote 

    if ( temp === 1){
        return (
            
        <p>has {temp} vote </p>    )

    }
    return(
        <p>has {temp} votes </p>  

    ) 
} 
    

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0))


  const chooseRandomAnecdote = () => {
    setSelected(Math.floor(Math.random()*anecdotes.length))

  }

  const vote = ()=> {
    const copy = [...votes]
    copy[selected] += 1  
    setVotes(copy)
    
    
  }

  const maxVote = Math.max(...votes)
  const mostVotes = votes.indexOf(maxVote)

  return (
    <div>
        <h1>anecdote of the day </h1>
      <p>{anecdotes[selected]}</p>
      <p> teksti {votes[selected]} </p>
      <Button handleClick={vote} text='vote' />
      <Button handleClick={chooseRandomAnecdote} text='next anecdote' />
      <h1>anecdote with most votes </h1>
      <p> {anecdotes[mostVotes]}</p>
      <Plural maxVote={maxVote}  />
    </div>
  )
}

export default App