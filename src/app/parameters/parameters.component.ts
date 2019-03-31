import { Component, OnInit } from '@angular/core';
import { JsonResultService } from '../json-result.service';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {

  tagCount=0;
  tagArray=[];
  isPresent=true;


  resProp={
    "Type":"String | Number | List<Number> | CommaDelimitedList | AWS-Specific Parameter Types| SSM Parameter Types.",
    "AllowedPattern":"A regular expression that represents the patterns to allow for String types.",
    "AllowedValues":"An array(comma separated) containing the list of values allowed for the parameter.",
    "ConstraintDescription":"A string that explains a constraint when the constraint is violated.",
    "Default":"A value of the appropriate type for the template to use if no value is specified when a stack is created.",
    "Description":"Description",
    "MaxLength":"MaxLength",
    "MaxValue":"MaxValue",
    "MinLength":"MinLength",
    "MinValue":"MinValue",
    "NoEcho":"Whether to mask the parameter value when a call is made that describes the stack. If you set the value to true, the parameter value is masked with asterisks (*****)."
  };
  resPropkeys=Object.keys(this.resProp);
  

  constructor(public result:JsonResultService) { }

  ngOnInit() {
  }

  addParam(){
    this.tagCount+=1;
    this.tagArray.push(this.tagCount);
  }

  onRemove(value){
    this.isPresent=false;
    if(value.resourceName)    this.result.jsonresult.Parameters[value.resourceName]=undefined;
  }

  fixRegex(value){
    return decodeURI(value);
  }

  
  onDone(value){
    console.log(value);
    //this.result.jsonresult.Parameters={};
    this.result.jsonresult.Parameters[value.resourceName]={
      "Type":value.Type?value.Type:undefined,
      "AllowedPattern":value.AllowedPattern?value.AllowedPattern:undefined,
      "AllowedValues":value.AllowedValues?(value.AllowedValues as String).split(","):undefined,
      "ConstraintDescription":value.ConstraintDescription?value.ConstraintDescription:undefined,
      "Default":value.Default?value.Default:undefined,
      "Description":value.Description?value.Description:undefined,
      "MaxLength":value.MaxLength?value.MaxLength:undefined,
      "MaxValue":value.MaxValue?value.MaxValue:undefined,
      "MinLength":value.MinLength?value.MinLength:undefined,
      "MinValue":value.MinValue?value.MinValue:undefined,
      "NoEcho":value.NoEcho?value.NoEcho:undefined
    }
  }
}
