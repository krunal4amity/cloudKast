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
  ec2_securitygroup=[];
  ec2_customergateway=[];
  ec2_dhcpoptions=[];
  ec2_ec2fleet=[];
  ec2_egressonlyinternetgateway=[];
  ec2_eipassociation=[];
  ec2_flowlog=[];
  ec2_host=[];
  ec2_internetgateway=[];
  ec2_launchtemplate=[];
  ec2_natgateway=[];
  ec2_networkacl=[];
  ec2_networkaclentry=[];
  ec2_networkinterface=[];
  ec2_networkattachment=[];
  ec2_networkinterfacepermission=[];
  ec2_placementgroup=[];
  ec2_route=[];
  ec2_routetable=[];
  ec2_securitygroupegress=[];
  ec2_securitygroupingress=[];
  ec2_spotfleet=[];
  ec2_subnet=[];
  ec2_subnetcidrblock=[];
  ec2_subnetnetworkaclassociation=[];
  ec2_subnetroutetableassociation=[];
  ec2_transitgateway=[];
  ec2_transitgatewayattachment=[];
  ec2_transitgatewayroute=[];
  ec2_transitgatewayroutetable=[];
  ec2_transitgatewayroutetableassociation=[];
  ec2_transitgatewayroutetablepropagation=[];
  ec2_volumeattachment=[];
  ec2_vpc=[];
  ec2_vpccidrblock=[];
  ec2_vpcdhcpoptionsassociation=[];
  ec2_vpcendpoint=[];
  ec2_vpcendpointconnectionnotification=[];
  ec2_vpcendpointservice=[];
  ec2_vpcendpointservicepermissions=[];
  ec2_vpcgatewayattachment=[];
  ec2_vpcpeeringconnection=[];
  ec2_vpnconnection=[];
  ec2_vpnconnectionroute=[];
  ec2_vpngateway=[];
  ec2_vpngatewayroutepropagation=[];


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
        if(this.resource_detail[2]=="SecurityGroup") this.ec2_securitygroup.push(subresource.resourcecount);
        if(this.resource_detail[2]=="CustomerGateway") this.ec2_securitygroup.push(subresource.resourcecount);
        if(this.resource_detail[2]=="DHCPOptions") this.ec2_securitygroup.push(subresource.resourcecount);        
        if(this.resource_detail[2]=="EC2Fleet") this.ec2_securitygroup.push(subresource.resourcecount);
        if(this.resource_detail[2]=="EgressOnlyInternetGateway") this.ec2_securitygroup.push(subresource.resourcecount);
        if(this.resource_detail[2]=="EIPAssociation") this.ec2_securitygroup.push(subresource.resourcecount);
        if(this.resource_detail[2]=="FlowLog") this.ec2_securitygroup.push(subresource.resourcecount);
        if(this.resource_detail[2]=="Host") this.ec2_securitygroup.push(subresource.resourcecount);
        if(this.resource_detail[2]=="InternetGateway") this.ec2_securitygroup.push(subresource.resourcecount);
        if(this.resource_detail[2]=="LaunchTemplate") this.ec2_securitygroup.push(subresource.resourcecount);
        if(this.resource_detail[2]=="NatGateway") this.ec2_securitygroup.push(subresource.resourcecount);
        if(this.resource_detail[2]=="NetworkAcl") this.ec2_securitygroup.push(subresource.resourcecount);
        if(this.resource_detail[2]=="NetworkAclEntry") this.ec2_securitygroup.push(subresource.resourcecount);
        if(this.resource_detail[2]=="NetworkInterface") this.ec2_securitygroup.push(subresource.resourcecount);
        if(this.resource_detail[2]=="NetworkInterfaceAttachment") this.ec2_securitygroup.push(subresource.resourcecount);
        if(this.resource_detail[2]=="NetworkInterfacePermission") this.ec2_securitygroup.push(subresource.resourcecount);
        if(this.resource_detail[2]=="PlacementGroup") this.ec2_securitygroup.push(subresource.resourcecount);
        if(this.resource_detail[2]=="Route") this.ec2_securitygroup.push(subresource.resourcecount);
        if(this.resource_detail[2]=="RouteTable") this.ec2_securitygroup.push(subresource.resourcecount);
        if(this.resource_detail[2]=="SecurityGroupEgress") this.ec2_securitygroup.push(subresource.resourcecount);
        if(this.resource_detail[2]=="SecurityGroupIngress") this.ec2_securitygroup.push(subresource.resourcecount);
        if(this.resource_detail[2]=="SpotFleet") this.ec2_securitygroup.push(subresource.resourcecount);
        if(this.resource_detail[2]=="Subnet") this.ec2_securitygroup.push(subresource.resourcecount);
        if(this.resource_detail[2]=="SubnetCidrBlock") this.ec2_securitygroup.push(subresource.resourcecount);
        if(this.resource_detail[2]=="SubnetNetworkAclAssociation") this.ec2_securitygroup.push(subresource.resourcecount);
        if(this.resource_detail[2]=="SubnetRouteTableAssociation") this.ec2_securitygroup.push(subresource.resourcecount);
        if(this.resource_detail[2]=="TransitGateway") this.ec2_securitygroup.push(subresource.resourcecount);
        if(this.resource_detail[2]=="TransitGatewayAttachment") this.ec2_securitygroup.push(subresource.resourcecount);
        if(this.resource_detail[2]=="TransitGatewayRoute") this.ec2_securitygroup.push(subresource.resourcecount);
        if(this.resource_detail[2]=="TransitGatewayRouteTable") this.ec2_securitygroup.push(subresource.resourcecount);
        if(this.resource_detail[2]=="TransitGatewayRouteTableAssociation") this.ec2_securitygroup.push(subresource.resourcecount);
        if(this.resource_detail[2]=="TransitGatewayRouteTablePropagation") this.ec2_securitygroup.push(subresource.resourcecount);
        if(this.resource_detail[2]=="VolumeAttachment") this.ec2_securitygroup.push(subresource.resourcecount);
        if(this.resource_detail[2]=="VPC") this.ec2_securitygroup.push(subresource.resourcecount);
        if(this.resource_detail[2]=="VPCCidrBlock") this.ec2_securitygroup.push(subresource.resourcecount);
        if(this.resource_detail[2]=="VPCDHCPOptionsAssociation") this.ec2_securitygroup.push(subresource.resourcecount);
        if(this.resource_detail[2]=="VPCEndpoint") this.ec2_securitygroup.push(subresource.resourcecount);
        if(this.resource_detail[2]=="VPCEndpointConnectionNotification") this.ec2_securitygroup.push(subresource.resourcecount);
        if(this.resource_detail[2]=="VPCEndpointService") this.ec2_securitygroup.push(subresource.resourcecount);
        if(this.resource_detail[2]=="VPCEndpointServicePermissions") this.ec2_securitygroup.push(subresource.resourcecount);
        if(this.resource_detail[2]=="VPCGatewayAttachment") this.ec2_securitygroup.push(subresource.resourcecount);
        if(this.resource_detail[2]=="VPCPeeringConnection") this.ec2_securitygroup.push(subresource.resourcecount);
        if(this.resource_detail[2]=="VPNConnection") this.ec2_securitygroup.push(subresource.resourcecount);
        if(this.resource_detail[2]=="VPNConnectionRoute") this.ec2_securitygroup.push(subresource.resourcecount);
        if(this.resource_detail[2]=="VPNGateway") this.ec2_securitygroup.push(subresource.resourcecount);
        if(this.resource_detail[2]=="VPNGatewayRoutePropagation") this.ec2_securitygroup.push(subresource.resourcecount);
        break;
      default:
        break;
    }    
  }

  addService(){
  }


}
