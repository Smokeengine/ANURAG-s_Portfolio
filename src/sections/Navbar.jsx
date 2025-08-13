import { useState } from "react";
import { motion } from "motion/react";

function Navigation({ onNavigate }) {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Close mobile menu after navigation
    if (onNavigate){ onNavigate();};
  };

  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <button 
          className="nav-link text-neutral-400 hover:text-white transition-colors" 
          onClick={() => scrollToSection('home')}
        >
          Home
        </button>
      </li>
      <li className="nav-li">
        <button 
          className="nav-link text-neutral-400 hover:text-white transition-colors" 
          onClick={() => scrollToSection('about')}
        >
          About
        </button>
      </li>
      <li className="nav-li">
        <button 
          className="nav-link text-neutral-400 hover:text-white transition-colors" 
          onClick={() => scrollToSection('experience')}
        >
          Work
        </button>
      </li>
      <li className="nav-li">
        <button 
          className="nav-link text-neutral-400 hover:text-white transition-colors" 
          onClick={() => scrollToSection('projects')}
        >
          Projects
        </button>
      </li>
      <li className="nav-li">
        <button 
          className="nav-link text-neutral-400 hover:text-white transition-colors" 
          onClick={() => scrollToSection('contact')}
        >
          Contact
        </button>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleNavigation = () => {
    setIsOpen(false); // Close mobile menu after navigation
  };

  const scrollToHome = () => {
    const element = document.getElementById('home');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <button
            onClick={scrollToHome}
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white cursor-pointer"
          >
            Anurag Vemula
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation onNavigate={handleNavigation} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;