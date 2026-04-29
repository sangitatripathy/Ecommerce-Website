import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import Verify from './pages/Verify'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const backendurl = import.meta.env.VITE_BACKEND_URL||'http://localhost:5000'

const App = () => {
  return (
    <div>
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/placeorder' element={<PlaceOrder/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/verify' element={<Verify/>}/>
      </Routes>
      <Footer/>
      <ToastContainer />
    </div>
  )
}

export default App