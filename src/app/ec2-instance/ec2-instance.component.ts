import { Component, OnInit } from '@angular/core';
import { GenericResource } from '../resource-view/generic-resource';
import { ResourceSyntax } from '../resource-view/resource-list';
import { JsonResultService } from '../json-result.service';
import { UsefulUtilsService } from '../useful-utils.service';

@Component({
  selector: 'app-ec2-instance',
  templateUrl: './ec2-instance.component.html',
  styleUrls: ['./ec2-instance.component.css']
})
export class EC2InstanceComponent implements OnInit {
  tagCount:number;
  tagArray;
  isPresent:boolean;
  serviceSyntax:String="AWS::EC2::Instance"
  curRes:GenericResource;

  constructor(public result:JsonResultService, public utility:UsefulUtilsService) {
    var resProp:ResourceSyntax=
    {
       "Type" : "AWS::EC2::Instance",
       "Properties" : {
          "Affinity" : "Indicates whether Amazon Elastic Compute Cloud (Amazon EC2) always associates the instance with a dedicated host.",
          "AvailabilityZone" : "If not specified, an Availability Zone will be automatically chosen for you based on the load balancing criteria for the region.",
          "BlockDeviceMappings" : ["A list of Amazon EC2 BlockDeviceMapping."],
          "CreditSpecification" : {"info":" Amazon EC2 Instance CreditSpecification."},
          "DisableApiTermination" : "Boolean. Specifies whether the instance can be terminated through the API.",
          "EbsOptimized" : "Boolean",
          "ElasticGpuSpecifications" : ["Specifies the Elastic GPUs. An Elastic GPU is a GPU resource that you can attach to your instance to accelerate the graphics performance of your applications."],
          "ElasticInferenceAccelerators" : ["Specify a list of elastic inference accelerators for an instance. "],
          "HostId" : "the ID of a dedicated host that the instance is associated with",
          "IamInstanceProfile" : "",
          "ImageId" : "",
          "InstanceInitiatedShutdownBehavior" : "Indicates whether an instance stops or terminates when you shut down the instance from the instance's operating system shutdown command",
          "InstanceType" : "",
          "Ipv6AddressCount" : "The number of IPv6 addresses to associate with the instance's primary network interface. ",
          "Ipv6Addresses" : ["List of EC2 NetworkInterface Ipv6Addresses"],
          "KernelId" : "",
          "KeyName" : "",
          "LaunchTemplate" : {"info":" Amazon EC2 Instance LaunchTemplateSpecification"},
          "LicenseSpecifications" : ["Associate a list of license configurations with the instance."],
          "Monitoring" : "Boolean. Specifies whether detailed monitoring is enabled for the instance.",
          "NetworkInterfaces" : ["A list of embedded objects that describes the network interfaces to associate with this instance."],
          "PlacementGroupName" : "The name of an existing placement group that you want to launch the instance into (for cluster instances).",
          "PrivateIpAddress" : "The private IP address for this instance.By default, Amazon VPC selects an IP address from the subnet for the instance.",
          "RamdiskId" : "The ID of the RAM disk to select. Some kernels require additional drivers at launch. ",
          "SecurityGroupIds" : ["**List of String values. A list that contains the security group IDs for VPC security groups to assign to the Amazon EC2 instance. If you specified the NetworkInterfaces property, do not specify this property."],
          "SecurityGroups" : ["Valid only for Amazon EC2 security groups. A list that contains the Amazon EC2 security groups to assign to the Amazon EC2 instance."],
          "SourceDestCheck" : "Boolean. Controls whether source/destination checking is enabled on the instance. Also determines if an instance in a VPC will perform network address translation (NAT).For the instance to perform NAT, the value must be false",
          "SsmAssociations" : ["List of Amazon EC2 Instance SsmAssociations."],
          "SubnetId" : "",
          "Tenancy" : "The tenancy of the instance that you want to launch, such as default, dedicated, or host. ",
          "UserData" : "Base64-encoded MIME user data that is made available to the instances.",
          "Volumes" : ["A list of EC2 MountPoints."],
          "AdditionalInfo" : ""
       }
    };
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
