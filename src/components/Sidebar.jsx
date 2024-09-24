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
const Sidebar = ({ isOpen, closeSidebar }) => {
  const [activeLink, setActiveLink] = useState(null);
  const sidebarRef = useRef();

  useEffect(() => {
    const pathname = window.location.pathname;
    setActiveLink(pathname);
  }, []);

  const handleLinkClick = (path) => {
    setActiveLink(path);
    closeSidebar();
  };

  return (
    <div
      ref={sidebarRef}
      className={`bg-white items-center justify-center p-4 min-h-screen border-r border-gray-200 transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <img className="px-[34px]" src="/images/Logo.png" alt="Logo" />
      <hr className="w-full border-[#BF360C] mb-10" />
      <ul className="flex flex-col gap-8">
        <li
          className={`flex text-lg font-semibold gap-6 items-center ${
            activeLink === "/" ? "text-[#BF360C]" : "hover:text-[#BF360C]"
          }`}
          onClick={() => handleLinkClick("/")}
        >
          <Home size={28} />
          <Link to="/">HOME</Link>
        </li>
        <li
          className={`flex text-lg font-semibold gap-6 items-center ${
            activeLink === "/aboutus" ? "text-[#BF360C]" : "hover:text-red-500"
          }`}
          onClick={() => handleLinkClick("/aboutus")}
        >
          <ScrollText size={28} />
          <Link to="/aboutus">ABOUT US</Link>
        </li>
        <li
          className={`flex text-lg font-semibold gap-6 items-center ${
            activeLink === "/solutions"
              ? "text-[#BF360C]"
              : "hover:text-red-500"
          }`}
          onClick={() => handleLinkClick("/solutions")}
        >
          <Lightbulb size={28} />
          <Link to="/solutions">SOLUTIONS</Link>
        </li>
        <li
          className={`flex text-lg font-semibold gap-6 items-center ${
            activeLink === "/contactus"
              ? "text-[#BF360C]"
              : "hover:text-red-500"
          }`}
          onClick={() => handleLinkClick("/contactus")}
        >
          <MessageSquare size={28} />
          <Link className="whitespace-nowrap" to="/contactus">
            CONTACT US
          </Link>
        </li>
        <li
          className={`flex text-lg font-semibold gap-6 items-center ${
            activeLink === "/careers" ? "text-[#BF360C]" : "hover:text-red-500"
          }`}
          onClick={() => handleLinkClick("/careers")}
        >
          <GraduationCap size={28} />
          <Link to="/careers">CAREERS</Link>
        </li>
      </ul>
      <hr className="w-full border-[#BF360C]  my-10" />
    </div>
  );
};

export default Sidebar;
