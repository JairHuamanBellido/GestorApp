import axios from "axios";
import { uri } from "../uri";
import { updateBills } from "../../components/userProvider/UserContext";
class BillService {
  create = async (bill: any) => {
    return await axios({
      method: "POST",
      headers: { "Content-type": "application/json" },
      url: `${uri}/bills`,
      data: bill
    }).then(data => {
      updateBills(data.data);
      console.log(data.data);
    });
  };

  getBills = async () => {
    let token = localStorage.getItem("token");
    console.log(token);

    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return await axios({
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      url: `${uri}/bills`
    }).then(data => {
      console.log(data);
    });
  };
}

export default new BillService();
