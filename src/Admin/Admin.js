import React from 'react'
import { useForm } from 'react-hook-form';
import axios from "axios"

function Admin() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    function onSubmit(data) {
        console.log(data);

        axios.post('http://localhost:8080/admin', { data }, 
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          }})
            .then((result) => {
                if (result.status === 200) {
                    console.log(result.data)
                }
                else if (result.status === 202) {
                    alert(result.data)
                }
            });
    }
    return (
        <>
            <section>
                <form onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data '>
                    <lebal>Full Name</lebal>
                    <input
                        {
                        ...register('fullname', { required: true, })}
                        placeholder='Enter Full Name' type='text'></input>

                    {errors.fullname && <p role="alert">Fullname is required</p>}


                    <lebal >Profile Pic</lebal>
                    <input placeholder='Enter Linkedin Link' type='file'{
                        ...register('profilePic', { required: true, })}></input>{errors.profilePic && <p role="alert">profilePic is required</p>}


                    <lebal>Certificate</lebal>
                    <select
                        {
                        ...register('course', { required: true, })}
                    >
                        <option>Select Game</option>
                        <option>Full Stack Learning</option>
                        <option>Frontend</option>
                        <option>Backend</option>
                        <option>UI design</option>
                        <option>UX design</option>
                    </select>


                    {errors.course && <p role="alert">course is required</p>}


                    <lebal>Email</lebal>
                    <input placeholder=' Enter email' type="email" {
                        ...register('email', { required: true, })}></input>{errors.email && <p role="alert">email is required</p>}

                    <lebal>mobile</lebal>
                    <input type='number' placeholder='Enter mobile number'{
                        ...register('mobile', { required: true, })}></input>{errors.mobile && <p role="alert">mobile is required</p>}


                    <lebal>Address</lebal>
                    <textarea{
                        ...register('address', { required: true, })}></textarea>{errors.address && <p role="alert">address is required</p>}

                    <lebal >Linkedin</lebal>
                    <input placeholder='Enter Linkedin Link' type='text'{
                        ...register('linkedin', { required: true, })}></input>{errors.linkedin && <p role="alert">linkedin is required</p>}

                    <lebal >Github</lebal>
                    <input placeholder=' Enter Github Link' {
                        ...register('github', { required: true, })}></input>{errors.github && <p role="alert">gitub is required</p>}


                    <lebal>Enter summary</lebal>
                    <textarea type="text"{
                        ...register('summary', { required: true, })}></textarea>{errors.summary && <p role="alert">summary is required</p>}

                    <h2>Skills</h2>  

                    <lebal>Skills</lebal>
                    <input placeholder='Enter Skills'{
                        ...register('skills', { required: true, })}></input>{errors.skills && <p role="alert">skills is required</p>}

                    <h2>Lanuages</h2>
                    <lebal>Lanuages</lebal>
                    <input placeholder='Enter lanuages'{
                        ...register('lanuages', { required: true, })}></input>{errors.lanuages && <p role="alert"> lanuages is required</p>}

                        <button type='submit'> submit</button>

                </form>
            </section>
        </>
    )
}

export default Admin