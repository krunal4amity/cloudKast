import { Component, OnInit } from '@angular/core';
import { ResourceDataService } from '../resource-data.service'


@Component({
  selector: 'app-object-help',
  templateUrl: './object-help.component.html',
  styleUrls: ['./object-help.component.css']
})
export class ObjectHelpComponent implements OnInit {

  //mainObj:Object;
  resKeys:String[];
  propKeys:String[];
  propSent=false;
  selProp:Object;

  constructor(public mainObj:ResourceDataService){
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
  this.selProp=(Object.values(this.mainObj.comProp)[0])[value.resname];
  console.log(value);
  console.log(this.selProp)
  this.propSent=true;

}

onSubmit(value){
  console.log(value);
  this.getLooper(this.selProp,value,this.myobj);
}

getLooper(loopval,formval,myobj){
  this.getKeys(loopval).forEach((j)=>{
    if(typeof(loopval[j])=="string"){
      myobj[j]=formval[j];
    }
    else{
      if(Array.isArray(loopval[j])){
        myobj[j]=(formval[j] as String).split("|");
      }
      else{
        myobj[j]={}
        this.getLooper(loopval[j],formval,myobj[j])
      }
    }

  })
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

}
