import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const closeSidebar = () => {
    setIsOpen(false);
  };

  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <div className="py-6 px-2 fixed border-b border-gray-100 bg-white top-0 z-40 w-full">
      <div className="flex bg-green-300">
        {isOpen && (
          <div className="fixed inset-0 z-50 w-[18rem] md:hidden">
            <Sidebar isOpen={isOpen} closeSidebar={closeSidebar} />
          </div>
        )}
        <div className="bg-white font-bold not-italic w-full">
          <div className="flex justify-between">
            <div className="bg-white rounded-full h-14 pl-2 flex justify-center items-center font-bold text-lg text-gray-500 relative">
              <img
                src="/images/Logo.png"
                alt=""
                className="h-[4.5rem] w-auto"
              />
            </div>
            <div className="hidden md:flex">
              <ul className="flex gap-14 pl-10 pr-10 items-center text-xs">
                <li
                  className={`flex gap-12 items-center ${
                    activeLink === "/" ? "text-[#BF360C]" : "hover:text-red-500"
                  }`}
                >
                  <Link to="/">HOME</Link>
                </li>
                <li
                  className={`flex gap-12 items-center whitespace-nowrap ${
                    activeLink === "/aboutus"
                      ? "text-[#BF360C]"
                      : "hover:text-[#BF360C]"
                  }`}
                >
                  <Link to="/aboutus">ABOUT US</Link>
                </li>
                <li
                  className={`flex gap-12 items-center ${
                    activeLink === "/solutions"
                      ? "text-[#BF360C]"
                      : "hover:text-[#BF360C]"
                  }`}
                >
                  <Link to="/solutions">SOLUTIONS</Link>
                </li>
                <li
                  className={`flex gap-12 items-center whitespace-nowrap ${
                    activeLink === "/contactus"
                      ? "text-[#BF360C]"
                      : "hover:text-[#BF360C]"
                  }`}
                >
                  <Link to="/contactus">CONTACT US</Link>
                </li>
                <li
                  className={`flex gap-12 items-center ${
                    activeLink === "/careers"
                      ? "text-[#BF360C]"
                      : "hover:text-[#BF360C]"
                  }`}
                >
                  <Link to="/careers">CAREERS</Link>
                </li>
              </ul>
            </div>
            <div className="flex justify-end md:hidden">
              <button
                onClick={toggleNavbar}
                className="focus:outline-none mr-2"
              >
                {isOpen ? (
                  <svg
                    className="h-6 w-6 text-[#BF360C]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
