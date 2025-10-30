import React from 'react'

import { Outlet } from 'react-router-dom'

import { Divider } from '@mantine/core'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';

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
