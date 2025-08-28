import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const technicalSkills = [
    { name: "React", icon: "⚛️" },
    { name: "Spring Boot", icon: "🛠️" },
    { name: "Python", icon: "🐍" },
    { name: "Node.js", icon: "🟢" },
    { name: "IoT", icon: "📡" },
    { name: "AI", icon: "🤖" },
    { name: "Cybersecurity", icon: "🔒" },
    { name: "Networking", icon: "🌐" },
    { name: "DevOps", icon: "⚙️" },
    { name: "Unity Hub", icon: "🎮" }, // Ajout Unity Hub
  ];

  const militarySkills = [
    { name: "Leadership", icon: "🏅" },
    { name: "Gestion de projets", icon: "📋" },
    { name: "Discipline", icon: "🎖️" },
    { name: "Planification stratégique", icon: "🎯" },
    { name: "Communication", icon: "🗣️" },
    { name: "Stratégie militaire", icon: "🛡️" },
  ];

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "4rem 2rem",
        background: "#0D1B2A",
        color: "#fff",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      {/* Titre */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          textAlign: "center",
          marginBottom: "3rem",
          fontSize: "2.5rem",
          borderBottom: "2px solid #FFD700",
          display: "inline-block",
          paddingBottom: "10px",
        }}
      >
        Compétences
      </motion.h2>

      {/* Cartes */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        {/* Techniques */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            background: "#1B263B",
            padding: "2rem",
            borderRadius: "15px",
            flex: "1 1 300px",
            boxShadow: "0 0 20px rgba(255, 215, 0, 0.4)",
          }}
        >
          <h3
            style={{
              color: "#FFD700",
              marginBottom: "1rem",
              fontSize: "1.5rem",
            }}
          >
            Techniques
          </h3>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2.2rem" }}>
            {technicalSkills.map((skill) => (
              <motion.li
                key={skill.name}
                whileHover={{ scale: 1.05, rotate: 3 }}
                transition={{ type: "spring", stiffness: 200 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "1.1rem",
                  padding: "5px 0",
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>{skill.icon}</span>
                {skill.name}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Militaires */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            background: "#1B263B",
            padding: "2rem",
            borderRadius: "15px",
            flex: "1 1 300px",
            boxShadow: "0 0 20px rgba(255, 215, 0, 0.4)",
          }}
        >
          <h3
            style={{
              color: "#FFD700",
              marginBottom: "1rem",
              fontSize: "1.5rem",
            }}
          >
            Militaires
          </h3>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2.2rem" }}>
            {militarySkills.map((skill) => (
              <motion.li
                key={skill.name}
                whileHover={{ scale: 1.05, rotate: -3 }}
                transition={{ type: "spring", stiffness: 200 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "1.1rem",
                  padding: "5px 0",
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>{skill.icon}</span>
                {skill.name}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
