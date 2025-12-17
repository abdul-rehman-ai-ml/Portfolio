import { 
  FaCode, 
  FaDatabase, 
  FaCloud, 
  FaReact, 
} from 'react-icons/fa6';
import { 
  FaBrain,
    FaServer,
} from 'react-icons/fa';

const Expertise = () => {
const expertiseCards = [
  {
    icon: <FaCode />, 
    title: 'Full-Stack Engineering (Web & Mobile)',
    skills: [
      'MERN Stack (React, Node.js, MongoDB)',
      'Cross-platform React Native (iOS & Android)',
      'Responsive Web Apps with Vite & Tailwind',
      'Scalable Component Architecture',
      'Seamless Frontend-Backend Integration'
    ]
  },
  {
    icon: <FaBrain />, 
    title: 'AI Engineering & LLMs',
    skills: [
      'RAG Pipelines & Vector Search Optimization',
      'LLM Integration (OpenAI, Claude, Custom Models)',
      'LangChain & LlamaIndex Frameworks',
      'Prompt Engineering & Model Fine-Tuning',
      'Intelligent Chatbots & Recommendation Systems'
    ]
  },
  {
    icon: <FaServer />, 
    title: 'Backend & System Performance',
    skills: [
      'Python (Flask/Django/FastAPI) Microservices',
      'API Latency Reduction & Caching Strategies',
      'RESTful API Design & Secure Authentication',
      'Database Optimization (SQL & NoSQL)',
      'High-Concurrency Request Handling'
    ]
  },
  {
    icon: <FaCloud />, 
    title: 'Cloud, MLOps & CI/CD',
    skills: [
      'CI/CD Pipelines (GitHub Actions, Fastlane)',
      'AWS (SageMaker, S3) & Azure AI Services',
      'Docker Containerization & Orchestration',
      'Model Deployment & Monitoring',
      'Cloud Infrastructure Management'
    ]
  }
];

// Tech Stack: Added "AI & ML" category, refined others
const techStack = {
  'AI & Machine Learning': { // NEW CATEGORY
    icon: <FaBrain />,
    tags: [
      'Python',
      'LangChain',
      'TensorFlow',
      'PyTorch',
      'RAG',
      'Vector DBs',
      'OpenAI API',
      'LlamaIndex'
    ]
  },
  'Frontend & Mobile': { // RENAMED from "Mobile Development"
    icon: <FaReact />,
    tags: [
      'React.js',
      'React Native',
      'Flutter',
      'TypeScript',
      'Tailwind CSS',
      'Redux Toolkit',
      'Vite',
      'Expo'
    ]
  },
  'Backend & Database': { // MERGED Backend + Database
    icon: <FaDatabase />,
    tags: [
      'Node.js',
      'Express',
      'MongoDB',
      'PostgreSQL',
      'FastAPI',
      'Flask',
      'Firebase'
    ]
  },
  'Cloud & DevOps': {
    icon: <FaCloud />,
    tags: [
      'AWS SageMaker',
      'Azure AI',
      'Docker',
      'GitHub Actions',
      'Fastlane',
      'CI/CD'
    ]
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
