import React, { useEffect, useRef, useState } from 'react'

export const OTPInput = ({ value, onChange }) => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const inputsRef = useRef([]);

    useEffect(() => {
        inputsRef.current[0].focus();
    }, []);

    const handleChange = (element, index) => {
        const value = element.value;
        if (/[^0-9]/.test(value)) return;

        let newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value !== '' && index < inputsRef.current.length - 1) {
            inputsRef.current[index + 1].focus();
        }
    };

    const handleKeyDown = (event, index) => {
        if (event.key === 'Backspace' && otp[index] === '' && index > 0) {
            inputsRef.current[index - 1].focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const enteredOtp = otp.join('');
        console.log("Entered OTP: ", enteredOtp);
        // OTP validation logic
    };

    return (
        <form className='flex flex-col w-full items-center justify-center text-left gap-5' onSubmit={handleSubmit}>
            <div className="w-full text-left text-rose-2">Enter OTP to Reset Password</div>
            <div className="otp-container flex gap-3">
                {otp.map((_, index) => (
                    <input
                        key={index}
                        type="text"
                        maxLength="1"
                        className="w-12 h-12 text-2xl text-center border-2 border-rose-1 rounded-md focus:outline-none bg-dark-3"
                        value={otp[index]}
                        onChange={(e) => handleChange(e.target, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        ref={el => inputsRef.current[index] = el}
                    />
                ))}
            </div>
        </form>
    );
};