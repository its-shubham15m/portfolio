import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DVCCert from '../assets/experience/dvc_certificate.jpg';
import IBMImage from '../assets/experience/ibm_skillsbuild.jpg';
import EduNetCert from '../assets/experience/aicte_edunet.jpg';

const experiences = [
  {
    title: 'Summer Intern – AI-Powered Chat Assistant for DVC Circular Documentation',
    organization: 'Damodar Valley Corporation (DVC)',
    description: 'Worked on a smart OCR-based document retrieval system using NLP & keyword extraction.',
    detailedDescription:
      'As an AIML Summer Intern at DVC, I developed an OCR-based document retrieval and search pipeline. The solution used document parsing, NLP (Spacy), and keyword ranking to enable intelligent document access from scanned PDFs. The repository is confidential due to internal use.',
    date: '08 July 2024 – 10 September 2024',
    images: [DVCCert],
    links: [] // confidential
  },
  {
    title: 'Data Analytics Intern – IBM SkillsBuild & CSRBOX',
    organization: 'IBM SkillsBuild',
    description: 'Built ML-based disease prediction system with data visualization and UI.',
    detailedDescription:
      'Completed an internship under IBM SkillsBuild and CSRBOX, where I worked on HealthTrack – a disease prediction system with ML models and data visualization. The app predicted diseases based on user input and displayed predictions with confidence scores.',
    date: '19 June 2023 – 28 July 2023',
    images: [IBMImage],
    links: [
      { label: 'HealthTrack Project', url: 'https://github.com/ChakraDeep8/Health-Track-App' },
    ],
  },
  {
    title: 'ML Intern – AICTE EduNet Program',
    organization: 'AICTE & EduNet Foundation',
    description: 'Completed advanced AI modules with project submissions under EduNet.',
    detailedDescription:
        'Through the EduNet & AICTE internship program, I upskilled in machine learning, deep learning, and project design. This internship emphasized the fundamentals of scalable AI systems and model training.',
    date: '24 February 2025 – 24 March 2025',
    images: [EduNetCert],
    links: [
        { label: 'Nebula Chatbot', url: 'https://github.com/its-shubham15m/Nebula-Chatbot' },
    ],
  },
];

const Experience = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="experience" className="bg-[#fdfdfdaa] py-20 px-6 md:px-16 text-black max-w-7xl mx-auto">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Experience
      </motion.h2>

      <div className="relative border-l-4 border-dashed border-black/20 ml-4 md:ml-10 space-y-20">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="relative pl-8 md:pl-12 group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={() => setSelected(exp)}
          >
            <div className="absolute top-0 left-[-11px] md:left-[-15px] w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#39acff] border-4 border-white shadow-md z-10" />
            <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition overflow-hidden">
              <img
                src={exp.images[0]}
                alt={exp.title}
                className="w-full md:w-1/3 object-cover max-h-64"
              />
              <div className="p-6 md:p-8 flex flex-col justify-center gap-2 md:w-2/3">
                <h3 className="text-xl md:text-2xl font-semibold">{exp.title}</h3>
                <p className="text-black font-light text-sm md:text-base">{exp.description}</p>
                <p className="text-sm text-gray-500">{exp.date}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-white rounded-xl p-6 max-w-3xl w-full relative"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-2">{selected.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{selected.date}</p>
              <p className="mb-4 text-gray-700">{selected.detailedDescription}</p>

              <div className="flex gap-4 overflow-x-auto pb-2">
                {selected.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`img-${i}`}
                    className="h-56 rounded-lg border shadow"
                  />
                ))}
              </div>

              {selected.links.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-3">
                  {selected.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 border border-black rounded-lg hover:bg-black hover:text-white transition"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}

              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-black text-2xl font-bold"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;
