import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  url = "https://reseau.jdedev.fr/api/comment/"

  constructor(private http: HttpClient) { }


  getCommentList(): Observable<any> {
    return this.http.get(this.url, { responseType: 'text' })

  }

  addComment(objComment: object): Observable<any> {
    return this.http.post(this.url, objComment)
  }

  deleteComment(commentID: number): Observable<any> {
    return this.http.delete(this.url + commentID)
  }

}
