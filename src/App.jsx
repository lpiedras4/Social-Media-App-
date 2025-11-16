import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './globals.css';
import SigninForm from './_auth/forms/SigninForm';
import {Home,Explore, Saved, CreatePost, EditPost, PostDetails, Profile, UpdateProfile, AllUsers } from './_root/pages';
import SignupForm from './_auth/forms/SignupForm';
import RootLayout from './_root/RootLayout';
import AuthLayout from './_auth/AuthLayout';
import Wrapper from './_root/pages/Wrapper';

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
      <Route path="/"element={<Wrapper><RootLayout/></Wrapper>}>
         <Route index element={<Home/>} />
         <Route path="/explore" element={<Explore/>} />
         <Route path="/saved" element={<Saved/>} />
         <Route path="/create-post" element={<CreatePost/>} />
         <Route path="/update-post/:id" element={<EditPost/>} />
         <Route path="/posts/:id" element={<PostDetails/>} />
         <Route path="/profile/:id/*" element={<Profile/>} />
         <Route path="/all-users" element={<AllUsers />} />
         <Route path="/update-profile/:id" element={<UpdateProfile/>} />
      </Route>
    
      
    </Routes>
   
    
    </main>
   
  );
}

export default App