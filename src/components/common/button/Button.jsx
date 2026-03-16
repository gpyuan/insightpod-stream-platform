import "./Button.scss";

const Button = ({
  as: Component = "button",
  children,
  variant = "primary",
  className,
  type = "button",
  ...props
}) => {
  return (
    <Component
      className={`btn btn--${variant} ${className || ""}`}
      type={Component === "button" ? type : undefined}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
