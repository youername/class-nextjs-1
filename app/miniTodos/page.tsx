"use client";
import React, { useState } from "react";

interface Props {}

const Page: React.FC<Props> = ({}) => {
  const [inputField, setInputField] = useState<string>("");
  const [arr, setArray] = useState<string[]>([]);
  return (
    <div className="m-36">
      <input
        onChange={(e) => {
          setInputField(e.currentTarget.value);
        }}
        value={inputField}
        type="text"
        className="text-gray-900"
      />
      <span
        onClick={() => {
          if (inputField) setArray([inputField, ...arr]);
          setInputField("");
        }}
      >
        등록
      </span>
      {arr.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

export default Page;
