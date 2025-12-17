import  { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';
import rehmanBg from '../assets/rehmanbg.png';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);


  const roles = [
    'Full-Stack AI Engineer',
    'MERN & Python Developer',
    'RAG & LLM Specialist',
    'AI Solutions Architect',
    'E2E AI Systems Architect',
  ];

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 0 : 2000;

    const timer = setTimeout(() => {
      const currentRole = roles[roleIndex];

      if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
      }

      setTypedText(currentRole.substring(0, charIndex));
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="home" className="hero">
      <div className="container">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="greeting">Hi, I&lsquo;m</span>
            <span className="name">Abdul Rehman</span>
          </h1>
          <h2 className="hero-subtitle">
            <span className="typing-text">{typedText}</span>
            <span className="cursor">|</span>
          </h2>
         <p className="hero-description">
            Leveraging dual mastery in the <strong>MERN stack</strong> and <strong>Python frameworks</strong> (Django, Flask) 
            to engineer scalable <strong>Full-Stack</strong> intelligent systems. I specialize in <strong>LLM Fine-Tuning</strong>, 
            <strong>RAG pipelines</strong>, and bridging complex AI models with high-performance web and mobile applications.
          </p>
          <div className="hero-cta">
            <Link to="contact" smooth={true} offset={-80} duration={500} className="btn btn-primary">
              <FaEnvelope /> Get In Touch
            </Link>
            <Link to="projects" smooth={true} offset={-80} duration={500} className="btn btn-secondary">
              <i className="fas fa-code"></i> View Projects
            </Link>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/abduI-rehman-80b51a200/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/abdul-rehman-ai-ml" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="mailto:mrehmansiddiqui53@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="ai-animation">
            <div className="neural-network">
              <img src={rehmanBg} alt="Abdul Rehman" className="hero-portrait" />
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;
