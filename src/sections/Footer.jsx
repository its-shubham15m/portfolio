import { FaLinkedinIn, FaInstagram, FaXTwitter} from 'react-icons/fa6';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1D1D1D] text-white px-6 md:px-16 py-12">
      {/* Top Line */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start pb-10 relative">
        <div className="flex flex-col gap-6 w-full md:w-1/3">
          {/* Logo & Location */}
          <div>
            <div className="flex items-center gap-1 text-2xl font-bold">
              <img className="w-13 h-13" src="/logo.png" alt="Logo"></img>
              Shubham Gupta
            </div>
            <p className="text-sm text-white/70 mt-1">Kolkata, West Bengal, India</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 mt-4">
            <a
              href="https://x.com/shubhamgupta15m"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-white rounded-full hover:bg-white hover:text-black transition"
            >
              <FaXTwitter className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/shubham-gupta-15m"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-white rounded-full hover:bg-white hover:text-black transition"
            >
              <FaLinkedinIn className="w-4 h-4" />
            </a>

            <a
              href="https://www.instagram.com/the_.shubhamgupta/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-white rounded-full hover:bg-white hover:text-black transition"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
          </div>


          {/* Large Copyright Logo */}
          <div className="text-5xl md:text-6xl lg:text-7xl font-bold mt-8 tracking-tight flex items-center">
            <span className="text-white/70 text-[1.5em]">©</span>Shubham
          </div>
        </div>

        {/* Link Sections */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-sm mt-10 md:mt-0 w-full md:w-2/3">
          <div>
            <h4 className="font-semibold mb-3">Information</h4>
            <ul className="space-y-2 text-white/80">
              <li><Link to="/about">About</Link></li>
              <li><a href="/contact">Contact Me</a></li>
              <li><a href="https://github.com/its-shubham15m">GitHub</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Social Media</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="https://www.linkedin.com/in/shubham-gupta-15m">LinkedIn</a></li>
              <li><a href="https://x.com/shubhamgupta15m">X (formely Twitter)</a></li>
              <li><a href="https://www.instagram.com/the_.shubhamgupta/">Instagram</a></li>
              <li><a href="https://www.facebook.com/profile.php?id=100072693819155">Facebook</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Career</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="/achievements">Achievements</a></li>
              <li><a href="/experience">Experience</a></li>
            </ul>
          </div>
        </div>

        {/* Email Right-aligned */}
        <div className="hidden md:block absolute right-10 bottom-10 text-2xl lg:text-5xl font-semibold text-white">
          <a href='mailto:shubhamgupta15m@gmail.com'>shubhamgupta15m@gmail.com</a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60 mt-6 pt-6 border-t border-white/10">
        <p>© Copyright 2025, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;