import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Account } from '../model/account';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http: HttpClient
  ) { }

  private accountUrl = 'api/account';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  login(account: Account): Observable<any> {
    const credentials = JSON.stringify(account);
    return this.http.post(this.accountUrl + '/login', credentials, this.httpOptions);
  }

  register(account: Account): Observable<any> {
    return this.http.post(this.accountUrl + '/register', account, this.httpOptions);
  }

  checkAdmin():boolean{
    let token = localStorage.getItem("JWT");
    if (token != null) {
      let parseJwt = JSON.parse(atob(token.split('.')[1]));
      if (parseJwt['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] == "admin") {
        return true;
      }
    }
    return false;
  }
}
