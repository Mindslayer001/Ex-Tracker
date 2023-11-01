import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  alertClose: () => void;
}
const Alert = ({ children, alertClose}: Props) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={alertClose}
      ></button>
    </div>
  );
};

export default Alert;
