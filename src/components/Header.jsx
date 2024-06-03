import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <div className="py-6 px-2">
      <div className="flex bg-green-300">
        {isOpen && (
          <div className="fixed inset-0 z-50 w-[18rem] md:hidden">
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
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
                    activeLink === "/" ? "text-red-500" : "hover:text-red-500"
                  }`}
                >
                  <Link to="/">HOME</Link>
                </li>
                <li
                  className={`flex gap-12 items-center whitespace-nowrap ${
                    activeLink === "/aboutus"
                      ? "text-red-500"
                      : "hover:text-red-500"
                  }`}
                >
                  <Link to="/aboutus">ABOUT US</Link>
                </li>
                <li
                  className={`flex gap-12 items-center ${
                    activeLink === "/solutions"
                      ? "text-red-500"
                      : "hover:text-red-500"
                  }`}
                >
                  <Link to="/solutions">SOLUTIONS</Link>
                </li>
                <li
                  className={`flex gap-12 items-center whitespace-nowrap ${
                    activeLink === "/contactus"
                      ? "text-red-500"
                      : "hover:text-red-500"
                  }`}
                >
                  <Link to="/contactus">CONTACT US</Link>
                </li>
                <li
                  className={`flex gap-12 items-center ${
                    activeLink === "/careers"
                      ? "text-red-500"
                      : "hover:text-red-500"
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
                <svg
                  className={`h-6 w-6 ${
                    isOpen ? "text-red-600" : "text-black"
                  }`}
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
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
