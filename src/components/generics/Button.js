import React from "react";
import "../../style/generics.css";

function LoadingSpinner() {
  return <span className="loader m-auto"></span>;
}

function Button(props) {
  const {
    state,
    className,
    variant = "secondary",
    children,
    onClick,
    disabled,
  } = props;
  // flex items-end justify-center gap-2
  return (
    <button
      className={`${variant}-button ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {state === "loading" ? <LoadingSpinner /> : <>{children}</>}
    </button>
  );
}

export default Button;
