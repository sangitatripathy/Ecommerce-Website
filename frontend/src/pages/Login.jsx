import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";

const Login = () => {
  const [current, setCurrentState] = useState("Login");
  const { token, backendUrl, setToken, navigate } = useContext(ShopContext);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (current === "Sign Up") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  };
  useEffect(()=>{
    if(token){
      navigate('/')
    }
  },[token])
  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[91%] gap-4 m-auto mt-14 text-gray-800"
    >
      <div className="inline-flex gap-2 mb-2 mt-10 items-center">
        <p className="prata-regular text-3xl">{current}</p>
        <hr className="h-[1.5px] w-8 bg-gray-800 " />
      </div>
      <div className="flex flex-col gap-4 items-center w-75 md:w-100">
        {current === "Login" ?
          ""
        : <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="px-3 py-2 w-full border border-gray-800"
            placeholder="Name"
            required
          />
        }

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="px-3 py-2 w-full border border-gray-800"
          placeholder="email"
          required
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="px-3 py-2 w-full border border-gray-800"
          placeholder="password"
          required
        />
      </div>
      <div className="flex justify-between w-75 md:w-100 text-sm -mt-3">
        <p className="cursor-pointer">Forgot your password</p>
        {current === "Login" ?
          <p
            onClick={() => {
              setCurrentState("Sign Up");
            }}
            className="cursor-pointer"
          >
            Create account
          </p>
        : <p
            onClick={() => {
              setCurrentState("Login");
            }}
            className="cursor-pointer"
          >
            Login Here
          </p>
        }
      </div>
      <button className="bg-black text-white font-light px-8 py-2 mt-4">
        {current === "Login" ? "Login" : "SignUp"}
      </button>
    </form>
  );
};

export default Login;
