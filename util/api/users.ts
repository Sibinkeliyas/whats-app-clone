import axios from "axios";

export const getChatedList = async () => {
  try {
    const res = await axios.get("https://dummyjson.com/users");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getUserData = async (userId: string) => {
  try {
    const res = await axios.get(`https://dummyjson.com/users/${userId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

