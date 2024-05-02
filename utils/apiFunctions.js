import axios from "axios";

const fetchData = async ({ url }) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log("Error performing Axios GET method: " + error);
    return "Failed";
  }
};

const postData = async ({ url, body }) => {
  return await axios.post(url, body);
};

export { fetchData, postData };
