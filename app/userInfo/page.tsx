"use client";
import { UserContext } from "@/utils/userContext";
import axios from "axios";
import React, { ChangeEvent, useContext, useState } from "react";
import Resizer from "react-image-file-resizer";

interface Props {}

const UserInfo: React.FC<Props> = ({}) => {
  const [resizedImage, setResizedImage] = useState<string>("");
  const ctx = useContext(UserContext);
  const [inputData, setInputData] = useState<inputType[]>(fields);
  const [title, setTitle] = useState<string>(ctx?.title || "");

  const resizeFile = (file: File) =>
    new Promise<string>((resolve) => {
      Resizer.imageFileResizer(
        file,
        300,
        300,
        "JPEG",
        100,
        90,
        (uri) => {
          resolve(uri as string);
        },
        "base64"
      );
    });

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const image = await resizeFile(file);
        setResizedImage(image);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleInputChange = (index: number, value: string) => {
    setInputData((prevData) =>
      prevData.map((item, idx) => (idx === index ? { ...item, value } : item))
    );
  };

  const handleSubmit = async () => {
    const formData = inputData.reduce((acc, item) => {
      acc[item.name] = item.value;
      return acc;
    }, {} as Record<string, string>);

    formData.photoBase64 = resizedImage;

    try {
      const token = localStorage.getItem("qid");
      const response = await axios.patch(
        "http://localhost:8000/userUpdate",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.data) {
        throw new Error("Failed to update user info");
      }

      const result = await response.data;
      console.log("Update successful:", result);
      // 성공 메시지를 사용자에게 표시하거나 다른 작업 수행
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error details:", {
          message: error.message,
          response: error.response?.data,
          status: error.response?.status,
          headers: error.response?.headers,
        });

        // 구체적인 에러 메시지를 사용자에게 표시
        alert(`Error: ${error.response?.data?.message || error.message}`);
      } else {
        console.error("Unexpected error:", error);
        alert("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-220px)]">
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
                onChange={(e) => handleInputChange(index, e.target.value)}
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
        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Update Information
        </button>
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
  { name: "studentNum", type: "number", value: "" },
];
