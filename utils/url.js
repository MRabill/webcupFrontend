const baseUrl = import.meta.env.VITE_API_URL;
const url = {
  BASIC: `${baseUrl}/`,
  GET_DEVELOPERS: `${baseUrl}/APIBACKEND/get-user`,
  POST_USER: `${baseUrl}/APIBACKEND/post-user`,
  AUTHENTICATE_USER: `${baseUrl}/APIBACKEND/authenticate-user`,
  GET_NEWS : `${baseUrl}/APIBACKEND/get-news`
};

export default url;
