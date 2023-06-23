import React from "react";

interface Props {
  color?: "secondary" | "primary" | "danger" | "react";
  children: string;
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
