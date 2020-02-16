import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  sections:any[];

  constructor() { }

  ngOnInit() {
    this.sections = [
      {
        'name':'India'
      },
      {
        'name':'World'
      },
      {
        'name':'Local'
      },
      {
        'name':'Business'
      },
      {
        'name':'Technology'
      },
      {
        'name':'Entertainment'
      },
      {
        'name':'Sports'
      },
      {
        'name':'Science'
      },
      {
        'name':'Health'
      }
    ];
  }

}
