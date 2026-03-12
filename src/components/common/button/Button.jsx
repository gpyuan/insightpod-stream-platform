import "./Button.scss";

const Button = ({
  as: Component = "button",
  children,
  variant = "primary",
  onClick,
  className,
  ...props
}) => {
  return (
    <Component
      className={`btn btn--${variant} ${className || ""}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
