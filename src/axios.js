import axios from "axios";

axios.defaults.withCredentials = true; // Important: This sends cookies with each request
axios.defaults.baseURL = "http://localhost:8000";

export default axios;
