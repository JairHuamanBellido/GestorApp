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
    companyName: '',

    bills: [],
    companies: [],
    totalGain: undefined
};

export const updateUser = (user: User) => {
    console.log("Actualizando al usuario");
    currentUser.ruc = user.ruc;
    currentUser.name = user.name;
    currentUser.lastName = user.lastName;
    currentUser.username = user.username;
    currentUser.age = user.age;
    currentUser.email = user.email;
    currentUser.phone = user.phone;
    currentUser.address = user.address;
    currentUser.district = user.district;
    currentUser.companyName = user.companyName;
    currentUser.bills = user.bills;
    currentUser.companies = user.companies;
    currentUser.totalGain = totalAmmout();



}


export const updateBills = (bill: Bill) => {
    currentUser.bills.push(bill);

}

export const totalAmmout = () => {

    let a = 0;
    currentUser.bills.forEach((b) => {
        a = a + b.totalAmmountFinal
    })
    return parseFloat(a.toFixed(2));
}


export const totalTax= ()=>{
    let a  = 0;
    currentUser.bills.forEach( (b)=>{
        a = a + b.retention;
    })

    return parseFloat(a.toFixed(2));
}

 export const findBillById =  (id: string) => {
    console.log("Buscando a la boleta con id: " + id);
    return currentUser.bills.find(bill=>bill._id === id);
        
        
}

export const getLastBills = ()=>{
    return currentUser.bills.slice(-5);
}


export const findCompanyByRuc = (ruc:string)=>{
    console.log(currentUser.companies.find(company=>company.ruc === ruc));
    return currentUser.companies.find(company=>company.ruc === ruc);
}


export const HightBill = ()=>{
    if(currentUser.bills.length > 0){
    return currentUser.bills.reduce( (a,b)=> a.totalAmmountFinal > b.totalAmmountFinal ? a:b) ||  null;
    }
    else{
        return [];
    }
}
export default currentUser;

const ctxt = React.createContext<User | null>(null);

export const UserContextProvider = ctxt.Provider;

export const UserContextConsume = ctxt.Consumer;
