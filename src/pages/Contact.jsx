import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      style={{
        textAlign: "center",
        background: "#0D1B2A",
        color: "#fff",
        padding: "4rem 2rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          fontSize: "2.5rem",
          marginBottom: "2rem",
          borderBottom: "2px solid #FFD700",
          display: "inline-block",
          paddingBottom: "10px",
        }}
      >
        Contact
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", fontSize: "1.1rem" }}
      >
        <p>
          <FaEnvelope style={{ color: "#FFD700", marginRight: "8px" }} />
          Email : <a href="agwader54@gmail.com" style={{ color: "#FFD700", textDecoration: "none" }}>agwader54@gmail.com</a>
        </p>
        <p>
          <FaLinkedin style={{ color: "#FFD700", marginRight: "8px" }} />
          LinkedIn : <a href="https://linkedin.com/in/gouaderahmed" style={{ color: "#FFD700", textDecoration: "none" }}>linkedin.com/in/gouaderahmed</a>
        </p>
        <p>
          <FaGithub style={{ color: "#FFD700", marginRight: "8px" }} />
          GitHub : <a href="https://github.com/ahmed-gouader" style={{ color: "#FFD700", textDecoration: "none" }}>github.com/ahmed-gouader</a>
        </p>
        <p>
          <FaWhatsapp style={{ color: "#25D366", marginRight: "8px" }} />
          WhatsApp : <a href="https://wa.me/27204414" target="_blank" rel="noopener noreferrer" style={{ color: "#25D366", textDecoration: "none" }}>+216 27 204 414</a>
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
