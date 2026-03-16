import "./Footer.scss";
import Logo from "@/components/common/Logo/Logo";
import { navLinks } from "@/data";
import { Link } from "react-router-dom";
import Button from "@/components/common/Button/Button";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { MdOutlineFacebook } from "react-icons/md";

const Footer = () => {
  const leftLinks = navLinks.slice(0, 2);
  const rightLinks = navLinks.slice(2);

  const medias = [
    {
      icon: <FaXTwitter aria-hidden="true" />,
      name: "Twitter",
      href: "https://x.com/",
    },
    {
      icon: <RiInstagramFill aria-hidden="true" />,
      name: "Instagram",
      href: "https://www.instagram.com/",
    },
    {
      icon: <MdOutlineFacebook aria-hidden="true" />,
      name: "Facebook",
      href: "https://www.facebook.com/",
    },
  ];

  return (
    <footer className="footer">
      {/* 上方文字 */}
      <h2 className="footer__header h3">
        Unlock invaluable wisdom personalized
        <br />
        <span className="footer__header--linear h3">
          for you in our top-notch podcast.
        </span>
      </h2>

      {/* 下方選單 */}
      <div className="footer__content">
        <nav className="footer__content__list" aria-label="Footer navigation">
          <ul className="footer__content__aside">
            {leftLinks.map((link) => (
              <li key={link.path} className="footer__content__item">
                <Link to={link.path} className="body5">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="footer__content__logo">
            <Logo className="footer__logo" />
          </div>

          <ul className="footer__content__aside">
            {rightLinks.map((link) => (
              <li key={link.path} className="footer__content__item">
                <Link to={link.path} className="body5">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* 社群媒體 */}
        <nav className="footer__medias" aria-label="Social media links">
          {medias.map((media) => (
            <Button
              key={media.name}
              as="a"
              href={media.href}
              target="_blank"
              rel="noopener noreferrer"
              variant="tertiary"
              className="footer__media-item"
              aria-label={`Visit our ${media.name}`}
            >
              <div className="footer__media-item-content">
                <span className="footer__media-icon">{media.icon}</span>
                <span className="footer__media-name">{media.name}</span>
              </div>
            </Button>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
