import "./Footer.scss";
import Logo from "@/components/common/logo/Logo";
import { navLinks } from "@/data";
import { Link } from "react-router-dom";
import Button from "@/components/common/button/Button";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { MdOutlineFacebook } from "react-icons/md";

const Footer = () => {
  const leftLinks = navLinks.slice(0, 2);
  const rightLinks = navLinks.slice(2);

  const medias = [
    {
      icon: <FaXTwitter />,
      name: "Twitter",
      href: "https://x.com/",
    },
    {
      icon: <RiInstagramFill />,
      name: "Instagram",
      href: "https://www.instagram.com/",
    },
    {
      icon: <MdOutlineFacebook />,
      name: "Facebook",
      href: "https://www.facebook.com/?locale=zh_TW",
    },
  ];

  return (
    <footer className="footer">
      {/* 上方文字 */}
      <h3 className="footer__header h3">
        Unlock invaluable wisdom personalized{" "}
        <span className="footer__header--linear">
          for you in our top-notch podcast.
        </span>
      </h3>

      {/* 下方選單 */}
      <div className="footer__content">
        <div className="footer__content__list">
          <div className="footer__content__aside">
            {leftLinks.map((link) => (
              <li key={link.path} className="footer__content__item">
                <Link to={link.path} className="body5">
                  {link.name}
                </Link>
              </li>
            ))}
          </div>

          <li className="footer__content__logo">
            <Logo className="footer__logo" />
          </li>

          <div className="footer__content__aside">
            {rightLinks.map((link) => (
              <li key={link.path} className="footer__content__item">
                <Link to={link.path} className="body5">
                  {link.name}
                </Link>
              </li>
            ))}
          </div>
        </div>

        {/* 社群媒體 */}
        <div className="footer__medias">
          {medias.map((media) => (
            <Button
              key={media.name}
              as="a"
              href={media.href}
              target="_blank"
              variant="tertiary"
              className="footer__media-item"
            >
              <div className="footer__media-item-content">
                <span className="footer__media-icon">{media.icon}</span>
                <span className="footer__media-name">{media.name}</span>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
