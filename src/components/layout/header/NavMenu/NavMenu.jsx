import { Link } from "react-router-dom";
import "./NavMenu.scss";
import { navLinks } from "@/data";

const NavMenu = ({ className }) => {
  return (
    <nav className="nav-menu">
      <ul className="nav-menu__list">
        {navLinks.map((link) => (
          <li key={link.path} className="nav-menu__item">
            <Link to={link.path} className="body5">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
