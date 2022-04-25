import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError, Observable } from 'rxjs';
import { shareReplay, } from 'rxjs/operators'
import { Router } from '@angular/router';
import { userInterface } from '../interfaces/userInterface';

@Injectable({
  providedIn: 'root'
})




export class UserService {

  user?: Array<userInterface>

  url = "https://reseau.jdedev.fr/api/user/"
  urlLogin = "https://reseau.jdedev.fr/api/user/connect"
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //   })
  // }

  constructor(private http: HttpClient, private router: Router) { }


  getUserlist(): Observable<any> {
    return this.http.get(this.url, { responseType: 'text' })
  };

  deleteUser(userID: number): Observable<any> {

    return this.http.delete<userInterface>(this.url + userID)
  }

}
