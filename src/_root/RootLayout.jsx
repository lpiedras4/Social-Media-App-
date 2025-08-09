import React from 'react'
import { Outlet } from 'react-router-dom';
import TopBar from './pages/components/TopBar';
import LeftSidebar from './pages/components/LeftSidebar';
import Bottombar from './pages/components/Bottombar';
const RootLayout = () => {
   
  return (
    <div className='w-full md:flex bg-slate-950'> 
      <TopBar />
      <div className="md:flex">
      <LeftSidebar/>
      </div>
      <section className="flex flex-1 h-full">
        <Outlet />
      </section>
      <Bottombar/>
    </div>
    
    
  )
}

export default RootLayout