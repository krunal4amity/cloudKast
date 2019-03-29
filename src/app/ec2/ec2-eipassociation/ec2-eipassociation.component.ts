import { Component, OnInit } from '@angular/core';
import { GenericResource } from '../../resource-view/generic-resource';
import { ResourceSyntax } from '../../resource-view/resource-list';
import { JsonResultService } from '../../json-result.service';
import { UsefulUtilsService } from '../../useful-utils.service';

@Component({
  selector: 'app-ec2-eipassociation',
  templateUrl: './ec2-eipassociation.component.html',
  styleUrls: ['./ec2-eipassociation.component.css']
})
export class Ec2EIPAssociationComponent implements OnInit {
  tagCount:number;
  tagArray;
  isPresent:boolean;
  serviceSyntax:String;
  curRes:GenericResource;

  constructor(public result:JsonResultService, public utility:UsefulUtilsService) {
    var resProp:ResourceSyntax=
    {
       "Type": "AWS::EC2::EIPAssociation",
       "Properties": {
          "AllocationId": "**[EC2-VPC] Allocation ID for the VPC Elastic IP address you want to associate with an Amazon EC2 instance in your VPC.Conditional. Required for EC2-VPC.",
          "EIP": "**Elastic IP address that you want to associate with the Amazon EC2 instance specified by the InstanceId property. Required for EC2-Classic.",
          "InstanceId": "**Instance ID of the Amazon EC2 instance that you want to associate with the Elastic IP address specified by the EIP property. If the instance has more than one network interface, you must specify a network interface ID. Conditional. If you specify the EIP property, you must specify this property. If you specify the AllocationId property, you must specify this property or the NetworkInterfaceId property.",
          "NetworkInterfaceId": "**The ID of the network interface to associate with the Elastic IP address. If the instance has more than one network interface, you must specify a network interface ID.If you specify the AllocationId property, you must specify this property or the InstanceId property.",
          "PrivateIpAddress": "The private IP address that you want to associate with the Elastic IP address. The private IP address is restricted to the primary and secondary private IP addresses that are associated with the network interface."
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
