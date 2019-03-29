import { Component, OnInit } from '@angular/core';
import { GenericResource } from '../../resource-view/generic-resource';
import { ResourceSyntax } from '../../resource-view/resource-list';
import { JsonResultService } from '../../json-result.service';
import { UsefulUtilsService } from '../../useful-utils.service';

@Component({
  selector: 'app-ec2-customer-gateway',
  templateUrl: './ec2-customer-gateway.component.html',
  styleUrls: ['./ec2-customer-gateway.component.css']
})
export class Ec2CustomerGatewayComponent implements OnInit {

  tagCount:number;
  tagArray;
  isPresent:boolean;
  serviceSyntax:String;
  curRes:GenericResource;

  constructor(public result:JsonResultService, public utility:UsefulUtilsService) {
    var resProp:ResourceSyntax=
    {
       "Type" : "AWS::EC2::CustomerGateway",
       "Properties" : {
          "BgpAsn" : "*The customer gateway's Border Gateway Protocol (BGP) Autonomous System Number (ASN).",
          "IpAddress" : "*The internet-routable IP address for the customer gateway's outside interface. The address must be static.",
          "Type" : "*The type of VPN connection that this customer gateway supports. e.g. ipsec.1"
       }
    };     
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
