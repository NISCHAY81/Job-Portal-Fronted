import React from "react";
import { MantineProvider, createTheme } from "@mantine/core";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Notifications } from "@mantine/notifications";

import "@mantine/carousel/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/dates/styles.css";
import "dayjs/locale/en";

// Pages
import AppLayout from "./AppLayout/AppLayout";
import HomePage from "./Pages/HomePage";
import FindJobs from "./Pages/FindJobs";
import FindTalent from "./Pages/FindTalent";
import JobDescPage from "./Pages/JobDescPage";
import TalentProfilePage from "./Pages/TalentProfilePage";
import PostJobPage from "./Pages/PostJobPage";
import CompanyPage from "./Pages/CompanyPage";
import PostedJob from "./Pages/PostedJob";
import JobHistoryPage from "./Pages/JobHistoryPage";
import ProfilePage from "./Pages/ProfilePage";
import ApplyJobPage from "./Pages/ApplyJobPage";
import SignUpPage from "./Pages/SignUpPage";
import Store from "./Store";
import { Provider } from "react-redux";

import PublicRoute from "./Routes/PublicRoute";
import ProtectedRoute from "./Routes/ProtectedRoute";


const App = () => {
  const theme = createTheme({
    focusRing: "never",
    fontFamily: "Poppins, sans-serif",
    primaryColor: "brightSun",
    primaryShade: 4,
    colors: {
      brightSun: [
        "#fffbeb",
        "#fff4c6",
        "#fee889",
        "#fed33c",
        "#fec321",
        "#f8a208",
        "#dc7a03",
        "#b65507",
        "#94420c",
        "#79360e",
        "#461b02",
      ],
      mineShaft: [
        "#f6f6f6",
        "#e7e7e7",
        "#d1d1d1",
        "#b0b0b0",
        "#888888",
        "#6d6d6d",
        "#5d5d5d",
        "#4f4f4f",
        "#454545",
        "#3d3d3d",
        "#2d2d2d",
      ],
    },
  });

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/find-jobs", element: <FindJobs /> },
      { path: "/find-talent", element: <FindTalent /> },
      { path: "/jobs/:id", element: <JobDescPage /> },
      { path: "/talent-profile", element: <TalentProfilePage /> },
      { path: "/post-job", element: <PostJobPage /> },
      { path: "/company/:name", element: <CompanyPage /> },
      { path: "/posted-job", element: <PostedJob /> },
      { path: "/job-history", element: <JobHistoryPage /> },
      { path: "/profile", element: <ProfilePage /> },
    ],
  },
  {
    path: "/apply-job/:id",
    element: (
      <ProtectedRoute>
        <ApplyJobPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/signup",
    element: (
      <PublicRoute>
        <SignUpPage />
      </PublicRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <SignUpPage /> 
      </PublicRoute>
    ),
  },
]);


  return (
    <Provider store={Store}>
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <Notifications position="top-center" autoClose={4000} zIndex={1000} />
      <RouterProvider router={router} />
    </MantineProvider>
    </Provider>
  );
};

export default App;
