import { NavLink, Outlet } from "react-router-dom";

export default function NavLayout() {
  return (
    <>
      <nav className='navigation-bar'>
        <ul className='navigation-wrapper'>
          <li>
            <NavLink
              to='/'
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/contact'
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
