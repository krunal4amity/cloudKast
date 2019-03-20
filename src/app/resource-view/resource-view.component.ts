import { Component, OnInit, Input } from '@angular/core';
import {RESOURCE_DATA} from './resource-list';
import {AWSResource} from './resource-list';
import {SubResource} from './resource-list';

@Component({
  selector: 'app-resource-view',
  templateUrl: './resource-view.component.html',
  styleUrls: ['./resource-view.component.css']
})
export class ResourceViewComponent implements OnInit {

  resourcelist=RESOURCE_DATA;
  resource_detail=[]

  //Route53 resources
  route53_healthcheck=[];
  route53_hostedzone=[];
  route53_recordset=[];
  route53_recordsetgroup=[];

  //EC2 resources
  ec2_volume=[];
  ec2_eip=[];
  ec2_instance=[];

  constructor() {
   }


  ngOnInit() {
  }

  serviceAddition(subresource:SubResource){
    //console.log(`${subresource.resourcename} ${subresource.resourcecount} ${subresource.resourcesyntax}`);
    subresource.resourcecount = subresource.resourcecount + 1;
    //console.log((subresource.resourcesyntax as string).split("::"));
    this.resource_detail=(subresource.resourcesyntax as string).split("::");
    switch (this.resource_detail[1]) {
      case "Route53":
        if(this.resource_detail[2]=="HealthCheck") this.route53_healthcheck.push(subresource.resourcecount);
        if(this.resource_detail[2]=="HostedZone") this.route53_hostedzone.push(subresource.resourcecount);
        if(this.resource_detail[2]=="RecordSet") this.route53_recordset.push(subresource.resourcecount);
        if(this.resource_detail[2]=="RecordSetGroup") this.route53_recordsetgroup.push(subresource.resourcecount);        
        break;
      case "EC2":
        if(this.resource_detail[2]=="Volume") this.ec2_volume.push(subresource.resourcecount);
        if(this.resource_detail[2]=="EIP") this.ec2_eip.push(subresource.resourcecount);               
        if(this.resource_detail[2]=="Instance") this.ec2_instance.push(subresource.resourcecount);               
        break;
      default:
        break;
    }    
  }

  addService(){
  }


}
