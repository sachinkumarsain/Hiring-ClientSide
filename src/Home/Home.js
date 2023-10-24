import React from 'react'
import "./Home.css"
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



// import video from "../images/video.mp4"

function Home() {

  const navigate = useNavigate()

  //.....................useForm.........................//
  const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm();


function onSubmit(data) {
    console.log(data);

    axios.post('http://localhost:8080/user', { data }, )
        .then((result) => {
            if (result.status === 200) {
                console.log(result.data)
                navigate("/category")
            }
            else if (result.status === 202) {
                alert(result.data)
            }
        });
}
  return (
    <>

      <section className='home'>
        <section className='bannerAbout'>
          {/* <video className='videoTag' autoPlay loop muted>
            <source src={video} type='video/mp4' />
          </video> */}
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
      </section>
    </>
  )
}

export default Home