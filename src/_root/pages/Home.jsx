import React from 'react'
import {Navigate, useNavigate} from 'react-router-dom';
import supabase from '../../helper/supabase.client'
const Home = () => {
  const navigate = useNavigate();
  const signOut = async () => {
    const {error} = await  supabase.auth.signOut();
   if(error)throw error;
   navigate("/sign-in");
  };
  return (
    <div>
    <h1> hello you are logged in</h1>
    <button onClick={signOut}> Sign out</button>
    </div>
  );
}

export default Home