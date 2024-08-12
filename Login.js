import React, { useState } from "react";
import login from "../Images/login.jpg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase/Setup";

function Login() {
  const [phone, setphone] = useState("");
  const [user, setuser] = useState(null);
  const [otp, setotp] = useState("");
  const setndotp = async () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
      const configuration = await signInWithPhoneNumber(auth, phone, recaptcha);
      setuser(configuration);
    } catch (err) {
      console.error(err);
    }
  };
  const verifyotp = async () => {
    try {
      const data = await user.confirm(otp);
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="grid grid-cols-2 h-screen bg-black">
      <div
        className="bg-cover bg-center"
        style={{
          backgroundImage: ` linear-gradient(to left,rgba(0,0,0,7),rgba(0,0,0,0.1)),url(${login})`,
        }}
      ></div>
      <div className="mt-25">
        <h1 className="text-xl mt-24 font-semibold text-white mb-4">
          {" "}
          Log in or Sign to continue
        </h1>
        <PhoneInput
          country={"us"}
          value={phone}
          onChange={(phone) => setphone("+" + phone)}
          inputStyle={{
            backgroundColor: "black",
            color: "white",
          }}
          placeholder="Enter Mobile Number"
        />
        <h6 className="text-gray-500 text-xs mt-3">
          By proceeding you confirm that you are above 18 year <br />
          of age agree to the Private Policy & Terms of use
        </h6>
        {phone && (
          <button
            onClick={setndotp}
            className=" mt-10 bg-blue-500 w-70  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Send OTP
          </button>
        )}
        <div id="recaptcha" className="mt-2"></div>
        {phone && (
          <input
            onChange={(e) => setotp(e.target.value)}
            type="text"
            className="bg-black border border-gray-300 mt-10 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter OTP"
            required
          />
        )}
        {otp && (
          <button
            onClick={verifyotp}
            className=" mt-10 bg-blue-500 w-70  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            verify OTP
          </button>
        )}
        {otp && (
          <h3 className="text-slate-500 ml-3 mt-16">
            Enter code ,number and{" "}
            <span className="text-blue-500">click Get OTP</span>
          </h3>
        )}
      </div>
    </div>
  );
}

export default Login;
