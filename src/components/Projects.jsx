import React from 'react';
import { FaRobot, FaComments, FaBrain, FaShieldAlt, FaTools, FaShoppingCart } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      icon: <FaComments />,
      badge: 'NLP',
      title: 'Multi-Lingual Sentiment Analysis (GlobalTextIQ)',
      description: 'Engineered an NLP system to analyze customer reviews and remarks across multiple languages, providing actionable insights for businesses.',
      tech: ['Python', 'NLP', 'TensorFlow', 'Transformers'],
      highlights: [
        'Multi-language support for global customer feedback',
        'Real-time sentiment classification and analysis',
        'Scalable architecture for high-volume data processing'
      ],
      featured: true
    },
    {
      icon: <FaShieldAlt />,
      badge: 'Deep Learning',
      title: 'Heart Disease Prediction System',
      description: 'Deployed a heart disease classification model to AWS SageMaker using a full CI/CD pipeline with GitHub Actions for automated deployment.',
      tech: ['Python', 'AWS SageMaker', 'GitHub Actions', 'Scikit-learn'],
      highlights: [
        'Full CI/CD pipeline with automated testing',
        'Deployed on AWS SageMaker for scalability',
        'High accuracy classification model'
      ],
      featured: true
    },
    {
      icon: <FaBrain />,
      badge: 'Computer Vision',
      title: 'CNN Image Recognition',
      description: 'Developed a Convolutional Neural Network (CNN) for deep learning-based image classification with high accuracy on diverse datasets.',
      tech: ['Python', 'TensorFlow', 'Keras', 'CNN'],
      highlights: [
        'Deep learning architecture for image classification',
        'Transfer learning for improved performance',
        'Optimized for real-time inference'
      ],
      featured: true
    },
    {
      icon: <FaTools />,
      badge: 'Predictive ML',
      title: 'ANN Housing Price Prediction',
      description: 'Implemented an Artificial Neural Network (ANN) to predict housing prices based on various features and market conditions.',
      tech: ['Python', 'TensorFlow', 'Pandas', 'NumPy'],
      highlights: [
        'Multi-layer neural network architecture',
        'Feature engineering for improved accuracy',
        'Regression model with low error rates'
      ],
      featured: false
    },
    {
      icon: <FaTools />,
      badge: 'MLOps',
      title: 'MLOps Housing Scheme',
      description: 'Deployed a linear regression housing price model using MLOps principles including version control, automated testing, and continuous deployment.',
      tech: ['Python', 'MLflow', 'Docker', 'Git'],
      highlights: [
        'Full MLOps pipeline implementation',
        'Model versioning and experiment tracking',
        'Automated deployment and monitoring'
      ],
      featured: false
    },
    {
      icon: <FaTools />,
      badge: 'Predictive ML',
      title: 'Employee Salary Prediction',
      description: 'Built a machine learning model to predict employee salaries based on historical data, experience, and job roles.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Gradient Boosting'],
      highlights: [
        'Feature selection and engineering',
        'Ensemble methods for improved accuracy',
        'Deployed as REST API for integration'
      ],
      featured: false
    },
    {
      icon: <FaShoppingCart />,
      badge: 'Recommender System',
      title: 'AI-Powered Matchmaking (Dates & Honey)',
      description: 'Engineered a data-driven matchmaking algorithm using collaborative filtering to improve user matches in mobile dating application.',
      tech: ['Python', 'Flask', 'React Native', 'Collaborative Filtering'],
      highlights: [
        'Collaborative filtering for personalized matches',
        'Backend APIs serving model predictions',
        'Integrated with React Native mobile app'
      ],
      featured: false
    },
    {
      icon: <FaComments />,
      badge: 'NLP',
      title: 'NLP-Powered Chatbot (InfluencerGo)',
      description: 'Collaborated on building an NLP-powered chatbot to enhance user engagement and provide intelligent responses in influencer marketing app.',
      tech: ['Python', 'NLP', 'Flask', 'React Native'],
      highlights: [
        'Natural language understanding and generation',
        'Context-aware conversational AI',
        'Seamless integration with mobile platform'
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
