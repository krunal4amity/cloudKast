import { Component, OnInit } from '@angular/core';
import { JsonResultService } from '../json-result.service';
import { UsefulUtilsService } from '../useful-utils.service';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent implements OnInit {
  tagCount=0;
  tagArray=[];
  isPresent=true;
  constructor(public result:JsonResultService, public util:UsefulUtilsService) { }

  ngOnInit() {
  }

  addCondition(){
    this.tagCount+=1;
    this.tagArray.push(this.tagCount);
    console.log(this.tagCount);
    console.log(this.tagArray);
  }

  onRemove(value){
    this.isPresent=false;
    //this.tagCount-=1;
    //this.tagArray.splice(value.index-1, 1)
    if(value.resourceName)    this.result.jsonresult.Conditions[value.resourceName]=undefined;
  }

  onDone(value){
    console.log(value);
    this.result.jsonresult.Conditions[value.resourceName]=this.util.getProperJson(value.func)
  }

  onReset(){
    this.isPresent=false;
    this.tagCount=0;
    this.tagArray=[];
    this.result.jsonresult.Conditions={}
  }


}
