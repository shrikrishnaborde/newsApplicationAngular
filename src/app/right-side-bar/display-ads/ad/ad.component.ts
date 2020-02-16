import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.css']
})
export class AdComponent implements OnInit {

  @Input() ad:any;

  constructor() { }

  ngOnInit() {
  }

}
