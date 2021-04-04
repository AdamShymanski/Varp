import axios from "axios";

let API_BASE_URL;

if (process.env.REACT_APP_ENV === "DEV") {
  API_BASE_URL = "http://localhost:5001/pyramid-64ab2/us-central1/api";
} else {
  API_BASE_URL = "https://us-central1-pyramid-64ab2.cloudfunctions.net/api";
}
const instance = axios.create({
  baseURL: API_BASE_URL
});

export default instance;
