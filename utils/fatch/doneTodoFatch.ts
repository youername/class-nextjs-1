import axios from "axios";

export const doneTodosFatch = async ({
  id,
  isDone,
  subTitleVisible,
}: {
  id: number;
  isDone: boolean;
  subTitleVisible: boolean;
}) => {
  const token = localStorage.getItem("qid");
  if (token) {
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}updateTodo`,
      { id, isDone, subTitleVisible },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }
};
