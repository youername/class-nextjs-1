import React, { ReactNode } from "react";

export enum roundedEnum {
  sm = "2px",
  md = "4px",
  lg = "6px",
  full = "2000px",
}

export enum colorSet {
  deep = "#520922",
  dark = "#980c28",
  main = "#20a1d8",
  light = "#20dbd8",
}

interface Props {
  children: ReactNode;
  paddingX?: string;
  paddingY?: string;
  bgColor?: colorSet | string;
  bgOpacity?: string;
  rounded?: roundedEnum;
}

const Button: React.FC<Props> = ({
  children,
  paddingX,
  paddingY,
  bgColor,
  bgOpacity,
  rounded,
}) => {
  return (
    <div
      style={{
        display: "inline-block",
        backgroundColor: bgColor,
        opacity: bgOpacity,
        paddingInline: paddingX,
        paddingBlock: paddingY,
        borderRadius: rounded,
      }}
    >
      {children}
    </div>
  );
};

export default Button;
