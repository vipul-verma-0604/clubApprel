import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'ca-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }

  onClick(e) {    
    if(e.target.href.indexOf('config') > -1) {
      this.commonService.link.next('config');
    } else if(e.target.href.indexOf('campaign') > -1) {
      this.commonService.link.next('campaign');
    }
  }

}
