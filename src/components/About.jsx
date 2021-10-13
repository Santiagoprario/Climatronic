import React from 'react';
import Logo from '../img/logoHenry.png'
import { Link } from 'react-router-dom';



function About () {
    return (
        <div className='container'>
           <h1 >Primera App en Henry!</h1>
           <h4 > Esta aplicacion esta basada en React </h4>
           <img src={Logo} />
           <Link to='/'>
              <button type="button" class="btn btn-dark" >Volver atras</button>
            </Link>
        </div>
    )
}

export default About;