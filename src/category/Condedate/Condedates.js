
import React, { useContext, useEffect } from 'react';
import { HireContext } from '../../App';
import "./Condedates.css"
import axios from 'axios';
import serverUrl from '../../serverUrl';

function Condedates() {
  const { condedates , setCondedates} = useContext(HireContext);


 console.log(condedates)
  function hadleClick(e , condedateId){
    console.log(condedateId)
    axios.post('http://localhost:8080/condedate', { condedateId })
    .then((result) => {
      if (result.status === 200) {
        
        console.log(result.data);
      } else if (result.status === 202) {
        alert(result.data);
      }
      
    });
  }

  return (
    <>
      <section className='condedates'>
        {condedates.map((condedate, index) => (
          <div onClick={(e)=>hadleClick(e,condedate._id)} className='condedate' key={index}>
            <h1>{condedate.fullname}</h1>
            <h3>{condedate.skills}</h3>
          </div>
        ))}
      </section>
    </>
  );
}

export default Condedates;
