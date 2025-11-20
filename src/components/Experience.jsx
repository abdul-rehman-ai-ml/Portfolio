import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'AI Engineer (Trainee)',
      company: 'NAVTTC',
      period: '2025 - Present',
      description:
        'Working on applied AI/ML projects while strengthening mobile integration skills for real-world applications.',
      achievements: [
        {
          title: 'Multi-Lingual Sentiment Analysis (GlobalTextIQ)',
          description:
            'Built an NLP system and exposed mobile-friendly APIs that can be integrated into React Native apps.'
        },
        {
          title: 'Heart Disease Prediction System',
          description:
            'Deployed a classification model on AWS SageMaker with CI/CD automation and scalable API endpoints.'
        },
        'Developed CNN models for image-based classification tasks',
        'Implemented ANN models for prediction-driven features in apps',
        'Built and deployed ML regression models following MLOps best practices',
        'More AI/ML projects available on GitHub'
      ]
    },
    {
      title: 'React Native | Full Stack Developer',
      company: 'Exersys, Los Angeles, US (Remote)',
      period: '2024 - Present',
      description:
        'Building and optimizing React Native mobile apps while integrating backend services and AI-driven features.',
      achievements: [
        {
          title: 'AI-Powered Matchmaking (Dates & Honey & InfluencerGo)',
          description:
            'Integrated a recommendation engine into mobile apps to enhance match accuracy and user retention.'
        },
        'Developed scalable Python/Flask APIs consumed by React Native applications',
        'Integrated AI-powered chatbot and automation features to enhance user engagement',
        'Improved mobile UI/UX and performance for high-traffic apps'
      ]
    },
    {
      title: 'React Native Developer',
      company: 'Netnexs, Lahore, Pakistan',
      period: '2022 - 2024',
      description:
        'Developed and deployed cross-platform mobile applications for Android and iOS using React Native.',
      achievements: [
        {
          title: 'E-commerce & Fitness Apps (Zigy & Fitorza)',
          description:
            'Integrated complex REST APIs, built scalable UI components, and optimized performance across screens.'
        },
        'Enhanced state management with Redux, Context API, and custom hooks',
        'Delivered smooth, responsive UI across both iOS and Android platforms',
        'Implemented reusable components for fast feature development'
      ]
    },
    {
      title: 'React Developer',
      company: 'Softini Solutions, Lahore, Pakistan',
      period: '2021 - 2022',
      description:
        'Built and maintained responsive, high-performance web applications using React.js.',
      achievements: [
        'Integrated REST APIs and improved component performance across multiple projects',
        'Converted Figma/UI designs into pixel-perfect, production-ready interfaces',
        'Maintained code quality, modular structure, and reusable components'
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
