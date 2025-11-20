import React from 'react';
import { FaMobileAlt, FaRobot, FaBrain } from 'react-icons/fa';

const About = () => {
  const highlights = [
    {
      icon: <FaMobileAlt />,
      title: 'React Native Development',
      description: 'Building high-performance cross-platform mobile apps with modern UI/UX and optimized architecture.'
    },
    {
      icon: <FaRobot />,
      title: 'AI-Powered Applications',
      description: 'Integrating LLMs, automation, and intelligent features directly into mobile and web apps.'
    },
    {
      icon: <FaBrain />,
      title: 'Generative AI & LLMs',
      description: 'Working with GPT models, RAG pipelines, embeddings, and custom AI workflows.'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="lead">
              React Native Developer & AI Specialist with 4 years of experience 
              in building mobile apps enhanced with LLM, AI automation, and 
             Generative AI features.
            </p>
            <p>
              I combine deep mobile development skills with modern AI technologies to create intelligent, 
              production-ready applications. From integrating LLM APIs to building custom AI workflows, 
              I focus on delivering real-world, scalable solutions.
            </p>

            <div className="highlights">
              {highlights.map((item, index) => (
                <div key={index} className="highlight-item">
                  <div className="highlight-icon">{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
