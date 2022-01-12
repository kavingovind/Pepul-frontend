import axios from "axios";
import { TEST_URL } from "../constants/apiConstants";
import authHeader from "./auth-header";

class UserService {
  getPublicContent() {
    return axios.get(TEST_URL + "testall");
  }

  getUserBoard() {
    return axios.get(TEST_URL + "user", { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(TEST_URL + "mod", { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(TEST_URL + "admin", { headers: authHeader() });
  }
}

export default new UserService();
