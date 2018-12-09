import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ca-crumbs',
  templateUrl: './crumbs.component.html',
  styleUrls: ['./crumbs.component.css']
})
export class CrumbsComponent implements OnInit {
  segments;
  firstSegment;
  lastSegment;
  constructor(private route: Router) { }

  ngOnInit() {
    let url = this.route.url;
    this.segments = url.split('/');
        
  }

}
