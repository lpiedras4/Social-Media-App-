import React from 'react';
import { Link } from 'react-router-dom';
import supabase from '../../../helper/supabase.client';
import { useNavigate } from 'react-router-dom';
const TopBar = () => {
    const navigate = useNavigate();
  const signOut = async () => {
    const {error} = await  supabase.auth.signOut();
   if(error)throw error;
   navigate("/sign-in");
  };
  return (
  <section className="topbar">
    <div className="flex-between py-4 px-5">
      <Link to="/" className="flex gap-3 items-center">
        <img className="w-50 h-full" 
        src="/images/logo.svg"
        alt="logo"
        width={130}
        height={325}
        />
      </Link>
      <div className="flex gap-4">
      <button variant="ghost" className="shad-button_ghost" onClick={signOut}>
        <img src="/images/logout.svg"/>
      </button>
      </div>
    </div>
  </section>
  )
}

export default TopBar