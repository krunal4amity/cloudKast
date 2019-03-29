import { Component, OnInit } from '@angular/core';
import { GenericResource } from '../../resource-view/generic-resource';
import { ResourceSyntax } from '../../resource-view/resource-list';
import { JsonResultService } from '../../json-result.service';
import { UsefulUtilsService } from '../../useful-utils.service';

@Component({
  selector: 'app-ec2-security-group',
  templateUrl: './ec2-security-group.component.html',
  styleUrls: ['./ec2-security-group.component.css']
})
export class EC2SecurityGroupComponent implements OnInit {

  tagCount:number;
  tagArray;
  isPresent:boolean;
  serviceSyntax:String;
  curRes:GenericResource;
  constructor(public result:JsonResultService, public utility:UsefulUtilsService) {
    var resProp:ResourceSyntax={
      "Type" : "AWS::EC2::SecurityGroup",
      "Properties" : {
         "GroupName" : "If you don't specify a GroupName, AWS CloudFormation generates a unique physical ID and uses that ID for the group name.",
         "GroupDescription" : "*description",
         "SecurityGroupEgress" : ["A list of Amazon EC2 security group egress rules."],
         "SecurityGroupIngress" : ["A list of Amazon EC2 security group ingress rules."],
         "VpcId" : "*The physical ID of the VPC. You can obtain the physical ID by using a reference function"
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
