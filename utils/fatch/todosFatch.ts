import axios from "axios";
import { Dispatch, SetStateAction } from "react";

export const todosFatch = async ({
  setTodos,
}: {
  setTodos: Dispatch<SetStateAction<TodoType[]>>;
}) => {
  const token = localStorage.getItem("qid");
  if (token) {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}getTodos`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setTodos(response.data.todos);
  }
};
