import { colorSet } from "@/set/color";
import { paddingX } from "@/set/padding";
import React, { ReactNode } from "react";

type ColorSetType = keyof typeof colorSet;
type BgColorType = ColorSetType | (string & {});

type PaddingXType = keyof typeof paddingX;
type PadXType = PaddingXType | (string & {});

interface Props {
  children: ReactNode;
  bgColor?: BgColorType;
  padX?: PadXType;
}

const OldButton: React.FC<Props> = ({ children, bgColor, padX }) => {
  const getBgColor = (color: BgColorType) => {
    return color in colorSet ? colorSet[color as ColorSetType] : color;
  };
  const getPaddingX = (px: PadXType) => {
    return px in paddingX ? paddingX[px as PaddingXType] : px;
  };
  return (
    <div
      className="text-3xl"
      style={{
        display: "inline-block",
        backgroundColor: bgColor ? getBgColor(bgColor) : undefined,
        paddingInline: padX ? getPaddingX(padX) : undefined,
        paddingBlock: "5px",
        lineHeight: "0.76",
      }}
    >
      {children}
    </div>
  );
};

export default OldButton;
