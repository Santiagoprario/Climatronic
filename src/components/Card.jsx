import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

export default function Card ({min, max, name, img, onClose, id , temp, weather}) {
    
  
  
  
  
  return (
    <Link to={`/ciudad/${id}`} >
      <div className="card">
            <button onClick={onClose} className="close">X</button>
      <div className='total'>
      <div className='mitad1'>
      <div className='city'>
        <h3 >{name}</h3>
      </div>
      <div className='medio'>
        <div>
           <h4 className='ahora'> {temp} ºC</h4> 
            <div className='datos'>
               <h6> {min} ºC | {max}ºC </h6>
             </div>
        </div>
      </div>
     </div>
     <div className='mitad2'>
     <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="120" height="120" alt="" />
     </div>
     </div>    
  </div>
    </Link>
    );
};









// <h5 className="card-title">{name}</h5>
// <div className="row">
//   <div className="col-sm-4 col-md-4 col-lg-4">
//     <p>Min</p>
//     <p>{min}°</p>
//   </div>
//   <div className="col-sm-4 col-md-4 col-lg-4">
//     <p>Max</p>
//     <p>{max}°</p>
//   </div>
//   <div className="col-sm-4 col-md-4 col-lg-4">
//     <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
//   </div>