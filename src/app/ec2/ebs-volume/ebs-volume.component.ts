import { Component, OnInit } from '@angular/core';
import { GenericResource } from '../../resource-view/generic-resource';
import { ResourceSyntax } from '../../resource-view/resource-list';
import { JsonResultService } from '../../json-result.service';
import { UsefulUtilsService } from '../../useful-utils.service';

@Component({
  selector: 'app-ebs-volume',
  templateUrl: './ebs-volume.component.html',
  styleUrls: ['./ebs-volume.component.css']
})
export class EbsVolumeComponent implements OnInit {

  tagCount:number;
  tagArray;
  isPresent:boolean;
  serviceSyntax:String;
  curRes:GenericResource;  

  constructor(public result:JsonResultService, public utility:UsefulUtilsService){
    var resProp:ResourceSyntax=
    {
       "Type":"AWS::EC2::Volume",
       "Properties" : {
        "AutoEnableIO" : "Boolean",
        "AvailabilityZone" : "String,Required: Yes",
        "Encrypted" : "Boolean,Required: Conditional. If you specify the KmsKeyId property, you must enable encryption.",
        "Iops" : "Number,Required: Conditional. Required when the volume type is io1; not used with other volume types.",
        "KmsKeyId" : "String,The Amazon Resource Name (ARN) of the AWS Key Management Service master key",
        "Size" : "Integer,Required: Conditional. If you don't specify a value for the SnapshotId property, you must specify this property.",
        "SnapshotId" : "String",
        "VolumeType" : "String,Valid Values: standard | io1 | gp2 | sc1 | st1,Required: No"
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
