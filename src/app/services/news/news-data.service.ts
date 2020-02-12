import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
import { ThrowStmt } from '@angular/compiler';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsDataService {

  constructor(private http:HttpClient) { 
    this.getJson().subscribe(data => {
      //console.log(data);
    });
  }

  public getJson(): Observable<any>{
    return this.http.get('../assets/articles-ascpress.json');
  }

  public postNews(news:any):Observable<any>{
    return this.http.post('https://ng-news-app-64b1a.firebaseio.com/',news);
  }
}
