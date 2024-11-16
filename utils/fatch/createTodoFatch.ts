import axios from "axios";

export const createTodoFatch = async ({
  title,
  subTitle,
  color,
}: {
  title: string;
  subTitle: string;
  color: string;
}) => {
  const token = localStorage.getItem("qid");
  if (token) {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}createTodo`,
      { title, isDone: false, subTitle, color },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.todo;
  }
};
