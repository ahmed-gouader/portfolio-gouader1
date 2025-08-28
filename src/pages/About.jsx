export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center px-8 py-20">
      <h2 className="text-4xl font-bold text-gold mb-8">À propos</h2>
      <p className="max-w-3xl text-center text-lg text-gray-300 leading-relaxed">
        Ingénieur en technologies de l’information au sein des forces armées, 
        spécialisé dans la <span className="text-gold">cybersécurité</span>, 
        les <span className="text-gold">systèmes embarqués</span>, 
        et la <span className="text-gold">sécurisation des communications</span>. 
        Mon parcours militaire m’a permis de développer discipline, rigueur et esprit d’équipe.
      </p>
    </section>
  );
}
