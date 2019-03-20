import { Component, OnInit } from '@angular/core';
import { JsonResultService } from '../json-result.service';
import { UsefulUtilsService } from '../useful-utils.service';
import {KeysPipePipe} from '../keys-pipe.pipe'

@Component({
  selector: 'app-intrinsic-functions',
  templateUrl: './intrinsic-functions.component.html',
  styleUrls: ['./intrinsic-functions.component.css']
})
export class IntrinsicFunctionsComponent implements OnInit {

  
  constructor(public jsonresult:JsonResultService, public utility:UsefulUtilsService) { }

  funcobj={};
  
  ngOnInit() {
  }

  getKeys(val){
    console.log(Object.keys(val))
    return Object.keys(val);
  }

  retReflist(){
    var paramarray=Object.keys(this.jsonresult.jsonresult.Parameters);
    console.log(paramarray);
    return Object.keys(this.jsonresult.jsonresult.Resources).concat(paramarray);
  }

  retMaps(){
    return Object.keys(this.jsonresult.jsonresult.Mappings);
  }

  retResource(){
    //console.log(Object.keys(this.jsonresult.jsonresult.Resources))
    return (Object.keys(this.jsonresult.jsonresult.Resources).length!=0)?Object.keys(this.jsonresult.jsonresult.Resources).length!=0:[];
  }

  retResProps(rname){
    //return Object.keys(this.jsonresult.jsonresult.Resources[rname]);
    return (Object.keys(this.jsonresult.jsonresult.Resources[rname]).length!=0)?Object.keys(this.jsonresult.jsonresult.Resources[rname]).length!=0:[];
  }

  retArray(num){
    var joinarr = []
    for(var i=0;i<num;i=i+1){
      joinarr.push(i);
    }
    return joinarr;
  }

  doFunc(value){
    switch (value.funcname) {
      case "Ref":
        this.funcobj={
          "Ref":value.refvalue
        }
        break;
      case "FnBase64":
        this.funcobj={
          "Fn::Base64":value.b64value
        }
        break;
      case "FnCidr":
        this.funcobj={
          "Fn:Cidr":[value.ipblock, value.count, value.cidrbits]
        }
        break;
      case "FnFindInMap":
        //var val2 = (value.topkey as String).includes("::")?JSON.parse(value.topkey):value.topkey;
        //var val3 = (value.secondkey as String).includes("::")?JSON.parse(value.secondkey):value.secondkey;
        this.funcobj={
          "Fn::FindInMap":[value.maps,this.utility.getProperJson(value.topkey),this.utility.getProperJson(value.secondkey)]
        }
        break;
      case "FnGetAtt":
        this.funcobj={
          "Fn::GetAtt":[value.resname, value.propname]
        }
        break;
      case "FnGetAZs":
        this.funcobj={
          "Fn:GetAZs":this.utility.getProperJson(value.zone)
        }
        break;
      case "FnImportValue":
        this.funcobj={
          "Fn::ImportValue":this.utility.getProperJson(value.importval)
        }
        break;
      case "FnJoin":
        this.funcobj={
          "Fn::Join": this.utility.getProperJson(value.delim)
        }
        break;
      case "FnSelect":
        this.funcobj={
          "Fn::Select": this.utility.getProperJson(value.sel)
        }
        break;        
      case "FnSplit":
        this.funcobj={
          "Fn::Split": this.utility.getProperJson(value.split)
        }
        break;                
      case "FnSub":
        this.funcobj={
          "Fn::Sub": this.utility.getProperJson(value.sub)
        }
        break;                
      case "FnTransform":
        this.funcobj={
          "Fn::Transform": {
            "Name":value.traname,
            "Parameters":this.utility.getProperJson(value.trapara)
          } 
        }
        break;                        
      default:
        break;
    }
  }


}
