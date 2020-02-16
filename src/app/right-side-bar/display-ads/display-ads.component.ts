import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-ads',
  templateUrl: './display-ads.component.html',
  styleUrls: ['./display-ads.component.css']
})
export class DisplayAdsComponent implements OnInit {

  ads:any[];

  constructor() { }

  ngOnInit() {
    this.ads=[
    {
      name:'ad1'
    },
    {
      name:'ad2'
    },
    {
      name:'ad3'
    },
    ];
  }

}
