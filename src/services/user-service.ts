import axios from "axios";
import { uri } from "../uri";
import { updateUser } from "../../components/userProvider/UserContext";
import Router from "next/router";
class UserService {
  ruc: string;

  constructor() {}

  validateCredentials = async (username, password) => {
    return await axios({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      url: `${uri}/login`,
      data: { username: username, password: password }
    })
      .then(res => {
        let fullName = res.data.user.name + " " + res.data.user.lastName;
        updateUser(res.data.user);
        this.ruc = res.data.user.ruc;
        localStorage.setItem("token", res.data.access_token);
        localStorage.setItem("ruc", res.data.user.ruc);
        localStorage.setItem("name", fullName);
        localStorage.setItem("username", res.data.user.username);
        localStorage.setItem("password", res.data.user.password);
        return true;
      })
      .catch(e => {
        return false;
      });
  };

  updateCredentials = async () => {
    this.ruc = localStorage.getItem("ruc");
  };

  getRuc = () => {
    return localStorage.getItem("ruc");
  };

  register = async (user: any) => {
    user.ruc = "20" + user.ruc;
    return await axios({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      url: `${uri}/register`,
      data: user
    }).then(data => {
      Router.push("/login");
    });
  };
}
export default new UserService();
