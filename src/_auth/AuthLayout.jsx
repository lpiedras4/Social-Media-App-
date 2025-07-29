import React from 'react'
import SigninForm from './forms/SigninForm';
import SignupForm from './forms/SignupForm';
import {Outlet} from 'react-router-dom';
const AuthLayout = () => {
  return (
   <>
          <section className=" bg-black flex flex-1 justify-center items-center flex-col py-10" >
            <Outlet/>
          </section>
          <img
            src="https://www.shoptezza.com/cdn/shop/products/IMG_0777.jpg?v=1678158646"
            alt="logo"
            className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
          />
    </>

  )
}

export default AuthLayout