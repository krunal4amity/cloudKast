import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mappings-tab',
  templateUrl: './mappings-tab.component.html',
  styleUrls: ['./mappings-tab.component.css']
})
export class MappingsTabComponent implements OnInit {

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
