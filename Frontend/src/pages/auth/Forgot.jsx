
import React, { useState } from 'react';
import forgotpassword from '../../assets/auth/ForgotPassword.svg';

export const Forgot = ({ togglePage }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`Password reset instructions sent to ${email}`);
    setEmail('');
    setTimeout(() => {
      setMessage(false);
    }, 5000);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center ">
      <div className="hidden lg:flex h-auto lg:h-screen w-full lg:w-1/2 bg-dark-3">
        <p className="text-rose-1 font-KulimPark text-4xl ml-6 mt-10">Qnect</p>
        <img src={forgotpassword} alt="" className="h-screen w-2/3" />
      </div>
      <div className="bg-dark-1 p-10 md:p-28 h-auto lg:h-screen w-full lg:w-1/2 font-KulimPark text-white">
        <p className="visible lg:hidden text-rose-1 font-KulimPark text-3xl text-left">Qnect</p>
        <img src={forgotpassword} alt="" className="lg:hidden h-auto" />
        <button onClick={() => togglePage('signup')} className='flex justify-end w-full'>
          <h6 className="text-base text-right font-bold mb-4 text-rose-2">Sign up?</h6>
        </button>
        <h2 className="text-xl text-left font-semibold mb-4 mt-8 lg:mt-14">Forgot Password?</h2>
        <h6 className="text-sm text-left font-semibold mb-4 text-rose-2">No worries, we will send you reset instructions.</h6>
        <form onSubmit={handleSubmit} className="my-4">
          <div className="mb-4 text-left">
            <label htmlFor="email" className="block text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full rounded-lg p-2 my-2 focus:outline-none bg-dark-3 text-white "
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-rose-1 text-white py-2 px-4 my-3 rounded-lg hover:opacity-80">
            Reset Password
          </button>
          <div>
            <h2 className="text-rose-2 mt-7 lg:mt-10 text-lg"><button className="mr-5 text-2xl">&larr;</button> Back to Login</h2>
          </div>
          <div className="text-green-500 mt-2 lg:mt-5 text-sm">
            {message}
          </div>
        </form>
      </div>
    </div>
  );
};
