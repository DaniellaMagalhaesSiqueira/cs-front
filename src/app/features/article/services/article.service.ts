
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private urlBackend = `${environment.urlBack}/articles`;
  private articles = new BehaviorSubject<Article[]>([]);
  private headers = {
    'Content-type': 'application/json'
  };
  constructor(
    private httpClient: HttpClient,
  ) { }

  getArticles(){
    this.httpClient.get<Article[]>(`${this.urlBackend}`).subscribe(
      (articles) =>{
        this.articles.next(articles);
      }
    );
    return this.articles.getValue();
  }

  getArticlesStream(): Observable<Article[]>{
    return this.articles.asObservable();
  }

  getById(id: string){
    return this.getArticles().find((article) => article.id === id);
  }

  getDefaultArticle(): Article{
    return {
      id: '',
      author: '',
      title: '',
      preview: '',
      text: '',
      theme: '',
      imageUrl: '',
    }
  }
  createArticle(article: Article){
    const body = JSON.stringify(article);
    console.log(body);
    this.httpClient.post<Article>(`${this.urlBackend}/create`, body, {headers: this.headers}).subscribe((article)=> {
      this.getArticles().push(article);
      this.articles.next(this.getArticles());
    });
  }

  removeArticleById(id: string){
    const findedArticle = this.getArticles().findIndex((article) => article.id === id);
    if(findedArticle) this.getArticles().splice(findedArticle, 1);
  }
  getByIndex(index: number){
    return this.getArticles()[index];
  }
}