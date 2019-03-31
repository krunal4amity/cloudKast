import { Component, OnInit } from '@angular/core';
import { GenericResource } from '../../resource-view/generic-resource';
import { ResourceSyntax } from '../../resource-view/resource-list';
import { JsonResultService } from '../../json-result.service';
import { UsefulUtilsService } from '../../useful-utils.service';

@Component({
  selector: 'app-ec2-route',
  templateUrl: './ec2-route.component.html',
  styleUrls: ['./ec2-route.component.css']
})
export class Ec2RouteComponent implements OnInit {
  tagCount:number;
  tagArray;
  isPresent:boolean;
  serviceSyntax:String;
  curRes:GenericResource;

  constructor(public result:JsonResultService, public utility:UsefulUtilsService) {
    var resProp:ResourceSyntax={
      "Type" : "AWS::EC2::Route",
      "Properties" : {
        "DestinationCidrBlock" : "**The IPv4 CIDR address block used for the destination match. For example, 0.0.0.0/0. Routing decisions are based on the most specific match. You must specify the DestinationCidrBlock or DestinationIpv6CidrBlock property.",
        "DestinationIpv6CidrBlock" : "**The IPv6 CIDR address block used for the destination match. For example, ::/0. Routing decisions are based on the most specific match. You must specify the DestinationCidrBlock or DestinationIpv6CidrBlock property.",
        "EgressOnlyInternetGatewayId" : "**The ID of an egress-only internet gateway that is attached to your VPC (over IPv6 only). Conditional. You must specify only one of the following properties: EgressOnlyInternetGatewayId, GatewayId, InstanceId, NatGatewayId, NetworkInterfaceId, or VpcPeeringConnectionId.",
        "GatewayId" : "**The ID of an internet gateway or virtual private gateway that is attached to your VPC. For example: igw-eaad4883. You must specify only one of the following properties: EgressOnlyInternetGatewayId, GatewayId, InstanceId, NatGatewayId, NetworkInterfaceId, or VpcPeeringConnectionId.",
        "InstanceId" : "**The ID of a NAT instance in your VPC. For example, i-1a2b3c4d. Conditional. You must specify only one of the following properties: EgressOnlyInternetGatewayId, GatewayId, InstanceId, NatGatewayId, NetworkInterfaceId, or VpcPeeringConnectionId.",
        "NatGatewayId" : "**The ID of a NAT gateway. For example, nat-0a12bc456789de0fg.You must specify only one of the following properties: EgressOnlyInternetGatewayId, GatewayId, InstanceId, NatGatewayId, NetworkInterfaceId, or VpcPeeringConnectionId.",
        "NetworkInterfaceId" : "**Allows the routing of network interface IDs.You must specify only one of the following properties: EgressOnlyInternetGatewayId, GatewayId, InstanceId, NatGatewayId, NetworkInterfaceId, or VpcPeeringConnectionId.",
        "RouteTableId" : "*The ID of the route table where the route will be added.",
        "VpcPeeringConnectionId" : "**The ID of a VPC peering connection. You must specify only one of the following properties: EgressOnlyInternetGatewayId, GatewayId, InstanceId, NatGatewayId, NetworkInterfaceId, or VpcPeeringConnectionId."
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
