import { Component, OnInit } from '@angular/core';
import { JsonResultService } from '../json-result.service';
import { UsefulUtilsService } from '../useful-utils.service';

@Component({
  selector: 'app-mappings',
  templateUrl: './mappings.component.html',
  styleUrls: ['./mappings.component.css']
})
export class MappingsComponent implements OnInit {

  tagCount=0;
  tagArray=[];
  keyCount=0;
  keyArray=[];
  valueCount=0;
  valueArray=[];
  isPresent=true;
  isCopyReady=false
  constructor(public result:JsonResultService, public util:UsefulUtilsService) { }

  ngOnInit() {
  }

  addMapping(){
    this.tagCount+=1;
    this.tagArray.push(this.tagCount);
  }

  addKeying(){
    this.keyCount+=1;
    this.keyArray.push(this.keyCount);
  }

  addValue(){
    this.valueCount+=1;
    this.valueArray.push(this.valueCount);
  }

  onRemove(value){
    this.isPresent=false;
    if(value.resourceName)    this.result.jsonresult.Mappings[value.resourceName]=undefined;
  }

  onDone(val){
    console.log(val);
    this.result.jsonresult.Mappings[val.resourceName]={}
    //this.result.jsonresult.Mappings[val.resourceName][val.key]={};


    for(var i=1;i<=this.keyArray.length;i++){
      var curKey=val[`key${i}`];
      var valObj={}  
      //var curVal=val[`value${i}`];
              

      for(var j=1;j<=this.valueArray.length;j++){
        
        var curName=val[`name${i}${j}`];
        var curVal=val[`value${i}${j}`];
        if(curName.length==0 || curVal.length==0){
          valObj[curName]=undefined
        }
        else{
          if(curVal.includes(",")){
            valObj[curName]=curVal.split(",");
          }
          else{
            valObj[curName]=curVal;
          }
        }
        if(j==this.valueArray.length){
          this.result.jsonresult.Mappings[val.resourceName][curKey]= valObj;
        }
      }
    }
    this.isCopyReady=true;
  }

  copyToClipboard(value){
    var textArea= document.createElement("textarea");
    textArea.value = JSON.stringify(this.result.jsonresult.Mappings[value.resourceName]);
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  }
}
