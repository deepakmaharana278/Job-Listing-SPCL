import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({children}) => {
  return (
    <>
      <Navbar />
      <ToastContainer autoClose={2000} />
      <main className='min-vh-100'>{children}</main>
      <Footer />
    </>
  )
}

export default Layout