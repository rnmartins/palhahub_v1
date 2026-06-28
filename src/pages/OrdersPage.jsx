import whatsappIcon from '../images/icons8-whatsapp.gif';
import instagramIcon from '../images/icons8-instagram-logo-94.png';

function OrdersPage() {
  return (
    <main className="section">
      <div className="container contact-card">
        <div>
          <h2>Pronto para encomendar?</h2>
          <p>Envie um WhatsApp com sabores, quantidade e data. Receba orçamento e combine retirada ou entrega local.</p>
          <ul>
            <li>Pedido mínimo: 8 unidades</li>
            <li>Entrega local rápida</li>
            <li>Embalagem para festa e presente</li>
          </ul>
          <div className="hero-actions">
            <a className="button button-primary" href="https://wa.me/5511999999999?text=Olá!%20Quero%20fazer%20um%20pedido%20de%20palha%20italiana." target="_blank" rel="noopener noreferrer">Peça pelo WhatsApp</a>
            <a className="button button-secondary" href="/">Voltar para a home</a>
          </div>
        </div>
        <div className="contact-info">
          <h3>Contato</h3>
          <p>
            <a href="https://wa.me/5511977459445" target="_blank" rel="noopener noreferrer">
              <img src={whatsappIcon} alt="WhatsApp" className="contact-icon" />
              <strong>+55 11 97745-9445</strong>
            </a>
          </p>
          <p>
            <a href="https://www.instagram.com/palhahub" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" className="contact-icon" />
              <strong>@palhahub</strong>
            </a>
          </p>
          <p>Atendimento de segunda a sábado, das 9h às 19h.</p>
        </div>
      </div>
    </main>
  );
}

export default OrdersPage;
