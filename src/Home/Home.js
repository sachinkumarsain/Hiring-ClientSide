import React,{useEffect}  from 'react'
import images from './images.png'
// import { HireContext } from '../App';
import html from './image/html.png'
import css from './image/css.png'
import javascript from './image/javascript.png'
import bootstrap from './image/bootstrap.png'
import react from './image/react.png'
import redux from './image/redux.png'
import nodes from './image/node.png'
import express from './image/express.png'
import mongo from './image/mongo.png'
import gsap from 'gsap'
import "./Home.css"



function Home() {
  // const{setUsername} = useContext(HireContext)
  // const navigate = useNavigate()


  //.....................useForm.........................//
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
// } = useForm();

//..........................useEfffect.............//

// useEffect(()=>{
//   setUsername(localStorage.getItem("userLatter"))
// },[])

//.............................onclick function..........//



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
        {/* <section className='bannerAbout'>
          
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
<img src={css} alt='img' className='image'/>
<img src={javascript} alt='img' className='image'/>
<img src={bootstrap} alt='img' className='boostrap'/>
<img src={react} alt='img' className='react'/>
<img src={redux} alt='img' className='redux'/>
<img src={nodes} alt='img' className='node'/>
<img src={express} alt='img' className='express'/>
<img src={mongo} alt='img' className='mongo'/>
</div>
</div>

      
    </>
  )
}

export default Home