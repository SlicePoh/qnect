import React, { useRef, useState } from 'react';
import signup from '../../assets/auth/SignUp.svg';
import { FcGoogle } from 'react-icons/fc';
import iconfacebook from '../../assets/auth/icon_facebook.svg';
import icongithub from '../../assets/auth/icon_github.svg';
import { Link, useNavigate } from 'react-router-dom';
import s from '../../style';
import { RxCross2 } from 'react-icons/rx';
import { useDispatch } from 'react-redux';
import { signupUser } from '../../redux/slices/User';

export const Register = () => {
  const leftSide = useRef();
  const rightSide = useRef();
  const [deetModalOpen, setDeetModalOpen] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate =useNavigate();
  const dispatch =useDispatch();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    college: '',
    department: '',
    year: ''
  });
  const [signupError, setSignupError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === confirmPassword) {
      setDeetModalOpen(!deetModalOpen)
      console.log(formData);
    } else if (formData.password === '' || formData.email === '' || confirmPassword === '') {
      setSignupError("Fill out empty fields!!");
    } else {
      setSignupError("Passwords doesn't match!!");
    }
  };

  const handleSignup = () => {
    console.log(formData);
    dispatch(signupUser({name: formData.name,email: formData.email,
      password: formData.password,year: formData.year, department: formData.department,college: formData.college}))
    navigate("/");
  }

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
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
              className="w-full rounded-lg p-2 focus:outline-none bg-dark-3 text-white" placeholder="Enter your email" required
            />
          </div>
          <div className="flex flex-col gap-2 text-left w-full">
            <label htmlFor="password" className="block text-white">
              Password
            </label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange}
              className="w-full rounded-lg p-2 focus:outline-none bg-dark-3 text-white " placeholder="*********" required
            />
          </div>
          <div className="flex flex-col gap-2 text-left w-full">
            <label htmlFor="confirmPassword" className="block text-white">
              Confirm Password
            </label>
            <input type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} required
              className="w-full rounded-lg p-2 focus:outline-none bg-dark-3 text-white" placeholder="*********"
            />
          </div>
          <button type="submit" className=" w-full bg-rose-1 text-white py-2 px-4 rounded-lg hover:opacity-80">
            Next
          </button>
          <div className="text-red-600 font-medium">{signupError}</div>
          <div className="hidden h-3 border-b-2 border-white text-base text-center w-full">
            <span className="px-3 bg-dark-1">Or sign up with</span>
          </div>
          <div className="hidden justify-center items-center">
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
      {deetModalOpen &&
        <div className={`${s.flexSS} z-20 font-kulim absolute flex-col rounded-xl py-8 md:py-10 bg-dark-1 text-white gap-5 px-16 w-1/2 h-auto text-center text-sm md:text-base`}>
          <div className={`${s.flexCenter} w-full`}>
            <div className="text-right inline-block w-2/3 text-3xl font-semibold text-rose-1">Welcome to Qnect!</div>
            <div className="flex w-1/3 justify-end">
              <RxCross2 className='text-2xl text-white cursor-pointer' onClick={() => setDeetModalOpen(!deetModalOpen)} />
            </div>
          </div>
          <div className="flex flex-col w-full text-left">
            <label className="block text-white mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full rounded-lg p-2 focus:outline-none bg-dark-3 text-white"
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-full text-left">
            <label className="block text-white mb-2" htmlFor="college">
              College Name
            </label>
            <input
              className="w-full rounded-lg p-2 focus:outline-none bg-dark-3 text-white"
              id="college"
              name="college"
              type="text"
              placeholder="Academy of Technology"
              value={formData.college}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-full text-left">
            <label className="block text-white mb-2" htmlFor="department">
              Department
            </label>
            <input
              className="w-full rounded-lg p-2 focus:outline-none bg-dark-3 text-white"
              id="department"
              name="department"
              type="text"
              placeholder="CSE"
              value={formData.department}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-full text-left">
            <label className="block text-white mb-2" htmlFor="year">
              Year
            </label>
            <select className="w-full rounded-lg p-2 focus:outline-none bg-dark-3 text-white"
              id="year" name="year" value={formData.year} onChange={handleChange} placeholder='2023'>
              <option value="" disabled>Select your year</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <button onClick={handleSignup} className=" w-full bg-rose-1 text-white py-2 px-4 rounded-lg hover:opacity-80">
            Sign Up
          </button>
        </div>
      }
    </div>
  );
};
