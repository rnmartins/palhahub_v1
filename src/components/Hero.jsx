import { motion } from 'framer-motion';
import heroImage from '../images/cozinhandoPalha.png';

function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="container hero-content">
        <div className="hero-text">
          <span className="eyebrow">Doces para festas, presentes e delivery</span>
          <h1>Palha Italiana artesanal para festas, presentes, eventos e delivery.</h1>
          <p>Praticidade, embalagem bonita e atendimento rápido pelo WhatsApp. Peça hoje mesmo e surpreenda com um doce que encanta e impressiona.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="https://wa.me/5511999999999?text=Olá!%20Quero%20fazer%20um%20pedido%20de%20palha%20italiana." target="_blank" rel="noopener noreferrer">Pedir pelo WhatsApp</a>
            <a className="button button-secondary" href="#sabores">Veja os sabores</a>
            <a className="button button-secondary" href="https://www.instagram.com/palhahub" target="_blank" rel="noopener noreferrer">Ver Instagram @palhahub</a>
          </div>
          <div className="hero-highlights">
            <span>Pedido mínimo: 8 unidades</span>
            <span>Entrega local rápida</span>
            <span>Embalagem para presente</span>
          </div>
        </div>
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -10, 0],
            rotate: [-1, 1, -1],
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
            repeat: Infinity,
            repeatType: 'mirror',
            repeatDelay: 2,
          }}
        >
          <img src={heroImage} alt="Palha italiana sendo preparada" />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
