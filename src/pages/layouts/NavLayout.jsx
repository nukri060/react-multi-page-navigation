import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function NavLayout() {
  return (
    <>
      <nav className='navigation-bar'>
        <ul className="navigation-wrapper">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet/>
      </main>
    </>
  );
}
