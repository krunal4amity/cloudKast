import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outputs-tab',
  templateUrl: './outputs-tab.component.html',
  styleUrls: ['./outputs-tab.component.css']
})
export class OutputsTabComponent implements OnInit {

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
