import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bill } from '../model/bill';
import { Item } from '../model/item';
import {BillDetail} from '../model/billDetail';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private http: HttpClient) { }

  private billUrl = 'api/bill';

  private setHeader(){
    const token = "Bearer " + localStorage.getItem("JWT");
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    headers = headers.append('Content-Type', 'application/json');
    return headers;
  }

  addBill(bill: Bill): Observable<any> {
    let items: Item[] = [];
    items = JSON.parse(localStorage.getItem("cart"));

    let billDetails:Array<BillDetail> =[];
    items.forEach(item => {
      let billDetail: BillDetail ={
        id : 0,
        billId : 0,
        computerId : item.computer.id,
        price : item.computer.price,
        quanLiTy : item.quanLiTy,

        computer: null,
      }
      billDetails.push(billDetail);
    });

    bill.billDetail = billDetails;
    return this.http.post<Bill>(this.billUrl, bill, {headers : this.setHeader()});
  }

  getBill(): Observable<Bill[]> {
    return this.http.get<Bill[]>(this.billUrl,{headers : this.setHeader()});
  }

  getBillManage(): Observable<Bill[]>{
    return this.http.get<Bill[]>(this.billUrl + '/manage',{headers : this.setHeader()});
  }

  updateBill(id: number, bill: Bill): Observable<any> {
    const url = `${this.billUrl}/${id}`;
    return this.http.put(url, bill, {headers : this.setHeader()});
  }
}
