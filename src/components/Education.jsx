import React from 'react';
import { FaGraduationCap, FaRobot, FaBrain } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      icon: <FaGraduationCap />,
      title: 'Bachelor of Science in Computer Science',
      institution: 'Virtual University of Pakistan',
      period: '2020 - 2024',
      description: 'Foundation in algorithms, data structures, and software engineering principles',
      highlight: false
    },
    {
      icon: <FaRobot />,
      title: 'Generative AI & Agentic AI Specialization',
      institution: 'NAVTTC (National Vocational & Technical Training Commission)',
      period: 'September 2025 - December 2025',
      description: 'Advanced training in LLMs, multi-agent systems, RAG, and production AI deployment',
      highlight: true
    },
    {
      icon: <FaBrain />,
      title: 'AI/ML & Deep Learning',
      institution: 'NAVTTC',
      period: 'May 2025 - August 2025',
      description: 'Comprehensive training in neural networks, CNNs, RNNs, and modern ML techniques',
      highlight: true
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education & Certifications</h2>
        <div className="education-grid">
          {educationData.map((edu, index) => (
            <div key={index} className={`education-card ${edu.highlight ? 'highlight' : ''}`}>
              <div className="edu-icon">{edu.icon}</div>
              <h3>{edu.title}</h3>
              <p className="institution">{edu.institution}</p>
              <p className="period">{edu.period}</p>
              <p className="description">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
