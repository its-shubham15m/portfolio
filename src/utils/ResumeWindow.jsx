import { motion, AnimatePresence } from "framer-motion";

const ResumeWindow = ({ onClose }) => {
  // Handler for backdrop click
  const handleBackdropClick = (e) => {
    // Close only if clicking on the backdrop, not on the modal content
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleBackdropClick}
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-white rounded-xl p-6 w-full max-w-sm shadow-2xl text-center relative"
          onClick={(e) => e.stopPropagation()}
        >
          <p className="text-xl md:text-2xl font-bold mb-6 text-gray-800">
            What would you like to do?
          </p>

          <div className="flex flex-col gap-3">
            <a
              href="https://drive.google.com/file/d/1ab60K8PrsNM3PCQRXHDZ2hmp-IPRzRF_/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-main-blue text-white px-4 py-2 text-sm md:text-base rounded-full transition cursor-pointer hover:bg-main-blue/80"
            >
              View Resume
            </a>
            <a
              href="/Shubham Gupta_AIML_2025.pdf"
              download
              className="border text-main-blue px-4 py-2 text-sm md:text-base rounded-full hover:bg-[#FCD12A] hover:text-black transition cursor-pointer"
            >
              Download Resume
            </a>
            <button
              onClick={onClose}
              className="text-xs md:text-base hover:bg-red-500 hover:text-white transition px-4 py-2 rounded-full mt-2 cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ResumeWindow;
