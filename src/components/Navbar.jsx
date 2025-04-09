import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "CV", path: "/cv" },
    { name: "Certification", path: "/certification" }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-screen h-16 flex items-center px-8 transition-all duration-300 
      ${isScrolled ? "bg-white" : "bg-transparent"} z-50`}
    >
      <ul className={`flex gap-8 ${isScrolled ? "text-galaxyText" : "text-white"} text-lg font-medium absolute left-1/2 transform -translate-x-1/2`}>
        {menuItems.map((item, index) => (
          <li key={index} className="relative cursor-pointer">
            <Link
              to={item.path}
              className={`transition-colors duration-300 font-semibold ${
                isScrolled ? "hover:text-galaxyText" : "hover:text-white"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {item.name}
              <span className="absolute left-0 bottom-0 h-0.5 bg-galaxyText transition-all duration-300"
                style={{ width: hoveredIndex === index ? "100%" : "0%" }}
              ></span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
