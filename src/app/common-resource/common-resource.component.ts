import { Component, OnInit, Input } from '@angular/core';
import { GenericResource } from '../resource-view/generic-resource';
import { JsonResultService } from '../json-result.service';
import { UsefulUtilsService } from '../useful-utils.service';
import {RESOURCE_DATA,ResourceSyntax} from '../resource-view/resource-list';

@Component({
  selector: 'app-common-resource',
  templateUrl: './common-resource.component.html',
  styleUrls: ['./common-resource.component.css']
})
export class CommonResourceComponent implements OnInit {

  
  @Input('isTagged')   isTagged:Boolean;
  @Input('myresource')  resObject:ResourceSyntax;
  serviceSyntax:String;
  currentService:String;
  currentResource:String;
  resPropkeys;

  constructor(public result:JsonResultService, public utility:UsefulUtilsService ){
  }

  ngOnInit(){
    //console.log(JSON.stringify(this.resObject));
    this.resObject=this.utility.addCommonProperties(this.resObject);
    this.serviceSyntax=(this.resObject["Type"] as String);
    this.currentService=(this.resObject["Type"] as String).split("::")[1];
    this.currentResource=(this.resObject["Type"] as String).split("::")[2];
    this.resPropkeys=Object.keys(this.resObject["Properties"]);
  }

  tagCount=0;
  tagArray=[];
  isPresent=true;
  isCopyReady:Boolean = false;

  addTag(){
      this.tagCount+=1;
      this.tagArray.push(this.tagCount);
    }
  
  getTagArray(value){
      var tags=[];
      this.tagArray.forEach((i)=>{
      tags.push({
          "Key":value[`tagKey${i}`]?value[`tagKey${i}`]:undefined,
          "Value":value[`tagValue${i}`]?value[`tagValue${i}`]:undefined
      })
      });
      return tags.length==0?undefined:tags
  }

  isObjectEmpty(obj:Object){
      return Object.keys(obj).length === 0 && obj.constructor === Object?true:false;
  }

  getTypeOf(value){
    return typeof(value);
  }

  isArray(value){
    return Array.isArray(value);
  }

  isRequired(value){
    if(this.getTypeOf(value)=='object'){
      if(this.isArray(value)){
        if(value[0].includes("*")){
          if(value[0].startsWith("**")){
            return "accent";
          }else{
            return "warn";
          }
        }
      }
      else{
        if(value['info'].includes("*")){
          if(value['info'].startsWith("**")){
            return "accent";
          }else{
            return "warn";
          }
        }
      }
    }
    else{
      if(value.includes("*")){
        if(value.startsWith("**")){
          return "accent";
        }else{
          return "warn";
        }
      }
    }
    return "";
  }

  copyToClipboard(value){
    var textArea= document.createElement("textarea");
    textArea.value = JSON.stringify(this.result.jsonresult.Resources[value.resourceName]);
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  }

  onRemove(value){
      this.isPresent=false;
      for(var i=0;i<RESOURCE_DATA.length;i++){
        if(RESOURCE_DATA[i].servicename==this.currentService){
          var myresource=RESOURCE_DATA[i].subresource;
          for(var j=0;j<myresource.length;j++){
            if(myresource[j].resourcename==this.currentResource){
              myresource[j].resourcecount=myresource[j].resourcecount-1;
            }
          }
        }
      }
      this.result.jsonresult.Resources[value.resourceName]=undefined;
    }

  onDone(value){
      //console.log(value);
      this.isCopyReady=true;
      this.result.jsonresult.Resources[value.resourceName]={};
      this.result.jsonresult.Resources[value.resourceName]["Properties"]={}
      this.result.jsonresult.Resources[value.resourceName].Type=this.resObject["Type"];
      Object.keys(this.resObject["Properties"]).forEach((prop)=>{
          if(typeof(this.resObject["Properties"][prop])=="object"){
              if(Array.isArray(this.resObject["Properties"][prop])){
                this.result.jsonresult.Resources[value.resourceName]["Properties"][prop]=this.utility.getArray(value[prop]);
              }
              else {
                  this.result.jsonresult.Resources[value.resourceName]["Properties"][prop]=this.utility.getProperJson(value[prop]);
              }            
          }else{
                  this.result.jsonresult.Resources[value.resourceName]["Properties"][prop]=this.utility.getProperJson(value[prop]);
          }
      })
      this.result.jsonresult.Resources[value.resourceName]["Properties"]["Tags"]=this.getTagArray(value);
   }
}
