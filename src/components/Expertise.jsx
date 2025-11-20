import React from 'react';
import { 
  FaMobileScreenButton, 
  FaCode, 
  FaDatabase, 
  FaCloud, 
  FaRobot, 
  FaReact, 
} from 'react-icons/fa6';
import { 
    FaTools 
} from 'react-icons/fa';

const Expertise = () => {
  const expertiseCards = [
    {
      icon: <FaReact />,
      title: 'React Native Development',
      skills: [
        'Cross-platform mobile app development (iOS & Android)',
        'Reusable & scalable component architecture',
        'Navigation, animations & gesture handling',
        'Responsive UI with Tailwind / Styled Components',
        'Expo & React Native CLI'
      ]
    },
    {
      icon: <FaTools />,
      title: 'State Management & Performance',
      skills: [
        'Redux, Redux Toolkit, Zustand, Context API',
        'Optimizing renders & reducing re-renders',
        'Offline-first storage (MMKV, AsyncStorage)',
        'Performance profiling & optimization',
        'Efficient list rendering (FlatList, SectionList)'
      ]
    },
    {
      icon: <FaMobileScreenButton />,
      title: 'Mobile APIs & Integrations',
      skills: [
        'REST API development & integration',
        'Authentication (JWT, OAuth, Firebase Auth)',
        'Push notifications (FCM/APNs)',
        'Maps, Geolocation, Deep Links',
        'Payment gateway & third-party SDK integration'
      ]
    },
    {
      icon: <FaRobot />,
      title: 'AI Features in Mobile Apps',
      skills: [
        'Connecting mobile apps with AI/ML API endpoints',
        'LLM-powered chat experiences',
        'Recommendation engines for app personalization',
        'NLP-driven features (summaries, classification)',
        'Integrating OpenAI, Claude, or custom AI models'
      ]
    }
  ];

  const techStack = {
    'Mobile Development': {
      icon: <FaReact />,
      tags: [
        'React Native', 
        'Expo', 
        'TypeScript', 
        'JavaScript',
        'React Navigation', 
        'Zustand', 
        'Redux Toolkit'
      ]
    },
    'Backend & APIs': {
      icon: <FaCode />,
      tags: [
        'Node.js', 
        'Express', 
        'Flask', 
        'FastAPI', 
        'REST APIs'
      ]
    },
    'Databases': {
      icon: <FaDatabase />,
      tags: [
        'MongoDB', 
        'PostgreSQL', 
        'SQLite', 
        'Firebase Firestore'
      ]
    },
    'Cloud & DevOps': {
      icon: <FaCloud />,
      tags: [
        'AWS', 
        'Git & CI/CD', 
        'Docker', 
        'S3', 
        'Cloud Functions'
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
