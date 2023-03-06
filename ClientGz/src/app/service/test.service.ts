import { Injectable } from '@angular/core';
import { Computer } from '../model/computer';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Test} from '../model/test';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  private testUrl = 'api/test';
  private setHeader(){
    const token = "Bearer " + localStorage.getItem("JWT");
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    headers = headers.append('Content-Type', 'application/json');

    return headers;
  }

  
  get(){
    return this.http.get(this.testUrl);
  }
  post(test:Test){
    console.log(test);
    return this.http.post(this.testUrl,test,{headers : this.setHeader()});
  }
}
