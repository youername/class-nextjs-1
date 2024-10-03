"use client";
import { UserContext } from "@/utils/userContext";
import React, { useContext, useState } from "react";

interface Props {}

const UserInfo: React.FC<Props> = ({}) => {
  const ctx = useContext(UserContext);
  const [inputData, setInputData] = useState<inputType[]>(fields);

  const [title, setTitle] = useState<string>(ctx?.title || "");

  console.log("inputData", inputData);

  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-220px)] ">
      <div className="text-center text-[2rem] font-extrabold mt-12">
        Information
      </div>

      <div className="flex flex-col gap-4 justify-center items-center text-slate-800">
        <div className="text-white">사용자정보</div>
        {inputData.map((input, index) => (
          <div key={index}>
            <div className="flex gap-4">
              <div className="text-white">{input.name}</div>
              <input
                type={input.type}
                value={input.value}
                onChange={(e) => {
                  //home work 배열객체 값 변경
                  e.currentTarget.value;
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserInfo;

type inputType = {
  name: string;
  type: string;
  value: string;
};

const fields: inputType[] = [
  { name: "name", type: "text", value: "" },
  { name: "email", type: "email", value: "" },
  { name: "address", type: "text", value: "" },
  { name: "studentNo.", type: "number", value: "" },
];
