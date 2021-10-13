import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch ,  } from 'react-router-dom';
import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import About from '../components/About';
import Ciudad from '../components/Ciudad';
import Home from '../components/Home';
import Landing from '../components/Landing';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {
  const [cities, setCities] = useState([]);
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
  return (
    <div className="App">
       <Route path='/' component={Nav} />
       <Route exact path='/' component={Landing} />
       <Route exact path='/home' component={Home}/>
       <Route exact path='/About' component={About} />
       <Route exact path='/ciudad/:ciudadId'
       render= {({match}) => <Ciudad city={onFilter(match.params.ciudadId)}/>}
        />
      <hr />
    </div>
  );
}

export default App;
