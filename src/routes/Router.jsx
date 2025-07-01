import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Hero from "../components/Hero";
import BrowseTasks from "../page/BrowseTasks";
import MyPostedTasks from "../page/MyPostedTasks";
import AddTasks from "../page/AddTasks";
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

const Router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: async () => {
          const res = await fetch(
            "https://task-nex-server.vercel.app/alltasks?limit=6"
          );
          const data = await res.json();
          return data;
        },
        Component: Hero,
        hydrateFallbackElement: <Loading></Loading>,
      },
      // {
      //   path: "/add_task",
      //   element: (
      //     <PrivetRoute>
      //       <AddTasks></AddTasks>
      //     </PrivetRoute>
      //   ),
      // },
      {
        path: "/browse_tasks",
        loader: async () => {
          const res = await fetch(
            "https://task-nex-server.vercel.app/alltasks"
          );
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
        path: "profile",
        element: (
          <PrivetRoute>
            <MyProfile></MyProfile>
          </PrivetRoute>
        ),
      },
      // {
      //   path: "/my_posted_tasks",
      //   loader: async () => {
      //     const res = await fetch(
      //       "https://task-nex-server.vercel.app/alltasks"
      //     );
      //     const data = await res.json();

      //     return data;
      //   },
      //   element: (
      //     <PrivetRoute>
      //       <MyPostedTasks></MyPostedTasks>
      //     </PrivetRoute>
      //   ),
      //   hydrateFallbackElement: <Loading></Loading>,
      // },
      {
        path: "/post/details/:id",
        loader: async ({ params }) => {
          const res = await fetch(
            `https://task-nex-server.vercel.app/alltasks/${params.id}`,
            {
              credentials: "include",
            }
          );
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
        path: "/update_task/:id",
        loader: async ({ params }) => {
          const res = await fetch(
            `https://task-nex-server.vercel.app/alltasks/${params.id}`,
            {
              credentials: "include",
            }
          );
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
      const res = await fetch("https://task-nex-server.vercel.app/alltasks");
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
        path: "my_posted_tasks",
        loader: async () => {
          const res = await fetch(
            "https://task-nex-server.vercel.app/alltasks"
          );
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
        path: "add_task",
        element: (
          <PrivetRoute>
            <AddTasks></AddTasks>
          </PrivetRoute>
        ),
      },
    ],
  },
]);

export default Router;
