export default function ValueProps() {
  const values = [
    { 
      title: 'Reliable systems', 
      desc: 'Production-grade applications built for uptime and trust.' 
    },
    { 
      title: 'Scalable architectures', 
      desc: 'Solutions that grow with your team and product needs.' 
    },
    { 
      title: 'Maintainable code', 
      desc: 'Long-term value via clean, easy-to-evolve codebases.' 
    }
  ];

  return (
    <section className="section section-dark">
      <div className="section-title">
        Engineering solutions for ambitious teams.
      </div>
      <p className="section-subtitle">
        Scalable, maintainable tech for web, mobile, AI, and AR.
      </p>

      <div className="grid grid-3">
        {values.map((item, i) => (
          <div key={i} className="card">
            <h3 className="card-title">{item.title}</h3>
            <p className="card-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}