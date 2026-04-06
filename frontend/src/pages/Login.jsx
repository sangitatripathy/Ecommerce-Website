import React, { useState } from "react";

const Login = () => {
  const [current, setCurrentState] = useState("Login");
  const onSubmitHandler = async (event) =>{
    event.preventDefault()
  }
  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[91%] gap-4 m-auto mt-14 text-gray-800">
      <div className="inline-flex gap-2 mb-2 mt-10 items-center">
        <p className="prata-regular text-3xl">{current}</p>
        <hr className="h-[1.5px] w-8 bg-gray-800 " />
      </div>
      <div className="flex flex-col gap-4 items-center w-75 md:w-100">
        {current === "Login" ?
          ""
        : <input
            type="text"
            className="px-3 py-2 w-full border border-gray-800"
            placeholder="Name"
            required
          />
        }

        <input
          type="email"
          className="px-3 py-2 w-full border border-gray-800"
          placeholder="email"
          required
        />
        <input
          type="password"
          className="px-3 py-2 w-full border border-gray-800"
          placeholder="password"
          required
        />
      </div>
      <div className="flex justify-between w-75 md:w-100 text-sm -mt-3">
        <p className="cursor-pointer">Forgot your password</p>
        {current === "Login" ?
          <p onClick={()=>{setCurrentState('Sign Up')}} className="cursor-pointer">Create account</p>
        : <p onClick={()=>{setCurrentState('Login')}} className="cursor-pointer">Login Here</p>}
      </div>
      <button className="bg-black text-white font-light px-8 py-2 mt-4">{current === 'Login' ? "Login": "SignUp"}</button>
    </form>
  );
};

export default Login;
