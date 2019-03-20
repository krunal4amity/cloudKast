import { Component, OnInit } from '@angular/core';
import {RESOURCE_DATA} from '../resource-view/resource-list';
import { JsonResultService } from '../json-result.service';
import { UsefulUtilsService } from '../useful-utils.service';

@Component({
  selector: 'app-ebs-volume',
  templateUrl: './ebs-volume.component.html',
  styleUrls: ['./ebs-volume.component.css']
})
export class EbsVolumeComponent implements OnInit {

  serviceSyntax:String="AWS::EC2::Volume"
  currentService:String="EC2";
  currentResource:String="Volume";
  isPresent=true;
  tagCount=0;
  tagArray=[];

  

  resProp:Object={
    "AutoEnableIO" : "Boolean",
    "AvailabilityZone" : "String,Required: Yes",
    "Encrypted" : "Boolean,Required: Conditional. If you specify the KmsKeyId property, you must enable encryption.",
    "Iops" : "Number,Required: Conditional. Required when the volume type is io1; not used with other volume types.",
    "KmsKeyId" : "String,The Amazon Resource Name (ARN) of the AWS Key Management Service master key",
    "Size" : "Integer,Required: Conditional. If you don't specify a value for the SnapshotId property, you must specify this property.",
    "SnapshotId" : "String",
    "VolumeType" : "String,Valid Values: standard | io1 | gp2 | sc1 | st1,Required: No"
 }
  resPropkeys=Object.keys(this.resProp);

  constructor(public result:JsonResultService, public utility:UsefulUtilsService) { 
  }

  ngOnInit() {
  }

  addTag(){
    this.tagCount+=1;
    this.tagArray.push(this.tagCount);
  }

  getTagArray(value){
    var tags=[];
    this.tagArray.forEach((i)=>{
      tags.push({
        "Key":value[`tagKey${i}`]?value[`tagKey${i}`]:undefined,
        "Value":value[`tagValue${i}`]?value[`tagValue${i}`]:undefined
      })
    });
    return tags.length==0?undefined:tags
  }

  isObjectEmpty(obj:Object){
    return Object.keys(obj).length === 0 && obj.constructor === Object?true:false;
  }

  onRemove(value){
    this.isPresent=false;
    for(var i=0;i<RESOURCE_DATA.length;i++){
      if(RESOURCE_DATA[i].servicename==this.currentService){
        var myresource=RESOURCE_DATA[i].subresource;
        for(var j=0;j<myresource.length;j++){
          if(myresource[j].resourcename==this.currentResource){
            myresource[j].resourcecount=myresource[j].resourcecount-1;
          }
        }
      }
    }
    this.result.jsonresult.Resources[value.resourceName]=undefined;
  }

  onDone(value){
    console.log(value);
    this.result.jsonresult.Resources[value.resourceName]=
    {
      "Type":"AWS::EC2::Volume",
      "Properties" : {
         "AutoEnableIO" : this.utility.getProperJson(value.AutoEnableIO),
         "AvailabilityZone" : this.utility.getProperJson(value.AvailabilityZone),
         "Encrypted" : this.utility.getProperJson(value.Encrypted),
         "Iops" : this.utility.getProperJson(value.Iops),
         "KmsKeyId" : this.utility.getProperJson(value.KmsKeyId),
         "Size" : this.utility.getProperJson(value.Size),
         "SnapshotId" : this.utility.getProperJson(value.SnapshotId),
         "VolumeType" : this.utility.getProperJson(value.VolumeType),
         "Tags": this.getTagArray(value)
      }
   }
  }
}
