import React, { useEffect } from 'react'
import "./Home.css"
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import images from './images.png'
import { HireContext } from '../App';
import html from './image/html.png'
import css from './image/css.png'
import javascript from './image/javascript.png'
import bootstrap from './image/bootstrap.jpg'
import react from './image/react.png'
import redux from './image/redux.png'
import nodes from './image/nodes.png'
import express from './image/express.png'
import mongo from './image/mongo.png'

import gsap from 'gsap'


// import video from "../images/video.mp4"

function Home() {
  const{setUsername} = useContext(HireContext)
  const navigate = useNavigate()


  //.....................useForm.........................//
  const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm();

//..........................useEfffect.............//

useEffect(()=>{
  setUsername(localStorage.getItem("userLatter"))
},[])

//.............................onclick function..........//

// function onSubmit(data) {


//     axios.post('http://localhost:8080/user', { data })
//         .then((result) => {
//           console.log(result.data)
//             if (result.status === 200) {
//               localStorage.setItem("userLatter" ,result.data.charAt(0).toUpperCase() )
               
//                 navigate("/category")
//             }
//             else if (result.status === 202) {
//                 alert(result.data)
//             }
//         });
// }

//......................gsap use.............//


// useEffect(()=>{
//   gsap.from('.singleBook',{
  
//   duration:1,
//   scale: 0.7,
//   stagger:0.3
  
//   } ,[])


useEffect(()=>{
  gsap.to('.right',{
    duration:1,
    scale:0.8,
    stagger:0.3
  })
},[])


  return (
    <>
    <div className='home'>
{/* 
      <section className='home'>
        <section className='bannerAbout'>
          <video className='videoTag' autoPlay loop muted>
             <source src={video} type='video/mp4' />
          </video>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>name</label>
            <input placeholder='enter Full Name'  {
                        ...register('fullname', { required: true, })}></input>
                        {errors.fullname && <p role="alert">Full Name is required</p>}


            <label>Company Email</label>
            <input placeholder='Enter Company Email' type='text'
            {
              ...register('companyEmail', { required: true, })}></input>
            {errors.companyEmail && <p role="alert">Company Email is required</p>}

            <button type='submit'>Submit</button>
          </form>
        </section>
      </section> */}


      
<div className='left'>
  {/* <img  className='fsl' src={fsl}/> */}
        <h1>Shaping your  company's future with best recruitment. </h1>
        <p> Post your job listings, access a vast pool of talent, and streamline your hiring process with ease. Your next ideal candidate is just a click away. Join us and find the perfect fit for your organization.</p>
      </div>

      <div className='right'>
      <img src={images}/>
      
      </div>
      


      </div>

      <div className='allList'>

<div className='image-container'>
<img src={html} alt='img' className='images'/>
<img src={css} alt='img' className='images'/>
<img src={javascript} alt='img' className='images'/>
<img src={bootstrap} alt='img' className='images'/>
<img src={react} alt='img' className='images'/>
<img src={redux} alt='img' className='images'/>
<img src={nodes} alt='img' className='images'/>
<img src={express} alt='img' className='images'/>
<img src={mongo} alt='img' className='images'/>
</div>
</div>
    </>
  )
}

export default Home