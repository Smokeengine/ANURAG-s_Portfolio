import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto backdrop-blur-sm bg-black/80">
      {/* Mobile-safe container with proper padding */}
      <div className="min-h-screen flex items-center justify-center p-4 sm:p-6">
        <motion.div
          className="relative w-full max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10 max-h-[90vh] overflow-y-auto"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          {/* Enhanced close button - always visible */}
          <button
            onClick={closeModal}
            className="sticky top-4 left-full z-50 -ml-14 mb-4
                       flex h-10 w-10 items-center justify-center 
                       rounded-full bg-red-600 hover:bg-red-700 
                       transition-colors shadow-lg border-2 border-white
                       focus:outline-none focus:ring-2 focus:ring-red-500"
            aria-label="Close modal"
          >
            <img src="assets/close.svg" className="w-5 h-5" alt="Close" />
          </button>

          {/* Content wrapper */}
          <div className="pb-4">
            <img src={image} alt={title} className="w-full rounded-t-2xl" />
            
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
              <p className="mb-3 font-normal text-neutral-400">{description}</p>
              
              {subDescription.map((subDesc, index) => (
                <p key={index} className="mb-3 font-normal text-neutral-400">
                  {subDesc}
                </p>
              ))}
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 gap-4">
                <div className="flex gap-3 flex-wrap">
                  {tags.map((tag) => (
                    <img
                      key={tag.id}
                      src={tag.path}
                      alt={tag.name}
                      className="rounded-lg size-10 hover-animation"
                    />
                  ))}
                </div>
                
                <a 
                  className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation self-start sm:self-auto" 
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project{" "}
                  <img src="assets/arrow-up.svg" className="size-4" alt="External link" />
                </a>
              </div>
            </div>

            {/* Mobile-friendly bottom close button */}
            <div className="block sm:hidden p-4 border-t border-white/10 bg-midnight/50">
              <button
                onClick={closeModal}
                className="w-full py-3 bg-red-600 hover:bg-red-700 
                           rounded-lg font-medium transition-colors text-white
                           focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background click to close */}
      <div 
        className="absolute inset-0 -z-10" 
        onClick={closeModal}
        aria-label="Close modal"
      />
    </div>
  );
};

export default ProjectDetails;