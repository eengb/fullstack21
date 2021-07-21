
const Persons = (props)=>{
  
    if(props.newFilter === ''){
  
      return(
  
        <ul>
            {props.persons.map(person => 
               <Person key={person.name} person={person} handleDelete={props.handleDelete}    />
            )}
          </ul>
      )
  
      
    }else {
    
    return(
  
      <ul>
          {props.fPersons.map(person => 
             <Person key={person.name} person={person} handleDelete={props.handleDelete}  />
          )}
        </ul>
  
    )
          }
  }

  const Person = ({person, handleDelete}) =>
  <div className="person">
    <span className="person--name">{person.name}</span>
    <span className="person--number">{person.number}</span>
    <button className="button" onClick={() => handleDelete(person.id)}>
      Delete
    </button>
  </div>



  

  

  export default Persons