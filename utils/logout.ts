import axios from "axios";

const logoutHandle = async () => {
  const token = localStorage.getItem("token");
  try {
    await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    localStorage.removeItem("qid");
    window.location.reload();
  } catch (error) {
    console.error("Error logging out", error);
  }
};

export default logoutHandle;
