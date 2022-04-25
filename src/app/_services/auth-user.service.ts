import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  constructor() { }
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  CONNECT_API = "https://reseau.jdedev.fr/api/user/connect";
  url = "https://reseau.jdedev.fr/api/user"
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  login(logUser: object): Observable<any> {
    return this.http.post(this.CONNECT_API, logUser, this.httpOptions);
  }
  register(objUser: object): Observable<any> {
    console.log(objUser)
    return this.http.post(this.url, objUser, this.httpOptions);
  }
}