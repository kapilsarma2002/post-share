import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// const AUTH_API = process.env['AUTH_API']
const AUTH_API = 'https://localhost:44393/api/';

// const httpOptions = {
//   headers: new HttpHeaders(
//     {
//       'Content-Type': 'application/json',
//     }
//   )
// };

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  
  constructor( private http: HttpClient ) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        email: email,
        password: password,
      }
    );
  }

  register(name: string, email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'UserDetails',
      {
        userName : name,
        email: email,
        password: password,
      }
    );
  }

  getUserNameFromId(id: number): Observable<any> {
    return this.http.post(
      AUTH_API + 'getUserNameFromId',
      {
        UserId: id
      }
    );
  }

}