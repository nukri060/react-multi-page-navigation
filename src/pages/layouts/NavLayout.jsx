import { Link, useLocation, Outlet } from "react-router-dom";

export default function NavLayout() {
  const location = useLocation();

  return (
    <div className="app-container">
      <nav className="navigation-bar">
        <div className="navigation-wrapper">
          <Link to="/" className="logo">
            <span>React</span>
            <span>Router</span>
          </Link>
          <ul className="navigation-list">
            <li>
              <Link 
                to="/" 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <main><Outlet /></main>
    </div>
  );
}