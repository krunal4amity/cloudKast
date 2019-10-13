import { Component, OnInit } from '@angular/core';
import { JsonResultService } from '../json-result.service';
import { UsefulUtilsService } from '../useful-utils.service';

@Component({
  selector: 'app-outputs',
  templateUrl: './outputs.component.html',
  styleUrls: ['./outputs.component.css']
})
export class OutputsComponent implements OnInit {

  tagCount=0;
  tagArray=[];
  isPresent=true;
  isCopyReady=false;
  resProp={
    "Description" : "Information about the value",
    "Value" : "Value to return",
    "Export" : {"Name" : "Value to export"}
  };
  constructor(public result:JsonResultService, public util:UsefulUtilsService) { }

  ngOnInit() {
  }

  addOutput(){
    this.tagCount+=1;
    this.tagArray.push(this.tagCount);
  }

  onRemove(value){
    this.isPresent=false;
    if(value.resourceName)    this.result.jsonresult.Outputs[value.resourceName]=undefined;
  }

  onDone(value){
    if (this.result.jsonresult.Outputs==undefined){
      this.result.jsonresult.Outputs={}
    }
    this.result.jsonresult.Outputs[value.resourceName]={
      "Description":value.desc,
      "Value":this.util.getProperJson(value.value),
      "Export":{
        "Name":this.util.getProperJson(value.export)
      },
      "Condition":this.util.getProperJson(value.Condition)
    }
    this.isCopyReady=true;
  }

  copyToClipboard(value){
    var textArea= document.createElement("textarea");
    textArea.value = JSON.stringify(this.result.jsonresult.Outputs[value.resourceName]);
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  }

  copyToYamlClipboard(value){
    this.util.copyToClipboardYaml(this.result.jsonresult.Outputs[value.resourceName]);
  }
}
