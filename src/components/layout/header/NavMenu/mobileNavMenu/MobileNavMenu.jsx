import "./MobileNavMenu.scss";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const MobileNavMenu = ({ isOpen, onClose }) => {
  const links = [
    { name: "About", path: "/about" },
    { name: "Subscribe", path: "/subscribe" },
    { name: "Episode", path: "/episode" },
    { name: "Insiders", path: "/insiders" },
  ];
  return (
    <div className={`mobile-nav-menu ${isOpen ? "is-open" : ""}`}>
      {/* 背景遮罩 */}
      <div className="mobile-nav-menu__backdrop" onClick={onClose}>
        {/* 側邊欄內容 */}
        <aside
          className="mobile-nav-menu__content"
          onClick={(e) => e.stopPropagation()}
        >
          {/* 關閉按鈕 */}
          <button
            className="mobile-nav-menu__close-btn"
            onClick={onClose}
            aria-label="關閉選單"
          >
            <IoClose />
          </button>

          {/* NavMenu */}
          <nav className="mobile-nav-menu__nav">
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
