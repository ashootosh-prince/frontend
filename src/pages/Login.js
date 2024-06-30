import React, { useState } from 'react'
import loginIcon from "../assest/signin.gif"
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import SummaryApi from '../common';
import { toast } from 'react-toastify';


const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [data, setData] = useState({
        email: "",
        password : ""
    })
    const navigate = useNavigate()

    const handleOnChange =(e) => {
        const { name , value } = e.target

        setData((preve) => {
            return {
                ...preve,
                [name] : value
            }
        })
    }
    const handleSubmit = async(e) => {
        e.preventDefault()

        const dataResponse = await fetch(SummaryApi.signIn.url, {
            method : SummaryApi.signIn.method,
            credentials : "include",
            headers : {
                "content.type" : "application/json"
            },
            body : JSON.stringify(data)
        })
        const dataApi = await dataResponse.json()

        if (dataApi.success){
            toast.success(dataApi.message)
            navigate("/")
        }

        if(dataApi.error){
            toast.error(dataApi.message)
        }
    }
    
    console.log("data login", data)

  return (
    <section id= "login">
        <div className='mx-auto container p-5'>
           <div className='bg-white p-4 w-full max-w-md mx-auto rounded'>
               <div className='w-20 h-20 mx-auto'>
                <img src={loginIcon} alt='login icons' className='rounded-full'/>
               </div>
               <from className='pt-6' onSubmit={ handleSubmit }>
                <div className='grid'>
                    <label>Email:</label>
                    <div className= 'bg-slate-100 p-2'>
                    <input
                     type='email'
                      placeholder='enter your email'
                      name='email'
                      value={data.email}
                      onChange={handleOnChange}
                      required
                       className='w-full f-full outline-none bg-transparent'/>
                    </div>
                </div>
                <div>
                    <label>Password:</label>
                    <div className='bg-slate-100 p-2 flex'>
                    <input 
                    type={showPassword ? "text" : 'password'} 
                    placeholder='enter your password'
                    name='password'
                    value={data.password}
                    onChange={handleOnChange}
                    required
                     className='w-full f-full outline-none bg-transparent'/>
                    <div className='text-xl cursor-pointer' onClick={()=>setShowPassword((preve)=>!preve)}>
                    <spam>
                        {
                            showPassword ? (
                                
                                <IoEye />
                            )
                            :
                            (
                                <IoMdEyeOff />
                            )
                        }
                    </spam>
                    </div>
                    </div>
                    <Link to={"/forgot-password"} className='block w-fit ml-auto hover:underline hover:text-red-500'>Forgot Password ?</Link>
                </div>
                <button type='submit' className='bg-red-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 mx-auto block mt-4'>login</button>
               </from>
               <p className='my-5'>Don't have account ? <Link to={"/signup"} className='text-red-600 hover:text-red-700 hover:underline' >Sign up</Link></p>
           </div>

        </div>
    </section>
  )
}

export default Login