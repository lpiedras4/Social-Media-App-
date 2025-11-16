import React from 'react'
import { useNavigate, Link, NavLink, useLocation } from 'react-router-dom';
import supabase from '../../helper/supabase.client';
import { useState, useEffect } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { sidebarLinks } from '../../constants/index.jsx';

const LeftSidebar = () => {
  const {pathname} = useLocation();
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
      <div className="flex flex-col gap-11">
        <Link to="/" className="flex gap-3 items-center">
        <img className="w-40 h-full text-white" 
        src="/images/logo.svg"
        alt="logo"
        width={130}
        height={325}
        />
      </Link>
        <Link to={`/profile/${userId}`} className="flex gap-3 items-center">
          <FaUserCircle className="text-white w-15 h-full"/>
          <div className="flex flex-col">  
            <p className="body-bold text-white">
              {name} {lastName}
            </p>
            <p className="small-regular text-light-3">
              @{username}
            </p>
          </div>
        </Link>
        <ul className="flex flex-col gap-6">
          {sidebarLinks.map((link)=>{
            const isActive = pathname === link.route;
            return(
              <li key={link.label}
              className={`leftsidebar-link group ${
                isActive && "bg-primary-500"
              }`}> 
                <NavLink
              to={link.route}
              className="flex gap-4 items-center p-4">
               <link.icon className={`group-hover:invert-white ${isActive && "invert-white"}`}/>
               <span> {link.label} </span> 
              </NavLink>
               
              </li>
              
            )
          })}
        </ul>
      </div>  
          
    </nav>
  
  )
}

export default LeftSidebar