import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUsers(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col   m-10 ">
      <Link to={`add`} className="">
        <button className="w-24 h-10 bg-green-500 hover:bg-green-700 text-white rounded">
          Add New
        </button>
      </Link>
      <table className=" w-full border-b   text-left rtl:text-right">
        <thead className="border-b">
          <tr>
            <th className=" py-3">No</th>
            <th className=" py-3">Name</th>
            <th className=" py-3">Email</th>
            <th className=" py-3">Address</th>
            <th className=" py-3">Gender</th>
            <th className="py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>{user.gender}</td>
              <td className="gap-2">
                <Link to={`edit/${user.id}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white w-20 h-8 rounded m-2 ">
                    Edit
                  </button>
                </Link>
                <Link>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="bg-red-500 hover:bg-red-700 text-white w-20 h-8 m-2 rounded"
                  >
                    Delete
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
