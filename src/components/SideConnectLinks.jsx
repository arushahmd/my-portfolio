import React from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const SideConnectLinks = () => {
  const links = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/your-profile",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/your-profile",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      url: "https://twitter.com/your-profile",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://instagram.com/your-profile",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        marginTop: "30px",
      }}
    >
      <p>Connect</p>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            textDecoration: "none",
            color: "black",
            fontSize: "14px",
            padding: "6px 0",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.textDecoration = "underline")
          }
          onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "18px" }}>{link.icon}</span>
            {link.name}
          </div>
          <ArrowTopRightOnSquareIcon
            style={{ width: "16px", height: "16px" }}
          />
        </a>
      ))}
    </div>
  );
};

export default SideConnectLinks;
