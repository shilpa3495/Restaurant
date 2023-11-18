import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { baseUrl } from "../constant";
import { createAuth } from "../utils/authSlice";
import { useNavigate } from 'react-router-dom';

const OtpVerification = () => {

  const navigate = useNavigate();

  const phoneValue = useSelector((state) => state.auth.phoneNumber);
  const dispatch=useDispatch();
  let phoneNumber={}
  console.group(phoneNumber)
  const [otpValues, setOtpValues] = useState(Array(6).fill(""));
  console.log("phonedd", phoneValue)

  const handleOtpChange = (index, value) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);
  };

  const handleResend = () => {
    phoneNumber = JSON.parse(phoneValue);
      dispatch(createAuth({phone:phoneNumber.phone, dial_code:`+91`}));
  };
  const handleVerify = async () => {
    const otpCode = otpValues.join('');
    try {
      phoneNumber = JSON.parse(phoneValue);
      const response = await axios.post(`${baseUrl}/pwa/user/login`, {
        phone: phoneNumber.phone,
        dial_code: `+91`,
        otp:otpCode,
      });
      // Handle successful response
      localStorage.setItem('token', JSON.stringify(response.data.data.token));
      navigate(`/restaurant`);
      console.log("Response after POST request:", response.data.data.token);
    } catch (error) {
      // Handle error
      console.error("Error making POST request: ", error);
    }
  };

  return (
    <div className="bg-white  p-4 flex flex-col mx-auto justify-center h-screen">
      <h2 className="text-lg font-bold text-black1">OTP Verification</h2>
      <p className="text-base text-grey1 font-medium">
        Enter the verification code we just sent on your Mobile Number.
      </p>
      <div className="flex gap-x-3">
        {otpValues.map((value, index) => (
          <input
            key={index}
            type="text"
            value={value}
            onChange={(e) => handleOtpChange(index, e.target.value)}
            maxLength={1}
            name={`digit-${index}`}
            id={`digit-${index}`}
            autoComplete="off"
            className="border-borderColor border p-4 rounded-lg bg-lightBackgroundColor text-grey1 font-medium text-sm my-10 w-12"
          />
        ))}
      </div>

      <button
        onClick={handleVerify}
        className="bg-buttonColor text-white rounded-lg p-4 font-semibold text-sm mb-5"
      >
        Verify
      </button>
      <p className="text-sm font-medium text-black1 flex justify-center gap-x-1">
        Didn’t received code?{" "}
        <div className="text-blueColor cursor-pointer" onClick={handleResend}>Resend</div>
      </p>
    </div>
  );
};

export default OtpVerification;
