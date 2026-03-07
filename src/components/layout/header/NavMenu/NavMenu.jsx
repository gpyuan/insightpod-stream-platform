import { Link } from "react-router-dom";
import "./NavMenu.scss";

const NavMenu = () => {
  const links = [
    { name: "About", path: "/about" },
    { name: "Subscribe", path: "/subscribe" },
    { name: "Episode", path: "/episode" },
    { name: "Insiders", path: "/insiders" },
  ];

  return (
    <nav className="nav-menu">
      <ul className="nav-menu__list">
        {links.map((link) => (
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
