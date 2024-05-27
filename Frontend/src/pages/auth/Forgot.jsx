import { FaArrowLeft } from "react-icons/fa6";
import React, { useState } from 'react';
import forgotpassword from '../../assets/auth/ForgotPassword.svg';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
// import s from '../../style'

export const Forgot = ({ togglePage }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`Password reset instructions sent to ${email}`);
    setEmail('');
    navigate('/reset');
    setTimeout(() => {
      setMessage(false);
    }, 5000);
  };
  // let isCondition = true;

  // const custombg = isCondition ? 'bg-rose-1' : 'bg-white';

  return (
    <div className="flex flex-col lg:flex-row items-center font-poppins justify-center ">
      <div className="hidden lg:flex h-auto lg:h-screen w-full lg:w-1/2 bg-dark-3">
        <p className="text-rose-1  text-4xl ml-6 mt-10">Qnect</p>
        <img src={forgotpassword} alt="" className="h-screen w-2/3" />
      </div>
      <div className="flex flex-col justify-center items-center bg-dark-1 p-10 md:p-28 h-auto lg:h-screen w-full lg:w-1/2 text-white">
        <div className="visible lg:hidden text-rose-1  text-3xl text-left">Qnect</div>
        <img src={forgotpassword} alt="" className="lg:hidden h-auto" />
        <Link to="/register" className='flex justify-end w-full font-bold mb-4 text-rose-2'>
          Sign up?
        </Link>
        <div className="flex justify-start w-full text-xl font-semibold mb-4 mt-8 lg:mt-14">Forgot Password?</div>
        <div className=" flex justify-start w-full text-sm text-left font-semibold mb-4 text-rose-2">No worries, we will send you reset instructions.</div>
        <form onSubmit={handleSubmit} className="my-4 flex justify-center items-center w-full flex-col gap-5">
          <div className="flex flex-col w-full text-left">
            <label htmlFor="email" className="block text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full rounded-lg p-2 my-2 focus:outline-none bg-dark-3 text-white "
              placeholder="Enter your email"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-rose-1 text-white py-2 px-4 mb-4 rounded-lg hover:opacity-80">
            Reset Password
          </button>
          <div className="flex justify-start items-center gap-3 text-rose-2  w-full  text-lg">
            <Link to="/"><FaArrowLeft /></Link>
            Back to Login
          </div>

          <div className="text-green-500  text-sm">
            {message}
          </div>
        </form>

        <div className={`flex justify-center items-end h-1/6 w-2/3 gap-4`}>
          <div className={`h-1 w-1/4 bg-rose-1`}></div>
          <div className={`h-1 w-1/4 bg-white`}></div>
          <div className={`h-1 w-1/4 bg-white`}></div>
          <div className={`h-1 w-1/4 bg-white`}></div>

        </div>
      </div>
    </div>
  );
};
