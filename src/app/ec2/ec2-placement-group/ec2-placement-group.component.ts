import { Component, OnInit } from '@angular/core';
import { GenericResource } from '../../resource-view/generic-resource';
import { ResourceSyntax } from '../../resource-view/resource-list';
import { JsonResultService } from '../../json-result.service';
import { UsefulUtilsService } from '../../useful-utils.service';

@Component({
  selector: 'app-ec2-placement-group',
  templateUrl: './ec2-placement-group.component.html',
  styleUrls: ['./ec2-placement-group.component.css']
})
export class Ec2PlacementGroupComponent implements OnInit {
  tagCount:number;
  tagArray;
  isPresent:boolean;
  serviceSyntax:String;
  curRes:GenericResource;

  constructor(public result:JsonResultService, public utility:UsefulUtilsService) {
    var resProp:ResourceSyntax={
      "Type" : "AWS::EC2::PlacementGroup",
      "Properties" : {
        "Strategy" : "The placement strategy, which relates to the instance types that can be added to the placement group. For example, for the cluster strategy, you can cluster C4 instance types but not T2 instance types. Valid Values: cluster | spread | partition"
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
