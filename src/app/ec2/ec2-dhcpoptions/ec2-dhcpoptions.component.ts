import { Component, OnInit } from '@angular/core';
import { GenericResource } from '../../resource-view/generic-resource';
import { ResourceSyntax } from '../../resource-view/resource-list';
import { JsonResultService } from '../../json-result.service';
import { UsefulUtilsService } from '../../useful-utils.service';

@Component({
  selector: 'app-ec2-dhcpoptions',
  templateUrl: './ec2-dhcpoptions.component.html',
  styleUrls: ['./ec2-dhcpoptions.component.css']
})
export class Ec2DHCPOptionsComponent implements OnInit {
  tagCount:number;
  tagArray;
  isPresent:boolean;
  serviceSyntax:String;
  curRes:GenericResource;

  constructor(public result:JsonResultService, public utility:UsefulUtilsService) {
    var resProp:ResourceSyntax=
    {
       "Type" : "AWS::EC2::DHCPOptions",
       "Properties" : {
          "DomainName" : "** A domain name of your choice e.g. example.com",
          "DomainNameServers" : ["**The IP (IPv4) address of a domain name server. You can specify up to four addresses. At least one of the following properties must be specified:DomainNameServers, NetbiosNameServers, NtpServers. After this condition has been fulfilled, the rest of these properties are optional."],
          "NetbiosNameServers" : ["**The IP address (IPv4) of a NetBIOS name server. You can specify up to four addresses. At least one of the following properties must be specified:DomainNameServers, NetbiosNameServers, NtpServers. After this condition has been fulfilled, the rest of these properties are optional."],
          "NetbiosNodeType" : "**An integer value indicating the NetBIOS node type: 1: Broadcast. 2: Point-to-point. 4: Mixed mode. 8: Hybrid.  Required if NetBiosNameServers is specified; optional otherwise. ",
          "NtpServers" : ["**The IP address (IPv4) of a Network Time Protocol (NTP) server. You can specify up to four addresses. List of String values. At least one of the following properties must be specified:DomainNameServers, NetbiosNameServers, NtpServers. After this condition has been fulfilled, the rest of these properties are optional."]
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
