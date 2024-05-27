import React from 'react';
import forgotpassword from '../../assets/auth/ForgotPassword.svg';
import { Link } from 'react-router-dom';

export const Allset = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center">
      <div className="hidden lg:flex h-auto lg:h-screen w-full lg:w-1/2 bg-dark-3">
        <div className="text-rose-1  text-4xl ml-6 mt-10">Qnect</div>
        <img src={forgotpassword} alt="" className="h-screen w-2/3" />
      </div>
      <div className="flex flex-col justify-center items-center gap-7 bg-dark-1 p-10 md:p-28 h-auto lg:h-screen w-full lg:w-1/2  text-white">
        <div className="visible lg:hidden text-rose-1  text-3xl text-left">Qnect</div>
        <img src={forgotpassword} alt="" className="lg:hidden h-auto" />
        <Link to="/register" className='flex justify-end w-full'>
          <div className="text-base text-right font-bold mb-4 text-rose-2">Sign up?</div>
        </Link>
        <div className="w-full  text-2xl text-left font-semibold ">All set 🙌🏽</div>
        <div className="w-full text-base text-left font-semibold text-rose-2">Your password has been reset.</div>
        <Link to="/" className="w-full bg-rose-1 text-center text-white py-2 px-4 rounded-lg hover:opacity-80">
          Login Now
        </Link>
        <div className={`flex justify-center items-end h-1/3 w-2/3 gap-4`}>
          <div className={`h-1 w-1/4 bg-white`}></div>
          <div className={`h-1 w-1/4 bg-white`}></div>
          <div className={`h-1 w-1/4 bg-white`}></div>
          <div className={`h-1 w-1/4 bg-rose-1`}></div>

        </div>
      </div>
    </div>
  );
};