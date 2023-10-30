
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { HireContext } from '../App';
import git from '../Home/image/hiring-recruitment.gif'
import './Category.css'
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Typewriter from 'typewriter-effect'

import AOS from 'aos';
import 'aos/dist/aos.css';

function Category() {


  const { setCondedates, jwttoken } = useContext(HireContext);
  const navigate = useNavigate();
  const [course, setCourse] = useState("");



  //.....................Aos effect...................//

  useEffect(()=>{
    AOS.init();
  }, [])

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


    <div className='category'>
      <div className='categoryImage'>
<img src={git}/>

      </div>
   <div className='categoryForm' data-aos="zoom-in"
    data-aos-offset="200"
    data-aos-delay="70"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
    data-aos-anchor-placement="top-center">
    {/* <h1>Ready to find the perfect addition to your team?</h1> */}
    <h3>
    <Typewriter options={{
          autoStart :true,
          loop:true,
          delay:50
        }}
        
        onInit = {(content)=>{
          content
          .typeString("Ready to find the perfect addition to your team?")
          .pauseFor(1000)
          .deleteAll()
          
          .start()
        }}
/>
</h3>
<h1>SkillMagnet</h1>
    <p>Click the category that best suits your hiring needs to get started.</p>
      <section className='categorySection'>
        <form onSubmit={handleSubmit}>
          <select defaultValue={course} onChange={(e) => setCourse(e.target.value)}>
            <option  value={course} disabled >Select Category </option>
            <option className='options'>Full Stack Learning</option>
            <option>Frontend</option>
            <option>Backend</option>
            <option>UI design</option>
            <option>UX design</option>
          </select>
          <button type='submit'>Show Condedate</button>
        </form>
      </section>
      </div>
      </div>
    </>
  );
}

export default Category;
