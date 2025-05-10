import React from "react";
import nodleLogo from "/nodle-logo.svg";

const NodleLogo = ({ size = "md" }) => {
  const sizeClasses = {
    sm: "h-6",
    md: "h-8",
    lg: "h-10",
  };

  return (
    <div className="flex items-center">
      <div className="text-primary mr-1">
        <img
          src={nodleLogo}
          alt="Nodle Logo"
          className={`${sizeClasses[size]}`}
        />
      </div>
      <span
        className={`font-bold text-primary ${size === "lg" ? "text-2xl" : size === "md" ? "text-xl" : "text-lg"}`}
      >
        Nodle
      </span>
    </div>
  );
};

export default NodleLogo;
