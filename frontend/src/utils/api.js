// utils/api.js
//const apiURL = "https://api.secretos.pro/api";

const strapiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const apiURL = `${strapiUrl}/api`;
export default apiURL;
