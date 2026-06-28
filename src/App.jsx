import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FlavorsPage from './pages/FlavorsPage';
import GalleryPage from './pages/GalleryPage';
import OrdersPage from './pages/OrdersPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/sabores" element={<FlavorsPage />} />
        <Route path="/galeria" element={<GalleryPage />} />
        <Route path="/pedidos" element={<OrdersPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
