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
  fnjoinArray=[];
  fnjoinCount=0;
  fnselectArray=[];
  fnselectCount=0;
  fnandArray=[];
  fnandCount=0;
  fnimportvalueTip="The intrinsic function Fn::ImportValue returns the value of an output exported by another stack.You can use the following functions in the Fn::ImportValue function. The value of these functions can't depend on a resource. Fn::Base64, Fn::FindInMap, Fn::If, Fn::Join, Fn:Select, Fn::Split, Fn::Sub, Ref";
  fnjoinTip="e.g. The following example returns: a:b:c. \"Fn::Join\" : [ \":\", [ \"a\", \"b\", \"c\" ] ]. For the Fn::Join delimiter, you cannot use any functions. You must specify a string value. For the Fn::Join list of values, you can use the following functions: Fn::Base64, Fn::FindInMap, Fn::GetAtt, Fn::GetAZs, Fn::If, Fn::ImportValue, Fn::Join, Fn::Split, Fn::Select, Fn::Sub, Ref";
  fnselectTip="e.g. The following example returns: 'grapes'. { \"Fn::Select\" : [ \"1\", [ \"apples\", \"grapes\", \"oranges\", \"mangoes\" ]]}. For the Fn::Select index value, you can use the Ref and Fn::FindInMap functions. For the Fn::Select list of objects, you can use the following functions: Fn::FindInMap, Fn::GetAtt, Fn::GetAZs, Fn::If, Fn::Split, Ref";
  fnsplitTip="e.g. The following example splits a string at each vertical bar (|). The function returns [\"a\", \"b\", \"c\"]. { \"Fn::Split\" : [ \"|\" , \"a|b|c\" ] }. If you split a string with consecutive delimiters, the resulting list will include an empty string. For the Fn::Split delimiter, you cannot use any functions. You must specify a string value. For the Fn::Split list of values, you can use the following functions: Fn::Base64,Fn::FindInMap,Fn::GetAtt,Fn::GetAZs,Fn::If,Fn::ImportValue,Fn::Join,Fn::Select,Fn::Sub,Ref"
  fnsubTip="The intrinsic function Fn::Sub substitutes variables in an input string with values that you specify. e.g. { \"Fn::Sub\": [ \"www.${Domain}\", { \"Domain\": {\"Ref\" : \"RootDomainName\" }} ]}. For the String parameter, you cannot use any functions. You must specify a string value.For the VarName and VarValue parameters, you can use the following functions: Fn::Base64, Fn::FindInMap, Fn::GetAtt,Fn::GetAZs,Fn::If,Fn::ImportValue,Fn::Join,Fn::Select,Ref"

  
  ngOnInit() {
  }

  addFnjoinElement(){
    this.fnjoinCount+=1;
    this.fnjoinArray.push(this.fnjoinCount);
  }

  addFnselectElement(){
    this.fnselectCount+=1;
    this.fnselectArray.push(this.fnselectCount);
  }

  addFnAndElement(){
    this.fnandCount+=1;
    this.fnandArray.push(this.fnandCount);
  }

  getKeys(val){
    console.log(Object.keys(val))
    return Object.keys(val);
  }

  retReflist(){
    var paramarray=Object.keys(this.jsonresult.jsonresult.Parameters);
    var pseudo=["AWS::Partition", "AWS::Region", "AWS::StackId", "AWS::StackName", "AWS::URLSuffix","AWS::AccountId","AWS::NoValue"];
    return Object.keys(this.jsonresult.jsonresult.Resources).concat(paramarray).concat(pseudo);
    //return pseudo;
  }

  retMaps(){
    return Object.keys(this.jsonresult.jsonresult.Mappings);
  }

  onReset(){
    this.fnjoinArray=[];
    this.fnjoinCount=0;
    this.fnselectArray=[];
    this.fnselectCount=0;
    this.fnandArray=[];
    this.fnandCount=0;
    //this.funcobj={};
  }

  retResource(){
    //console.log(Object.keys(this.jsonresult.jsonresult.Resources))
    return (Object.keys(this.jsonresult.jsonresult.Resources).length!=0)?Object.keys(this.jsonresult.jsonresult.Resources):[];
  }

  retResProps(rname){
    //return Object.keys(this.jsonresult.jsonresult.Resources[rname]);
    return (Object.keys(this.jsonresult.jsonresult.Resources[rname]["Properties"]).length!=0)?Object.keys(this.jsonresult.jsonresult.Resources[rname]["Properties"]):[];
  }

  retArray(num){
    var joinarr = []
    for(var i=0;i<num;i=i+1){
      joinarr.push(i);
    }
    return joinarr;
  }

  copyToClipboard(){
    var textArea= document.createElement("textarea");
    textArea.value = JSON.stringify(this.funcobj);
    document.body.appendChild(textArea);
    //textArea.focus();
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
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
        var joinArr = [];
        var joinElements=[];
        this.fnjoinArray.forEach((i)=>{
          joinElements.push(this.utility.getProperJson( value[`element${i}`]));
        });
        joinArr.push(value.delim);
        joinArr.push(joinElements);
        this.funcobj={
          "Fn::Join": this.utility.getProperJson(joinArr)
        }
        break;
      case "FnSelect":
        var selectArr=[];
        var selectElements=[];
        this.fnselectArray.forEach((i)=>{
          selectElements.push(this.utility.getProperJson(value[`element${i}`]));
        });
        selectArr.push(value.index);
        selectArr.push(selectElements);
        this.funcobj={
          "Fn::Select": this.utility.getProperJson(selectArr)
        }
        break;        

      case "FnSplit":
        var splitArr=[];
        splitArr.push(value.split);
        splitArr.push(value.splitvalue);
        this.funcobj={
          "Fn::Split": this.utility.getProperJson(splitArr)
        }
        break;    

      case "FnSub":
        var subArr=[];
        subArr.push(value.sub);
        subArr.push(this.utility.getProperJson(value.subvalue))
        this.funcobj={
          "Fn::Sub": this.utility.getProperJson(subArr)
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
        
      case "FnAnd":
          var andArray=[];
          this.fnandArray.forEach((i)=>{
            andArray.push(this.utility.getProperJson(value[`element${i}`]));
          });
          this.funcobj={
            "Fn::And": this.utility.getProperJson(andArray)
          }
        break;
      
      case "FnEquals":
          var equalArray=[];
          equalArray.push(value.equal1);
          equalArray.push(value.equal2);
          this.funcobj={
            "Fn:Equals":this.utility.getProperJson(equalArray)
          }
        break;
      
      case "FnIf":
          var ifArray=[];
          ifArray.push(value.ifcon);
          ifArray.push(this.utility.getProperJson(value.iftrue));
          ifArray.push(this.utility.getProperJson(value.iffalse));
          this.funcobj={
            "Fn::If":this.utility.getProperJson(ifArray)
          }
        break;
      
      case "FnNot":
          var fnnotArray=[];
          fnnotArray.push(this.utility.getProperJson(value.fnnot));
          this.funcobj={
            "Fn::Not":this.utility.getProperJson(fnnotArray)
          };
          
        break;

      case "FnOr":
          var fnorarray=[];
          fnorarray.push(this.utility.getProperJson(value.fnor));
          this.funcobj={
            "Fn::Or":this.utility.getProperJson(fnorarray)
          }
        break;
  
      default:
        break;
    }
  }


}
