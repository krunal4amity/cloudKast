import { Component, OnInit } from '@angular/core';
import { GenericResource } from 'src/app/resource-view/generic-resource';
import { JsonResultService } from 'src/app/json-result.service';
import { UsefulUtilsService } from 'src/app/useful-utils.service';
import { ResourceSyntax } from 'src/app/resource-view/resource-list';

@Component({
  selector: 'app-ec2-fleet',
  templateUrl: './ec2-fleet.component.html',
  styleUrls: ['./ec2-fleet.component.css']
})
export class Ec2FleetComponent implements OnInit {

  tagCount:number;
  tagArray;
  isPresent:boolean;
  serviceSyntax:String="AWS::EC2::EIP"
  curRes:GenericResource;

  constructor(public result:JsonResultService, public utility:UsefulUtilsService) {
    var resProp:ResourceSyntax={
      "Type" : "AWS::EC2::EC2Fleet",
      "Properties" : {
        "ExcessCapacityTerminationPolicy" : "Indicates whether running instances should be terminated if the total target capacity of the EC2 Fleet is decreased below the current size of the EC2 Fleet.",
        "LaunchTemplateConfigs" : ["*List of FleetLaunchTemplateConfigRequest property types"],
        "OnDemandOptions" : {"info":"Type: OnDemandOptionsRequest. The allocation strategy of On-Demand Instances in an EC2 Fleet. "},
        "ReplaceUnhealthyInstances" : "Boolean. Indicates whether EC2 Fleet should replace unhealthy instances.",
        "SpotOptions" : {"info":"Type: SpotOptionsRequest. Describes the configuration of Spot Instances in an EC2 Fleet."},
        "TagSpecifications" : ["List of TagSpecification property types.The key-value pair for tagging the EC2 Fleet request on creation. The value for ResourceType must be fleet, otherwise the fleet request fails."],
        "TargetCapacitySpecification" : "*TargetCapacitySpecificationRequest Type. The TotalTargetCapacity, OnDemandTargetCapacity, SpotTargetCapacity, and DefaultCapacityType structure.",
        "TerminateInstancesWithExpiration" : "Boolean. Indicates whether running instances should be terminated when the EC2 Fleet expires.",
        "Type" : "The type of the request. By default, the EC2 Fleet places an asynchronous request for your desired capacity, and maintains it by replenishing interrupted Spot Instances (maintain). A value of instant places a synchronous one-time request, and returns errors for any instances that could not be launched. A value of request places an asynchronous one-time request without maintaining capacity or submitting requests in alternative capacity pools if capacity is unavailable.",
        "ValidFrom" : "The start date and time of the request, in UTC format (for example, YYYY-MM-DDTHH:MM:SSZ). The default is to start fulfilling the request immediately.",
        "ValidUntil" : "The end date and time of the request, in UTC format (for example, YYYY-MM-DDTHH:MM:SSZ). At this point, no new EC2 Fleet requests are placed or able to fulfill the request. The default end date is 7 days from the current date."
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
