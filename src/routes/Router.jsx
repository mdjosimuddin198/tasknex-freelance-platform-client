import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Hero from "../components/Hero";
import BrowseTasks from "../page/BrowseTasks";
import MyPostedTasks from "../page/MyPostedTasks";
import SignUp from "../page/SignUp";
import Login from "../components/Login";
import PrivetRoute from "../components/PrivetRoute";
import Loading from "../components/Loading";
import JobDetails from "../components/JobDetails";
import UpdateTask from "../components/UpdateTask";
import ErrorPage from "../page/ErrorPage";
import AboutUs from "../page/AboutUs";
import ContactPage from "../page/ContactPage";
import MyProfile from "../components/MyProfile";
import Dashboard from "../page/Dashboard";
import DashboardOverview from "../components/DashboardOverview";
import AddJob from "../page/AddJob";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: async () => {
          const res = await fetch("http://localhost:5000/job?limit=6");
          const data = await res.json();
          return data;
        },
        Component: Hero,
        hydrateFallbackElement: <Loading></Loading>,
      },

      {
        path: "/find-job",
        loader: async () => {
          const res = await fetch("http://localhost:5000/job");
          const data = await res.json();
          return data;
        },
        Component: BrowseTasks,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "about_us",
        Component: AboutUs,
      },
      {
        path: "contact_us",
        Component: ContactPage,
      },
      {
        path: "/job-details/:id",
        loader: async ({ params }) => {
          const res = await fetch(`http://localhost:5000/job/${params.id}`, {
            credentials: "include",
          });
          const data = await res.json();
          return data;
        },
        element: (
          <PrivetRoute>
            <JobDetails></JobDetails>
          </PrivetRoute>
        ),

        hydrateFallbackElement: <Loading></Loading>,
      },

      {
        path: "/auth/sign_up",
        Component: SignUp,
      },
      {
        path: "/auth/login",
        Component: Login,
      },
    ],
  },
  {
    path: "dashboard",
    loader: async () => {
      const res = await fetch("http://localhost:5000/job");
      const data = await res.json();
      return data;
    },
    hydrateFallbackElement: <Loading></Loading>,
    element: (
      <PrivetRoute>
        <Dashboard></Dashboard>
      </PrivetRoute>
    ),
    children: [
      {
        index: true,
        loader: async () => {
          const res = await fetch("http://localhost:5000/job");
          const data = await res.json();
          return data;
        },
        Component: DashboardOverview,
      },
      {
        path: "my_posted_tasks",
        loader: async () => {
          const res = await fetch("http://localhost:5000/job");
          const data = await res.json();
          return data;
        },
        element: (
          <PrivetRoute>
            <MyPostedTasks></MyPostedTasks>
          </PrivetRoute>
        ),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "update_task/:id",
        loader: async ({ params }) => {
          const res = await fetch(`http://localhost:5000/job/${params.id}`, {
            credentials: "include",
          });
          const data = await res.json();
          return data;
        },
        element: (
          <PrivetRoute>
            <UpdateTask></UpdateTask>
          </PrivetRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivetRoute>
            <MyProfile></MyProfile>
          </PrivetRoute>
        ),
      },
      {
        path: "add_job",
        element: (
          <PrivetRoute>
            <AddJob />
          </PrivetRoute>
        ),
      },
    ],
  },
]);

export default Router;
