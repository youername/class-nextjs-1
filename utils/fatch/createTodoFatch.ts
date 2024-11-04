import axios from "axios";

export const createTodoFatch = async ({ title }: { title: string }) => {
  const token = localStorage.getItem("qid");
  if (token) {
    const response = await axios.post(
      "http://localhost:8000/createTodo",
      { title, isDone: false },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.todo;
  }
};
