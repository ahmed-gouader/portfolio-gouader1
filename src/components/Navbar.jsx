import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ display:'flex', justifyContent:'space-around', padding:'1rem', background:'#002F5F', color:'#fff', position:'sticky', top:0 }}>
      <Link to="/" style={{ color:'#fff' }}>Accueil</Link>
      <Link to="/skills" style={{ color:'#fff' }}>Compétences</Link>
      <Link to="/projects" style={{ color:'#fff' }}>Projets</Link>
      <Link to="/contact" style={{ color:'#fff' }}>Contact</Link>
    </nav>
  );
};

export default Navbar;
