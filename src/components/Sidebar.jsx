import { useState, useEffect, useRef } from "react";
import {
  Home,
  ScrollText,
  Lightbulb,
  MessageSquare,
  GraduationCap,
} from "lucide-react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ isOpen, setIsOpen }) => {
  const [activeLink, setActiveLink] = useState(null);
  const sidebarRef = useRef();

  useEffect(() => {
    const pathname = window.location.pathname;
    setActiveLink(pathname);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen]);

  return (
    <div
      ref={sidebarRef}
      className={`bg-white items-center justify-center p-4 h-screen border-r border-gray-500 transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <img className="px-2" src="/images/Logo.png" alt="Logo" />
      <hr className="w-full border-red-600 mb-10" />
      <ul className="flex flex-col gap-12 mx-8">
        <li
          className={`flex text-lg font-semibold gap-12 items-center ${
            activeLink === "/" ? "text-red-500" : "hover:text-red-500"
          }`}
          onClick={() => setActiveLink("/")}
        >
          <Home size={36} />
          <Link to="/">HOME</Link>
        </li>
        <li
          className={`flex text-lg font-semibold gap-12 items-center ${
            activeLink === "/aboutus" ? "text-red-500" : "hover:text-red-500"
          }`}
          onClick={() => setActiveLink("/aboutus")}
        >
          <ScrollText size={36} />
          <Link to="/aboutus">ABOUT US</Link>
        </li>
        <li
          className={`flex text-lg font-semibold gap-12 items-center ${
            activeLink === "/solutions" ? "text-red-500" : "hover:text-red-500"
          }`}
          onClick={() => setActiveLink("/solutions")}
        >
          <Lightbulb size={36} />
          <Link to="/solutions">SOLUTIONS</Link>
        </li>
        <li
          className={`flex text-lg font-semibold gap-12 items-center ${
            activeLink === "/contactus" ? "text-red-500" : "hover:text-red-500"
          }`}
          onClick={() => setActiveLink("/contactus")}
        >
          <MessageSquare size={36} />
          <Link className="whitespace-nowrap" to="/contactus">
            CONTACT US
          </Link>
        </li>
        <li
          className={`flex text-lg font-semibold gap-12 items-center ${
            activeLink === "/careers" ? "text-red-500" : "hover:text-red-500"
          }`}
          onClick={() => setActiveLink("/careers")}
        >
          <GraduationCap size={36} />
          <Link to="/careers">CAREERS</Link>
        </li>
      </ul>
      <hr className="w-full border-red-600  my-10" />
    </div>
  );
};

export default Sidebar;
