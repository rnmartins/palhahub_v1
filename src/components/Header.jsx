import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/sobre', label: 'Sobre', icon: '✦' },
  { to: '/sabores', label: 'Sabores', icon: '☕' },
  { to: '/galeria', label: 'Galeria', icon: '✿' },
  { to: '/pedidos', label: 'Pedidos', icon: '✉' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink className="brand" to="/" onClick={() => setMenuOpen(false)}>
          <span className="brand-main">PALHA</span>
          <span className="brand-sub">HUB</span>
        </NavLink>
        <button
          className={`nav-toggle ${menuOpen ? 'is-open' : ''}`}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="sr-only">Abrir menu</span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`} id="site-navigation">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={() => setMenuOpen(false)}>
              <span className="nav-icon">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
