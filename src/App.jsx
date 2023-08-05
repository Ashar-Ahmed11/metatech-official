import React from 'react'
import Navbar from './components/navbar'
import './App.css'
import Home from './components/home'
import { Routes, Route } from 'react-router-dom'
import ContactUs from './components/contactus'
import Footer from './components/footer'
import { BrowserRouter  } from 'react-router-dom'
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer/>

      </BrowserRouter>
    </>
  )
}

export default App  