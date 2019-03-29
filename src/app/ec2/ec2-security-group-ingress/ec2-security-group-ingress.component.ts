import { Component, OnInit } from '@angular/core';
import { GenericResource } from '../../resource-view/generic-resource';
import { ResourceSyntax } from '../../resource-view/resource-list';
import { JsonResultService } from '../../json-result.service';
import { UsefulUtilsService } from '../../useful-utils.service';

@Component({
  selector: 'app-ec2-security-group-ingress',
  templateUrl: './ec2-security-group-ingress.component.html',
  styleUrls: ['./ec2-security-group-ingress.component.css']
})
export class Ec2SecurityGroupIngressComponent implements OnInit {
  tagCount:number;
  tagArray;
  isPresent:boolean;
  serviceSyntax:String;
  curRes:GenericResource;

  constructor(public result:JsonResultService, public utility:UsefulUtilsService) {
    var resProp:ResourceSyntax={
      "Type" : "AWS::EC2::SecurityGroupIngress",
      "Properties" : {
        "CidrIp" : "**You must specify a source security group (SourceSecurityGroupName or SourceSecurityGroupId) or a CIDR range (CidrIp or CidrIpv6).",
        "CidrIpv6" : "**You must specify a source security group (SourceSecurityGroupName or SourceSecurityGroupId) or a CIDR range (CidrIp or CidrIpv6).",
        "Description" : "Description",
        "FromPort" : "*Integer. Start of port range for the TCP and UDP protocols, or an ICMP type number. If you specify icmp for the IpProtocol property, you can specify -1 as a wildcard (i.e., any ICMP type number).",
        "GroupId" : "**You must specify the GroupName property or the GroupId property. For security groups that are in a VPC, you must use the GroupId property. For example, EC2-VPC accounts must use the GroupId property.",
        "GroupName" : "**Name of the Amazon EC2 security group (non-VPC security group) to modify. This value can be a reference to an AWS::EC2::SecurityGroup resource or the name of an existing Amazon EC2 security group. You must specify the GroupName property or the GroupId property. For security groups that are in a VPC, you must use the GroupId property. For example, EC2-VPC accounts must use the GroupId property.",
        "IpProtocol" : "*IP protocol name or number.Use -1 to specify all protocols. If you specify -1, or a protocol number other than tcp, udp, icmp, or 58 (ICMPv6), traffic on all ports is allowed, regardless of any ports you specify. ",
        "SourcePrefixListId" : "**The AWS service prefix of an Amazon VPC endpoint. You must specify a source security group (SourcePrefixListId, SourceSecurityGroupId, or SourceSecurityGroupName) or a CIDR range (CidrIp or CidrIpv6).",
        "SourceSecurityGroupName" : "**Specifies the ID of the source security group or uses the Ref intrinsic function to refer to the logical ID of a security group defined in the same template. You must specify a source security group (SourcePrefixListId, SourceSecurityGroupId, or SourceSecurityGroupName) or a CIDR range (CidrIp or CidrIpv6).",
        "SourceSecurityGroupId" : "**Specifies the name of the Amazon EC2 security group (non-VPC security group) to allow access or use the Ref intrinsic function to refer to the logical ID of a security group defined in the same template. You must specify a source security group (SourcePrefixListId, SourceSecurityGroupId, or SourceSecurityGroupName) or a CIDR range (CidrIp or CidrIpv6).",
        "SourceSecurityGroupOwnerId" : "**Specifies the AWS Account ID of the owner of the Amazon EC2 security group specified in the SourceSecurityGroupName property. If you specify SourceSecurityGroupName or SourceSecurityGroupId and that security group is owned by a different account than the account creating the stack, you must specify the SourceSecurityGroupOwnerId; otherwise, this property is optional.",
        "ToPort" : "*Integer. End of port range for the TCP and UDP protocols, or an ICMP code. If you specify icmp for the IpProtocol property, you can specify -1 as a wildcard (i.e., any ICMP code).Required: Yes, for ICMP and any protocol that uses ports."
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
