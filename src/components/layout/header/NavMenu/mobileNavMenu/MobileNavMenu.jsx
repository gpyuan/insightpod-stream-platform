import "./MobileNavMenu.scss";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const links = [
  { name: "About", path: "/about" },
  { name: "Subscribe", path: "/subscribe" },
  { name: "Episode", path: "/episode" },
  { name: "Insiders", path: "/insiders" },
];

const MobileNavMenu = ({ isOpen, onClose }) => {
  return (
    <div
      className={`mobile-nav-menu ${isOpen ? "is-open" : ""}`}
      id="mobile-nav"
      aria-hidden={!isOpen}
      role={isOpen ? "dialog" : undefined}
      aria-modal={isOpen ? "true" : undefined}
      aria-label={isOpen ? "Mobile Navigation" : undefined}
    >
      {/* 背景遮罩 */}
      <div
        aria-hidden="true"
        className="mobile-nav-menu__backdrop"
        onClick={onClose}
      >
        {/* 側邊欄內容 */}
        <aside
          className="mobile-nav-menu__content"
          onClick={(e) => e.stopPropagation()}
        >
          {/* 關閉按鈕 */}
          <button
            className="mobile-nav-menu__close-btn"
            onClick={onClose}
            aria-label="Close mobile menu"
          >
            <IoClose />
          </button>

          {/* NavMenu */}
          <nav
            className="mobile-nav-menu__nav"
            aria-label="Mobile navigation links"
          >
            <ul className="mobile-nav-menu__list">
              {links.map((link) => (
                <li key={link.path} className="mobile-nav-menu__item">
                  <Link
                    to={link.path}
                    className="mobile-nav-menu__link"
                    onClick={onClose}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </div>
  );
};

export default MobileNavMenu;
