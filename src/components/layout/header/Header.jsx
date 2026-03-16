import { useState } from "react";
import "./Header.scss";

import Logo from "@/components/common/Logo/Logo";
import NavMenu from "./NavMenu/NavMenu";
import Button from "@/components/common/Button/Button";
import MobileNavMenu from "./NavMenu/mobileNavMenu/MobileNavMenu";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
        <Logo to="/" />

        {/* 桌機板選單 */}
        <NavMenu />

        {/* 手機版側邊攔 */}
        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />

        <div className="header__right">
          {/* 訂閱按鈕 */}
          <Button
            variant="tertiary"
            className="header__right__subscribe-btn body3"
          >
            Subscribe now
          </Button>

          {/* 漢堡按鈕（手機版） */}
          <button
            className="header__right__hamburger-btn"
            onClick={() => setIsOpen(true)}
            aria-label="Open mobile menu"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            <AiOutlineMenu />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
