import React from 'react';
import { Link } from 'react-router-dom';
import supabase from '../../helper/supabase.client';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";

const Topbar = () => {
    const navigate = useNavigate();
    const [userId,setUserId] = useState(null);
    useEffect(()=>{
      const getUser =  async () => {
        const{data} = await supabase.auth.getUser();
        setUserId(data?.user.id || null);
        
      };
      getUser();
    },[]);
  const signOut = async () => {
    const {error} = await  supabase.auth.signOut();
   if(error)throw error;
   navigate("/sign-in");
  };
  return (
  <section className="topbar">
    <div className="flex-between py-4 px-5">
      <Link to="/" className="flex gap-3 items-center">
        <img className="w-40 h-full text-white" 
        src="/images/internclublogo.svg"
        alt="logo"
        width={130}
        height={325}
        />
      </Link>
      <div className="flex gap-4"> 
            <button variant="ghost" className="shad-button_ghost" onClick={signOut}>
            <IoIosLogOut className="w-10 h-full text-white"/>
          </button>
          {userId && ( 
            <Link to={`/profile/${userId}`} className="flex-center gap-3 text-white ml-4">
            <FaUserCircle className="w-10 h-full"/>
            </Link>
        )}
      </div>
    </div>
  </section>
  )
}

export default Topbar;