import { Component, OnInit } from '@angular/core';
import { GenericResource } from '../../resource-view/generic-resource';
import { ResourceSyntax } from '../../resource-view/resource-list';
import { JsonResultService } from '../../json-result.service';
import { UsefulUtilsService } from '../../useful-utils.service';

@Component({
  selector: 'app-ec2-vpn-connection',
  templateUrl: './ec2-vpn-connection.component.html',
  styleUrls: ['./ec2-vpn-connection.component.css']
})
export class Ec2VpnConnectionComponent implements OnInit {
  tagCount:number;
  tagArray;
  isPresent:boolean;
  serviceSyntax:String;
  curRes:GenericResource;

  constructor(public result:JsonResultService, public utility:UsefulUtilsService) {
    var resProp:ResourceSyntax={
      "Type" : "AWS::EC2::VPNConnection",
      "Properties" : {
         "Type" : "*The type of VPN connection this virtual private gateway supports.e.g. ipsec.1",
         "CustomerGatewayId" : "*The ID of the customer gateway. This can either be an embedded JSON object or a reference to a Gateway ID.",
         "StaticRoutesOnly" : "**Boolean. Conditional. If you are creating a VPN connection for a device that does not support Border Gateway Protocol (BGP), you must specify true.",
         "VpnGatewayId" : "*The ID of the virtual private gateway. This can either be an embedded JSON object or a reference to a Gateway ID.",
         "VpnTunnelOptionsSpecifications" : ["Type: List of VpnTunnelOptionsSpecification. The tunnel options for the VPN connection. Duplicates not allowed."]
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
