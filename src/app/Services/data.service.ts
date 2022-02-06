import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
     headers: new HttpHeaders({
      'Content-Type': 'application/json'})
     }
const REST_API = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private httpClient: HttpClient) { } 

  getComments(): Observable<any> {
    return this.httpClient.get<any>(REST_API + '/Users')
  }
  postComments(payload: any): Observable<any> {
    return this.httpClient.post<any>(payload, REST_API + '/Users')
  }
}
    
