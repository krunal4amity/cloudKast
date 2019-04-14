import { Component, OnInit, Input } from '@angular/core';
import {RESOURCE_DATA, ResourceSyntax} from './resource-list';
import {AWSResource} from './resource-list';
import {SubResource} from './resource-list';
import { AwsResourcesService } from '../aws-resources.service';

@Component({
  selector: 'app-resource-view',
  templateUrl: './resource-view.component.html',
  styleUrls: ['./resource-view.component.css']
})
export class ResourceViewComponent implements OnInit {

  constructor(public awsresource:AwsResourcesService) {
  }

  ngOnInit() {
  }

  resourcelist=RESOURCE_DATA;
  resource_detail=[]

  //Route53 resources
  route53_healthcheck=[];
  route53_hostedzone=[];
  route53_recordset=[];
  route53_recordsetgroup=[];

  //Route53 Resolver resources
  r53_resolver_resolverendpoint=[]
  r53_resolver_resolverrule=[]
  r53_resolver_resolverruleassociation=[]

  //IAM resources
  iam_accesskey=[]
  iam_group=[]
  iam_instanceprofile=[]
  iam_managedpolicy=[]
  iam_policy=[]
  iam_role=[]
  iam_servicelinkedrole=[]
  iam_user=[]
  iam_usertogroupaddition=[]

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
  ec2_networkinterfaceattachment=[];
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

  //autoscaling
  ag_agGroup=[];
  ag_launchConfiguration=[];
  ag_lifecyclehook=[];
  ag_scalingpolicy=[];
  ag_scheduledAction=[]

  //elbv2
  elbv2_listener=[];
  elbv2_listenercertificate=[];
  elbv2_listenerrule=[];
  elbv2_loadbalancer=[];
  elbv2_targetgroup=[];

  //certificate manager
  acm_certificate=[];

  //dynamodb
  dynamodb_table=[];

  //sqs
  sqs_queue=[];
  sqs_queuepolicy=[];

