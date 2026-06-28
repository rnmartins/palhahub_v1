import Hero from '../components/Hero';
import Sabores from '../components/Sabores';

const features = [
  {
    title: 'Festas',
    description: 'Encomendas prontas para servir na sua mesa com sabor caseiro e apresentação impecável.',
  },
  {
    title: 'Presentes',
    description: 'Caixas e embalagens que tornam a palha italiana um presente especial e memorável.',
  },
  {
    title: 'Delivery',
    description: 'Envio local rápido e seguro, para receber doces frescos direto na sua casa ou no evento.',
  },
  {
    title: 'Eventos',
    description: 'Doces que impressionam em aniversários, chás, reuniões corporativas e comemorações.',
  },
];

function HomePage() {
  return (
    <main>
      <Hero />

      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <h2>Palha Italiana para o seu momento</h2>
            <p>Escolha a forma de encantar: festas, presentes, eventos ou delivery com embalagem elegante e acabamento profissional.</p>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <div className="feature-card" key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="section section-light">
        <div className="container">
          <div className="section-header">
            <h2>Sobre nossa Palha Italiana</h2>
            <p>Receita tradicional com toque caseiro: chocolate, biscoito crocante e recheios especiais. Ideal para festas, presentes e encomendas locais.</p>
          </div>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>Ingredientes premium</h3>
              <p>Chocolate de alta qualidade, biscoito crocante e recheios frescos para sabor e textura perfeitos.</p>
            </div>
            <div className="feature-card">
              <h3>Embalagem elegante</h3>
              <p>Apresentação que valoriza o doce e facilita a entrega como presente ou lembrança.</p>
            </div>
            <div className="feature-card">
              <h3>Atendimento rápido</h3>
              <p>Pedidos pelo WhatsApp com orçamento ágil e orientações claras para retirada ou entrega.</p>
            </div>
          </div>
        </div>
      </section>

      <Sabores />

      <section id="galeria" className="section section-light">
        <div className="container">
          <div className="section-header">
            <h2>Galeria</h2>
            <p>Veja algumas ideias de apresentação e embalagens para suas encomendas.</p>
          </div>
          <div className="gallery-grid">
            <img src="/images/nova2.png" alt="Palha italiana no prato" />
            <img src="/images/nova3.png" alt="Detalhe de doce" />
            <img src="/images/nova4.png" alt="Embalagem para presente" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
