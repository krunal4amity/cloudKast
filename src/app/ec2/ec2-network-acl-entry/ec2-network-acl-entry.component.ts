import { Component, OnInit } from '@angular/core';
import { GenericResource } from '../../resource-view/generic-resource';
import { ResourceSyntax } from '../../resource-view/resource-list';
import { JsonResultService } from '../../json-result.service';
import { UsefulUtilsService } from '../../useful-utils.service';

@Component({
  selector: 'app-ec2-network-acl-entry',
  templateUrl: './ec2-network-acl-entry.component.html',
  styleUrls: ['./ec2-network-acl-entry.component.css']
})
export class Ec2NetworkAclEntryComponent implements OnInit {

  tagCount:number;
  tagArray;
  isPresent:boolean;
  serviceSyntax:String;
  curRes:GenericResource;

  constructor(public result:JsonResultService, public utility:UsefulUtilsService) {
    var resProp:ResourceSyntax={
      "Type" : "AWS::EC2::NetworkAclEntry",
      "Properties" : {
         "CidrBlock" : "**You must specify the CidrBlock or Ipv6CidrBlock property.",
         "Egress" : "Boolean. Whether this rule applies to egress traffic from the subnet (true) or ingress traffic to the subnet (false). By default, AWS CloudFormation specifies false.",
         "Icmp" : {"info":"**Type: EC2 NetworkAclEntry Icmp. required if specifying 1 (ICMP) for the protocol parameter."},
         "Ipv6CidrBlock" : "**You must specify the CidrBlock or Ipv6CidrBlock property.", 
         "NetworkAclId" : "*ID of the ACL where the entry will be created.",
         "PortRange" : {"info":"**Type: EC2 NetworkAclEntry PortRange. Required if specifying 6 (TCP) or 17 (UDP) for the protocol parameter. "},
         "Protocol" : "*The IP protocol that the rule applies to. You must specify -1 or a protocol number. If you specify -1, all ports are opened and the PortRange property is ignored.",
         "RuleAction" : "*Whether to allow or deny traffic that matches the rule; valid values are 'allow' or 'deny'.",
         "RuleNumber" : "*Rule number to assign to the entry, such as 100. ACL entries are processed in ascending order by rule number. Entries can't use the same rule number unless one is an egress rule and the other is an ingress rule."
        //  "DeletionPolicy":"With the DeletionPolicy attribute you can preserve or (in some cases) backup a resource when its stack is deleted.Possible values : 'Delete', 'Retain','Snapshot'. Snapshot applies to ec2volume, elasticcache-cachecluster and replication group, rds-dbcluster and dbinstance, redshift-cluster, neptune-dbcluster",
        //  "DependsOn":["List of strings. When you add a DependsOn attribute to a resource, that resource is created only after the creation of the resource specified in the DependsOn attribute."],
        //  "UpdateReplacePolicy":"If you update a resource property that requires that the resource be replaced, AWS CloudFormation recreates the resource during the update. By default, AWS CloudFormation then deletes the old resource. Using the UpdateReplacePolicy, you can specify that AWS CloudFormation retain or (in some cases) create a snapshot of the old resource. Acceptable values : Retain, Delete, Snapshot"
      }
   };     
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
