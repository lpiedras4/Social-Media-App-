import React from 'react'
import {Routes, Route} from 'react-router-dom';
import './index.css';
import SigninForm from './_auth/forms/SigninForm';
import {Home} from './_root/pages';
import SignupForm from './_auth/forms/SignupForm';
import RootLayout from './_root/RootLayout';
import AuthLayout from './_auth/AuthLayout';
const App = () => {
  return (
    <main className='flex h-screen'> 
    <Routes>
    {/*public routes*/}
    <Route element={<AuthLayout />}>
      <Route path = "/sign-in" element={<SigninForm/>} />
      <Route path = "/sign-up" element={<SignupForm/>} />
    </Route>

      {/*private routes*/}
      <Route element={<RootLayout/>}>
         <Route index element={<Home/>}/>
      </Route>
    </Routes>
   
    
    </main>
   
  );
}

export default App