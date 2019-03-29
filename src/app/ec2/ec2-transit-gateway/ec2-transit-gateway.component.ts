import { Component, OnInit } from '@angular/core';
import { GenericResource } from '../../resource-view/generic-resource';
import { ResourceSyntax } from '../../resource-view/resource-list';
import { JsonResultService } from '../../json-result.service';
import { UsefulUtilsService } from '../../useful-utils.service';

@Component({
  selector: 'app-ec2-transit-gateway',
  templateUrl: './ec2-transit-gateway.component.html',
  styleUrls: ['./ec2-transit-gateway.component.css']
})
export class Ec2TransitGatewayComponent implements OnInit {
  tagCount:number;
  tagArray;
  isPresent:boolean;
  serviceSyntax:String;
  curRes:GenericResource;

  constructor(public result:JsonResultService, public utility:UsefulUtilsService) {
    var resProp:ResourceSyntax={
      "Type" : "AWS::EC2::TransitGateway",
      "Properties" : {
        "AmazonSideAsn" : "Integer. A private Autonomous System Number (ASN) for the Amazon side of a BGP session. The range is 64512 to 65534 for 16-bit ASNs and 4200000000 to 4294967294 for 32-bit ASNs.",
        "AutoAcceptSharedAttachments" : "Indicates whether attachment requests are automatically accepted. The default is disable.",
        "DefaultRouteTableAssociation" : "Enable or disable automatic association with the default association route table. The default is enable.",
        "DefaultRouteTablePropagation" : "Enable or disable automatic propagation of routes to the default propagation route table. The default is enable.",
        "Description" : "Description",
        "DnsSupport" : "Enable or disable DNS support. The default is enable.",
        "VpnEcmpSupport" : "Enable or disable Equal Cost Multipath Protocol. The default is enable."
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
