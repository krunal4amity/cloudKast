import { Component, OnInit } from '@angular/core';
import { GenericResource } from '../../resource-view/generic-resource';
import { ResourceSyntax } from '../../resource-view/resource-list';
import { JsonResultService } from '../../json-result.service';
import { UsefulUtilsService } from '../../useful-utils.service';

@Component({
  selector: 'app-ec2-vpcpeering-connection',
  templateUrl: './ec2-vpcpeering-connection.component.html',
  styleUrls: ['./ec2-vpcpeering-connection.component.css']
})
export class Ec2VPCPeeringConnectionComponent implements OnInit {
  tagCount:number;
  tagArray;
  isPresent:boolean;
  serviceSyntax:String;
  curRes:GenericResource;

  constructor(public result:JsonResultService, public utility:UsefulUtilsService) {
    var resProp:ResourceSyntax={
      "Type" : "AWS::EC2::VPCPeeringConnection",
      "Properties" : {
         "PeerVpcId" : "*The ID of the VPC with which you are creating the peering connection.",
         "VpcId" : "*The ID of the VPC that is requesting a peering connection.",
         "PeerOwnerId" : "The AWS account ID of the owner of the VPC that you want to peer with.",
         "PeerRegion" : "The region code for the accepter VPC, if the accepter VPC is located in a region other than the region in which you make the request. The default is the region in which you make the request.",
         "PeerRoleArn" :  "The Amazon Resource Name (ARN) of the VPC peer role for the peering connection in another AWS account."
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
