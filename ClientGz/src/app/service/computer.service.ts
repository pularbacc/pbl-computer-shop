import { Injectable } from '@angular/core';
import { Computer } from '../model/computer';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {

  constructor(
    private http: HttpClient
  ) { }

  private computerUrl = 'api/computer';

  private setHeader(){
    const token = "Bearer " + localStorage.getItem("JWT");
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    headers = headers.append('Content-Type', 'application/json');

    return headers;
  }

  getComputers(): Observable<Computer[]> {
    return this.http.get<Computer[]>(this.computerUrl);
  }

  getComputersManage(): Observable<Computer[]> {
    return this.http.get<Computer[]>(this.computerUrl + '/manage',{headers : this.setHeader()});
  }

  /*getComputer(id: number): Observable<Computer> {
    const url = `${this.computerUrl}/${id}`;
    return this.http.get<Computer>(url);
  }*/

  addComputer(computer: Computer): Observable<Computer> {
    console.log(computer);
    return this.http.post<Computer>(this.computerUrl, computer, {headers : this.setHeader()} );
  }

  updateComputer(id: number, computer: Computer): Observable<any> {
    const url = `${this.computerUrl}/${id}`;
    return this.http.put(url, computer, {headers : this.setHeader()});
  }
  
  /*deleteComputer(id: number): Observable<Computer> {
    const url = `${this.computerUrl}/${id}`;
    return this.http.delete<Computer>(url, {headers : this.setHeader()});
  }*/
}
