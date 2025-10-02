import React, { use, useContext, useState } from "react";
import NavBar from "../components/NavBar";
import { Link, useLocation, useNavigate } from "react-router";
import { FaUser, FaLock, FaAngleLeft } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../context/AuthProvider";

// import { Helmet } from "react-helmet";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loginUser, handlegoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, password);

    loginUser(email, password)
      .then((result) => {
        // console.log(result);
        navigate(`${location.state ? location.state : "/"}`);
        toast.success(`Loged In SuccessFully `);
      })
      .catch((error) => {
        console.log(error);
        toast.error(
          error.message ||
            "Login failed! Please check your email and password and try again."
        );
      });
  };

  const handleGoogoleLogin = () => {
    // console.log("hello login ");
    handlegoogle()
      .then((result) => {
        navigate(`${location.state ? location.state : "/"}`);
        toast.success(`Loged In SuccessFully `);
        // console.log(result);
      })
      .catch((error) => {
        console.log(error);
        toast.error("error found");
      });
  };
  return (
    <>
      {/* <Helmet>
        <title>Login page | GreenBox BD </title>
      </Helmet> */}

      <div className="card bg-white mx-auto my-20 w-full max-w-sm shadow-2xl rounded-2xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold mb-2">
            Welcome Back <span>👋</span>
          </h2>

          <form onSubmit={handleLogin} className="space-y-3">
            {/* Email */}
            <div>
              <label className="flex items-center gap-2 border rounded-lg px-3 py-2">
                <FaUser className="text-gray-500" />
                <input
                  type="email"
                  name="email"
                  className="w-full focus:outline-none"
                  placeholder="Enter your email"
                  required
                />
              </label>
            </div>

            {/* Password */}
            <div>
              <label className="flex items-center gap-2 border rounded-lg px-3 py-2">
                <FaLock className="text-gray-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="w-full focus:outline-none"
                  placeholder="Enter your password"
                  required
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="cursor-pointer text-gray-500"
                >
                  {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </span>
              </label>
            </div>

            {/* Login Button */}
            <button className="btn bg-secondary hover:bg-secondary/90 text-white w-full rounded-lg">
              Login
            </button>

            {/* Divider */}
            <div className="flex items-center my-2">
              <hr className="flex-grow border-gray-300" />
              <span className="px-2 text-gray-400">OR</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            {/* Register */}
            <p className="text-center text-gray-600 text-sm">
              Do not have an account ?{" "}
              <Link className="text-teal-600 font-medium" to="/auth/sign_up">
                Register
              </Link>
            </p>
          </form>

          {/* Google Login */}
          <button
            onClick={handleGoogoleLogin}
            className="btn bg-secondary text-white w-full mt-3 flex items-center gap-2 justify-center"
          >
            <FcGoogle className="text-xl" />
            Google
          </button>
        </div>

        {/* Shop Visit */}
        <div className="my-4 flex justify-center">
          <Link to="/" className="btn bg-primary text-white rounded-lg">
            <FaAngleLeft />
            Go Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
