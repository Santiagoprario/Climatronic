import React from 'react';
import { useState } from 'react';
import styles from './Styles/Home.module.css';
import SearchBar from './SearchBar';
import Cards from './Cards';
import { FiSearch } from 'react-icons/fi'


function  Home() {
  const [cities, setCities] = useState([]);
  const apiKey = '4ae2636d8dfbdc3044bede63951a019b';
  
  
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }
  
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&lang=sp&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp.toFixed(0),
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
    
    
    return (
        <div className={styles.container}>
            <div className={styles.searchbar}>
            <FiSearch size={30}/>
            <SearchBar onSearch={onSearch}
            />
            </div>
            <div>
                <Cards cities={cities} onClose={onClose} />
            </div>
            
        </div>
    )
}

export default Home;
