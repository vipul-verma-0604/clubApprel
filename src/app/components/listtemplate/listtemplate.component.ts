import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'ca-listtemplate',
  templateUrl: './listtemplate.component.html',
  styleUrls: ['./listtemplate.component.css']
})
export class ListtemplateComponent implements OnInit {
  list;
  constructor(private dataService: DataService, private common: CommonService) { }
  s;
  status;

  ngOnInit() {
    this.list = this.dataService.getAllTemplate();    
  }

  onChange(e, i) {
    if(e == false) {
      this.list[i].status = 'InActive'
    } 
    
    if(e == true) {
      this.list[i].status = 'Active'
    } 
  }
}
