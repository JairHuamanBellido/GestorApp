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

    bills : [],
    companies:[],
    totalGain: undefined
};

export const updateUser = (user:User) => {
    console.log("Actualizando al usuario");
    console.log(user);
    currentUser.name  =user.name;
    currentUser.lastName = user.lastName;
    currentUser.ruc =  user.ruc;
    currentUser.bills=  user.bills;
    currentUser.companies  = user.companies;
    currentUser.totalGain =  totalAmmout();
    console.log(currentUser.bills[0].company);

    
}


export const updateBills = (bill:Bill) =>{
    currentUser.bills.push(bill);
    
}

export const totalAmmout =  ()=>{
    
    let a = 0;
    currentUser.bills.forEach ((b)=>{
        a = a + b.totalAmmountFinal
    })
    return parseFloat(a.toFixed(2));
}


export default currentUser;

const ctxt = React.createContext<User | null>(null);

export const UserContextProvider = ctxt.Provider;

export const UserContextConsume = ctxt.Consumer;
