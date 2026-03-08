import "./PlayButton.scss";
import { HiPlay } from "react-icons/hi2";

const PlayButton = ({
  children,
  variant = "primary",
  onClick,
  className,
  asIcon = false,
}) => {
  const inner = (
    <div className={`play-btn play-btn--hoverable ${className || ""} `}>
      <div className={`play-btn__circle play-btn__circle--${variant}`}>
        <HiPlay className="play-btn__icon" />
      </div>
    </div>
  );

  if (asIcon) return inner;

  return (
    <button className="play-btn">
      <div className={`play-btn__circle play-btn__circle--${variant}`}>
        <HiPlay className="play-btn__icon" />
      </div>
    </button>
  );
};

export default PlayButton;
