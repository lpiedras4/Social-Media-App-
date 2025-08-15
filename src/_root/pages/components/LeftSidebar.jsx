import React from 'react'
import { Link } from 'react-router-dom';
import { BiHomeSmile } from "react-icons/bi";
import supabase from '../../../helper/supabase.client';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaUserCircle } from "react-icons/fa";
const LeftSidebar = () => {
    const navigate = useNavigate();
    const [userId,setUserId] = useState(null);
    const[username,setUsername] = useState("");
    const [name,setName] = useState("");
    const [lastName,setLastName] = useState("");
    useEffect(()=>{
      const getUserData =  async () => {
        const{data:userData} = await supabase.auth.getUser();
        const id = userData?.user?.id || null
        setUserId(id);

        if(id){
          const {data:profileData} = await supabase
          .from("profiles")
          .select("*")
          .eq("id", id)
          .single();
          setUsername(profileData?.username || "");
          setName(profileData?.name || "");
          setLastName(profileData?.lastname || "");
        }
      };
      getUserData();
    },[]);
  return (
    <nav className="leftsidebar"> 
      <div className="flex flex-col gap-10">
        <Link to="/" className="flex gap-3
        items-center">
          <BiHomeSmile className="text-white w-15 h-full"/>
        </Link>
        <Link to={`/profile/${userId}`} className="flex gap-3 items center">
          <FaUserCircle className="text-white w-15 h-full"/>
          <div className="flex flex-col">  
            <p className="body-bold text-white">
              {name} {lastName}
            </p>
            <p className="small-regular text-gray-600">
              @{username}
            </p>

          </div>
        </Link>
      </div>  

    </nav>
  
  )
}

export default LeftSidebar