import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import { Divider } from '@mantine/core'

const AppLayout = () => {
  return (
    <>
      <Header/>
      <Divider mx="md" />
      <Outlet/>
      <Footer/>
    </>
  )
}

export default AppLayout
