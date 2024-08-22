"use client";
import React, { useState } from "react";
import { FaMapPin } from "react-icons/fa";
import { AiFillAndroid } from "react-icons/ai";

interface Props {}

const DropdownMenu: React.FC<Props> = ({}) => {
  const [showMenu, setShowMenu] = useState();

  if (!showMenu) {
    return null;
  }

  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "white",
        color: "#331",
        minWidth: "6rem",
        padding: "4px",
      }}
    >
      {menus.map((item, index) => (
        <div key={index} className="flex items-center">
          <div>{item.icon}</div>
          <div>{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;

const menus = [
  { title: "menu 1", icon: <FaMapPin /> },
  { title: "menu 2", icon: <AiFillAndroid /> },
  { title: "menu 3" },
];