  //sns
  sns_subscription=[];
  sns_topic=[];
  sns_topicpolicy=[]

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
      case "Route53Resolver":
        if(this.resource_detail[2]=="ResolverEndpoint") this.r53_resolver_resolverendpoint.push(subresource.resourcecount);
        if(this.resource_detail[2]=="ResolverRule") this.r53_resolver_resolverrule.push(subresource.resourcecount);
        if(this.resource_detail[2]=="ResolverRuleAssociation") this.r53_resolver_resolverruleassociation.push(subresource.resourcecount);
        break;
      case "EC2":
        if(this.resource_detail[2]=="Volume") this.ec2_volume.push(subresource.resourcecount);
        if(this.resource_detail[2]=="EIP") this.ec2_eip.push(subresource.resourcecount);               
        if(this.resource_detail[2]=="Instance") this.ec2_instance.push(subresource.resourcecount);               
        if(this.resource_detail[2]=="SecurityGroup") this.ec2_securitygroup.push(subresource.resourcecount);
        if(this.resource_detail[2]=="CustomerGateway") this.ec2_customergateway.push(subresource.resourcecount);
        if(this.resource_detail[2]=="DHCPOptions") this.ec2_dhcpoptions.push(subresource.resourcecount);        
        if(this.resource_detail[2]=="EC2Fleet") this.ec2_ec2fleet.push(subresource.resourcecount);
        if(this.resource_detail[2]=="EgressOnlyInternetGateway") this.ec2_egressonlyinternetgateway.push(subresource.resourcecount);
        if(this.resource_detail[2]=="EIPAssociation") this.ec2_eipassociation.push(subresource.resourcecount);
        if(this.resource_detail[2]=="FlowLog") this.ec2_flowlog.push(subresource.resourcecount);
        if(this.resource_detail[2]=="Host") this.ec2_host.push(subresource.resourcecount);
        if(this.resource_detail[2]=="InternetGateway") this.ec2_internetgateway.push(subresource.resourcecount);
        if(this.resource_detail[2]=="LaunchTemplate") this.ec2_launchtemplate.push(subresource.resourcecount);
        if(this.resource_detail[2]=="NatGateway") this.ec2_natgateway.push(subresource.resourcecount);
        if(this.resource_detail[2]=="NetworkAcl") this.ec2_networkacl.push(subresource.resourcecount);
        if(this.resource_detail[2]=="NetworkAclEntry") this.ec2_networkaclentry.push(subresource.resourcecount);
        if(this.resource_detail[2]=="NetworkInterface") this.ec2_networkinterface.push(subresource.resourcecount);
        if(this.resource_detail[2]=="NetworkInterfaceAttachment") this.ec2_networkinterfaceattachment.push(subresource.resourcecount);
        if(this.resource_detail[2]=="NetworkInterfacePermission") this.ec2_networkinterfacepermission.push(subresource.resourcecount);
        if(this.resource_detail[2]=="PlacementGroup") this.ec2_placementgroup.push(subresource.resourcecount);
        if(this.resource_detail[2]=="Route") this.ec2_route.push(subresource.resourcecount);
        if(this.resource_detail[2]=="RouteTable") this.ec2_routetable.push(subresource.resourcecount);
        if(this.resource_detail[2]=="SecurityGroupEgress") this.ec2_securitygroupegress.push(subresource.resourcecount);
        if(this.resource_detail[2]=="SecurityGroupIngress") this.ec2_securitygroupingress.push(subresource.resourcecount);
        if(this.resource_detail[2]=="SpotFleet") this.ec2_spotfleet.push(subresource.resourcecount);
        if(this.resource_detail[2]=="Subnet") this.ec2_subnet.push(subresource.resourcecount);
        if(this.resource_detail[2]=="SubnetCidrBlock") this.ec2_subnetcidrblock.push(subresource.resourcecount);
        if(this.resource_detail[2]=="SubnetNetworkAclAssociation") this.ec2_subnetnetworkaclassociation.push(subresource.resourcecount);
        if(this.resource_detail[2]=="SubnetRouteTableAssociation") this.ec2_subnetroutetableassociation.push(subresource.resourcecount);
        if(this.resource_detail[2]=="TransitGateway") this.ec2_transitgateway.push(subresource.resourcecount);
        if(this.resource_detail[2]=="TransitGatewayAttachment") this.ec2_transitgatewayattachment.push(subresource.resourcecount);
        if(this.resource_detail[2]=="TransitGatewayRoute") this.ec2_transitgatewayroute.push(subresource.resourcecount);
        if(this.resource_detail[2]=="TransitGatewayRouteTable") this.ec2_transitgatewayroutetable.push(subresource.resourcecount);
        if(this.resource_detail[2]=="TransitGatewayRouteTableAssociation") this.ec2_transitgatewayroutetableassociation.push(subresource.resourcecount);
        if(this.resource_detail[2]=="TransitGatewayRouteTablePropagation") this.ec2_transitgatewayroutetablepropagation.push(subresource.resourcecount);
        if(this.resource_detail[2]=="VolumeAttachment") this.ec2_volumeattachment.push(subresource.resourcecount);
        if(this.resource_detail[2]=="VPC") this.ec2_vpc.push(subresource.resourcecount);
        if(this.resource_detail[2]=="VPCCidrBlock") this.ec2_vpccidrblock.push(subresource.resourcecount);
        if(this.resource_detail[2]=="VPCDHCPOptionsAssociation") this.ec2_vpcdhcpoptionsassociation.push(subresource.resourcecount);
        if(this.resource_detail[2]=="VPCEndpoint") this.ec2_vpcendpoint.push(subresource.resourcecount);
        if(this.resource_detail[2]=="VPCEndpointConnectionNotification") this.ec2_vpcendpointconnectionnotification.push(subresource.resourcecount);
        if(this.resource_detail[2]=="VPCEndpointService") this.ec2_vpcendpointservice.push(subresource.resourcecount);
        if(this.resource_detail[2]=="VPCEndpointServicePermissions") this.ec2_vpcendpointservicepermissions.push(subresource.resourcecount);
        if(this.resource_detail[2]=="VPCGatewayAttachment") this.ec2_vpcgatewayattachment.push(subresource.resourcecount);
        if(this.resource_detail[2]=="VPCPeeringConnection") this.ec2_vpcpeeringconnection.push(subresource.resourcecount);
        if(this.resource_detail[2]=="VPNConnection") this.ec2_vpnconnection.push(subresource.resourcecount);
        if(this.resource_detail[2]=="VPNConnectionRoute") this.ec2_vpnconnectionroute.push(subresource.resourcecount);
        if(this.resource_detail[2]=="VPNGateway") this.ec2_vpngateway.push(subresource.resourcecount);
        if(this.resource_detail[2]=="VPNGatewayRoutePropagation") this.ec2_vpngatewayroutepropagation.push(subresource.resourcecount);
        break;
      case "IAM":
      if(this.resource_detail[2]=="AccessKey") this.iam_accesskey.push(subresource.resourcecount);
      if(this.resource_detail[2]=="Group") this.iam_group.push(subresource.resourcecount);
      if(this.resource_detail[2]=="InstanceProfile") this.iam_instanceprofile.push(subresource.resourcecount);
      if(this.resource_detail[2]=="ManagedPolicy") this.iam_managedpolicy.push(subresource.resourcecount);
      if(this.resource_detail[2]=="Policy") this.iam_policy.push(subresource.resourcecount);
      if(this.resource_detail[2]=="Role") this.iam_role.push(subresource.resourcecount);
      if(this.resource_detail[2]=="ServiceLinkedRole") this.iam_servicelinkedrole.push(subresource.resourcecount);
      if(this.resource_detail[2]=="User") this.iam_user.push(subresource.resourcecount);
      if(this.resource_detail[2]=="UserToGroupAddition") this.iam_usertogroupaddition.push(subresource.resourcecount);
        break;

