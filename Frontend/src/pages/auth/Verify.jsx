import React, { useState, useEffect } from 'react';
import forgotpassword from '../../assets/auth/ForgotPassword.svg';
import { OTPInput } from './OTPInput';
import { FaArrowLeft } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';

export const Verify = ({ onSignup, onSetNewPassword, onLogin }) => {
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(150);
  const navigate=useNavigate();

  useEffect(() => {
    let interval;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timer]);

  const handleResend = () => {
    // Add logic to resend OTP here
    setTimer(150); // Reset the timer
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center">
      <div className="hidden lg:flex h-auto lg:h-screen w-full lg:w-1/2 bg-dark-3">
        <p className="text-rose-1 text-4xl ml-6 mt-10">Qnect</p>
        <img src={forgotpassword} alt="" className="h-screen w-2/3" />
      </div>
      <div className="flex flex-col justify-center items-center gap-5 bg-dark-1 p-10 md:p-28 h-auto lg:h-screen w-full lg:w-1/2  text-white">
        <p className="visible lg:hidden text-rose-1 text-3xl text-left">Qnect</p>
        <img src={forgotpassword} alt="" className="lg:hidden h-auto" />
        <button onClick={onSignup} className='flex justify-end w-full'>
          <h6 className="text-base text-right font-bold  text-rose-2">Sign up?</h6>
        </button>
        <div className="w-full text-2xl text-left font-semibold">Password Reset</div>
        <OTPInput value={otp} onChange={setOtp} />
        <button className="w-full bg-rose-1 text-white py-2 px-4 rounded-lg hover:opacity-80"
          onClick={()=>navigate("/allset")}>
          Verify
        </button>
        <button
          className="text-blue-1 w-full text-left"
          onClick={handleResend}
          disabled={timer > 0}>
          Resend OTP {timer > 0 && `after ${timer}s`}
        </button>
        <div className="flex justify-start items-center gap-3 text-rose-2 text-lg">
          <Link to="/"><FaArrowLeft /></Link>
          Back to Login
        </div>
        <div className={`flex justify-center items-end h-1/6 w-2/3 gap-4`}>
          <div className={`h-1 w-1/4 bg-white`}></div>
          <div className={`h-1 w-1/4 bg-white`}></div>
          <div className={`h-1 w-1/4 bg-rose-1`}></div>
          <div className={`h-1 w-1/4 bg-white`}></div>
        </div>
      </div>

    </div>
  );
};

