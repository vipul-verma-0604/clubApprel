import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ca-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  link: string;
  constructor(private commonService: CommonService, private route: Router) {
    if(this.route.url.indexOf('config') > -1) {
      this.commonService.link.next('config');
    } else if(this.route.url.indexOf('campaign') > -1) {
      this.commonService.link.next('campaign');
    }
   }

  ngOnInit() {    
    this.commonService.link.subscribe(
      (val) => {
        this.link = val;
      }
    )
  }

}
