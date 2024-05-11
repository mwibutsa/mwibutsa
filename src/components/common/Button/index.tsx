import React, { ReactNode } from "react";
import "./button.scss";

type ButtonProps = {
  onClick: () => void;
  className?: string;
  children: ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  children,
  className,
}): React.ReactElement => {
  return <button className={`btn ${className}`}>{children}</button>;
};

export default Button;
