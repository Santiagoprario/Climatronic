import React from 'react';
import Logo from '../img/logoHenry.png'
import './Nav.css';
import { Link } from 'react-router-dom';
import {TiWeatherCloudy} from 'react-icons/ti';



function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
        <Link to='/'> 
        <div className='planeta'>
        <img className="tierra" src="https://luismasdev.com/content/images/2016/11/tierra.png"/>
        </div>
        </Link>
        <h3 className='title'><TiWeatherCloudy />    Climatologic     <TiWeatherCloudy /> </h3>
        <Link to='/About'>
          <span className='about'>Sobre mi</span>
        </Link>
        
    </nav>
  );
};

export default Nav;
