"use client";
import { UserContext } from "@/utils/userContext";
import React, { useContext } from "react";

interface Props {}

const Title: React.FC<Props> = ({}) => {
  const ctx = useContext(UserContext);

  return <div>{ctx?.title}</div>;
};

export default Title;
