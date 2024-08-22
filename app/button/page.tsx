import OldButton from "@/components/oldbutton";
import React, { ReactNode } from "react";

interface Props {}

const Page: React.FC<Props> = ({}) => {
  return (
    <div className=" m-8">
      <OldButton bgColor="#234b3d" padX="md">
        CLICK
      </OldButton>
    </div>
  );
};

export default Page;
