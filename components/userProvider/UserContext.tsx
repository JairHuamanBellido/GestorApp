import * as React from "react";
import { User } from "../../Interfaces/user-interface";
import { Bill } from "../../Interfaces/bill-interface";



let currentUser: User = {
    ruc: '',
    name: '',
    lastName: '',
    username: '',
    password: '',
    age: undefined,
    
    email: '',
    phone: undefined,
    address: '',
    district: '',
    companyName:'',

    bills : []
};

export const updateUser = (user:User) => {
    console.log("Actualizando al usuario");
    console.log(user);
    currentUser.name  =user.name;
    currentUser.lastName = user.lastName;
    currentUser.ruc =  user.ruc;
    currentUser.bills=  user.bills;

    
}


export const updateBills = (bill:Bill) =>{
    currentUser.bills.push(bill);
}


export default currentUser;

const ctxt = React.createContext<User | null>(null);

export const UserContextProvider = ctxt.Provider;

export const UserContextConsume = ctxt.Consumer;
