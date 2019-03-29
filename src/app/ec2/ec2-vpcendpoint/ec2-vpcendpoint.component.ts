import { Component, OnInit } from '@angular/core';
import { GenericResource } from '../../resource-view/generic-resource';
import { ResourceSyntax } from '../../resource-view/resource-list';
import { JsonResultService } from '../../json-result.service';
import { UsefulUtilsService } from '../../useful-utils.service';

@Component({
  selector: 'app-ec2-vpcendpoint',
  templateUrl: './ec2-vpcendpoint.component.html',
  styleUrls: ['./ec2-vpcendpoint.component.css']
})
export class Ec2VPCEndpointComponent implements OnInit {
  tagCount:number;
  tagArray;
  isPresent:boolean;
  serviceSyntax:String;
  curRes:GenericResource;

  constructor(public result:JsonResultService, public utility:UsefulUtilsService) {
    var resProp:ResourceSyntax={
      "Type" : "AWS::EC2::VPCEndpoint",
      "Properties" : {
        "VpcId" : "*vpc id",
        "RouteTableIds" : ["List of string values. [Gateway endpoint] One or more route table IDs that are used by the VPC to reach the endpoint."],
        "ServiceName" : "*The name of the service.",
        "PolicyDocument" : {"info":"[Gateway endpoint] A policy to attach to the endpoint that controls access to the service. The policy must be valid JSON. "},
        "VpcEndpointType" : "The type of endpoint. Valid values are Interface and Gateway.",
        "PrivateDnsEnabled" : "Boolean. [Interface endpoint] Indicates whether to associate a private hosted zone with the specified VPC.",
        "SubnetIds" : ["[Interface endpoint] The ID of one or more subnets in which to create an endpoint network interface."],
        "SecurityGroupIds" : ["list of string values. [Interface endpoint] The ID of one or more security groups to associate with the endpoint network interface."]
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
