import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState();
  const [error, setError] = useState("");

  const getData = async () => {
    const response = await fetch("http://localhost:3000");
    const result = await response.json();

    if (!response.ok) {
      console.log(result.error);
    }

    if (response.ok) {
      setData(result);
    }
  };

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:3000/${id}`, {
      method: "DELETE",
    });

    const result = await response.json();
    if (!response.ok) {
      console.log(result);
      setError(result.error);
    }
    if (response.ok) {
      setError("Deleted Successfully");
      getData();
      setTimeout(() => {
        setError("");
      }, 1500);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {error === "" ? null : (
        <div className="bg-green-400 mt-[100px] max-w-[1024px] mx-auto rounded text-white font-semibold py-3 text-center">
          {error}
        </div>
      )}
      {data?.length === 0 ? (
        <h1 className="text-4xl mt-[200px] text-center font-bold   text-blue-800 ">
          No data Available | 🙁
        </h1>
      ) : (
        <div className="max-w-[1024px] mt-[120px] min-h-screen mx-auto ">
          <div className="grid grid-cols-3">
            {data?.map((item, index) => (
              <div key={index} className="m-3 p-7 border shadow-lg rounded-md">
                <div className="text-center">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <h3 className="text-lg text-gray-500">{item.email}</h3>
                  <h6 className="text-md">{item.age}</h6>
                </div>

                <div className="flex justify-evenly items-center mt-5">
                  <Link
                    to={`/${item._id}`}
                    className="px-7 py-2 bg-blue-800 text-white hover:border hover:border-blue-800 hover:bg-white hover:text-blue-800 rounded-lg border border-transparent duration-300"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => {
                      handleDelete(item._id);
                    }}
                    className="px-4 py-2  font-semibold rounded-lg border border-red-600 bg-white text-black hover:bg-red-600 hover:text-white duration-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Read;
