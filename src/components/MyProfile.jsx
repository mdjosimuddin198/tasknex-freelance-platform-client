import React, { useContext, useState } from "react";
// import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthProvider";

// import { Helmet } from "react-helmet";

const MyProfile = () => {
  const { updateUser, logedInuser, setLogedInUser } = useContext(AuthContext);

  const [name, setName] = useState(logedInuser?.displayName || "");
  const [photoURL, setPhotoURL] = useState(logedInuser?.photoURL || "");
  const [message, setMessage] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateUser({
        displayName: name,
        photoURL: photoURL,
      });

      setLogedInUser({
        ...logedInuser,
        displayName: name,
        photoURL: photoURL,
      });
      toast.success("Profile updated successfully!");
      setMessage("✅ Profile updated successfully!");
    } catch (error) {
      console.error(error);
      setMessage("❌ Update failed.");
    }
  };

  return (
    <>
      {/* <Helmet>
        <title>My Profile | GreenBox BD</title>
      </Helmet> */}

      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white shadow-2xl rounded-2xl w-full max-w-2xl p-8">
          <div className="flex flex-col items-center mb-6">
            <img
              src={logedInuser?.photoURL}
              alt="Profile"
              className="w-32 h-32 rounded-full shadow-lg border-4 border-blue-500"
            />
            <h2 className="text-2xl font-semibold mt-4 text-gray-800">
              {logedInuser?.displayName}
            </h2>
            <p className="text-gray-500">{logedInuser?.email}</p>
          </div>

          <form onSubmit={handleUpdate} className="space-y-4">
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Update Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-primary"
                placeholder="Enter new name"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Update Photo URL
              </label>
              <input
                type="text"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-primary"
                placeholder="Enter new photo URL"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-lg hover:skew-1 transition"
            >
              Save Changes
            </button>
          </form>

          {message && (
            <p className="mt-4 text-center text-primary font-medium">
              {message}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default MyProfile;
