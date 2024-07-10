import React from "react";
import styles from "./Button.module.scss";

type Variant = "primary" | "secondary" | "cart";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  ...props
}) => {
  return (
    <button
      className={`${styles[`button__${variant}`]}`}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
