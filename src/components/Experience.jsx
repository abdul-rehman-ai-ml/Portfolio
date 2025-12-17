
const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack & AI Integration',
      company: 'Exersys, Los Angeles, US (Remote)',
      period: '03/2024 - Present',
      description:
        'Principal engineering role focused on bridging complex AI models (LLM/RAG) with high-performance mobile and web applications.',
      achievements: [
        {
          title: 'AI Pipeline Optimization',
          description:
            'Optimized the RAG pipeline, reducing response latency by 40% and enhancing real-time recommendation systems.'
        },
        'Integrated Python ML models into React Native, reducing API latency by 15% for 10,000+ users',
        'Engineered collaborative filtering algorithms for "Dates & Honey" and "InfluencerGo", boosting match accuracy by 30%',
        'Bridged web and mobile engineering teams to deliver scalable AI-driven solutions'
      ]
    },
    {
      title: 'Full Stack Engineer',
      company: 'Netnexs, Lahore, Pakistan',
      period: '03/2022 - 01/2024',
      description:
        'Engineered scalable cross-platform mobile applications and backend REST APIs for high-traffic products.',
      achievements: [
        {
          title: 'High-Volume API Architecture (Zigy & Fitorza)',
          description:
            'Engineered complex RESTful APIs handling 10,000+ requests per day with high efficiency.'
        },
        'Developed and deployed 3+ cross-platform apps reaching over 50,000 active users',
        'Implemented CI/CD automation using GitHub Actions and Fastlane, reducing time-to-market by 50%',
        'Optimized state management and performance for data-heavy mobile applications'
      ]
    },
    {
      title: 'Frontend Engineer & API Integration',
      company: 'Softini Solutions, Lahore, Pakistan',
      period: '03/2021 - 02/2022',
      description:
        'Specialized in building responsive web applications and seamless backend integrations.',
      achievements: [
        'Built and maintained high-performance web applications using React.js and Vite',
        'Engineered seamless API integrations to connect frontend components with backend services',
        'Converted UI designs into modular, responsive, and production-ready interfaces'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.title}</h3>
                  <span className="company">{exp.company}</span>
                  <span className="period">{exp.period}</span>
                </div>
                <p className="role-description">{exp.description}</p>
                <ul className="achievements">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>
                      {typeof achievement === 'object' ? (
                        <>
                          <strong>{achievement.title}:</strong> {achievement.description}
                        </>
                      ) : (
                        achievement
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
