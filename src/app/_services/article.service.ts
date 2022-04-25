import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  url = "https://reseau.jdedev.fr/api/article/"
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //   })
  // }

  constructor(private http: HttpClient) { }

  getArticleList(): Observable<any> {
    return this.http.get(this.url, { responseType: 'text' })

  }

  getCommentFromArticle(articleID: number): Observable<any> {
    return this.http.get(this.url + articleID + "/comment")
  }

  addArticle(objArticle: object): Observable<any> {
    return this.http.post(this.url, objArticle)
  }

  deleteArticle(articleID: number): Observable<any> {
    return this.http.delete(this.url + articleID)
  }

}
