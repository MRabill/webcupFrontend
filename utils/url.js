const baseUrl = import.meta.env.VITE_API_URL;
const url = {
  BASIC: `${baseUrl}/`,
  GET_DEVELOPERS: `${baseUrl}/APIBACKEND/get-user`,
  POST_USER: `${baseUrl}/APIBACKEND/post-user`,
};

export default url;
