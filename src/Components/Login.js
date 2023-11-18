import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createAuth } from "../utils/authSlice";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(null); // State for error message
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    const phoneNumberPattern = /^[0-9]{10}$/;
    if (phoneNumberPattern.test(input)) {
      dispatch(createAuth({ phone: input, dial_code: "+91" }));
      setInput("");
      navigate(`/verification`);
    } else {
      setError("Please enter a valid 10-digit phone number.");
    }
  };

  return (
    <div className="bg-white  p-4 flex flex-col mx-auto justify-center">
      <h2 className="text-lg font-bold text-black1">
        Enter Your Mobile Number
      </h2>
      <p className="text-base text-grey1 font-medium">
        We will send you the 4 digit verification code
      </p>
      <input
        type="text"
        name="phone"
        id="phone"
        autoComplete="off"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        maxLength={10}
        placeholder="Enter your phone"
        className="border-borderColor border p-4 rounded-lg bg-lightBackgroundColor text-grey1 font-medium text-sm mt-10"
      />
      {error && ( // Display error message if there is an error
        <p className="text-red mt-2">{error}</p>
      )}
      <button
        onClick={handleLogin}
        className="bg-buttonColor text-white rounded-lg p-4 font-semibold text-sm mt-10"
      >
        Send Code
      </button>
    </div>
  );
};

export default Login;
