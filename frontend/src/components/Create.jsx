import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { name, email, age };
    const response = await fetch("http://localhost:3000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const result = await response.json();

    if (!response.ok) {
      console.log(result);
      setError(result.error);
    }
    if (response.ok) {
      setName("");
      setEmail("");
      setError("");
      setAge(0);
      navigate("/all");
    }
  };
  return (
    <>
      <div className=" py-8 max-w-[1024px] mt-[100px] mx-auto bg-white ">
        {error === "" ? null : (
          <div className="bg-red-500 max-w-[1024px] mx-auto rounded text-black mb-5 py-3 text-center">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col max-w-[400px] mx-auto gap-3 mb-5">
            <label className="text-2xl font-semibold">Username</label>
            <input
              className="text-xl font-medium px-5 py-3 outline rounded"
              type="text"
              placeholder="Enter Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flex flex-col max-w-[400px] mx-auto gap-3 mb-5">
            <label className="text-2xl font-semibold">Email</label>
            <input
              className="text-xl font-medium px-5 py-3 outline rounded"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col max-w-[400px] mx-auto gap-3 mb-5">
            <label className="text-2xl font-semibold">Age</label>
            <input
              className="text-xl font-medium px-5 py-3 outline rounded "
              type="number"
              placeholder="Enter Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <button className="flex font-bold px-8 py-3 bg-blue-800 rounded text-white mx-auto border-2 border-transparent hover:border-2   hover:border-blue-800 hover:bg-white hover:text-blue-800 hover:shadow-xl duration-500">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Create;
