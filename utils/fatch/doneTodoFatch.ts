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
      "http://localhost:8000/updateTodo",
      { id, isDone },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }
};
