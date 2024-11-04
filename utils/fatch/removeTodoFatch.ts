import axios from "axios";

export const removeTodosFatch = async ({ id }: { id: number }) => {
  const token = localStorage.getItem("qid");
  if (token) {
    const response = await axios.delete(
      "http://localhost:8000/removeTodo",

      {
        data: { id },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }
};
