import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import Login from "./components/Login";
import { ToastContainer } from 'react-toastify';

export const backendurl = import.meta.env.VITE_BACKEND_URL||'http://localhost:5000';
export const currency = '$'

function App() {
  const [token, setToken] = useState(localStorage.getItem('token')? localStorage.getItem('token'): '');

  useEffect(()=>{
    localStorage.setItem('token',token)
  },[token])
  console.log(token)
  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer/>
      {token === '' ?
        <Login setToken={setToken}/>
      : <>
          <Navbar setToken={setToken}/>
          <hr />
          <div className="flex w-full">
            <Sidebar />
            <div className="w-[70%] text-base text-gray-600 mx-auto my-8 ml-[max(5vw,25px)]">
              <Routes>
                <Route path="/add" element={<Add token={token}/>} />
                <Route path="/list" element={<List />} token={token}/>
                <Route path="/orders" element={<Orders token={token}/>} />
              </Routes>
            </div>
          </div>
        </>
      }
    </div>
  );
}

export default App;
