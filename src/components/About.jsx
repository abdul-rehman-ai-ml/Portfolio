import {  FaRobot, FaBrain, FaLayerGroup } from 'react-icons/fa';

const About = () => {
  const highlights = [
  {
    icon: <FaLayerGroup />,
    title: 'Full-Stack Architecture',
    description: 'Building scalable, end-to-end web and mobile applications using the MERN stack and Python.'
  },
  {
    icon: <FaRobot />,
    title: 'AI Integration & RAG',
    description: 'Engineering intelligent pipelines, optimizing RAG systems, and reducing model latency.'
  },
  {
    icon: <FaBrain />,
    title: 'Generative AI & LLMs',
    description: 'Fine-tuning models and implementing vector search for high-accuracy, context-aware AI solutions.'
  }
];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
         <p className="lead">
              Full-Stack Developer & AI/ML Specialist with over 4 years of experience 
              engineering scalable, end-to-end intelligent systems using the MERN stack 
              and Python.
            </p>
            <p>
              I bridge the gap between complex AI architectures such as RAG pipelines and 
              Fine Tuned LLMs and high performance user interfaces. My focus is on 
              optimizing latency, ensuring scalability, and delivering production grade 
              AI solutions for both web and mobile platforms.
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
