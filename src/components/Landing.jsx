import React from 'react';
import styles from './Styles/Landing.module.css';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <div className={styles.landing}>
           Landing page
           <div>
               <Link to='/home'>
               <button className={styles.boton}> 
                   Entrar
               </button>
              </Link>
          </div> 
        </div>
    )
}

export default Landing
