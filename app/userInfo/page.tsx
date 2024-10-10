"use client";
import { UserContext } from "@/utils/userContext";
import axios from "axios";
import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import Resizer from "react-image-file-resizer";

type InputDataType = {
  name: string;
  photoUrl: string;
  address: string;
  studentNum: string;
  photoBase64: string;
};

const UserInfo: React.FC = () => {
  const [resizedImage, setResizedImage] = useState<string>("");
  const ctx = useContext(UserContext);
  const [inputData, setInputData] = useState<InputDataType>({
    name: "",
    photoUrl: "",
    address: "",
    studentNum: "",
    photoBase64: "",
  });

  const resizeFile = (file: File): Promise<string> =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        300,
        300,
        "JPEG",
        100,
        0,
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
        setInputData((prev) => ({ ...prev, photoBase64: image }));
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("qid");
      const response = await axios.patch(
        "http://localhost:8000/updateUser",
        inputData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data) {
        console.log("Update successful:", response.data);
      } else {
        throw new Error("Failed to update user info");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (ctx?.user) {
      setInputData({
        name: ctx.user.name || "",
        photoUrl: ctx.user.photoUrl || "",
        address: ctx.user.address || "",
        studentNum: ctx.user.studentNum || "",
        photoBase64: ctx.user.photoBase64 || "",
      });
    }
  }, [ctx?.user]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-220px)]">
      <div className="text-center text-[2rem] font-extrabold mt-12">
        Information
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 justify-center items-center text-slate-800">
          <div className="text-white">사용자정보</div>

          {["name", "address", "photoUrl", "studentNum"].map((field) => (
            <div key={field}>
              <div className="flex gap-4">
                <div className="text-white">
                  {field === "photoUrl"
                    ? "URL이미지"
                    : field === "studentNum"
                    ? "학생증 번호"
                    : field}
                </div>
                <input
                  className="text-slate-800 w-[20rem]"
                  type="text"
                  name={field}
                  value={inputData[field as keyof InputDataType] || ""}
                  onChange={handleInputChange}
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
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Update Information
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserInfo;
