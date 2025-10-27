import React from 'react';
import { FaRobot, FaWandMagicSparkles, FaNetworkWired, FaCloud, FaBrain, FaCode, FaDatabase } from 'react-icons/fa6';

const Expertise = () => {
  const expertiseCards = [
    {
      icon: <FaRobot />,
      title: 'Agentic AI Systems',
      skills: [
        'Multi-agent orchestration',
        'ReAct & Chain-of-Thought prompting',
        'Tool-using agents (Function calling)',
        'LangChain & LangGraph',
        'AutoGPT & BabyAGI architectures'
      ]
    },
    {
      icon: <FaWandMagicSparkles />,
      title: 'Generative AI',
      skills: [
        'LLM fine-tuning (LoRA, QLoRA)',
        'RAG (Retrieval-Augmented Generation)',
        'Prompt engineering & optimization',
        'GPT-4, Claude, Llama integration',
        'Text-to-image & multimodal AI'
      ]
    },
    {
      icon: <FaNetworkWired />,
      title: 'Machine Learning',
      skills: [
        'Deep Learning (PyTorch, TensorFlow)',
        'NLP & Computer Vision',
        'Model optimization & quantization',
        'Transfer learning',
        'Reinforcement Learning basics'
      ]
    },
    {
      icon: <FaCloud />,
      title: 'MLOps & Deployment',
      skills: [
        'AWS (SageMaker, Lambda, EC2)',
        'Docker & Kubernetes',
        'FastAPI & Flask for ML APIs',
        'Vector databases (Pinecone, Weaviate)',
        'Model monitoring & versioning'
      ]
    }
  ];

  const techStack = {
    'AI/ML Frameworks': {
      icon: <FaBrain />,
      tags: ['LangChain', 'LlamaIndex', 'PyTorch', 'TensorFlow', 'Hugging Face', 'OpenAI API', 'Anthropic Claude']
    },
    'Programming': {
      icon: <FaCode />,
      tags: ['Python', 'JavaScript/TypeScript', 'SQL', 'React', 'Node.js']
    },
    'Data & Vector DBs': {
      icon: <FaDatabase />,
      tags: ['Pinecone', 'Weaviate', 'ChromaDB', 'PostgreSQL', 'MongoDB']
    },
    'Cloud & DevOps': {
      icon: <FaCloud />,
      tags: ['AWS', 'Docker', 'Git', 'CI/CD', 'Linux']
    }
  };

  return (
    <section id="expertise" className="expertise">
      <div className="container">
        <h2 className="section-title">Core Expertise</h2>
        
        <div className="expertise-grid">
          {expertiseCards.map((card, index) => (
            <div key={index} className="expertise-card">
              <div className="card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <ul>
                {card.skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="tech-stack">
          <h3>Technology Stack</h3>
          <div className="tech-categories">
            {Object.entries(techStack).map(([category, data]) => (
              <div key={category} className="tech-category">
                <h4>{data.icon} {category}</h4>
                <div className="tech-tags">
                  {data.tags.map((tag, idx) => (
                    <span key={idx} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
