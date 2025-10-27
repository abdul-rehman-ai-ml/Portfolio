import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'AI/ML Full Stack Developer',
      company: 'Exersys, Los Angeles, USA',
      period: '2024 - Present',
      description: 'Leading AI integration initiatives, developing intelligent systems with LLMs and agentic frameworks for production applications.',
      achievements: [
        {
          title: 'AI-Powered Matchmaking (Dates & Honey)',
          description: 'Engineered an intelligent recommendation system using collaborative filtering and LLM-based personality analysis, increasing match quality by 35%'
        },
        {
          title: 'Conversational AI Agent (InfluencerGo)',
          description: 'Built a multi-turn conversational agent using LangChain with RAG for context-aware responses, reducing response time by 60% and improving engagement by 45%'
        },
        'Implemented vector search with Pinecone for semantic similarity matching across 100K+ user profiles',
        'Deployed LLM-powered features using FastAPI and AWS Lambda, handling 10K+ daily requests'
      ]
    },
    {
      title: 'Full Stack Developer (ML Focus)',
      company: 'Netnexs, Lahore, Pakistan',
      period: '2022 - 2024',
      description: 'Specialized in integrating machine learning models into production systems, building scalable ML pipelines.',
      achievements: [
        {
          title: 'ML-Enhanced Applications (Fitorza & Zigy)',
          description: 'Integrated predictive models for user behavior analysis and personalized recommendations using scikit-learn and PyTorch'
        },
        'Developed RESTful APIs for ML model inference with 99.9% uptime and <100ms latency',
        'Implemented automated data pipelines for model training and evaluation, reducing deployment time by 40%',
        'Collaborated with data scientists to productionize research models using Docker and AWS'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Softini Solutions, Lahore, Pakistan',
      period: '2021 - 2022',
      description: 'Built scalable web applications with Python and React, establishing foundation for ML engineering career.',
      achievements: [
        'Engineered robust backend systems with Python/Django, improving performance by 25%',
        'Developed responsive frontends with React, increasing user engagement by 20%',
        'Optimized database queries and API endpoints, reducing server load by 15%'
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
