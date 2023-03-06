import {Computer} from './computer';

export interface BillDetail
{
        id:number;
        billId: number;
        computerId: number;
        price: number;
        quanLiTy:number;
        
        computer: Computer;
}