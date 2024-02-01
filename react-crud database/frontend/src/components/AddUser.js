import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAdress] = useState("");
  const [gender, setGender] = useState("Male");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name,
        email,
        address,
        gender,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col mt-5 items-center  max-w-full mx-auto">
      <div className="flex flex-col w-1/2">
        <form onSubmit={saveUser} className="">
          <div className="mb-5">
            <label className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-400 w-full rounded p-2"
              placeholder="Enter Name"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-400 w-full rounded p-2"
              placeholder="Enter Email"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 font-medium">Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAdress(e.target.value)}
              className="border border-gray-400 w-full rounded p-2"
              placeholder="Enter Address"
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 font-medium">Gender</label>
            <div>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="border w-full h-10 border-gray-400 "
              >
                <option value="Male" className="border">
                  Male
                </option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
          <div className="mb-5">
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-700 rounded text-white w-20 h-8"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
