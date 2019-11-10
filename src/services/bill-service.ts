
import axios from "axios";
import { uri } from "../uri";
class BillService {



    create = async(bill:any)=>{
        return await axios({
            method: "POST",
            headers: {"Content-type": "application/json"},
            url: `${uri}/bills`,
            data:bill
        }).then ( (data)=>{
            console.log(data.data);
        })
    }

}

export default new BillService();