import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {useState} from 'react';
import supabase from '../../helper/supabase.client';
const SigninForm = () => {
const  navigate = useNavigate();
const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");  
  const [message, setMessage] = useState("");
const handleSubmit = async (event) =>{
    event.preventDefault();
    setMessage("");
    const {data,error} = await supabase.auth.signInWithPassword({
        email:email,
        password:password
    }); 
    if(error){
        setMessage(error.message);
        return;
    }
    if(data){
        navigate("/");
        return null;

    }
    setEmail("");
    setPassword("");
    
};
  return (
    <>
    {message && <span  className="text-white">{message}</span>}
     <form onSubmit={handleSubmit}>
                         <div>
                            <div className = "grid-columns-3 mb-8">
                            <h2 className="text-white text-center text-5xl"> Sign in to your account</h2>
                            <p className="text-white text-lg my-4 text-center">
                            Welcome back! Please enter your details.
                            </p>
                            </div>
                            <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                            <input 
                            onChange={
                                (e) => setEmail(e.target.value)
                            } 
                            value={email}
                            required
                            type="email" name="email" id="email" placeholder="example@example.com" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div class="mt-6">
                            <div class="flex justify-between mb-2">
                                <label for="password" class="text-sm text-gray-600 dark:text-gray-200">Password</label>
                                <a href="#" class="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</a>
                            </div>

                            <input 
                             onChange={
                                (e) => setPassword(e.target.value)
                            } 
                            value={password}
                            required  
                            type="password" name="password" id="password" placeholder="Your Password" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div class="mt-6">
                            <button class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                Sign in
                            </button>
                        </div>
                        <div className="text-white flex justify-between items-center mt-10">
                            <p> Don´t have an account? </p> 
                            <Link to="/sign-up" className ="text-blue-400 hover:text-blue-700"> Sign up</Link>
                        </div>

     </form>
     </>
  )
}

export default SigninForm