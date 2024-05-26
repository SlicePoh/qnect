import React, { useState } from 'react';
import forgotpassword from '../../assets/auth/ForgotPassword.svg';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';

export const Reset = ({ onSignup, onAllSet, onLogin }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate=useNavigate();
  const handleNewPasswordChange = (e) => {
    const value = e.target.value;
    setNewPassword(value);
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/verify");
    console.log('New password submitted:', newPassword);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center">
      <div className="hidden lg:flex h-auto lg:h-screen w-full lg:w-1/2 bg-dark-3">
        <p className="text-rose-1 font-KulimPark text-4xl ml-6 mt-10">Qnect</p>
        <img src={forgotpassword} alt="" className="h-screen w-2/3" />
      </div>
      <div className="flex flex-col justify-center items-center gap-5 bg-dark-1 p-10 md:p-28 h-auto lg:h-screen w-full lg:w-1/2 text-white">
        <p className="visible lg:hidden text-rose-1 font-KulimPark text-3xl text-left">Qnect</p>
        <img src={forgotpassword} alt="" className="lg:hidden h-auto" />
        <button onClick={onSignup} className='flex justify-end w-full'>
          <div className="text-base text-right font-bold text-rose-2">Sign up?</div>
        </button>
        <div className="text-xl text-left font-semibold ">Set new password</div>
        <div className="text-base text-left font-semibold text-rose-2">Must be atleast 8 characters.</div>
        <form onSubmit={handleSubmit} className=" flex justify-center items-center w-full flex-col gap-5">
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="newPassword" className="block text-left text-white">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={newPassword}
              onChange={handleNewPasswordChange}
              placeholder="*********"
              className="w-full rounded-lg p-2 focus:outline-none bg-dark-3 text-white"
              required
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="confirmPassword" className="block text-left text-white">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              placeholder="*********"
              className="w-full rounded-lg p-2 focus:outline-none bg-dark-3 text-white"
              required
            />
          </div>
          <button
            type="submit"
            onClick={onAllSet}
            className="w-full bg-rose-1 text-white py-2 px-4 rounded-lg hover:opacity-80">
            Continue
          </button>
          <div className="flex justify-start items-center gap-3 text-rose-2 text-lg">
              <Link to="/"><FaArrowLeft /></Link>
              Back to Login
            </div>
        </form>
        <div className={`flex justify-center items-end h-1/6 w-2/3 gap-4`}>
          <div className={`h-1 w-1/4 bg-white`}></div>
          <div className={`h-1 w-1/4 bg-rose-1`}></div>
          <div className={`h-1 w-1/4 bg-white`}></div>
          <div className={`h-1 w-1/4 bg-white`}></div>

        </div>
      </div>
    </div>
  );
};
