"use client";
import { UserContext } from "@/utils/userContext";
import React, { useContext } from "react";

interface Props {}

const VisitNumEditer: React.FC<Props> = ({}) => {
  const ctx = useContext(UserContext);

  return (
    <div>
      <div>VisitNumEditer</div>{" "}
      <div>
        <input
          onChange={(e) => ctx?.setVisitNum(Number(e.currentTarget.value))}
          type="number"
        />
      </div>
    </div>
  );
};

export default VisitNumEditer;
