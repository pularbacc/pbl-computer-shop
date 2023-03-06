import { BillDetail } from "./billDetail";

export interface Bill
{
    id: number;

    name: string;
    phone: string;
    address: string;
    totalPrice:number;
    shipping : boolean;
    received : boolean;

    billDetail:BillDetail[];
}
