
import React, { useContext } from 'react';
import { HireContext } from '../../App';

function Condedates() {
  const { condedates } = useContext(HireContext);

  return (
    <>
      <section className='condedates'>
        {condedates.map((condedate, index) => (
          <div className='condedate' key={index}>
            <h1>{condedate.fullname}</h1>
          </div>
        ))}
      </section>
    </>
  );
}

export default Condedates;
