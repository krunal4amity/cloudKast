import { Component, OnInit } from '@angular/core';
import { JsonResultService } from '../json-result.service';
import { UsefulUtilsService } from '../useful-utils.service';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {

  tagCount=0;
  tagArray=[];
  isPresent=true;
  isCopyReady=false;
  regexTooltip="Do not add an additional backslash to any backslash characters in your regular expression. Escape characters will be automatically added. E.g. if you need to include a \\d in your regular expression, leave it as \\d."
  paramTypes=["String","Number","List<Number>","CommaDelimitedList","AWS::EC2::AvailabilityZone::Name","AWS::EC2::Image::Id","AWS::EC2::Instance::Id","AWS::EC2::KeyPair::KeyName","AWS::EC2::SecurityGroup::GroupName","AWS::EC2::SecurityGroup::Id","AWS::EC2::Subnet::Id","AWS::EC2::Volume::Id","AWS::EC2::VPC::Id","AWS::Route53::HostedZone::Id","List<AWS::EC2::AvailabilityZone::Name>","List<AWS::EC2::Image::Id>","List<AWS::EC2::Instance::Id>","List<AWS::EC2::SecurityGroup::GroupName>","List<AWS::EC2::SecurityGroup::Id>","List<AWS::EC2::Subnet::Id>","List<AWS::EC2::Volume::Id>","List<AWS::EC2::VPC::Id>","List<AWS::Route53::HostedZone::Id>","AWS::SSM::Parameter::Name","AWS::SSM::Parameter::Value<String>","AWS::SSM::Parameter::Value<List<String>>","AWS::SSM::Parameter::Value<CommaDelimitedList>", "AWS::SSM::Parameter::Value<AWS::EC2::AvailabilityZone::Name>", "AWS::SSM::Parameter::Value<AWS::EC2::Image::Id>", "AWS::SSM::Parameter::Value<AWS::EC2::Instance::Id>","AWS::SSM::Parameter::Value<AWS::EC2::KeyPair::KeyName>","AWS::SSM::Parameter::Value<AWS::EC2::SecurityGroup::GroupName>","AWS::SSM::Parameter::Value<AWS::EC2::SecurityGroup::Id>","AWS::SSM::Parameter::Value<AWS::EC2::Subnet::Id>","AWS::SSM::Parameter::Value<AWS::EC2::Volume::Id>","AWS::SSM::Parameter::Value<AWS::EC2::VPC::Id>","AWS::SSM::Parameter::Value<AWS::Route53::HostedZone::Id>","AWS::SSM::Parameter::Value<List<AWS::EC2::AvailabilityZone::Name>>","AWS::SSM::Parameter::Value<List<AWS::EC2::Image::Id>>","AWS::SSM::Parameter::Value<List<AWS::EC2::Instance::Id>>","AWS::SSM::Parameter::Value<List<AWS::EC2::SecurityGroup::GroupName>>","AWS::SSM::Parameter::Value<List<AWS::EC2::SecurityGroup::Id>>","AWS::SSM::Parameter::Value<List<AWS::EC2::Subnet::Id>>","AWS::SSM::Parameter::Value<List<AWS::EC2::Volume::Id>>","AWS::SSM::Parameter::Value<List<AWS::EC2::VPC::Id>>","AWS::SSM::Parameter::Value<List<AWS::Route53::HostedZone::Id>>"]


  resProp={
    //"Type":"String | Number | List<Number> | CommaDelimitedList | AWS-Specific Parameter Types| SSM Parameter Types. AWS-specific parameter types are helpful in catching invalid values at the start of creating or updating a stack. Supported AWS-Specific Parameter Types: AWS::EC2::AvailabilityZone::Name, AWS::EC2::Image::Id, AWS::EC2::Instance::Id, AWS::EC2::KeyPair::KeyName, AWS::EC2::SecurityGroup::GroupName, AWS::EC2::SecurityGroup::Id, AWS::EC2::Subnet::Id, AWS::EC2::Volume::Id, AWS::EC2::VPC::Id, AWS::Route53::HostedZone::Id, List<AWS::EC2::AvailabilityZone::Name>, List<AWS::EC2::Image::Id>, List<AWS::EC2::Instance::Id>, List<AWS::EC2::SecurityGroup::GroupName>, List<AWS::EC2::SecurityGroup::Id>, List<AWS::EC2::Subnet::Id>, List<AWS::EC2::Volume::Id>, List<AWS::EC2::VPC::Id>, List<AWS::Route53::HostedZone::Id>. SSM parameter types correspond to existing parameters in Systems Manager Parameter Store. You specify a Systems Manager parameter key as the value of the SSM parameter, and AWS CloudFormation fetches the latest value from Parameter Store to use for the stack. Supported SSM Parameter Types: AWS::SSM::Parameter::Name, AWS::SSM::Parameter::Value<String>, AWS::SSM::Parameter::Value<List<String>> or AWS::SSM::Parameter::Value<CommaDelimitedList>, AWS::SSM::Parameter::Value<AWS-specific parameter type>, AWS::SSM::Parameter::Value<List<AWS-specific parameter type>> ",
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
  

  constructor(public result:JsonResultService, public util:UsefulUtilsService) { }

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

  copyToClipboard(value){
    var textArea= document.createElement("textarea");
    textArea.value = JSON.stringify(this.result.jsonresult.Parameters[value.resourceName]);
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  }

  copyToClipboardYaml(value){
    this.util.copyToClipboardYaml(this.result.jsonresult.Parameters[value.resourceName])
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
    };
    this.isCopyReady=true;
  }
}
