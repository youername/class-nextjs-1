import axios from "axios";

export const removeTodosFatch = async ({ id }: { id: number }) => {
  const token = localStorage.getItem("qid");
  if (token) {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}removeTodo`,

      {
        data: { id },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }
};
