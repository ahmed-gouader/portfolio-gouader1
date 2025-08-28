import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "MICROSERVICE-BASED SECURE IOT SURVEILLANCE SYSTEM",
    desc: "Système militaire IoT pour la surveillance sécurisée des équipements.",
    link: "#",
    image: "/images/safe.png",
  },
  {
    title: "PLATEFORME INTÉGRÉE DE RECHERCHE EN GESTION DES CATASTROPHES NATURELLES",
    desc: "Suivi et coordination des interventions en cas de catastrophes naturelles.",
    link: "#",
    image: "/images/11.png",
  },
  {
    title: "Automatic Number Plate Recognition (ANPR)",
    desc: "Reconnaissance automatique des plaques d'immatriculation pour la sécurité.",
    link: "#",
    image: "/images/matricule.png",
  },
  {
    title: "Reconnaissance Faciale",
    desc: "Identification et suivi des personnes pour les missions de sécurité.",
    link: "#",
    image: "/images/reconaissance_faciale_1.png",
  },
  {
    title: "Drone",
    desc: "Surveillance aérienne et collecte de données en temps réel.",
    link: "#",
    image: "/images/drone.png",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      style={{
        background: "#0D1B2A",
        color: "#fff",
        padding: "4rem 2rem",
        minHeight: "100vh",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
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
        Projets Militaires
      </motion.h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255,215,0,0.6)" }}
            style={{
              background: "#1B263B",
              borderRadius: "15px",
              width: "280px",
              textAlign: "center",
              padding: "1rem",
              color: "#fff",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <img
              src={proj.image}
              alt={proj.title}
              style={{ width: "100%", borderRadius: "10px", marginBottom: "1rem" }}
            />
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem", color: "#FFD700" }}>
              {proj.title}
            </h3>
            <p style={{ fontSize: "0.95rem", marginBottom: "1rem", minHeight: "60px" }}>
              {proj.desc}
            </p>

            {/* Message d'accès restreint */}
            <div
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "#FF0000",
                color: "#fff",
                padding: "5px 10px",
                borderRadius: "5px",
                fontWeight: "bold",
                fontSize: "0.8rem",
              }}
            >
              🔒 Accès restreint
            </div>

            <a
              href={proj.link}
              style={{
                color: "#0D1B2A",
                background: "#FFD700",
                padding: "0.5rem 1rem",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
                transition: "all 0.3s",
              }}
            >
              Voir plus
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
