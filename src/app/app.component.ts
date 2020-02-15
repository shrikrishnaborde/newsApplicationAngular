import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsDataService } from './services/news/news-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  news:any;
  constructor(private http:HttpClient,private newsService:NewsDataService){}

  ngOnInit(): void {
    this.newsService.getJson().subscribe(data => {
      this.news = data;
      console.log(this.news);
    });
  }
  
  title = 'news-app';
}
