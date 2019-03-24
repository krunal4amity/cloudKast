import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parameters-tab',
  templateUrl: './parameters-tab.component.html',
  styleUrls: ['./parameters-tab.component.css']
})
export class ParametersTabComponent implements OnInit {

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
