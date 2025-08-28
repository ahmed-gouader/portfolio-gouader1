import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react"; // Icône médaille

const Home = () => {
  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        textAlign: "center",
        overflow: "hidden",
        padding: "20px",
      }}
    >
      {/* 🌌 Background avec image floutée */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('/images/profile.jpg')", // ta photo
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(12px) brightness(0.5)",
          zIndex: -1,
        }}
      />

      {/* 🖼️ Photo de profil nette */}
      <motion.img
        src="/images/profile.jpg"
        alt="Photo de profil"
        style={{
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          border: "4px solid #FFD700",
          objectFit: "cover",
          marginBottom: "20px",
          boxShadow: "0px 0px 20px rgba(255, 215, 0, 0.6)",
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* 🪖 Nom + Étoiles */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          fontSize: "3rem",
          fontWeight: "700",
          letterSpacing: "2px",
          marginBottom: "15px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        Lieutenant Ahmed GOUADER
        <span style={{ color: "#FFD700", fontSize: "1.8rem" }}>★★</span>
      </motion.h1>

      {/* ⚔️ Ligne décorative */}
      <div style={{ margin: "10px 0", fontSize: "1.4rem", color: "#FFD700" }}>
        ⭐ ⚔️ ⭐
      </div>

      {/* 🎖️ Titre officiel */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        style={{
          fontSize: "1.6rem",
          fontWeight: "500",
          opacity: 0.9,
        }}
     >
  Ingénieur en Génie Informatique <br />
  & Officier des Forces Armées
</motion.h2>

      {/* 🛡️ Médaille (icône honorifique) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ marginTop: "15px", color: "#FFD700" }}
      >
        <Award size={40} />
      </motion.div>

      {/* 📜 Devise professionnelle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        style={{
          marginTop: "20px",
          fontSize: "1rem",
          fontStyle: "italic",
          maxWidth: "600px",
          color: "#E0E0E0",
        }}
      >
        « Engagé à servir avec excellence, discipline et innovation
dans le développement technologique, l’intelligence artificielle (IA),
l’Internet des objets (IoT)et les réseaux.» <br />
        <span style={{ color: "#FFD700" }}>
          "Committed to serving with excellence, discipline, and innovation
in technological development, Artificial Intelligence (AI),
Internet of Things (IoT), cybersecurity, and networking."
        </span>
      </motion.p>
    </section>
  );
};

export default Home;
