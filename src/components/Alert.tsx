import React, { ReactElement } from "react";

interface Props {
  children: ReactElement;
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
