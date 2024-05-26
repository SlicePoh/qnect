import React, { useState } from 'react';
import login from '../../assets/auth/Login.svg';
import { FcGoogle } from 'react-icons/fc';
import iconfacebook from '../../assets/auth/icon_facebook.svg';
import { FaGithub } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import s from '../../style'

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const navigate= useNavigate();

    const handleLogin = () => {
        // Add your authentication logic here
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Remember Me:', rememberMe);
      navigate("/main");
    };

    return (
        <div className="flex flex-col lg:flex-row items-center justify-center font-poppins">
            <div className="hidden lg:flex h-auto lg:h-screen w-full lg:w-1/2 bg-dark-3">
                <p className="text-rose-1  text-4xl ml-6 mt-10">Qnect</p>
                <img src={login} alt="" className="h-auto lg:h-screen w-2/3" />
            </div>
            <div className="flex justify-center items-center flex-col bg-dark-1 p-10 md:p-28 h-auto lg:h-screen w-full lg:w-1/2  text-white">
                <p className="visible lg:hidden text-rose-1  text-3xl text-left">Qnect</p>
                <img src={login} alt="" className="lg:hidden h-auto" />
                <h2 className="text-2xl font-semibold mb-4">Hello👋🏽, welcome back!</h2>
                <form className={`${s.flexCenter} flex-col w-full gap-5`}>
                    <div className="flex flex-col w-full text-left">
                        <label className="block text-white mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="w-full rounded-lg p-2 focus:outline-none bg-dark-3 text-white"
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col w-full text-left">
                        <label className="block text-white mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="w-full rounded-lg p-2 focus:outline-none bg-dark-3 text-white"
                            id="password"
                            type="password"
                            placeholder="*********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                            <input
                                className="mr-2 leading-5"
                                type="checkbox"
                                id="rememberMe"
                                checked={rememberMe}
                                onChange={() => setRememberMe(!rememberMe)}
                            />
                            <label className="text-sm text-white" htmlFor="rememberMe">
                                Remember Me
                            </label>
                        </div>
                        <Link to="/forgot" className="text-blue-1 hover:underline text-sm focus:outline-none">
                            Forgot Password?
                        </Link>
                    </div>
                    <button className="w-full bg-rose-1 text-white py-2 px-4 rounded-lg hover:opacity-80" onClick={handleLogin}>
                        Log In
                    </button>
                    <div className="h-3 border-b-2 border-white text-base text-center mb-4 w-full">
                        <span className="px-3 bg-dark-1" >Or sign up with</span>
                    </div>
                    <div className="flex justify-center items-center gap-5">
                        <a href="/" target="_blank">
                            <FcGoogle className="w-10 h-10 bg-white rounded-lg" />
                        </a>
                        <a href="/" target="_blank" rel="noopener noreferrer">
                        <img src={iconfacebook} alt="facebookIcon" className="h-10 " />
                        </a>
                        <a href="/" target="_blank">
                          <FaGithub className="w-10 h-10 text-black bg-white rounded-lg"/>
                        </a>
                    </div>
                    <div className="text-center mt-5">
                        Don’t have an account yet? <Link to="/register" className="text-red-500">Sign up</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};
