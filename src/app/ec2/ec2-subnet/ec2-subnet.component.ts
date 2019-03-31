import { Component, OnInit } from '@angular/core';
import { GenericResource } from '../../resource-view/generic-resource';
import { ResourceSyntax } from '../../resource-view/resource-list';
import { JsonResultService } from '../../json-result.service';
import { UsefulUtilsService } from '../../useful-utils.service';

@Component({
  selector: 'app-ec2-subnet',
  templateUrl: './ec2-subnet.component.html',
  styleUrls: ['./ec2-subnet.component.css']
})
export class Ec2SubnetComponent implements OnInit {
  tagCount:number;
  tagArray;
  isPresent:boolean;
  serviceSyntax:String;
  curRes:GenericResource;

  constructor(public result:JsonResultService, public utility:UsefulUtilsService) {
    var resProp:ResourceSyntax={
      "Type" : "AWS::EC2::Subnet",
      "Properties" : {
        "AssignIpv6AddressOnCreation" : "**Indicates whether a network interface created in this subnet receives an IPv6 address. The default value is false. If you specify a true or false value for AssignIpv6AddressOnCreation, Ipv6CidrBlock must also be specified.",
        "AvailabilityZone" : "The availability zone in which you want the subnet. Default: AWS selects a zone for you (recommended).",
        "CidrBlock" : "*The CIDR block that you want the subnet to cover (for example, '10.0.0.0/24').",
        "Ipv6CidrBlock" : "**The IPv6 network range for the subnet, in CIDR notation. The subnet size must use a /64 prefix length. If you specify a true or false value for AssignIpv6AddressOnCreation, Ipv6CidrBlock must be specified.",
        "MapPublicIpOnLaunch" : "Indicates whether instances that are launched in this subnet receive a public IP address. By default, the value is false.",
        "VpcId" : "*A Ref structure that contains the ID of the VPC on which you want to create the subnet. The VPC ID is provided as the value of the 'Ref' property"
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
