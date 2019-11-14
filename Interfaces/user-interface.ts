import { Bill } from "./bill-interface";

export interface User {
    ruc?: string;
    name?: string;
    lastName?: string;
    username?: string;
    password?: string;
    age?: number;
    
    email?: string;
    phone?: number;
    address?: string;
    district?: string;
    companyName?:string;

    bills? :Bill[];
}