"use client";
import React, { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  menu: { title?: string; icon?: JSX.Element }[];
}

const DropdownMenu: React.FC<Props> = ({ children, menu }) => {
  const [showMenu, setShowMenu] = useState(false);

  const closeHandle = () => {
    setShowMenu(false);
  };

  return (
    <div>
      {showMenu && (
        <div
          onClick={closeHandle}
          style={{
            zIndex: 10,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
      )}

      {/* 상단메뉴 */}
      <div
        onClick={() => {
          setShowMenu(!showMenu);
        }}
        style={{ position: "relative" }}
      >
        {children}
      </div>
      {showMenu && (
        <div
          style={{
            position: "absolute",
            backgroundColor: "white",
            color: "#224",
            minWidth: "6rem",
            padding: "4px",
            zIndex: "10",
          }}
        >
          {menu.map((item, index) => (
            <div
              onClick={closeHandle}
              key={index}
              style={{ display: "flex", alignItems: "center" }}
            >
              <div>{item.icon}</div>
              <div>{item.title}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
