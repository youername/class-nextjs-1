"use client";
import { UserContext } from "@/utils/userContext";
import React, { ChangeEvent, useContext, useState } from "react";
import Resizer from "react-image-file-resizer";

interface Props {}

const UserInfo: React.FC<Props> = ({}) => {
  const [resizedImage, setResizedImage] = useState<any>("");

  const ctx = useContext(UserContext);
  const [inputData, setInputData] = useState<inputType[]>(fields);

  const [title, setTitle] = useState<string>(ctx?.title || "");

  const resizeFile = (file: File) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        300, // 너비
        300, // 높이
        "JPEG", // 포맷
        100, // 품질
        90, // 회전
        (uri) => {
          resolve(uri);
        },
        "base64" // 출력 타입
      );
    });
  const handleFileChange = async (event: any) => {
    const file = event.target.files[0];
    try {
      const image = await resizeFile(file);
      setResizedImage(image);
    } catch (err) {
      console.log(err);
    }
  };

  console.log("resizedImage", resizedImage);

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
        <input type="file" onChange={handleFileChange} accept="image/*" />
        {resizedImage && (
          <div className="mb-24">
            <picture>
              <img
                src={resizedImage}
                alt="Resized preview"
                style={{ maxWidth: "300px" }}
              />
            </picture>
          </div>
        )}
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
