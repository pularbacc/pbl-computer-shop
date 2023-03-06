import {Compon} from './compon'

export interface Computer
{
    id:number;
    name:string;
    price :number;
    info :string;
    status :boolean;
    
    compon: Compon;
}