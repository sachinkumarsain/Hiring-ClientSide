import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { useContext } from 'react';
// import { HireContext } from '../../App';


function Login() {

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
  
    
    function onSubmit(data) {
  
        axios.post('http://localhost:8080/userLogin', { data })
            .then((result) => {
              console.log(result.data)
                if (result.status === 200) {
                //   localStorage.setItem("userLatter" ,result.data.charAt(0).toUpperCase() )
                   
                localStorage.setItem("session", result.data)
                alert("Successful Login")
                    navigate("/category")
                }
                else if (result.status === 202) {
                    alert(result.data)
                }
            });
    }

    function moveRegister(){
        navigate("/register")
    }
    
      return (
        <>
    
          <section className='home'>
            <section className='login'>
            
              <form onSubmit={handleSubmit(onSubmit)}>
  
                <label>Username</label>
                <input placeholder='Enter username' type='text'
                {
                  ...register('username', { required: true, })}></input>
                {errors.username && <p role="alert">username is required</p>}
    
                <label>Password</label>
                <input placeholder='Enter password' type='text'
                {
                  ...register('password', { required: true, })}></input>
                {errors.password && <p role="alert">password is required</p>}
    
                <button type='submit'>Submit</button>
              </form>
              <button onClick={moveRegister} >Create Account</button>
            </section>
          </section>
        </>
      )
}

export default Login