import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder} from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'ca-addtemplate',
  templateUrl: './addtemplate.component.html',
  styleUrls: ['./addtemplate.component.css']
})
export class AddtemplateComponent implements OnInit {
  addTemplate;
  constructor(private frmbuilder:FormBuilder, private data: DataService) {
      
   }

  ngOnInit() {
    this.addTemplate = this.frmbuilder.group({ 
      tempId:new FormControl(),
      tempType:new FormControl('Template Type'),
      tempName: new FormControl(),
      tempStatus: new FormControl('Select Status')   
    });
  }

  onAddTemplate(template) {
    //console.log(template.value);
    let tempId = template.value.tempId;
    let tempType = template.value.tempType;
    let tempName = template.value.tempName;
    let tempStatus = template.value.tempStatus;

    let obj = {
      tempId :tempId,
      tempName: tempName,
      tempType: tempType,
      createOn: '12-09-18',
      status: tempStatus
    }

    console.log(obj);
    
    this.data.templateArr.push(obj)
    //console.log(tempId);
    
  }

}
