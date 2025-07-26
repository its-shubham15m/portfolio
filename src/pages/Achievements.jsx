import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IciaCert from '../assets/achievements/icia2024.jpg';
import PragatiCert from '../assets/achievements/pragati2024.jpg';
import ACMCert from '../assets/achievements/acm2024.jpg';
import ACMMedal from '../assets/achievements/acm2024_medal.jpg';
import ACMGroup from '../assets/achievements/acm2024_group.jpg';
import BPCert from '../assets/achievements/businessplan2025.jpg';
import BPTrophy from '../assets/achievements/businessplan2025_trophy.jpg';
import BPSelfie from '../assets/achievements/businessplan2025_self.jpg';

const achievements = [
  {
    title: 'ICIA 2024 – Conference Publication',
    description: 'Presented a research paper on deep learning-based object detection.',
    detailedDescription: 'Submitted and presented the paper “Deep Learning Method in Object Detection: R-CNN to Mask R-CNN” at the Second International Conference on IoT and its Application (ICIA 2024), highlighting advancements in deep learning models like ground-boundary masking and their impact on real-time object detection.',
    date: '22 June 2024',
    images: [IciaCert],
    links: []
  },
  {
    title: 'Pragati 2024 – Innovative Idea Contest',
    description: 'Secured 2nd position for AI-driven human detection using YOLOv8.',
    detailedDescription: 'Demonstrated a working prototype of a human detection surveillance system with ground-boundary masking during the Pragati 2024 innovation technical fest.',
    date: '06 March 2024',
    images: [PragatiCert],
    links: [
      { label: 'GitHub Repo', url: 'https://github.com/its-shubham15m/YOLO-Realtime-ObjectDetection' }
    ]
  },
  {
    title: 'ACM Dissertation Award 2024',
    description: 'Winner of ACM India East & N.E. Bachelor Dissertation Award.',
    detailedDescription: 'Won first place for my final year dissertation project based on smart wearable vision glass (Oculus). Real-time object detection in wearables using YOLO, NLP, LLM and metaheuristic optimization techniques.',
    date: '04 May 2024',
    images: [ACMCert, ACMMedal, ACMGroup],
    links: [
      { label: 'GitHub Repo', url: 'https://github.com/its-shubham15m/oculus' }
    ]
  },
  {
    title: 'Business Plan Competition 2025',
    description: 'Winner – Intra-Institutional Business Plan Competition at MCKVIE for “CitySafe Solutions”',
    detailedDescription: 'Won 1st prize for pitching "CitySafe", an AI-powered smart society surveillance and access management system. The proposal focused on digitizing entry-exit logs, managing parking using real-time tracking, and facial recognition-based gate control using existing CCTV infrastructure. The plan included a phased rollout, monetization model, and technical roadmap.',
    date: '11 April 2025',
    images: [BPCert, BPTrophy, BPSelfie],
    links: []
  },
];

const Achievements = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="achievements" className="bg-[#fdfdfdaa] py-20 px-6 md:px-16 text-black max-w-7xl mx-auto">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Achievements
      </motion.h2>

      <div className="relative border-l-4 border-dashed border-black/20 ml-4 md:ml-10 space-y-20">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="relative pl-8 md:pl-12 group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={() => setSelected(achievement)}
          >
            <div className="absolute top-0 left-[-11px] md:left-[-15px] w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#39acff] border-4 border-white shadow-md z-10" />
            <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition overflow-hidden">
              <img
                src={achievement.images[0]}
                alt={achievement.title}
                className="w-full md:w-1/3 object-cover max-h-64"
              />
              <div className="p-6 md:p-8 flex flex-col justify-center gap-2 md:w-2/3">
                <h3 className="text-xl md:text-2xl font-semibold">{achievement.title}</h3>
                <p className="font-light text-sm md:text-base">{achievement.description}</p>
                <p className="text-sm text-gray-500">{achievement.date}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for full achievement */}
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

export default Achievements;