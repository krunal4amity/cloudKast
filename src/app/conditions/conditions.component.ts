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
  isCopyReady=false;
  constructor(public result:JsonResultService, public util:UsefulUtilsService) { }

  ngOnInit() {
  }

  addCondition(){
    this.tagCount+=1;
    this.tagArray.push(this.tagCount);
    //console.log(this.tagCount);
    //console.log(this.tagArray);
  }

  onRemove(value){
    this.isPresent=false;
    if(value.resourceName)    this.result.jsonresult.Conditions[value.resourceName]=undefined;
  }

  onDone(value){
    if (this.result.jsonresult.Conditions==undefined){
      this.result.jsonresult.Conditions={}
    }
    this.result.jsonresult.Conditions[value.resourceName]=this.util.getProperJson(value.func);
    this.isCopyReady=true;
  }

  onReset(){
    this.isPresent=false;
    this.tagCount=0;
    this.tagArray=[];
    this.result.jsonresult.Conditions={}
  }

  copyToClipboard(value){
    var textArea= document.createElement("textarea");
    textArea.value = JSON.stringify(this.result.jsonresult.Conditions[value.resourceName]);
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  }

  copyToYamlClipboard(value){
    this.util.copyToClipboardYaml(this.result.jsonresult.Conditions[value.resourceName]);
  }

}
