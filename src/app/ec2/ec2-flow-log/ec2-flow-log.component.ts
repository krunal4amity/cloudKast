import { Component, OnInit } from '@angular/core';
import { GenericResource } from '../../resource-view/generic-resource';
import { ResourceSyntax } from '../../resource-view/resource-list';
import { JsonResultService } from '../../json-result.service';
import { UsefulUtilsService } from '../../useful-utils.service';

@Component({
  selector: 'app-ec2-flow-log',
  templateUrl: './ec2-flow-log.component.html',
  styleUrls: ['./ec2-flow-log.component.css']
})
export class Ec2FlowLogComponent implements OnInit {
  tagCount:number;
  tagArray;
  isPresent:boolean;
  serviceSyntax:String;
  curRes:GenericResource;

  constructor(public result:JsonResultService, public utility:UsefulUtilsService) {
    var resProp:ResourceSyntax={
      "Type" : "AWS::EC2::FlowLog",
      "Properties" : {
        "DeliverLogsPermissionArn" : "The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that permits Amazon EC2 to publish flow logs to a CloudWatch Logs log group in your account. If you specify LogDestinationType as s3, do not specify DeliverLogsPermissionArn or LogGroupName.",
        "LogDestination" : "If you specify LogDestinationType as s3, do not specify DeliverLogsPermissionArn or LogGroupName.",
        "LogDestinationType" : "Specifies the type of destination to which the flow log data is to be published. Flow log data can be published to CloudWatch Logs or Amazon S3. To publish flow log data to CloudWatch Logs, specify 'cloud-watch-logs'. To publish flow log data to Amazon S3, specify 's3'.",
        "LogGroupName" : "The name of a new or existing CloudWatch Logs log group where Amazon EC2 publishes your flow logs.",
        "ResourceId" : "*The ID of the subnet, network interface, or VPC for which you want to create a flow log.",
        "ResourceType" : "*The type of resource that you specified in the ResourceId property. For example, if you specified a VPC ID for the ResourceId property, specify VPC for this property.",
        "TrafficType" : "*The type of traffic to log. You can log traffic that the resource accepts or rejects, or all traffic. Valid Values: ACCEPT | REJECT | ALL"
      }
    }
    this.serviceSyntax=resProp.Type;
    this.curRes = new GenericResource(resProp, result, utility);
    this.curRes.resObject=resProp;
    this.tagCount=this.curRes.tagCount;
    this.tagArray=this.curRes.tagArray;
    this.isPresent=this.curRes.isPresent;
   }

  ngOnInit() {
  }

  getTypeOf(value){
    return typeof(value);
  }

  isArray(value){
    return Array.isArray(value);
  }

  isRequired(value){
    return this.curRes.isRequired(value);
  }

  addTag(){
    this.curRes.addTag();
  }

  onDone(value){
    this.curRes.onDone(value);
  }

  onRemove(value){
    this.isPresent=false;
    this.curRes.onRemove(value);
  }
}
