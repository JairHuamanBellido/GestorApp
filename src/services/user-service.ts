import axios from "axios";
import { uri } from "../uri";
class UserService {
  ruc: string;

  constructor() {
  }

  validateCredentials = async (username, password) => {
    return await axios({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      url: `${uri}/login`,
      data: { username: username, password: password }
    })
      .then(res => {
        this.ruc = res.data.user.ruc;
        localStorage.setItem("token", res.data.access_token);
        localStorage.setItem("ruc", res.data.user.ruc);
        return true;
      })
      .catch(e => {
        return false;
      });
  };

  updateCredentials = async () => {
	  this.ruc = localStorage.getItem("ruc");
  };

  getRuc = ()=>{
	  return localStorage.getItem("ruc");
  }
}
export default new UserService();
