
import React, { useState } from 'react';
import axios from "axios";
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { HireContext } from '../App';

function Category() {

  const { setCondedates, jwttoken } = useContext(HireContext);
  const navigate = useNavigate();
  const [course, setCourse] = useState("");


  //.........................categroy select..................


  function handleSubmit(e) {
    e.preventDefault();
      console.log(jwttoken)
    axios.post(`http://localhost:8080/category/${jwttoken}`, { course })
      .then((result) => {
        if (result.status === 200) {
          
          setCondedates(result.data);
          // console.log(result.data)
        } else if (result.status === 202) {
          alert(result.data);
        }
        navigate("/category/condedates"); 
      });
  }

  return (
    <>
      <section className='category'>
        <form onSubmit={handleSubmit}>
          <select value={course} onChange={(e) => setCourse(e.target.value)}>
            <option>Select Game</option>
            <option>Full Stack Learning</option>
            <option>Frontend</option>
            <option>Backend</option>
            <option>UI design</option>
            <option>UX design</option>
          </select>
          <button type='submit'>Show Condedate</button>
        </form>
      </section>
    </>
  );
}

export default Category;
