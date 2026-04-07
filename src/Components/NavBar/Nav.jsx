import React from "react";
import { NavLink } from "react-router";

const Nav = () => {
  const navItem = <>
  <li>
    <NavLink className={({isActive})=> `${isActive ? 'text-green-500 border border-green-500' : '' } hover:border hover:border-green-500 hover:bg-transparent `} to={'/'}>Home</NavLink>
  </li>
  
  <li>
    <NavLink className={({isActive})=> `${isActive ? 'text-green-500 border border-green-500' : '' } hover:border hover:border-green-500 hover:bg-transparent `} to={'/books'}>Listed Books</NavLink>
  </li>
  
  <li>
    <NavLink className={({isActive})=> `${isActive ? 'text-green-500 border border-green-500' : '' } hover:border hover:border-green-500 hover:bg-transparent `} to={'/Pages to Read'}>Pages to Read</NavLink>
  </li>
  
  </>
  return (
    <div className="bg-base-100">
      <div className="navbar   max-w-[1200px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navItem}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl font-bold">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-3">
            {navItem}
          </ul>
        </div>
        <div className="navbar-end gap-3">
          
          <button className="btn bg-[#23BE0A] text-white sm:inline-block hidden">Sign In</button>
          <button className="btn bg-[#59C6D2] text-white sm:inline-block hidden">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
