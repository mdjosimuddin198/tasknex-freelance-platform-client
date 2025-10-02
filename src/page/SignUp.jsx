import React, { use, useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { FaUser, FaImage, FaEnvelope, FaLock } from "react-icons/fa";
import { BsEye } from "react-icons/bs";
import { FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";

// import { Helmet } from "react-helmet";

const SignUp = () => {
  const { handlegoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState(false);
  const { creatAccount, updateUser, setLogedInUser } = use(AuthContext);

  const [showPass, setShowPass] = useState(false);

  const handleshowPassword = () => {
    setShowPass(!showPass);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg(false);
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const email = form.email.value;

    if (password.length < 6) {
      setErrorMsg("password must be 6 characters or longer ");
      toast.error(`password must be 6 characters or longer`);
    } else if (!/[A-Z]/.test(password)) {
      setErrorMsg("Password must contain at least one uppercase letter.");
      toast.error("Password must contain at least one uppercase letter.");
    } else if (!/[a-z]/.test(password)) {
      setErrorMsg(" Password must contain at least one lowercase letter.");
      toast.error(` Password must contain at least one lowercase letter`);
    } else {
      creatAccount(email, password)
        .then((result) => {
          // console.log(result);
          const user = result.user;
          updateUser({ displayName: name, photoURL: photo })
            .then(() => {
              // console.log(user);
              setLogedInUser({ ...user, displayName: name, photoURL: photo });
            })
            .catch((error) => {
              console.log(error);
              setLogedInUser(user);
            });
        })
        .catch((error) => {
          console.log(error);
          toast.error("error found");
        });

      setSuccessMsg(true);
      toast.success(`Account Create  SuccessFully `);
      navigate("/");
    }

    // console.log(name, photo, password, email);
    return;
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
      <div className="card bg-white mx-auto my-10 w-full max-w-sm shadow-2xl rounded-2xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold mb-4">
            Create Account ✨
          </h2>

          <form onSubmit={handleRegister} className="space-y-3">
            {/* Name */}
            <div>
              <label className="flex items-center gap-2 border rounded-lg px-3 py-2">
                <FaUser className="text-gray-500" />
                <input
                  type="text"
                  name="name"
                  className="w-full focus:outline-none"
                  placeholder="Enter your name"
                  required
                />
              </label>
            </div>

            {/* PhotoURL */}
            <div>
              <label className="flex items-center gap-2 border rounded-lg px-3 py-2">
                <FaImage className="text-gray-500" />
                <input
                  type="text"
                  name="photo"
                  className="w-full focus:outline-none"
                  placeholder="Enter photo URL"
                  required
                />
              </label>
            </div>

            {/* Email */}
            <div>
              <label className="flex items-center gap-2 border rounded-lg px-3 py-2">
                <FaEnvelope className="text-gray-500" />
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
                  type={showPass ? "text" : "password"}
                  name="password"
                  className="w-full focus:outline-none"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={handleshowPassword}
                  className="cursor-pointer text-gray-500"
                >
                  {showPass ? <FiEyeOff /> : <BsEye />}
                </button>
              </label>
            </div>

            {/* Register Button */}
            <button className="btn bg-teal-600 hover:bg-teal-700 text-white w-full rounded-lg">
              Register Now
            </button>

            {/* Already Account */}
            <p className="text-center text-gray-600 text-sm">
              Already have account?{" "}
              <Link className="text-teal-600 font-medium" to="/auth/login">
                Login Now
              </Link>
            </p>

            {/* Error & Success */}
            {errorMsg && <p className="text-red-400">{errorMsg}</p>}
            {successMsg && (
              <p className="text-green-500">Account created successfully ✅</p>
            )}
          </form>

          {/* Google Login */}
          <button
            onClick={handleGoogoleLogin}
            className="btn bg-gray-800 text-white w-full mt-3 flex items-center gap-2 justify-center"
          >
            <FcGoogle className="text-xl" />
            Google
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
