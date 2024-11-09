import React from "react";

interface Props {
  fill?: string;
  size?: number;
}

const UserIcon: React.FC<Props> = ({ fill = "#D9D9D9", size = 31 }) => {
  return (
    <svg
      width={size}
      viewBox="0 0 31 34"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="15.4284" cy="13.5" r="7.5" fill={fill} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.8567 34H0C0.599722 27.7547 4.90549 22.5919 10.6921 20.737C12.0863 21.5404 13.7036 22 15.4284 22C17.1531 22 18.7704 21.5404 20.1647 20.737C25.9512 22.5919 30.257 27.7547 30.8567 34Z"
        fill={fill}
      />
    </svg>
  );
};

export default UserIcon;
