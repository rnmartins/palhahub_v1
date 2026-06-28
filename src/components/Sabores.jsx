const flavors = [
  { title: 'Tradicional', description: 'Chocolate com biscoito crocante e cobertura de chocolate meio amargo.' },
  { title: 'Brigadeiro', description: 'Recheio de brigadeiro cremoso. Um sucesso garantido entre adultos e crianças.' },
  { title: 'Prestígio', description: 'Chocolate com coco ralado e toque de leite condensado.' },
  { title: 'Oreo', description: 'Uma versão especial com pedaços de Oreo para quem ama sabor marcante.' },
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
