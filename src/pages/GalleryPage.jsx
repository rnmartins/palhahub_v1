function GalleryPage() {
  return (
    <main className="section">
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
    </main>
  );
}

export default GalleryPage;
