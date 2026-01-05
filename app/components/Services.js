import { Code, Smartphone, Brain, Box } from 'lucide-react';

export default function Services() {
  const services = [
    { 
      icon: <Code size={48} />, 
      title: 'Web Development',
      desc: 'Responsive, secure web applications with performance and maintainability at the core—architected for real-world teams and products.',
      colorClass: 'icon-blue'
    },
    { 
      icon: <Smartphone size={48} />, 
      title: 'Mobile Development',
      desc: 'Native and cross-platform mobile apps for iOS and Android, using analytics and growth workflows for launch and beyond.',
      colorClass: 'icon-purple'
    },
    { 
      icon: <Brain size={48} />, 
      title: 'AI Solutions',
      desc: 'End-to-end custom AI solutions, plus immersive AR experiences powered by Zlslam engine for next-gen visualization.',
      colorClass: 'icon-green'
    },
    { 
      icon: <Box size={48} />, 
      title: 'Mixed Reality (Zlslam)',
      desc: 'Our proprietary engine for AR and mixed reality across mobile and web, enabling real-time 3D tracking, product visualization, and unforgettable interactive experiences.',
      colorClass: 'icon-orange'
    }
  ];

  return (
    <section id="services" className="section">
      <h2 className="section-title">Our Specializations</h2>
      
      <div className="grid grid-2">
        {services.map((service, i) => (
          <div key={i} className="service-card">
            <div className={`icon-wrapper ${service.colorClass}`}>
              {service.icon}
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}