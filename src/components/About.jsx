import React from 'react';
import { FaRobot, FaBrain, FaCodeBranch } from 'react-icons/fa';

const About = () => {
  const highlights = [
    {
      icon: <FaRobot />,
      title: 'Agentic AI',
      description: 'Building autonomous agents with LangChain, LlamaIndex, and custom frameworks'
    },
    {
      icon: <FaBrain />,
      title: 'Generative AI',
      description: 'Fine-tuning LLMs, RAG systems, and multimodal AI applications'
    },
    {
      icon: <FaCodeBranch />,
      title: 'MLOps',
      description: 'Deploying AI models at scale with AWS, Docker, and CI/CD pipelines'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="lead">
              AI Engineer with <strong>4+ years</strong> of full-stack development experience, now specializing in 
              cutting-edge AI technologies including <strong>Agentic AI systems</strong>, <strong>Large Language Models</strong>, 
              and <strong>Generative AI applications</strong>.
            </p>
            <p>
              My journey from full-stack development to AI engineering has equipped me with a unique perspective on 
              building scalable, production-ready AI systems. I excel at bridging the gap between research and deployment, 
              creating intelligent agents that solve real-world problems.
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
