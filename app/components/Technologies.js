export default function Technologies() {
  const techs = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 
    'Python', 'Swift', 'Kotlin', 'TensorFlow', 
    'WebGL', 'Three.js', 'AWS', 'Docker'
  ];

  return (
    <section id="technologies" className="section section-dark">
      <h2 className="section-title">Technologies We Master</h2>
      <p className="section-subtitle">
        From cutting-edge frameworks to proven architectures, we leverage the best tools to build exceptional digital experiences.
      </p>
      <div className="tech-tags">
        {techs.map((tech, i) => (
          <span key={i} className="tech-tag">{tech}</span>
        ))}
      </div>
    </section>
  );
}