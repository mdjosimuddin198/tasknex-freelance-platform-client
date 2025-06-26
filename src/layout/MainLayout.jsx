import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <header className=" sticky shadow-sm top-0 z-50 bg-accent rounded-2xl">
        <NavBar></NavBar>
      </header>
      <main className="w-11/12 mx-auto">
        <Outlet></Outlet>
      </main>
      <footer className="w-11/12 mx-auto">
        <Footer></Footer>
      </footer>
    </>
  );
};

export default MainLayout;
