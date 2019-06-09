import { Component, OnInit } from '@angular/core';
import { JsonResultService } from '../json-result.service';
import { UsefulUtilsService } from '../useful-utils.service';

@Component({
  selector: 'app-transform',
  templateUrl: './transform.component.html',
  styleUrls: ['./transform.component.css']
})
export class TransformComponent implements OnInit {

  transformInfo="Provide a list of Strings separated by commas. You can declare one or more macros within a template. AWS CloudFormation executes macros in the order that they are specified. When you create a change set, AWS CloudFormation generates a change set that includes the processed template content. You can then review the changes and execute the change set. AWS CloudFormation also supports the AWS::Serverless and AWS::Include transforms, which are macros hosted by AWS CloudFormation. The AWS::Serverless transform specifies the version of the AWS Serverless Application Model (AWS SAM) to use e.g. AWS::Serverless-2016-10-31. This model defines the AWS SAM syntax that you can use and how AWS CloudFormation processes it. The AWS::Include transform works with template snippets that are stored separately from the main AWS CloudFormation template, You can insert these snippets into your main template using it."
  constructor(public jsonresult:JsonResultService, public util:UsefulUtilsService ) { }

  ngOnInit() {
  }

  onDone(value){
    this.jsonresult.jsonresult.Transform= (value.transform as String).split(",");
  }

  onRemove(){
    this.jsonresult.jsonresult.Transform=undefined
  }

}
