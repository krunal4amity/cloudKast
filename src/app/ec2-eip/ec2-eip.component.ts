import { Component, OnInit } from '@angular/core';
import { GenericResource } from '../resource-view/generic-resource';
import { ResourceSyntax } from '../resource-view/resource-list';
import { JsonResultService } from '../json-result.service';
import { UsefulUtilsService } from '../useful-utils.service';

@Component({
  selector: 'app-ec2-eip',
  templateUrl: './ec2-eip.component.html',
  styleUrls: ['./ec2-eip.component.css']
})
export class EC2EIPComponent implements OnInit {

  tagCount:number;
  tagArray;
  isPresent:boolean;
  serviceSyntax:String="AWS::EC2::EIP"
  curRes:GenericResource;

  constructor(public result:JsonResultService, public utility:UsefulUtilsService) {
    var resProp:ResourceSyntax={
      "Type" : "AWS::EC2::EIP",
      "Properties" : {
         "Domain" : "",
         "InstanceId" : "",
         "PublicIpv4Pool" : ""
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
