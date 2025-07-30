import React from 'react'
import {useState} from 'react';
import { Link } from 'react-router-dom';
import supabase from '../../helper/supabase.client';
const SignupForm = () => {
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");  
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
const handleSubmit = async (event) =>{
    event.preventDefault();
    setMessage("");
    const {data,error} = await supabase.auth.signUp({
        username:username,
        name:name,
        lastname:lastname,
        email:email,
        password:password
    }); 
    if(error){
        setMessage(error.message);
        return;
    }
    if(data){
        setMessage("Your account has been created succesfully!");

    }
    setUsername("");
    setName("");
    setLastName("");
    setEmail("");
    setPassword("");
    
};
  return (
    <>
    {message && <span  className="text-white">{message}</span>}
      <form onSubmit={handleSubmit}>
                         <div>
                            <div className = "grid-columns-3 mb-8">
                            <h2 className="text-white text-center text-5xl"> Create your account</h2>
                            <p className="text-white text-lg my-4 text-center">
                            Welcome! Let´s create your account
                            </p>
                            </div>
                            <div className="mt-6">
                            <label for="username" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Username</label>
                            <input
                            onChange={
                                (e) => setUsername(e.target.value)
                            } 
                            value={username}
                            required
                            type="username" name="username" id="username" placeholder="Create a username" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                            <div className="mt-6">
                            <label for="name" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Name</label>
                            <input 
                            onChange={
                                (e) => setName(e.target.value)
                            } 
                            value={name}
                            required
                            type="name" name="name" id="name" placeholder="Enter your name" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                            <div className="mt-6">
                            <label 
                            for="lastname" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last name</label>
                            <input 
                            onChange={
                                (e) => setLastName(e.target.value)
                            } 
                            value={lastname}
                            required
                            type="lastname" name="lastname" id="lastname" placeholder="Enter your last name" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                            <div class="mt-6">
                            <label
                            for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                            <input 
                             onChange={
                                (e) => setEmail(e.target.value)
                            } 
                            value={email}
                            required
                            type="email" name="email" id="email" placeholder="Register an email" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                        </div>

                        <div class="mt-6">
                            <div class="flex justify-between mb-2">
                                <label   
                                for="password" class="text-sm text-gray-600 dark:text-gray-200">Password</label>
                                <a href="#" class="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</a>
                            </div>

                            <input 
                            onChange={
                                (e) => setPassword(e.target.value)
                            } 
                            value={password}
                            required  
                            type="password" name="password" id="password" placeholder="Create a password" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div class="mt-6">
                            <button class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                Create account
                            </button>
                        </div>
     </form>
     <div className="text-white flex justify-items-center mt-6 space-x-6">
    <p> Already have an account? </p> 
    <Link to="/sign-in" className ="text-blue-400 hover:text-blue-700"> Sign in</Link>
    </div>
      </>
  )
}

export default SignupForm