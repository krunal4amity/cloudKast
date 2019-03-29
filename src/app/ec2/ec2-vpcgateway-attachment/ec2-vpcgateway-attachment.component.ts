import { Component, OnInit } from '@angular/core';
import { GenericResource } from '../../resource-view/generic-resource';
import { ResourceSyntax } from '../../resource-view/resource-list';
import { JsonResultService } from '../../json-result.service';
import { UsefulUtilsService } from '../../useful-utils.service';

@Component({
  selector: 'app-ec2-vpcgateway-attachment',
  templateUrl: './ec2-vpcgateway-attachment.component.html',
  styleUrls: ['./ec2-vpcgateway-attachment.component.css']
})
export class Ec2VPCGatewayAttachmentComponent implements OnInit {
  tagCount:number;
  tagArray;
  isPresent:boolean;
  serviceSyntax:String;
  curRes:GenericResource;

  constructor(public result:JsonResultService, public utility:UsefulUtilsService) {
    var resProp:ResourceSyntax=
    {
       "Type" : "AWS::EC2::VPCGatewayAttachment",
       "Properties" : {
          "InternetGatewayId" : "**Id of the internet gateway. You must specify either InternetGatewayId or VpnGatewayId, but not both.",
          "VpcId" : "*The ID of the VPC to associate with this gateway.",
          "VpnGatewayId" : "**The ID of the virtual private network (VPN) gateway to attach to the VPC. You must specify either InternetGatewayId or VpnGatewayId, but not both."
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
