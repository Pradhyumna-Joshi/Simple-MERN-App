import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="fixed w-full top-0 left-0 py-5  ">
        <div className="max-w-[1024px] mx-auto flex justify-between items-center">
          <div className="text-4xl font-bold text-blue-800 ">MERN</div>
          <ul>
            <li className=" flex text-white gap-7 font-semibold text-lg ">
              <Link
                to={"/"}
                className="border-2 border-transparent bg-blue-800 hover:bg-white hover:text-blue-800 hover:border-2 hover:border-blue-800  hover:duration-300  px-5 py-2 rounded"
              >
                Create Post
              </Link>
              <Link
                to={"/all"}
                className="border-2 text-blue-800 hover:text-white border-blue-800 hover:border-2 hover:duration-300 hover:ring-1 hover:ring-black hover:bg-blue-800 px-5 py-2 rounded"
              >
                View Posts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
