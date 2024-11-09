import axios from "axios";

export const doneTodosFatch = async ({
  id,
  isDone,
}: {
  id: number;
  isDone: boolean;
}) => {
  const token = localStorage.getItem("qid");
  if (token) {
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}updateTodo`,
      { id, isDone },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }
};
