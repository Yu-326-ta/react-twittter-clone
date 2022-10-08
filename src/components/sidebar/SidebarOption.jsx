import React from "react";
import "./SidebarOption.css";

export const SidebarOption = ({ text, Icon, active }) => {
  return (
    <div className={`sidebarOption ${active && "sidebarOption_active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
};

export default SidebarOption;
