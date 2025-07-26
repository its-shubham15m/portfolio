import { motion } from 'framer-motion';
import VyomAIImg from '../assets/projects/vyomai.png';
import OculusImg from '../assets/projects/oculus.png';
import IntelliScanImg from '../assets/projects/intelliscan.png';
import HealthTrackImg from '../assets/projects/healthtrack.png';
import GBMaskImg from '../assets/projects/gbmask.png';
import PulseImg from '../assets/projects/pulse.png';

const projects = [
  {
    title: 'VyomAI – Smart Multimodal Chatbot',
    description: 'AI-powered chatbot leveraging LLMs and multimodal data across text, vision, image-generation and voice.',
    image: VyomAIImg,
    link: 'https://github.com/its-shubham15m/vyomai',
    affiliation: 'MCKVIE - Academic Final Year Project',
  },
  {
    title: 'Oculus – Smart Glass with Computer Vision',
    description: 'Real-time object detection in wearables using YOLO, NLP, LLM and metaheuristic optimization techniques.',
    image: OculusImg,
    link: 'https://github.com/its-shubham15m/oculus',
    affiliation: 'ACM India East & N.E. Bachelor Dissertation Award / B.Tech Project Contest 2024',
  },
  {
    title: 'IntelliScan – OCR-Based Document Search',
    description: 'Search engine using OCR & NLP for scanned PDFs with 92% accuracy and fast retrieval.',
    image: IntelliScanImg, 
    link: 'https://github.com/its-shubham15m',
    affiliation: 'Internship at Damodar Valley Corporation (DVC)',
  },
  {
    title: 'HealthTrack – Disease Prediction App',
    description: 'ML-powered health prediction tool with 85% accuracy and visualized analytics.',
    image: HealthTrackImg,
    link: 'https://github.com/ChakraDeep8/Health-Track-App',
    affiliation: 'Internship at IBM-SkillsBuild',
  },
  {
    title: 'GB-Mask – Human Detection',
    description: 'Realtime human detection system using YOLOv8 and GB-Mask with segmentation support.',
    image: GBMaskImg,
    link: 'https://github.com/its-shubham15m/YOLO-Realtime-ObjectDetection',
    affiliation: 'MCKVIE - Pragati Innovation Contest',
  },
  {
    title: 'Pulse.exe – Technical Event Website',
    description: 'Event site built in React.js with interactive UI, increasing student participation by 30%.',
    image: PulseImg,
    link: 'https://github.com/its-shubham15m/pulse2k23',
    affiliation: 'MCKVIE - IT Department Official Tech Event',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#fdfdfdaa] py-20 px-6 md:px-16 text-black max-w-7xl mx-auto">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h2>
      <div className="space-y-16">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} bg-[#FDFDFD] rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)]`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full md:w-1/2 object-cover max-h-96"
            />
            <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center space-y-4">
              <h3 className="text-2xl md:text-3xl font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-500 italic">Affiliated by: {project.affiliation}</p>
              <p className="font-light">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-2/3 border border-black px-6 py-2 rounded-lg hover:bg-gray-800 hover:text-white transition"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
