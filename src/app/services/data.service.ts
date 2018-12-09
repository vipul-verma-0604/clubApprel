import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  templateArr = [
    {
      tempId :'123124',
      tempName: 'Lorem Ipsum',
      tempType: 'Email',
      createOn: '12-09-18',
      status: 'Active'
    },
    {
      tempId :'123124',
      tempName: 'Lorem Ipsum',
      tempType: 'Email',
      createOn: '12-09-18',
      status: 'InActive'
    }
  ]

  getAllTemplate() {
    return this.templateArr;
  }

}
