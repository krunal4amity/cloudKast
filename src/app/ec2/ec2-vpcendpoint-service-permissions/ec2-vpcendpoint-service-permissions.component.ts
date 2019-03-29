import { Component, OnInit } from '@angular/core';
import { GenericResource } from '../../resource-view/generic-resource';
import { ResourceSyntax } from '../../resource-view/resource-list';
import { JsonResultService } from '../../json-result.service';
import { UsefulUtilsService } from '../../useful-utils.service';

@Component({
  selector: 'app-ec2-vpcendpoint-service-permissions',
  templateUrl: './ec2-vpcendpoint-service-permissions.component.html',
  styleUrls: ['./ec2-vpcendpoint-service-permissions.component.css']
})
export class Ec2VPCEndpointServicePermissionsComponent implements OnInit {
  tagCount:number;
  tagArray;
  isPresent:boolean;
  serviceSyntax:String;
  curRes:GenericResource;

  constructor(public result:JsonResultService, public utility:UsefulUtilsService) {
    var resProp:ResourceSyntax={
      "Type" : "AWS::EC2::VPCEndpointServicePermissions",
      "Properties" : {
        "AllowedPrincipals" : ["The Amazon Resource Names (ARN) of one or more principals (IAM users, IAM roles, and AWS accounts). Permissions are granted to the principals in this list. To grant permissions to all principals, specify an asterisk. Permissions are revoked for principals not in this list. If the list is empty, then all permissions are revoked."],
        "ServiceId" : "*The ID of the VPC endpoint service."
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
