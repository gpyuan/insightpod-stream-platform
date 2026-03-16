import { NavLink } from "react-router-dom";
import "./NavMenu.scss";
import { navLinks } from "@/data";

const NavMenu = ({ className }) => {
  return (
    <nav className="nav-menu" aria-label="Main navigation">
      <ul className="nav-menu__list">
        {navLinks.map((link) => (
          <li key={link.path} className="nav-menu__item">
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `body5 ${isActive ? "is-active" : ""}`
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
