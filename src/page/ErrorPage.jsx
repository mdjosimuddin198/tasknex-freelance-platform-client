import React from "react";
// import { Helmet } from "react-helmet";

import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate("/");
  };
  return (
    <div>
      {/* <Helmet>
        <title>Error Page</title>
      </Helmet> */}
      <div className="flex flex-col  justify-center items-center mt-16">
        <div className=" rounded-2xl  border">
          <img
            className=" w-[300px] md:w-[400px] lg:w-[500px]"
            src="https://i.ibb.co/XfJMG0V5/404.gif"
            alt=""
          />
        </div>

        <h3 className="text-3xl absolute top-10 bg-red-500 p-4  text-white rounded-2xl text-center">
          Page Not Found
        </h3>
        <button
          onClick={handleGoHome}
          className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
        >
          Go To HomePage
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
