import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import ResumeWindow from "../utils/ResumeWindow";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative"> {/* Add relative positioning to the parent div */}
      <nav className="relative z-20 bg-[#1D1D1D] mx-4 md:mx-10 rounded-[1.25rem] flex justify-between items-center px-6 md:px-7 py-4 text-white mt-6 font-navbar">
        {/* Logo */}
        <a className="ml-1" href="/">
          <svg
            width="50"
            height="50"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300 hover:scale-110"
            aria-label="Modern stylized letter S"
          >
            <g fill="#FFFFFF">
              <path stroke-width="12" stroke="#FFFFFF" fill="none" stroke-linecap="round" d="M 25 75 C 25 85, 35 90, 50 90 C 65 90, 75 85, 75 75 C 75 65, 65 60, 50 55 C 35 50, 25 45, 25 35 C 25 25, 35 20, 50 20 C 65 20, 75 25, 75 35" />
            </g>
          </svg>
        </a>

        {/* Desktop Nav Items */}
        <ul className="hidden md:flex gap-4 items-center h-fit font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-center cursor-pointer px-6 py-2 rounded-[1.25rem] transition ${
                  isActive ? 'bg-main-blue' : ''
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              onClick={() => {
                setTimeout(() => {
                  const el = document.getElementById("projects");
                  el?.scrollIntoView({ behavior: "smooth" });
                }, 100); // wait for route change
              }}
              className={({ isActive }) =>
                `text-center cursor-pointer px-6 py-2 rounded-[1.25rem] transition`
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/achievements"
              className={({ isActive }) =>
                `text-center cursor-pointer px-6 py-2 rounded-[1.25rem] transition ${
                  isActive ? 'bg-main-blue' : ''
                }`
              }
            >
              Achievements
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/experience"
              className={({ isActive }) =>
                `text-center cursor-pointer px-6 py-2 rounded-[1.25rem] transition ${
                  isActive ? 'bg-main-blue' : ''
                }`
              }
            >
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-center cursor-pointer px-6 py-2 rounded-[1.25rem] transition ${
                  isActive ? 'bg-main-blue' : ''
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-center cursor-pointer px-6 py-2 rounded-[1.25rem] transition ${
                  isActive ? 'bg-main-blue' : ''
                }`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>


        {/* Resume Button - Desktop */}
        <div className="hidden md:flex h-fit gap-4 items-center">
          <div className="h-8 w-0.5 bg-white/30" /> {/* Added visual divider */}
            <button 
            onClick={() => setShowModal(true)}
            className="px-6 py-2 text-black rounded-[1.25rem] bg-white font-medium cursor-pointer">
              Resume
            </button>
        </div>

        {/* Hamburger & Resume - Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <button 
          onClick={() => setShowModal(true)}
          className="px-4 py-2 text-black bg-white rounded-[1.25rem] font-medium">
            Resume
          </button>
          
          <button
            className="focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-[calc(100%+1.5rem)] left-0 right-0 bg-[#1E1E1E] rounded-[1.25rem] mx-4 px-6 pb-6 text-white font-navbar z-40"> {/* Changed z-index to a more standard value and added positioning */}
          <ul className="flex flex-col gap-6 pt-6 text-lg">
            <li><Link className="block px-4 py-2 text-2xl" to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link className="block px-4 py-2 text-2xl" to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><a className="block px-4 py-2 text-2xl" href="/#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><Link className="block px-4 py-2 text-2xl" to="/achievements" onClick={() => setMenuOpen(false)}>Achievements</Link></li>
            <li><Link className="block px-4 py-2 text-2xl" to="/experience" onClick={() => setMenuOpen(false)}>Experience</Link></li>
            <li><Link className="block px-4 py-2 text-2xl" to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>

          <hr className="my-6 border-gray-600" />

          <div className="text-sm px-4">
            <a href="mailto:shubhamgupta15m@gmail.com" className="text-xl"><p className="mb-6">shubhamgupta15m@gmail.com</p></a>
            <div className="flex gap-4">
              {/* X (Placeholder, consider replacing with a real icon or removing if not needed) */}
              <a href="https://x.com/shubhamgupta15m" className="p-2 border border-white rounded-full hover:bg-white hover:text-black transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/shubham-gupta-15m" className="p-2 border border-white rounded-full hover:bg-white hover:text-black transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.5 19h-2v-9h2v9zm-1-10.28c-.69 0-1.25-.57-1.25-1.28s.56-1.28 1.25-1.28c.68 0 1.25.57 1.25 1.28s-.57 1.28-1.25 1.28zm13.5 10.28h-2v-4.5c0-1.11-.89-2-2-2s-2 .89-2 2v4.5h-2v-9h2v1.22c.58-.69 1.43-1.22 2.5-1.22 1.93 0 3.5 1.57 3.5 3.5v5.5z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/the_.shubhamgupta/" className="p-2 border border-white rounded-full hover:bg-white hover:text-black transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.206.058 2.036.24 2.508.415a4.92 4.92 0 0 1 1.675 1.075 4.923 4.923 0 0 1 1.075 1.675c.175.472.357 1.302.415 2.508.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.058 1.206-.24 2.036-.415 2.508a4.92 4.92 0 0 1-1.075 1.675 4.923 4.923 0 0 1-1.675 1.075c-.472.175-1.302.357-2.508.415-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.206-.058-2.036-.24-2.508-.415a4.92 4.92 0 0 1-1.675-1.075 4.923 4.923 0 0 1-1.075-1.675c-.175-.472-.357-1.302-.415-2.508-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.058-1.206.24-2.036.415-2.508a4.92 4.92 0 0 1 1.075-1.675 4.923 4.923 0 0 1 1.675-1.075c.472-.175 1.302-.357 2.508-.415 1.265-.058 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.667.012-4.947.071-1.276.058-2.151.24-2.899.509a6.567 6.567 0 0 0-2.392 1.553 6.567 6.567 0 0 0-1.553 2.392c-.269.748-.451 1.623-.509 2.899-.059 1.28-.071 1.688-.071 4.947s.012 3.667.071 4.947c.058 1.276.24 2.151.509 2.899a6.567 6.567 0 0 0 1.553 2.392 6.567 6.567 0 0 0 2.392 1.553c.748.269 1.623.451 2.899.509 1.28.059 1.688.071 4.947.071s3.667-.012 4.947-.071c1.276-.058 2.151-.24 2.899-.509a6.567 6.567 0 0 0 2.392-1.553 6.567 6.567 0 0 0 1.553-2.392c.269-.748.451-1.623.509-2.899.059-1.28.071-1.688.071-4.947s-.012-3.667-.071-4.947c-.058-1.276-.24-2.151-.509-2.899a6.567 6.567 0 0 0-1.553-2.392 6.567 6.567 0 0 0-2.392-1.553c-.748-.269-1.623-.451-2.899-.509-1.28-.059-1.688-.071-4.947-.071zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
      {showModal && <ResumeWindow onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Navbar;