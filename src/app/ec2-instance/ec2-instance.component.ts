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
          "Affinity" : "",
          "AvailabilityZone" : "",
          "BlockDeviceMappings" : [],
          "CreditSpecification" : {},     
          "DisableApiTermination" : "",
          "EbsOptimized" : "",
          "ElasticGpuSpecifications" : [],
          "ElasticInferenceAccelerators" : [],
          "HostId" : "",
          "IamInstanceProfile" : "",
          "ImageId" : "",
          "InstanceInitiatedShutdownBehavior" : "",
          "InstanceType" : "",
          "Ipv6AddressCount" : "",
          "Ipv6Addresses" : [],
          "KernelId" : "",
          "KeyName" : "",
          "LaunchTemplate" : {},
          "LicenseSpecifications" : [],
          "Monitoring" : "",
          "NetworkInterfaces" : [],
          "PlacementGroupName" : "",
          "PrivateIpAddress" : "",
          "RamdiskId" : "",
          "SecurityGroupIds" : [],
          "SecurityGroups" : [],
          "SourceDestCheck" : "",
          "SsmAssociations" : [],
          "SubnetId" : "",
          "Tags" : [],
          "Tenancy" : "",
          "UserData" : "",
          "Volumes" : [],
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
