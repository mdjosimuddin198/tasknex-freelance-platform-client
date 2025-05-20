import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Hero from "../components/Hero";
import BrowseTasks from "../page/BrowseTasks";
import MyPostedTasks from "../page/MyPostedTasks";
import AddTasks from "../page/AddTasks";
import SignUp from "../page/SignUp";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Hero },
      {
        path: "/add_task",
        Component: AddTasks,
      },
      {
        path: "/browse_tasks",
        loader: async () => {
          const res = await fetch("http://localhost:5000/tasks");
          const data = await res.json();
          return data;
        },
        Component: BrowseTasks,
      },
      {
        path: "/my_posted_tasks",
        Component: MyPostedTasks,
      },
      {
        path: "/auth/sign_up",
        Component: SignUp,
      },
    ],
  },
]);

export default Router;
