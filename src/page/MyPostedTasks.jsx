import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa6";

const MyPostedTasks = () => {
  const { logedInuser } = useContext(AuthContext);
  const allUserDatas = useLoaderData();
  // console.log(allUserDatas);
  const myPost = allUserDatas.filter(
    (task) => task.email === logedInuser?.email
  );
  console.log(myPost);
  return (
    <div>
      <h3>My Total Post : {myPost.length} </h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Num</th>
              <th>Name</th>
              <th>budget</th>
              <th>Catagory</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myPost.map((post, index) => (
              <tr key={post._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={logedInuser.photoURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{post.taskTitle}</div>
                      <div className="text-sm opacity-50">{post.email}</div>
                    </div>
                  </div>
                </td>
                <td>${post.budget}</td>
                <td>{post.selsct}</td>
                <th className="space-x-1.5">
                  <button className="btn btn-accent text-white text-[15px]">
                    {" "}
                    <FaRegHeart />
                  </button>
                  <Link
                    to={`/update_task/${post._id}`}
                    className="btn btn-accent text-white text-[15px]"
                  >
                    {" "}
                    <CiEdit />
                  </Link>
                  <button
                    onClick={() => handleDeleteUser(post._id)}
                    className="btn btn-accent  text-white text-[15px]"
                  >
                    <MdDeleteOutline />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedTasks;
