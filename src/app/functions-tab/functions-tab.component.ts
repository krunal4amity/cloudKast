import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-functions-tab',
  templateUrl: './functions-tab.component.html',
  styleUrls: ['./functions-tab.component.css']
})
export class FunctionsTabComponent implements OnInit {

  tagCount=1;
  tagArray=[1];

  ngOnInit() {
  }

  addParam(){
    this.tagCount+=1;
    this.tagArray.push(this.tagCount);
  }
}
