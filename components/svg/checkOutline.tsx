import React from "react";

interface Props {
  size?: number;
  fill?: string;
}

const CheckOutline: React.FC<Props> = ({ size = 33, fill = "white" }) => {
  return (
    <svg
      width={size}
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.5 16.5C30.5 24.232 24.232 30.5 16.5 30.5C8.76801 30.5 2.5 24.232 2.5 16.5C2.5 8.76801 8.76801 2.5 16.5 2.5C24.232 2.5 30.5 8.76801 30.5 16.5ZM33 16.5C33 25.6127 25.6127 33 16.5 33C7.3873 33 0 25.6127 0 16.5C0 7.3873 7.3873 0 16.5 0C25.6127 0 33 7.3873 33 16.5ZM8.00008 18.0271L14.5001 24.5L26.5272 12.4729L24.7044 10.6772L14.5001 20.5L9.82286 15.8228L8.00008 18.0271Z"
        fill={fill}
      />
    </svg>
  );
};

export default CheckOutline;
