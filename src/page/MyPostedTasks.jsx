import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa6";
import Swal from "sweetalert2";

const MyPostedTasks = () => {
  const { logedInuser } = useContext(AuthContext);
  const allUserDatas = useLoaderData();
  // console.log(allUserDatas);
  const myPost = allUserDatas?.filter(
    (task) => task.email === logedInuser?.email
  );

  const [taskDel, setTaskDel] = useState(myPost);
  // console.log(taskDel);
  const [bids, setBids] = useState([]);
  const [postCount, setPostCount] = useState(0);
  const [allBids, setAllBids] = useState([]);

  const handelBits = (id) => {
    const userBids = bids.filter((bid) => bid.userId === id);
    setAllBids(userBids);
    document.getElementById("my_modal_1").showModal();
  };

  useEffect(() => {
    const fetchPostCount = async () => {
      fetch("https://task-nex-server.vercel.app/bids"),
        {
          credentials: "include",
        }
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            setBids(data);
          });
    };

    fetchPostCount();
  }, [logedInuser._id]); //

  const handleDeleteUser = (id) => {
    // console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://task-nex-server.vercel.app/alltasks/${id}`, {
          method: "DELETE",
          credentials: "include",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
          });

        Swal.fire({
          title: "Deleted!",
          text: "Your Post has been deleted.",
          icon: "success",
        });
        const remainingPost = taskDel?.filter((task) => task._id !== id);
        setTaskDel(remainingPost);
      }
    });
  };
  // console.log(myPost);
  return (
    <>
      {taskDel?.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[300px] bg-gray-50 rounded-xl shadow-inner text-center p-6 animate-fade-in">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
            alt="No Posts"
            className="w-24 h-24 mb-4 opacity-80"
          />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            You don’t have any post yet
          </h2>
          <p className="text-gray-500 mb-4">
            Start by sharing your first post with the community.
          </p>
          <Link
            to={"/dashboard/add_task"}
            className="px-4 py-2 bg-accent text-white rounded-lg transition"
          >
            Create A Post
          </Link>
        </div>
      ) : (
        <div>
          <h3 className="text-3xl text-center ">
            My Total Post : {taskDel.length}{" "}
          </h3>
          <div className="overflow-x-auto ">
            <table className="table min-w-full ">
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
                {taskDel.map((post, index) => (
                  <tr key={post._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={post.image}
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
                    <th className="space-x-1.5 space-y-1.5">
                      <button
                        onClick={() => handelBits(post._id)}
                        className="btn btn-accent text-white text-[15px]"
                      >
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
      )}
      <dialog id="my_modal_1" className="modal ">
        <div className="modal-box bg-white">
          {allBids.map((bid) => (
            <div key={bid._id} className="bg-white p-4 rounded-lg shadow mb-3">
              <h3 className="font-bold">User ID: {bid._id}</h3>
              <p>Total Users Who Joined This Event {bid.count || "0"}</p>
            </div>
          ))}

          {allBids.length === 0 && (
            <p className="text-accent">
              there were no participants in this event
            </p>
          )}
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default MyPostedTasks;
