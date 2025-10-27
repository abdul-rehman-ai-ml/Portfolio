import React from 'react';
import { FaRobot, FaComments, FaBrain, FaShieldAlt, FaTools, FaShoppingCart } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      icon: <FaRobot />,
      badge: 'Agentic AI',
      title: 'Multi-Agent Research Assistant',
      description: 'Built an autonomous research system using LangGraph with specialized agents for web search, document analysis, and synthesis. Implements ReAct pattern with tool-calling capabilities.',
      tech: ['LangChain', 'GPT-4', 'Pinecone', 'FastAPI'],
      highlights: [
        'Orchestrates 4 specialized agents with dynamic task delegation',
        'RAG implementation with semantic chunking and reranking',
        'Reduces research time by 70% with 90% accuracy'
      ],
      featured: true
    },
    {
      icon: <FaComments />,
      badge: 'Generative AI',
      title: 'Enterprise RAG Chatbot',
      description: 'Production-ready conversational AI system with retrieval-augmented generation for enterprise knowledge base. Handles 50K+ documents with sub-second response times.',
      tech: ['LlamaIndex', 'Claude', 'Weaviate', 'Docker'],
      highlights: [
        'Hybrid search combining dense and sparse retrieval',
        'Custom prompt templates with chain-of-thought reasoning',
        'Deployed on AWS with auto-scaling (1K+ concurrent users)'
      ],
      featured: true
    },
    {
      icon: <FaBrain />,
      badge: 'Fine-tuning',
      title: 'Domain-Specific LLM Fine-tuning',
      description: 'Fine-tuned Llama-2-7B for medical diagnosis assistance using QLoRA, achieving 92% accuracy on domain-specific tasks while reducing model size by 60%.',
      tech: ['PyTorch', 'Hugging Face', 'LoRA', 'Weights & Biases'],
      highlights: [
        'Efficient fine-tuning with 4-bit quantization',
        'Custom evaluation metrics for medical accuracy',
        'Deployed with TensorRT for 3x inference speedup'
      ],
      featured: false
    },
    {
      icon: <FaShieldAlt />,
      badge: 'ML Engineering',
      title: 'Real-time Fraud Detection System',
      description: 'ML-powered fraud detection using ensemble methods and anomaly detection, processing 100K+ transactions daily with 95% precision.',
      tech: ['scikit-learn', 'XGBoost', 'Redis', 'AWS SageMaker'],
      highlights: [
        'Real-time inference with <50ms latency',
        'Handles class imbalance with SMOTE and ensemble methods',
        'Continuous learning pipeline with automated retraining'
      ],
      featured: false
    },
    {
      icon: <FaTools />,
      badge: 'Predictive ML',
      title: 'Predictive Maintenance Engine',
      description: 'Time-series forecasting model for industrial equipment failure prediction, reducing downtime by 30% using gradient boosting and LSTM networks.',
      tech: ['TensorFlow', 'LightGBM', 'MLflow', 'Kubernetes'],
      highlights: [
        'F1-score of 0.92 on failure prediction',
        'Hybrid model combining statistical and deep learning',
        'Deployed as microservice with model versioning'
      ],
      featured: false
    },
    {
      icon: <FaShoppingCart />,
      badge: 'Recommender System',
      title: 'Personalized Recommendation Engine',
      description: 'Hybrid recommendation system combining collaborative filtering and content-based methods for e-commerce, increasing conversion rate by 28%.',
      tech: ['PyTorch', 'Surprise', 'PostgreSQL', 'Flask'],
      highlights: [
        'Processes 50K+ user interactions for personalization',
        'A/B tested with 15% improvement in CTR',
        'Real-time recommendations via REST API'
      ],
      featured: false
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured AI Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className={`project-card ${project.featured ? 'featured' : ''}`}>
              <div className="project-header">
                <div className="project-icon">{project.icon}</div>
                <span className="project-badge">{project.badge}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx}>{tech}</span>
                ))}
              </div>
              <ul className="project-highlights">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
