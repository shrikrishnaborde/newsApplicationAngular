import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsDataService } from '../services/news/news-data.service';

@Component({
  selector: 'app-newsdisplay',
  templateUrl: './newsdisplay.component.html',
  styleUrls: ['./newsdisplay.component.css']
})
export class NewsdisplayComponent implements OnInit {

  news:any;
  articles:any;
  constructor(private http:HttpClient,private newsService:NewsDataService){}

  ngOnInit(): void {
    this.newsService.getJson().subscribe(data => {
      this.news = data;
      this.articles=this.news.articles;
    });
  }

  clickedOnArticle(article:any){
    window.location.href = article.url;
  }

}
