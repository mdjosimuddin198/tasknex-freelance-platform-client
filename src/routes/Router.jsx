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

const Router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: async () => {
          const res = await fetch("http://localhost:5000/tasks");
          const data = await res.json();
          return data;
        },
        Component: Hero,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/add_task",
        element: (
          <PrivetRoute>
            <AddTasks></AddTasks>
          </PrivetRoute>
        ),
      },
      {
        path: "/browse_tasks",
        loader: async () => {
          const res = await fetch("http://localhost:5000/alltasks");
          const data = await res.json();
          return data;
        },
        Component: BrowseTasks,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/my_posted_tasks",
        loader: async () => {
          const res = await fetch("http://localhost:5000/alltasks");
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
        path: "/post/details/:id",
        loader: async ({ params }) => {
          const res = await fetch(
            `http://localhost:5000/alltasks/${params.id}`
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
            `http://localhost:5000/alltasks/${params.id}`
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
]);

export default Router;
