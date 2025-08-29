import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SidebarLinks = ({ label, Icon, path }) => {
  const [hover, setHover] = useState(false);
  const location = useLocation();

  const isActive = location.pathname === path;

  // Base styles
  let styles = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "8px 12px",
    margin: "3px 0px",
    fontSize: "14px",
    cursor: "pointer",
    border: "none",
    borderRadius: "6px",
    transition: "all 0.3s ease",
    textDecoration: "none", // since it's a <Link>
  };

  if (isActive) {
    if (hover) {
      styles = {
        ...styles,
        backgroundColor: "transparent",
        border: "1px solid black",
        color: "black",
      };
    } else {
      styles = {
        ...styles,
        backgroundColor: "black",
        color: "white",
      };
    }
  } else {
    styles = {
      ...styles,
      backgroundColor: hover ? "#e8e4ec" : "#f3f3f3",
      color: "black",
    };
  }

  return (
    <Link
      to={path}
      style={styles}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Icon style={{ width: "18px", height: "18px" }} />
      <span>{label}</span>
    </Link>
  );
};

export default SidebarLinks;
