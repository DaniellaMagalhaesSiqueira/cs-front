import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private urlBackend = `${environment.urlBack}/comments`;
  private headers = {
    'Content-type': 'application/json'
  };
  private comments = new BehaviorSubject<Comment[]> ([]);
  constructor(
    private httpClient: HttpClient,
  ) { }

  getComments(){
    this.httpClient.get<Comment[]>(`${this.urlBackend}`).subscribe((comments)=>{
      this.comments.next(comments);
    });
    return this.comments.getValue();
  }

  getByArticle(article: string){
    this.httpClient.get<Comment[]>(`${this.urlBackend}/article/${article}`).subscribe((comments) =>{
      this.comments.next(comments);
    });
    return this.comments.getValue();
  }
  getByArticleStream(article: string){
    this.httpClient.get<Comment[]>(`${this.urlBackend}/article/${article}`).subscribe((comments) =>{
      this.comments.next(comments);
    });
    return this.comments.asObservable();
  }

  getCommentStream(){
    return this.comments.asObservable();
  }
  
  getDefaultComment():Comment{
    return {
      id: "0",
      user: "0",
      article: '0',
      comment: '',
    };
  }

  createComment(comment: Comment, article: string){
    const body = JSON.stringify(comment);

    this.httpClient.post<Comment>(`${this.urlBackend}/create`, body, {headers: this.headers}).subscribe((comment)=>{
      this.getComments().push(comment);
    });
    return this.getByArticle(article);
  }


}
