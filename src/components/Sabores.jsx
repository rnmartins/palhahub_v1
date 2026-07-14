const flavors = [
  { title: 'Tradicional', description: 'Biscoito de maizena e chocolate 50% cacau.' },
  { title: 'Ninho', description: 'Brigadeiro de Ninho com biscoite de maizena.' },
  { title: 'Oreo', description: 'Brigadeiro de Ninho com biscoito Oreo' },
  { title: 'Paçoca', description: 'Brigadeiro de Paçoca com biscoito de maizena.' },
];

function Sabores() {
  return (
    <section id="sabores" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Sabores disponíveis</h2>
          <p>Escolha entre sabores clássicos e opções especiais para seu evento ou encomenda.</p>
        </div>
        <div className="product-grid">
          {flavors.map((flavor) => (
            <article className="product-card" key={flavor.title}>
              <h3>{flavor.title}</h3>
              <p>{flavor.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sabores;
