import React from 'react';

const experiences = [
  {
    title: "Développeur Full Stack",
    company: "Armée Nationale",
    period: "2021 - Présent",
    description: "Développement d'un système IoT sécurisé pour le suivi des équipements militaires."
  },
  {
    title: "Ingénieur IT",
    company: "Base Militaire XYZ",
    period: "2018 - 2021",
    description: "Gestion de projets IT et cybersécurité dans des environnements critiques."
  }
];

const Experience = () => {
  return (
    <section id="experience">
      <h2 style={{ textAlign:'center' }}>Expériences</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <h3>{exp.title} - {exp.company}</h3>
            <p><em>{exp.period}</em></p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
