import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {IComment} from "../models/IComment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

private url = 'https://jsonplaceholder.typicode.com/comments'
  constructor(private http: HttpClient) { };

  getComments():Observable <IComment[]> {
    return this.http.get<any>(this.url);

  }

  getComment(id:number):Observable<IComment> {
    return this.http.get<any>(this.url + '/' + id)
  }
}
