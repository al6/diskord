import React from "react";

export const Button = ({ children, color, ...otherProps }) => {
  let backgroundColor;
  switch (color) {
    case "blue":
      backgroundColor = "diskord-background-blue";
      break;
    case "green":
      backgroundColor = "diskord-background-green";
      break;
  }

  const className = `form-button whiteColor ${backgroundColor}`;
  return (
    <button className={className} {...otherProps}>
      {children}
    </button>
  );
};
