import { Component, OnInit } from '@angular/core';
import { GenericResource } from '../../resource-view/generic-resource';
import { ResourceSyntax } from '../../resource-view/resource-list';
import { JsonResultService } from '../../json-result.service';
import { UsefulUtilsService } from '../../useful-utils.service';

@Component({
  selector: 'app-ec2-network-interface-attachment',
  templateUrl: './ec2-network-interface-attachment.component.html',
  styleUrls: ['./ec2-network-interface-attachment.component.css']
})
export class Ec2NetworkInterfaceAttachmentComponent implements OnInit {
  tagCount:number;
  tagArray;
  isPresent:boolean;
  serviceSyntax:String;
  curRes:GenericResource;

  constructor(public result:JsonResultService, public utility:UsefulUtilsService) {
    var resProp:ResourceSyntax={
      "Type" : "AWS::EC2::NetworkInterfaceAttachment",
      "Properties" : {
         "DeleteOnTermination": "Whether to delete the network interface when the instance terminates. By default, this value is set to True.",
         "DeviceIndex": "*The network interface's position in the attachment order. For example, the first attached network interface has a DeviceIndex of 0.",
         "InstanceId": "*The ID of the instance to which you will attach the ENI.",
         "NetworkInterfaceId": "*The ID of the ENI that you want to attach."
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
