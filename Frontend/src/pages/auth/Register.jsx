
import React, { useRef, useState } from 'react';
import signup from '../../assets/auth/SignUp.svg';
import { FcGoogle } from 'react-icons/fc';
import iconfacebook from '../../assets/auth/icon_facebook.svg';
import icongithub from '../../assets/auth/icon_github.svg';
import { Link } from 'react-router-dom';

export const Register = () => {
  const {leftSide}=useRef();
  const {rightSide}=useRef();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center font-poppins">
      <div ref={leftSide} className="bg-dark-1 p-10 md:p-28 h-auto lg:h-screen w-full lg:w-1/2 text-white">
        <p className="visible lg:hidden text-rose-1 text-3xl text-left">Qnect</p>
        <img src={signup} alt="" className="lg:hidden h-auto" />
        <div className="text-2xl font-semibold mb-4">Hey, let's get started!</div>
        <form className="flex justify-center items-center gap-5 flex-col w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 text-left w-full">
            <label htmlFor="email" className="block text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg p-2 focus:outline-none bg-dark-3 text-white "
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="flex flex-col gap-2 text-left w-full">
            <label htmlFor="password" className="block text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-lg p-2 focus:outline-none bg-dark-3 text-white  "
              placeholder="*********"
              required
              />
          </div>
          <div className="flex flex-col gap-2 text-left w-full">
            <label htmlFor="confirmPassword" className="block text-white">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full rounded-lg p-2 focus:outline-none bg-dark-3 text-white  "
              placeholder="*********"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-rose-1 text-white py-2 px-4 rounded-lg hover:opacity-80">
            Sign Up
          </button>
          <div className="h-3 border-b-2 border-white text-base mb-4 text-center w-full">
            <span className="px-3 bg-dark-1" >Or sign up with</span>
          </div>
          <div className="flex justify-center items-center">
            <button>
              <FcGoogle size={40} className="mr-5 bg-white rounded-lg" />
            </button>
            <button>
              <img src={iconfacebook} alt="" className="h-10 mr-5" />
            </button>
            <button>
              <img src={icongithub} alt="" className="h-10 bg-white rounded-lg" />
            </button>
          </div>
          <div className="text-center">
            Already have an account? <Link to="/" className="text-red-500">Log in</Link>
          </div>
          <br></br>
          <div className="text-center">
            By clicking the button above, you agree to our
            <span className="text-blue-1"> terms of use</span> and
            <span className="text-blue-1"> privacy policies</span>
          </div>
        </form>
      </div>
      <div ref={rightSide} className="hidden lg:flex h-auto lg:h-screen w-full lg:w-1/2 bg-dark-3">
        <p className="text-rose-1 text-4xl ml-6 mt-10">Qnect</p>
        <img src={signup} alt="" className="h-auto lg:h-screen w-2/3" />
      </div>
    </div>
  );
};


