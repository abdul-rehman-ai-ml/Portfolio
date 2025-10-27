import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'AI Engineer (Trainee)',
      company: 'NAVTTC',
      period: '2025 - Present',
      description: 'Developing and deploying advanced AI/ML systems with focus on NLP, deep learning, and MLOps practices.',
      achievements: [
        {
          title: 'Multi-Lingual Sentiment Analysis (GlobalTextIQ)',
          description: 'Engineered an NLP system to analyze customer reviews and remarks across multiple languages'
        },
        {
          title: 'Heart Disease Prediction System',
          description: 'Deployed a heart disease classification model to AWS SageMaker using a full CI/CD pipeline with GitHub Actions'
        },
        'Developed CNN for deep learning-based image classification',
        'Implemented ANN for housing price prediction',
        'Deployed linear regression housing price model using MLOps principles',
        'Built ML model for employee salary prediction based on historical data',
        'View more projects on GitHub'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Exersys, Los Angeles, US (Remote)',
      period: '2024 - Present',
      description: 'Transitioned to an AI-focused role, integrating Python-based machine learning models into React Native mobile applications.',
      achievements: [
        {
          title: 'AI-Powered Matchmaking (Dates & Honey & InfluencerGo)',
          description: 'Engineered a data-driven matchmaking algorithm using collaborative filtering to improve user matches'
        },
        'Developed and consumed scalable backend APIs (Flask/Python) to serve model predictions to mobile front-end',
        'Collaborated on NLP-powered chatbot, enhancing user engagement and app functionality'
      ]
    },
    {
      title: 'React Native Developer',
      company: 'Netnexs, Lahore, Pakistan',
      period: '2022 - 2024',
      description: 'Developed and deployed cross-platform mobile applications for Android and iOS using React Native.',
      achievements: [
        {
          title: 'E-commerce & Fitness Apps (Zigy & Fitorza)',
          description: 'Engineered and integrated complex RESTful APIs for data-heavy applications'
        },
        'Optimized application performance and state management (Redux/Hooks) for thousands of users',
        'Delivered seamless user experiences across multiple platforms'
      ]
    },
    {
      title: 'React Developer',
      company: 'Softini Solutions, Lahore, Pakistan',
      period: '2021 - 2022',
      description: 'Built and maintained responsive web applications using React.js and Vite.',
      achievements: [
        'Engineered seamless API integrations, connecting frontend components to backend services',
        'Translated complex UI/UX designs into high-performance, functional code',
        'Maintained code quality and best practices across projects'
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
