import React, { useState, useEffect } from 'react'
import axios from 'axios' 


const App =()=> {

  const [countries, setCountries]= useState([])
  const [search, setSearch ] = useState([])

  const hook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }
  
  useEffect(hook, [])

  const handleNameChange = (event) => {
    setSearch(event.target.value)
    setValue(countries.filter((c) => (c.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !==-1)))

  }

  const handleCountryChange = (c) => {
    setValue(countries.filter((c1) => (c1.name.toLowerCase().indexOf(c.name.toLowerCase()) !==-1))) 

  }

    const [value, setValue]= useState([])
  
    return (
    <div>
        <form> Find countries: <input value={search} onChange={handleNameChange}/> </form>
        < Content value={value} handleCountryChange={handleCountryChange}  />
    </div>
  )
}

const Content= ({value, handleCountryChange})=>{

    if (value.length === 1){
        return( <Country country= { value[0] } />)
    }else if (value.length > 1 && value.length < 11){
        return( <div> {value.map(c => <div key={c.name} > {c.name} <button onClick={()=> handleCountryChange(c)}> show </button></div>)} </div>)

    }else{
        return(<div>Too many matches, specify another filter</div>)
        
    }
}

const Country =({country})=>{

    

    const city= country.name
    const [weather,setWeather]=useState({})
    
    
    const hook3 = () => {
        
        const api_key=process.env.REACT_APP_API_KEY

        axios
        .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${city}`)
        .then(response => {

            setWeather(response.data.current)

                        
          })
      }
      
      useEffect(hook3, [city])

    return(
    

    <div>
        <h2>{country.name} </h2>
        <p>capital {country.capital}</p>
        <p>population {country.population}</p>
        <h2>Spoken languages </h2>
            
        {country.languages.map(language => (
            <li key={language.name}> {language.name} </li> ))}
        <img  src={country.flag} height="150" width="150" alt=""/>
        <h2> weather at {city} </h2>
        <p>temperature: {weather.temperature} Celsius </p>
        <img src={weather.weather_icons} alt='weather icon'></img>
        <p>wind: {weather.wind_speed} mph direction {weather.wind_dir}</p>
    </div>
    )     
}

export default App

