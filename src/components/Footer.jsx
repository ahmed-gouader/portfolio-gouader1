import React from 'react';

const Footer = () => {
  return (
    <footer style={{ textAlign:'center', padding:'1rem', background:'#002F5F', color:'#fff' }}>
      &copy; {new Date().getFullYear()} Lieutenat GOUADER Ahmed - Ingénieur IT Militaire
    </footer>
  );
};

export default Footer;
