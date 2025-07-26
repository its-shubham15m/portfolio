import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import ProfileImage from '../assets/hero-img.jpg';

import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="bg-none min-h-screen px-6 md:px-16 py-20 flex flex-col justify-between items-center text-center md:text-left">
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left - Text Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900">About me</h2>
          <p className="text-zinc-900 leading-relaxed text-justify bg-[#FDFDFDAA]">
            I am a passionate and detail-oriented engineer pursuing a B.Tech in Artificial Intelligence and Machine Learning. With a strong foundation in deep learning, data analytics, and full-stack development, I build solutions that bridge real-world problems with intelligent systems. My work spans across OCR-based document retrieval, disease prediction models, object detection, and smart assistant interfaces.
            <br />
            I enjoy transforming complex data into actionable insights and intuitive applications using tools like TensorFlow, PyTorch, React.js, and Streamlit. During internships and academic projects, I’ve consistently delivered scalable, user-focused solutions in AI, computer vision, and NLP.
            <br />
            As a continuous learner and open-source contributor, I’m driven to explore emerging technologies and collaborate on impactful innovations in AI and software engineering.
          </p>
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="bg-[#39acff] text-white px-6 py-3 rounded-[0.5rem] font-medium hover:opacity-90 transition cursor-pointer"
            >
              Contact
            </Link>
          </motion.div>
        </div>

        {/* Right - Image with Circle BG */}
        <div className="flex-1 flex justify-end">
          <div className="relative w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-[#f9f9fb] rounded-full z-0" />
            <img
              src={ProfileImage}
              alt="Profile"
              loading="eager"
              className="relative z-10 w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Social Icons and Name */}
      <div className="mt-16 flex flex-col items-center gap-4">
        <div className="flex gap-6">
          <a href="https://www.instagram.com/the_.shubhamgupta/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-6 h-6 text-zinc-800 hover:text-black" />
          </a>
          <a href="https://www.linkedin.com/in/shubham-gupta-15m" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="w-6 h-6 text-zinc-800 hover:text-black" />
          </a>
          <a href="mailto:shubhamgupta15m@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="w-6 h-6 text-zinc-800 hover:text-black" />
          </a>
        </div>
        <p className="text-sm text-zinc-500">Shubham Gupta 2025</p>
      </div>
    </section>
  );
};

export default About;