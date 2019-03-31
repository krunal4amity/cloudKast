import { Component, OnInit } from '@angular/core';
import { GenericResource } from '../../resource-view/generic-resource';
import { ResourceSyntax } from '../../resource-view/resource-list';
import { JsonResultService } from '../../json-result.service';
import { UsefulUtilsService } from '../../useful-utils.service';

@Component({
  selector: 'app-ec2-network-interface',
  templateUrl: './ec2-network-interface.component.html',
  styleUrls: ['./ec2-network-interface.component.css']
})
export class Ec2NetworkInterfaceComponent implements OnInit {
  tagCount:number;
  tagArray;
  isPresent:boolean;
  serviceSyntax:String;
  curRes:GenericResource;

  constructor(public result:JsonResultService, public utility:UsefulUtilsService) {
    var resProp:ResourceSyntax={
      "Type" : "AWS::EC2::NetworkInterface",
      "Properties" : {
         "Description" : "String",
         "GroupSet" : [ "Type: List of strings. A list of security group IDs associated with this network interface."],
         "Ipv6AddressCount" : "Integer. The number of IPv6 addresses to associate with the network interface. EC2 automatically selects the IPv6 addresses from the subnet range. To specify specific IPv6 addresses, use the Ipv6Addresses property and don't specify this property.",
         "Ipv6Addresses" : ["One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet to associate with the network interface. If you're specifying a number of IPv6 addresses, use the Ipv6AddressCount property and don't specify this property."],
         "PrivateIpAddress" : "Assigns a single private IP address to the network interface, which is used as the primary private IP address. If you want to specify multiple private IP address, use the PrivateIpAddresses property.",
         "PrivateIpAddresses" : ["Type: list of PrivateIpAddressSpecification. Assigns a list of private IP addresses to the network interface. You can specify a primary private IP address by setting the value of the Primary property to true in the PrivateIpAddressSpecification property. If you want EC2 to automatically assign private IP addresses, use the SecondaryPrivateIpAddressCount property and do not specify this property." ],
         "SecondaryPrivateIpAddressCount" : "Integer. The number of secondary private IP addresses that EC2 automatically assigns to the network interface. EC2 uses the value of the PrivateIpAddress property as the primary private IP address. If you don't specify that property, EC2 automatically assigns both the primary and secondary private IP addresses.",
         "SourceDestCheck" : "Boolean. Flag indicating whether traffic to or from the instance is validated.",
         "SubnetId" : "String"
        //  "DeletionPolicy":"With the DeletionPolicy attribute you can preserve or (in some cases) backup a resource when its stack is deleted.Possible values : 'Delete', 'Retain','Snapshot'. Snapshot applies to ec2volume, elasticcache-cachecluster and replication group, rds-dbcluster and dbinstance, redshift-cluster, neptune-dbcluster",
        //  "DependsOn":["List of strings. When you add a DependsOn attribute to a resource, that resource is created only after the creation of the resource specified in the DependsOn attribute."],
        //  "UpdateReplacePolicy":"If you update a resource property that requires that the resource be replaced, AWS CloudFormation recreates the resource during the update. By default, AWS CloudFormation then deletes the old resource. Using the UpdateReplacePolicy, you can specify that AWS CloudFormation retain or (in some cases) create a snapshot of the old resource. Acceptable values : Retain, Delete, Snapshot"
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
