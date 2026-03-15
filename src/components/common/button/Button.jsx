import "./Button.scss";

const Button = ({
  as: Component = "button",
  children,
  variant = "primary",
  className,
  ...props
}) => {
  return (
    <Component className={`btn btn--${variant} ${className || ""}`} {...props}>
      {children}
    </Component>
  );
};

export default Button;
