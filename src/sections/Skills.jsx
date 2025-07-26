import React from 'react';
import { color, motion } from 'framer-motion';
import {
  FaPython, FaJava, FaJs, FaReact, FaGitAlt, FaDocker, FaFigma
} from 'react-icons/fa';
import {
  SiC, SiTensorflow, SiPytorch, SiKeras, SiScikitlearn, SiOpencv,
  SiMongodb, SiMysql, SiPostgresql, SiFirebase, SiStreamlit, SiGooglecloud, SiVercel
} from 'react-icons/si';

const skills = [
  { name: 'Python', icon: FaPython, color: '#3776AB' },
  { name: 'Java', icon: FaJava, color: '#f89820' },
  { name: 'C', icon: SiC, color: '#3D74B6' },
  { name: 'JavaScript', icon: FaJs, color: '#f7df1e' },
  { name: 'React.js', icon: FaReact, color: '#61dafb' },
  { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
  { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
  { name: 'Keras', icon: SiKeras, color: '#D00000' },
  { name: 'Scikit-Learn', icon: SiScikitlearn, color: '#F7931E' },
  { name: 'OpenCV', icon: SiOpencv, color: '#5C3EE8' },
  { name: 'Streamlit', icon: SiStreamlit, color: '#FF4B4B' },
  { name: 'MongoDB', icon: SiMongodb, color: '#4DB33D' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'Google Cloud', icon: SiGooglecloud, color: '#4285F4' },
  { name: 'Vercel', icon: SiVercel, color: '#000000' },
  { name: 'Docker', icon: FaDocker, color: '#2496ED' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  { name: 'Figma', icon: FaFigma, color: '#2D2D2D'}
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#fdfdfdaa] text-black px-6 md:px-16 py-20 max-w-7xl mx-auto">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills and Technologies
      </motion.h2>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex flex-col items-center justify-center bg-white p-4 rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition duration-20"
          >
            <skill.icon size={40} color={skill.color} className="mb-3" />
            <p className="text-md font-semibold text-center">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
