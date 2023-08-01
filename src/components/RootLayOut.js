import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
import Footer from './Footer'

const RootLayOut = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />

    </>
  )
}

export default RootLayOut
