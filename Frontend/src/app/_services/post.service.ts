import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// const AUTH_API = process.env['AUTH_API'];
const AUTH_API = 'https://localhost:44393/api/';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json'
    }
  )
};

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor ( private http: HttpClient ) {}

  getPosts(): Observable<any> {
    return this.http.get( AUTH_API + 'Posts');
  }

  getPostsByUser(id: number): Observable<any> {
    return this.http.get( AUTH_API + `Posts/${id}`);
  }

  postPost(userID: number, title: any, content: any) : Observable<any> {
    return this.http.post( 
      AUTH_API + 'Posts',
      {
        authorID: userID,
        title: title,
        content: content
      },
      httpOptions
    )}
}