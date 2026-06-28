import galeria1 from '../images/nova2.png';
import galeria2 from '../images/nova3.png';
import galeria3 from '../images/nova4.png';

function GalleryPage() {
  return (
    <main className="section">
      <div className="container">
        <div className="section-header">
          <h2>Galeria</h2>
          <p>Veja algumas ideias de apresentação e embalagens para suas encomendas.</p>
        </div>
        <div className="gallery-grid">
          <img src={galeria1} alt="Palha italiana no prato" />
          <img src={galeria2} alt="Detalhe de doce" />
          <img src={galeria3} alt="Embalagem para presente" />
        </div>
      </div>
    </main>
  );
}

export default GalleryPage;
