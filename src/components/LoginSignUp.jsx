import React from 'react'
import { useState } from 'react'
import { GoogleLogin } from '@react-oauth/google';

const LoginSignUp = () => {

  const [state , setstate] = useState("Login")
  const [formData , setformData] = useState({
    username : "" ,
    password : "" ,
    email : ""
    })

    const changeHandler = (e) => {
      setformData({
       ...formData,
        [e.target.name] : e.target.value
      })
    }

  const login = async () => {
    console.log("Login Function Executed" , formData);
    let responseData;
    await fetch("https://snbpnestbackend.vercel.app/login" , {
      method: 'POST',
      headers: {
        Accept:'application/form-data' ,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then((response) => response.json()).then((data) => responseData = data)

    if(responseData.success) {
      localStorage.setItem('auth-token', responseData.token)
      window.location.replace("/");
    } else {
      alert(responseData.error)
    }
  }

  const signup = async () => {
    console.log("Sign Up function Executed"  , formData);
    let responseData;
    await fetch("https://snbpnestbackend.vercel.app/signup" , {
      method: 'POST',
      headers: {
        Accept:'application/form-data' ,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then((response) => response.json()).then((data) => responseData = data)

    if(responseData.success) {
      localStorage.setItem('auth-token', responseData.token)
      window.location.replace("/");
    } else {
      alert(responseData.error)
    }
  }


  return (
    <div className='loginsignup font-bebas flex justify-center items-center w-full h-[88.9vh] '>
      <div className='loginsignup-container flex flex-col gap-5 justify-center items-center p-10'>
        <h1 className='text-2xl font-bold text-[#403B58]'>{state}</h1>
        <div className='loginsignup-fields flex flex-col gap-5'>
          {state === "Sign Up" ? <input name="username" value={formData.username} onChange={changeHandler} className='w-62 p-2' type="text" placeholder='Your Name' /> : <></>}
          <input name='email' value={formData.email} onChange={changeHandler} className='w-62 p-2' type="text" placeholder='Email Id' />
          <input name='password' value={formData.password} onChange={changeHandler} className='w-62 p-2' type="password" placeholder='Password' />
        </div>
        <button onClick={() => {state === "Login" ? login() : signup()}} className='border-2 border-yellow-500 rounded-md px-3 py-1 text-yellow-500'>Continue</button>
        {state === "Sign Up" ?<p className='font-semibold'> Already have an Account ? <span  onClick={() => {setstate("Login")}} className='text-yellow-500 cursor-pointer'>Login here</span></p> : <p className='font-semibold cursor-pointer'> Create an Account ? <span onClick={() => {setstate("Sign Up")}} className='text-yellow-500'>Click here</span></p> }
        
        <div className='flex gap-2 justify-center items-center'>
          
          <input className='mt-1' type="checkbox" name='' id='' />
          <p>By Continuing , i agree to terms & conditions and privacy policy.</p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignUp
