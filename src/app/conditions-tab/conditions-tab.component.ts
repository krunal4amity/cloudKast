import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditions-tab',
  templateUrl: './conditions-tab.component.html',
  styleUrls: ['./conditions-tab.component.css']
})
export class ConditionsTabComponent implements OnInit {

  tagCount=0;
  tagArray=[];
  constructor() { }

  ngOnInit() {
  }

  addParam(){
    this.tagCount+=1;
    this.tagArray.push(this.tagCount);
  }


}
