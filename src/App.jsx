import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      
      {/* Hero Section - Home */}
      <section id="home">
        <Hero />
      </section>
      
      {/* About Section */}
      <section id="about">
        <About />
      </section>
      
      {/* Experience Section */}
      <section id="experience">
        <Experiences />
      </section>
      
      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>
      
      {/* Testimonial Section */}
      <section id="testimonials">
        <Testimonial />
      </section>
      
      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
      
      <Footer />
    </div>
  );
};

export default App;