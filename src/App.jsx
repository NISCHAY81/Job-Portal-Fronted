import React from 'react'
import { createTheme } from '@mantine/core';
import {createBrowserRouter, RouterProvider} from "react-router-dom"

import {  MantineProvider} from '@mantine/core';
import '@mantine/carousel/styles.css';
import HomePage from './Pages/HomePage';
import FindJobs from './Pages/FindJobs';
import AppLayout from './AppLayout/AppLayout';
import FindTalent from './Pages/FindTalent';
import TalentProfilePage from './Pages/TalentProfilePage';
import PostJobPage from './Pages/PostJobPage';
import JobDescPage from './Pages/JobDescPage';
import ApplyJobPage from './Pages/ApplyJobPage';
import CompanyPage from './Pages/CompanyPage';
import PostedJob from './Pages/PostedJob';
import '@mantine/dates/styles.css'
import 'dayjs/locale/en'; // your locale
import JobHistoryPage from './Pages/JobHistoryPage';
import SignUpPage from './Pages/SignUpPage';
import Login from './SignUpLogin/Login';
import ProfilePage from './Pages/ProfilePage';



const App = () => {

const theme = createTheme({
  focusRing:"never",
  fontFamily:"Poppins, sans-serif",
  primaryColor:"brightSun",
  primaryShade:4, 
  colors: {
    'brightSun': [
      '#fffbeb', // 50
      '#fff4c6', // 100
      '#fee889', // 200
      '#fed33c', // 300
      '#fec321', // 400
      '#f8a208', // 500
      '#dc7a03', // 600
      '#b65507', // 700
      '#94420c', // 800
      '#79360e', // 900
      '#461b02', // 950 (optional)
    ],
    'mineShaft': [
      '#f6f6f6', // 50
      '#e7e7e7', // 100
      '#d1d1d1', // 200
      '#b0b0b0', // 300
      '#888888', // 400
      '#6d6d6d', // 500
      '#5d5d5d', // 600
      '#4f4f4f', // 700
      '#454545', // 800
      '#3d3d3d', // 900
      '#2d2d2d', // 950 (optional)
    ],
  },
});

const router = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
      path:"/",
      element:<HomePage/>
      },
     {
    path:"/find-jobs",
    element:<FindJobs/>
     },
     {
      path:"/find-talent",
      element:<FindTalent/>
     },
     {
      path:"/jobs",
      element:<JobDescPage/>
     },
     {
      path:"/talent-profile",
      element:<TalentProfilePage/>
     },
     {
      path:"/post-job",
      element:<PostJobPage/>
     },
     {
      path:"/company",
      element:<CompanyPage/>
     },
       {
       path:"/posted-job",
       element:<PostedJob/>
     },
     {
      path:"/job-history",
      element:<JobHistoryPage/>
     },
     {
      path:"/profile",
      element:<ProfilePage/>
     }
    
    ]
  },
   {
      path:"/apply-job",
      element:<ApplyJobPage/>
     },
     {
      path:"/signup",
      element:<SignUpPage/>
     },
     {
      path:"/login",
       element:<SignUpPage/>
     }

   
])

  return (
    <MantineProvider defaultColorScheme='dark' theme={theme}>
       <RouterProvider router={router}/>
    </MantineProvider>
  )
}

export default App
