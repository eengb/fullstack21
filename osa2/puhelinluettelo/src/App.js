import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import './index.css'
import personService from './services/persons'



const App = () => {
  const [persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber]= useState('')
  const [newFilter, setFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [messageColor, setMessageColor]= useState(true)

 



  const hook = () => {
    personService
        .getAll()
        .then(ip => {
          setPersons(ip) } )
      
  }
  
  useEffect(hook, [])







  const [fPersons,setFPersons]= useState(persons)

  const nameList = persons.map(p => p.name.toLowerCase())

  
  
  
  
  const addName = (event) => {
    event.preventDefault()
    
    
    const NameObject = {
      name: newName,
      number: newNumber
    }


    if (nameList.includes(newName.toLowerCase())===false){

      personService
      .create(NameObject)
      .then(rn =>{setPersons(persons.concat(rn))})
      setErrorMessage(
        `Added ${newName} `
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000) 

      
      
      


      


    }else{

    const confirmUpdate = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one? `)


      const person = persons.find((p) => p.name.toLowerCase() === newName.toLowerCase())


      const {id} =person
      



      const tbUpdatedPersonInfo = {...person, number:newNumber}
      

      if (confirmUpdate){

        const error_name= newName

        personService
        .update(id, tbUpdatedPersonInfo)
        .then((returnedPerson) => {
          setPersons(
            persons.map((person) =>
              person.id !== id ? person : returnedPerson)
          )
          setNewName('')
          setNewNumber('')
          setFilter('')
         
        })
        .catch(error => {
          setMessageColor(false)
          setErrorMessage(`Person '${error_name}' was already removed from server`)
          setTimeout(() => {setMessageColor(true) && setErrorMessage(null)}, 5000)})

        setErrorMessage(
          `Updated ${newName} `
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000) 
        
        setNewName('')
        setNewNumber('')
        setFilter('')
    
    }else{
  
      console.log("no changes done")
    }
  }
}
  


  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)

    setFPersons(persons.filter((person) => (person.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !==-1)))
    
  }


  const handleDelete = (id) => {

    const tbDeletedPerson = persons.find((p) => p.id === id)

    const error_name = tbDeletedPerson.name

    const confirmDelete = window.confirm(`Delete ${tbDeletedPerson.name}?`)

    if (confirmDelete) {

      personService.remove(id).then(() => {const fPersons = persons.filter((p) => p.id !== id)
        setPersons(fPersons)
      
      })
        .catch(error => {
          setMessageColor(false)
          setErrorMessage(`Person ${error_name} was already removed from server`)
          setTimeout(() => {setMessageColor(true) && setErrorMessage(null)}, 5000)})
          
           


        setErrorMessage(
          `Deleted ${tbDeletedPerson.name} `
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)


        const fPersons = persons.filter((p) => p.id !== id)
        setPersons(fPersons)
 
        setFilter("")

     

    }

  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage } messageColor={messageColor} />
      < Filter filter newFilter = {newFilter} handleFilterChange={handleFilterChange} />
      <h3>Add a new</h3>
      < PersonForm personform addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h3>Numbers</h3>
      <Persons p fPersons={fPersons} persons={persons} newFilter={newFilter} handleDelete={handleDelete} />  
    </div>
  )

}

const Notification = ({ message, messageColor }) => {
  if (message === null) {
    return null
  }
  if (messageColor===true) {
    return(
    <div className="errorGreen">
      {message}
    </div>)
  }else{


  return (
    <div className="errorRed">
      {message}
    </div>
  )
}
}




export default App