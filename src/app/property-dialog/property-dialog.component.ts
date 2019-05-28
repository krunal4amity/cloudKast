import { Component, OnInit, Input } from '@angular/core';
import { ResourceDataService } from '../resource-data.service';
import { UsefulUtilsService } from '../useful-utils.service';

@Component({
  selector: 'app-property-dialog',
  templateUrl: './property-dialog.component.html',
  styleUrls: ['./property-dialog.component.css']
})
export class PropertyDialogComponent implements OnInit {

  resKeys:String[];
  propKeys:String[];
  reqColor="red";
  conColor="darkorange";
  propSent=false;
  //prophelp="Properties that include '*' in the tooltip are 'required' properties. Properties that include '**' in the tooltip are 'conditional' properties. Properties that include none of these in the tooltip are optional properties. Tooltips also indicate the type of property e.g. string, boolean, list of strings, list of custom object. Properties that are of type array denoated by 'List of strings' or 'List of <custom type>' in the tooltip. Pleaes click on the 'plus' sign above to populate another 'Property Dealer' widget to generate values of custom objects to be inserted as a value in another property. List of strings are to be entered as is separated by commas. List of custom types are to be enterred within sqaure brackets. Use the function widget below to generate function values."
  prophelp="Tooltip guide: Required properties(starting with *), Conditional properties(starting with **). \n A property of type array should start with 'List of <string|<object>>' \n Enter list of items delimited by semicolon(;) for a property of type array. \nUse the 'plus' icon above to open an additional property dealer widget. Use the function widget below to generate functions. "
  selProp:Object;
  isCopyReady:Boolean=false;
  @Input('curRes') curRes:string;

  constructor(public mainObj:ResourceDataService, public util:UsefulUtilsService){
    //this.resKeys=Object.keys(this.mainObj.comProp);
    //this.propKeys=Object.keys(Object.values(this.mainObj.comProp)[0])
  }




  ngOnInit() {
  }


  myobj={}
  nonStringOutput={};


getKeys(value){
  //return Object.keys(Object.values(value)[0])
  return (Object.keys(value)).length==0?[]:Object.keys(value);
}

onDone(value){
  //this.selProp=(Object.values(this.mainObj.comProp)[0])[value.resname];
  this.selProp=this.getSelProp(value.resname);
  //console.log(value);
  //console.log(this.selProp)
  this.propSent=true;
}

isRequired(value){
  if(this.getTypeof(value)=='object'){
    if(this.isArray(value)){
      if(value[0].includes("*")){
        if(value[0].startsWith("**")){
          return {"color":this.conColor, "required":false};
        }else{
          return {"color":this.reqColor, "required":true};
        }
      }
    }
    else{
      if(value['info'].includes("*")){
        if(value['info'].startsWith("**")){
          return {"color":this.conColor, "required": false};
        }else{
          return {"color":this.reqColor, "required":true};
        }
      }
    }
  }
  else{
    if(value.includes("*")){
      if(value.startsWith("**")){
        return {"color":this.conColor, "required": false};
      }else{
        return {"color":this.reqColor, "required":true};
      }
    }
  }
  return {"color":"grey", "required": false};
}

getSelProp(value){
  var a1=Object.values(this.mainObj.comProp);
  var a2:Object;
  a1.forEach((i)=>{
    if(i.hasOwnProperty(value)){
      a2=i[value];
    }
  })
  //console.log(a2);
  return a2;
}

onSubmit(value){
  //console.log(value);
  this.getLooper(this.selProp,value,this.myobj);
  this.isCopyReady=true;
}

getLooper(loopval,formval,myobj){
  this.getKeys(loopval).forEach((j)=>{
    if(typeof(loopval[j])=="string"){
      //myobj[j]=formval[j];
      myobj[j]=this.util.getProperJson(formval[j]);
    }
    else{
      if(Array.isArray(loopval[j])){
        //myobj[j]=(formval[j] as String).split("|");
        myobj[j]=this.util.getSemicolonArray(formval[j]);
      }
      else{
        myobj[j]={}
        this.getLooper(loopval[j],formval,myobj[j])
      }
    }

  })
}

onReset(){
  this.propSent=false;
  this.isCopyReady=false;
  this.myobj={};
}

isArray(value){
  return Array.isArray(value);
}

getTypeof(val){
  return typeof(val);
}

getDepth(obj){
  var level = 1;
  var key;
  for(key in obj) {
      if (!obj.hasOwnProperty(key)) continue;

      if(typeof obj[key] == 'object'){
          var depth = this.getDepth(obj[key]) + 1;
          level = Math.max(depth, level);
      }
  }
  return level;
}

copyToClipboard(){
  var textArea= document.createElement("textarea");
  textArea.value = JSON.stringify(this.myobj);
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  this.myobj={};
}

}
