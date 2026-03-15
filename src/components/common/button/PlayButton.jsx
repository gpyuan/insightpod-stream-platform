import "./PlayButton.scss";
import { HiPlay } from "react-icons/hi2";

const PlayButton = ({
  variant = "primary",
  onClick,
  className,
  asIcon = false,
}) => {
  const Component = asIcon ? "span" : "button";

  return (
    <Component
      className={`play-btn ${!asIcon ? "play-btn--hoverable" : ""}  ${
        className || ""
      }`}
      onClick={onClick}
    >
      <span className={`play-btn__circle play-btn__circle--${variant}`}>
        <HiPlay className="play-btn__icon" aria-hidden="true" />
      </span>
    </Component>
  );
};

export default PlayButton;
