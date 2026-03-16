import "./PlayButton.scss";
import { HiPlay } from "react-icons/hi2";

const PlayButton = ({
  variant = "primary",
  onClick,
  className,
  asIcon = false,
  ariaLabel = "Play content",
}) => {
  const Component = asIcon ? "span" : "button";

  return (
    <Component
      className={`play-btn ${!asIcon ? "play-btn--hoverable" : ""} ${
        className || ""
      }`}
      onClick={onClick}
      type={!asIcon ? "button" : undefined}
      aria-label={!asIcon ? ariaLabel : undefined}
      role={asIcon ? "presentation" : undefined}
    >
      <span className={`play-btn__circle play-btn__circle--${variant}`}>
        <HiPlay className="play-btn__icon" aria-hidden="true" />
      </span>
    </Component>
  );
};

export default PlayButton;
