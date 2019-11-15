import { Bill } from "./bill-interface";
import { Company } from "./company-interface";

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
    companies?:Company[];
    totalGain?:number
}