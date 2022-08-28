import axios from "axios";

const instance = axios.create({
  baseURL: "https://shortvideo-mern-app.herokuapp.com",
});
export default instance;
