import React from "react";

interface Props {
  size?: number;
  fill?: string;
}

const CheckGreen: React.FC<Props> = ({ size = 33, fill = "#62BE5A" }) => {
  return (
    <svg
      width={size}
      viewBox="0 0 33 33"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5 33C25.6127 33 33 25.6127 33 16.5C33 7.3873 25.6127 0 16.5 0C7.3873 0 0 7.3873 0 16.5C0 25.6127 7.3873 33 16.5 33ZM7.52717 18.5L14.5 25.5L27 13L24.7043 10.6772L14.5 20.5L9.82279 15.8228L7.52717 18.5Z"
      />
    </svg>
  );
};

export default CheckGreen;
