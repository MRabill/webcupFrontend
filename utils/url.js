const baseUrl = import.meta.env.VITE_API_URL;
const url = {
  BASIC: `${baseUrl}/`,
  GET_DEVELOPERS: `${baseUrl}/APIBACKEND/get-user`,
  POST_USER: `${baseUrl}/APIBACKEND/post-user`,
  AUTHENTICATE_USER: `${baseUrl}/APIBACKEND/authenticate-user`,
  GET_NEWS: `${baseUrl}/APIBACKEND/get-news`,
  REGISTER_USER: `${baseUrl}/APIBACKEND/post-user`,
  SAVE_DETAILS: `${baseUrl}/APIBACKEND/save-detail`,
  GET_DETAILS: (username) => `${baseUrl}/APIBACKEND/get-details/${username}`,
};

export default url;