      case "AutoScaling":
      if(this.resource_detail[2]=="AutoScalingGroup") this.ag_agGroup.push(subresource.resourcecount);
      if(this.resource_detail[2]=="LaunchConfiguration") this.ag_launchConfiguration.push(subresource.resourcecount);
      if(this.resource_detail[2]=="LifecycleHook") this.ag_lifecyclehook.push(subresource.resourcecount);
      if(this.resource_detail[2]=="ScalingPolicy") this.ag_scalingpolicy.push(subresource.resourcecount);
      if(this.resource_detail[2]=="ScheduledAction") this.ag_scheduledAction.push(subresource.resourcecount);
        break;

      case "ElasticLoadBalancingV2":
      if(this.resource_detail[2]=="Listener") this.elbv2_listener.push(subresource.resourcecount);
      if(this.resource_detail[2]=="ListenerCertificate") this.elbv2_listenercertificate.push(subresource.resourcecount);
      if(this.resource_detail[2]=="ListenerRule") this.elbv2_listenerrule.push(subresource.resourcecount);
      if(this.resource_detail[2]=="LoadBalancer") this.elbv2_loadbalancer.push(subresource.resourcecount);
      if(this.resource_detail[2]=="TargetGroup") this.elbv2_targetgroup.push(subresource.resourcecount);
        break;

      case "Certificate Manager":
      if(this.resource_detail[2]=="Certificate") this.acm_certificate.push(subresource.resourcecount);      
        break;

      case "SNS":
      if(this.resource_detail[2]=="Subscription") this.sns_subscription.push(subresource.resourcecount);
      if(this.resource_detail[2]=="Topic") this.sns_topic.push(subresource.resourcecount);
      if(this.resource_detail[2]=="TopicPolicy") this.sns_topicpolicy.push(subresource.resourcecount);
      
        break;

      case "SQS":
      if(this.resource_detail[2]=="Queue") this.sqs_queue.push(subresource.resourcecount);
      if(this.resource_detail[2]=="QueuePolicy") this.sqs_queuepolicy.push(subresource.resourcecount);
        break;

      case "DynamoDB":
      if(this.resource_detail[2]=="Table") this.dynamodb_table.push(subresource.resourcecount);
        break;

      default:
        break;
    }    
  }

  addService(){
  }


}
