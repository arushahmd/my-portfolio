import React, { useState } from "react";
import profilePic from "../assets/images/portfolio-image.png";
import SidebarLinks from "./SidebarLinks";

// Heroicons
import {
  HomeIcon,
  BriefcaseIcon,
  FolderIcon,
  UserIcon,
  PhoneIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import SideConnectLinks from "./SideConnectLinks";

const Sidebar = () => {
  const [active, setActive] = useState("Home");

  const links = [
    { label: "Home", path: "/", icon: HomeIcon },
    { label: "Experience", path: "/experience", icon: BriefcaseIcon },
    { label: "Projects", path: "/projects", icon: FolderIcon },
    { label: "About", path: "/about", icon: UserIcon },
    { label: "Contact", path: "/contact", icon: PhoneIcon },
    { label: "Tools", path: "/tools", icon: WrenchScrewdriverIcon },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          paddingTop: "20px",
          paddingLeft: "20px",
          paddingBottom: "20px",
          display: "flex",
        }}
      >
        <img
          src={profilePic}
          alt="Profile Pic"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%", // perfectly round
            objectFit: "cover",
          }}
        />
        <div style={{ paddingLeft: "10px" }}>
          <h4 style={{ margin: "0px" }}>Aroosh Ahmad</h4>
          <p style={{ margin: "0px" }}>AI Engineer</p>
        </div>
      </div>
      <div
        style={{ display: "flex", flexDirection: "column", padding: "10px" }}
      >
        {links.map((link) => (
          <SidebarLinks
            key={link.label}
            label={link.label}
            Icon={link.icon}
            isActive={active === link.label}
            onClick={() => setActive(link.label)}
            path={link.path}
          />
        ))}

        <SideConnectLinks />
      </div>
    </div>
  );
};

export default Sidebar;
