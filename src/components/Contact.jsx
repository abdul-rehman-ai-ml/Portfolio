import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const contactMethods = [
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+92 324 4664287',
      link: 'tel:+923244664287'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Canal Bank, Lahore',
      link: null
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://www.linkedin.com/in/abdul-rehman-fullstack-ai-engineer/'
    },
    {
      icon: <FaGithub />,
      title: 'GitHub',
      value: 'abdul-rehman-ai-ml',
      link: 'https://github.com/abdul-rehman-ai-ml'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'mrehman****@gmail.com',
      link: 'mailto:mrehmansiddiqui53@gmail.com'
    },
  ];
  
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Let&apos;s Build Something Amazing</h2>
        <div className="contact-content">
          <div className="contact-info-section">
            <p className="contact-intro">
              I&apos;m always interested in discussing AI projects, research collaborations, or opportunities 
              to work on cutting-edge AI systems. Let&lsquo;s connect!
            </p>
            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <div key={index} className="contact-method">
                  <div className="contact-icon">{method.icon}</div>
                  <div>
                    <h4>{method.title}</h4>
                    {method.link ? (
                      <a href={method.link} target={method.link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                        {method.value}
                      </a>
                    ) : (
                      <p>{method.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
