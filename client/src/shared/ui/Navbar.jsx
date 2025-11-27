import React from "react";
import { Link } from "react-router-dom";
import { HiArrowLeftStartOnRectangle } from "react-icons/hi2";

import { useAuthStatus } from "../../features/authentication/useAuthStatus";
import useLogoutUser from "../../features/authentication/useLogoutUser";

function Navbar() {
  const { authStatus, isAuthLoading } = useAuthStatus();
  const { logoutUser } = useLogoutUser();

  if (isAuthLoading) return;

  return (
    <header className="bg-[rgba(255,255,255,0.7)] border-b border-b-[rgb(212,217,219)] backdrop-blur-[6px] shadow-md px-6 sm:px-12 md:px-20 h-22 sm:h-28 z-1000 fixed top-0 left-0 w-full flex justify-between items-center max-w-screen">
      <div>
        <Link to="/">
          <img
            src="/logo-green.png"
            alt="Natours app logo"
            className="h-[2.5rem] sm:h-[3rem] md:h-[3.5rem]"
          />
        </Link>
      </div>
      <nav className="flex w-full justify-end items-center flex-[0_1_40%]">
        <div className="flex items-center flex-[0_1_40%] justify-end">
          {authStatus?.isLoggedIn ? (
            <>
              <div className="uppercase text-xl sm:text-2xl md:text-3xl flex items-center gap-4 sm:gap-6 text-[rgba(0,0,0,0.65)] hover:text-[rgba(0,0,0,1)] font-medium transition-all duration-300">
                <Link
                  to={`/my-account/${authStatus.user.id}`}
                  className="flex justify-center items-center hover:-translate-y-1 whitespace-nowrap cursor-pointer"
                >
                  <span>{authStatus.user.name}</span>
                </Link>
                <button
                  className="uppercase text-xl sm:text-2xl md:text-3xl hover:-translate-y-1 cursor-pointer"
                  onClick={logoutUser}
                >
                  <span className="flex gap-2">
                    <HiArrowLeftStartOnRectangle className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9" />
                    LOGOUT
                  </span>
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="uppercase text-[1.4rem] sm:text-2xl md:text-[1.7rem] lg:text-[1.8rem] flex gap-4 sm:gap-6 items-center cursor-pointer ">
                <Link
                  to="/login"
                  id="links"
                  className="text-[rgba(0,0,0,0.65)] hover:text-[rgba(0,0,0,1)] font-medium transition-all duration-300 hover:-translate-y-1 inline-block"
                >
                  LOGIN
                </Link>
                <Link
                  to="/signup"
                  className="text-[#f7f7f7] bg-[#55c57a] py-2 sm:py-3 px-5 sm:px-10 rounded-full inline-block hover:bg-[#34a259] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl md:text-3xl lg:text-3xl whitespace-nowrap"
                >
                  Sign Up
                </Link>
              </div>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
