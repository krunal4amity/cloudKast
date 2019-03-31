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
          // "DeletionPolicy":"With the DeletionPolicy attribute you can preserve or (in some cases) backup a resource when its stack is deleted.Possible values : 'Delete', 'Retain','Snapshot'. Snapshot applies to ec2volume, elasticcache-cachecluster and replication group, rds-dbcluster and dbinstance, redshift-cluster, neptune-dbcluster",
          // "DependsOn":["List of strings. When you add a DependsOn attribute to a resource, that resource is created only after the creation of the resource specified in the DependsOn attribute."],
          // "UpdateReplacePolicy":"If you update a resource property that requires that the resource be replaced, AWS CloudFormation recreates the resource during the update. By default, AWS CloudFormation then deletes the old resource. Using the UpdateReplacePolicy, you can specify that AWS CloudFormation retain or (in some cases) create a snapshot of the old resource. Acceptable values : Retain, Delete, Snapshot"
       }
    }
    this.serviceSyntax=resProp.Type;
    this.curRes = new GenericResource(this.utility.addCommonProperties(resProp), result, utility);
    this.curRes.resObject=this.utility.addCommonProperties(resProp);
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
