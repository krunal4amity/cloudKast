import { Injectable } from '@angular/core';
import { ResourceSyntax } from './resource-view/resource-list';

@Injectable({
  providedIn: 'root'
})
export class AwsResourcesService {

  constructor() { }

  ec2_volume:ResourceSyntax={
    "Type":"AWS::EC2::Volume",
    "Properties" : {
     "AutoEnableIO" : "Boolean",
     "AvailabilityZone" : "String,Required: Yes",
     "Encrypted" : "Boolean,Required: Conditional. If you specify the KmsKeyId property, you must enable encryption.",
     "Iops" : "Number,Required: Conditional. Required when the volume type is io1; not used with other volume types.",
     "KmsKeyId" : "String,The Amazon Resource Name (ARN) of the AWS Key Management Service master key",
     "Size" : "Integer,Required: Conditional. If you don't specify a value for the SnapshotId property, you must specify this property.",
     "SnapshotId" : "String",
     "VolumeType" : "String,Valid Values: standard | io1 | gp2 | sc1 | st1,Required: No"
    }
  }

  ec2_eip={
    "Type" : "AWS::EC2::EIP",
    "Properties" : {
       "Domain" : "**Set to vpc to allocate the address to your Virtual Private Cloud (VPC). No other values are supported. Required when allocating an address to a VPC",
       "InstanceId" : "The Instance ID of the Amazon EC2 instance that you want to associate with this Elastic IP address.",
       "PublicIpv4Pool" : "Specifies the ID of an address pool that you own to let Amazon EC2 select an address from the address pool."
    }
  };

  ec2_instance={
    "Type" : "AWS::EC2::Instance",
    "Properties" : {
       "Metadata":{"info":"This is not a property but rather an attribute. Use the AWS::CloudFormation::Init type to include metadata on an Amazon EC2 instance for the cfn-init helper script. If your template calls the cfn-init script, the script looks for resource metadata rooted in the AWS::CloudFormation::Init metadata key."},
       "Affinity" : "Indicates whether Amazon Elastic Compute Cloud (Amazon EC2) always associates the instance with a dedicated host.",
       "AvailabilityZone" : "If not specified, an Availability Zone will be automatically chosen for you based on the load balancing criteria for the region.",
       "BlockDeviceMappings" : ["A list of Amazon EC2 BlockDeviceMapping.##"],
       "CreditSpecification" : {"info":" Amazon EC2 Instance CreditSpecification.##"},
       "DisableApiTermination" : "Boolean. Specifies whether the instance can be terminated through the API.",
       "EbsOptimized" : "Boolean",
       "ElasticGpuSpecifications" : ["Specifies the Elastic GPUs. An Elastic GPU is a GPU resource that you can attach to your instance to accelerate the graphics performance of your applications.##"],
       "ElasticInferenceAccelerators" : ["Specify a list of elastic inference accelerators for an instance. ##"],
       "HostId" : "the ID of a dedicated host that the instance is associated with",
       "IamInstanceProfile" : "",
       "ImageId" : "",
       "InstanceInitiatedShutdownBehavior" : "Indicates whether an instance stops or terminates when you shut down the instance from the instance's operating system shutdown command",
       "InstanceType" : "",
       "Ipv6AddressCount" : "The number of IPv6 addresses to associate with the instance's primary network interface. ",
       "Ipv6Addresses" : ["List of EC2 NetworkInterface Ipv6Addresses##"],
       "KernelId" : "",
       "KeyName" : "",
       "LaunchTemplate" : {"info":" Amazon EC2 Instance LaunchTemplateSpecification##"},
       "LicenseSpecifications" : ["Associate a list of license configurations with the instance.##"],
       "Monitoring" : "Boolean. Specifies whether detailed monitoring is enabled for the instance.",
       "NetworkInterfaces" : ["A list of embedded objects that describes the network interfaces to associate with this instance.##"],
       "PlacementGroupName" : "The name of an existing placement group that you want to launch the instance into (for cluster instances).",
       "PrivateIpAddress" : "The private IP address for this instance.By default, Amazon VPC selects an IP address from the subnet for the instance.",
       "RamdiskId" : "The ID of the RAM disk to select. Some kernels require additional drivers at launch. ",
       "SecurityGroupIds" : ["** [String,...] List of String values. A list that contains the security group IDs for VPC security groups to assign to the Amazon EC2 instance. If you specified the NetworkInterfaces property, do not specify this property."],
       "SecurityGroups" : ["[String,...] Valid only for Amazon EC2 security groups. A list that contains the Amazon EC2 security groups to assign to the Amazon EC2 instance."],
       "SourceDestCheck" : "Boolean. Controls whether source/destination checking is enabled on the instance. Also determines if an instance in a VPC will perform network address translation (NAT).For the instance to perform NAT, the value must be false",
       "SsmAssociations" : ["List of Amazon EC2 Instance SsmAssociations.##"],
       "SubnetId" : "",
       "Tenancy" : "The tenancy of the instance that you want to launch, such as default, dedicated, or host. ",
       "UserData" : "Base64-encoded MIME user data that is made available to the instances.",
       "Volumes" : ["A list of EC2 MountPoints.##"],
       "AdditionalInfo" : "",
       "CreationPolicy":{"info":"Use the CreationPolicy attribute when you want to wait on resource configuration actions before stack creation proceeds. For example, if you install and configure software applications on an EC2 instance, you might want those applications to be running before proceeding. In such cases, you can add a CreationPolicy attribute to the instance, and then send a success signal to the instance after the applications are installed and configured."}       
    }
 };

  ec2_securitygroup={
    "Type" : "AWS::EC2::SecurityGroup",
    "Properties" : {
       "GroupName" : "If you don't specify a GroupName, AWS CloudFormation generates a unique physical ID and uses that ID for the group name.",
       "GroupDescription" : "*description",
       "SecurityGroupEgress" : ["A list of Amazon EC2 security group egress rules.##"],
       "SecurityGroupIngress" : ["A list of Amazon EC2 security group ingress rules.##"],
       "VpcId" : "*The physical ID of the VPC. You can obtain the physical ID by using a reference function"
    }
  };

  ec2_customergateway=    {
    "Type" : "AWS::EC2::CustomerGateway",
    "Properties" : {
       "BgpAsn" : "*The customer gateway's Border Gateway Protocol (BGP) Autonomous System Number (ASN).",
       "IpAddress" : "*The internet-routable IP address for the customer gateway's outside interface. The address must be static.",
       "Type" : "*The type of VPN connection that this customer gateway supports. e.g. ipsec.1"
    }
 };

  ec2_dhcpoptions=    {
    "Type" : "AWS::EC2::DHCPOptions",
    "Properties" : {
       "DomainName" : "** A domain name of your choice e.g. example.com",
       "DomainNameServers" : ["**The IP (IPv4) address of a domain name server. You can specify up to four addresses. At least one of the following properties must be specified:DomainNameServers, NetbiosNameServers, NtpServers. After this condition has been fulfilled, the rest of these properties are optional."],
       "NetbiosNameServers" : ["**The IP address (IPv4) of a NetBIOS name server. You can specify up to four addresses. At least one of the following properties must be specified:DomainNameServers, NetbiosNameServers, NtpServers. After this condition has been fulfilled, the rest of these properties are optional."],
       "NetbiosNodeType" : "**An integer value indicating the NetBIOS node type: 1: Broadcast. 2: Point-to-point. 4: Mixed mode. 8: Hybrid.  Required if NetBiosNameServers is specified; optional otherwise. ",
       "NtpServers" : ["**The IP address (IPv4) of a Network Time Protocol (NTP) server. You can specify up to four addresses. List of String values. At least one of the following properties must be specified:DomainNameServers, NetbiosNameServers, NtpServers. After this condition has been fulfilled, the rest of these properties are optional."]
    }
 };

  ec2_ec2fleet={
    "Type" : "AWS::EC2::EC2Fleet",
    "Properties" : {
      "ExcessCapacityTerminationPolicy" : "Indicates whether running instances should be terminated if the total target capacity of the EC2 Fleet is decreased below the current size of the EC2 Fleet.",
      "LaunchTemplateConfigs" : ["*List of FleetLaunchTemplateConfigRequest property types##"],
      "OnDemandOptions" : {"info":"Type: OnDemandOptionsRequest. The allocation strategy of On-Demand Instances in an EC2 Fleet.## "},
      "ReplaceUnhealthyInstances" : "Boolean. Indicates whether EC2 Fleet should replace unhealthy instances.",
      "SpotOptions" : {"info":"Type: SpotOptionsRequest. Describes the configuration of Spot Instances in an EC2 Fleet.##"},
      "TagSpecifications" : ["List of TagSpecification property types.The key-value pair for tagging the EC2 Fleet request on creation. The value for ResourceType must be fleet, otherwise the fleet request fails.##"],
      "TargetCapacitySpecification" : {"info": "*TargetCapacitySpecificationRequest Type. The TotalTargetCapacity, OnDemandTargetCapacity, SpotTargetCapacity, and DefaultCapacityType structure.##"},
      "TerminateInstancesWithExpiration" : "Boolean. Indicates whether running instances should be terminated when the EC2 Fleet expires.",
      "Type" : "The type of the request. By default, the EC2 Fleet places an asynchronous request for your desired capacity, and maintains it by replenishing interrupted Spot Instances (maintain). A value of instant places a synchronous one-time request, and returns errors for any instances that could not be launched. A value of request places an asynchronous one-time request without maintaining capacity or submitting requests in alternative capacity pools if capacity is unavailable.",
      "ValidFrom" : "The start date and time of the request, in UTC format (for example, YYYY-MM-DDTHH:MM:SSZ). The default is to start fulfilling the request immediately.",
      "ValidUntil" : "The end date and time of the request, in UTC format (for example, YYYY-MM-DDTHH:MM:SSZ). At this point, no new EC2 Fleet requests are placed or able to fulfill the request. The default end date is 7 days from the current date."
    }
  };

  ec2_egressonlyinternetgateway={
    "Type": "AWS::EC2::EgressOnlyInternetGateway",
    "Properties": {
      "VpcId": "* the id of the vpc."
    }
  };

  ec2_eipassociation=    {
    "Type": "AWS::EC2::EIPAssociation",
    "Properties": {
       "AllocationId": "**[EC2-VPC] Allocation ID for the VPC Elastic IP address you want to associate with an Amazon EC2 instance in your VPC.Conditional. Required for EC2-VPC.",
       "EIP": "**Elastic IP address that you want to associate with the Amazon EC2 instance specified by the InstanceId property. Required for EC2-Classic.",
       "InstanceId": "**Instance ID of the Amazon EC2 instance that you want to associate with the Elastic IP address specified by the EIP property. If the instance has more than one network interface, you must specify a network interface ID. Conditional. If you specify the EIP property, you must specify this property. If you specify the AllocationId property, you must specify this property or the NetworkInterfaceId property.",
       "NetworkInterfaceId": "**The ID of the network interface to associate with the Elastic IP address. If the instance has more than one network interface, you must specify a network interface ID.If you specify the AllocationId property, you must specify this property or the InstanceId property.",
       "PrivateIpAddress": "The private IP address that you want to associate with the Elastic IP address. The private IP address is restricted to the primary and secondary private IP addresses that are associated with the network interface."
    }
 };

  ec2_flowlog={
    "Type" : "AWS::EC2::FlowLog",
    "Properties" : {
      "DeliverLogsPermissionArn" : "The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that permits Amazon EC2 to publish flow logs to a CloudWatch Logs log group in your account. If you specify LogDestinationType as s3, do not specify DeliverLogsPermissionArn or LogGroupName.",
      "LogDestination" : "If you specify LogDestinationType as s3, do not specify DeliverLogsPermissionArn or LogGroupName.",
      "LogDestinationType" : "Specifies the type of destination to which the flow log data is to be published. Flow log data can be published to CloudWatch Logs or Amazon S3. To publish flow log data to CloudWatch Logs, specify 'cloud-watch-logs'. To publish flow log data to Amazon S3, specify 's3'.",
      "LogGroupName" : "The name of a new or existing CloudWatch Logs log group where Amazon EC2 publishes your flow logs.",
      "ResourceId" : "*The ID of the subnet, network interface, or VPC for which you want to create a flow log.",
      "ResourceType" : "*The type of resource that you specified in the ResourceId property. For example, if you specified a VPC ID for the ResourceId property, specify VPC for this property.",
      "TrafficType" : "*The type of traffic to log. You can log traffic that the resource accepts or rejects, or all traffic. Valid Values: ACCEPT | REJECT | ALL"
    }
  };

  ec2_host={
    "Type" : "AWS::EC2::Host",
    "Properties" : {
      "AutoPlacement" : "Indicates if the host accepts EC2 instances with only matching configurations or if instances must also specify the host ID. Instances that don't specify a host ID can't launch onto a host with AutoPlacement set to off.",
      "AvailabilityZone" : "*The Availability Zone (AZ) in which to launch the dedicated host.",
      "InstanceType" : "*The instance type that the dedicated host accepts."
    }
  };

  ec2_internetgateway=    {
    "Type" : "AWS::EC2::InternetGateway",
    "Properties" : {}
 };

  ec2_launchtemplate=    {
    "Type" : "AWS::EC2::LaunchTemplate",
    "Properties" : {
      "LaunchTemplateName" : "Minimum length of 3. Maximum length of 128.",
      "LaunchTemplateData" : {"info":"Type: LaunchTemplateData##"}
    }
  };

  ec2_natgateway={
    "Type" : "AWS::EC2::NatGateway",
    "Properties" : {
      "AllocationId" : "*The allocation ID of an Elastic IP address to associate with the NAT gateway. If the Elastic IP address is associated with another resource, you must first disassociate it.",
      "SubnetId" : "*The public subnet in which to create the NAT gateway."
    }
  };

  ec2_networkacl=    {
    "Type" : "AWS::EC2::NetworkAcl",
    "Properties" : {
       "VpcId" : "*The ID of the VPC where the network ACL will be created."
    }
 };

  ec2_networkaclentry={
    "Type" : "AWS::EC2::NetworkAclEntry",
    "Properties" : {
       "CidrBlock" : "**You must specify the CidrBlock or Ipv6CidrBlock property.",
       "Egress" : "Boolean. Whether this rule applies to egress traffic from the subnet (true) or ingress traffic to the subnet (false). By default, AWS CloudFormation specifies false.",
       "Icmp" : {"info":"**Type: EC2 NetworkAclEntry Icmp. required if specifying 1 (ICMP) for the protocol parameter.##"},
       "Ipv6CidrBlock" : "**You must specify the CidrBlock or Ipv6CidrBlock property.", 
       "NetworkAclId" : "*ID of the ACL where the entry will be created.",
       "PortRange" : {"info":"**Type: EC2 NetworkAclEntry PortRange. Required if specifying 6 (TCP) or 17 (UDP) for the protocol parameter.## "},
       "Protocol" : "*The IP protocol that the rule applies to. You must specify -1 or a protocol number. If you specify -1, all ports are opened and the PortRange property is ignored.",
       "RuleAction" : "*Whether to allow or deny traffic that matches the rule; valid values are 'allow' or 'deny'.",
       "RuleNumber" : "*Rule number to assign to the entry, such as 100. ACL entries are processed in ascending order by rule number. Entries can't use the same rule number unless one is an egress rule and the other is an ingress rule."
    }
 };

  ec2_networkinterface={
    "Type" : "AWS::EC2::NetworkInterface",
    "Properties" : {
       "Description" : "String",
       "GroupSet" : [ "Type: List of strings. A list of security group IDs associated with this network interface."],
       "Ipv6AddressCount" : "Integer. The number of IPv6 addresses to associate with the network interface. EC2 automatically selects the IPv6 addresses from the subnet range. To specify specific IPv6 addresses, use the Ipv6Addresses property and don't specify this property.",
       "Ipv6Addresses" : ["One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet to associate with the network interface. If you're specifying a number of IPv6 addresses, use the Ipv6AddressCount property and don't specify this property.##"],
       "PrivateIpAddress" : "Assigns a single private IP address to the network interface, which is used as the primary private IP address. If you want to specify multiple private IP address, use the PrivateIpAddresses property.",
       "PrivateIpAddresses" : ["Type: list of PrivateIpAddressSpecification. Assigns a list of private IP addresses to the network interface. You can specify a primary private IP address by setting the value of the Primary property to true in the PrivateIpAddressSpecification property. If you want EC2 to automatically assign private IP addresses, use the SecondaryPrivateIpAddressCount property and do not specify this property.##" ],
       "SecondaryPrivateIpAddressCount" : "Integer. The number of secondary private IP addresses that EC2 automatically assigns to the network interface. EC2 uses the value of the PrivateIpAddress property as the primary private IP address. If you don't specify that property, EC2 automatically assigns both the primary and secondary private IP addresses.",
       "SourceDestCheck" : "Boolean. Flag indicating whether traffic to or from the instance is validated.",
       "SubnetId" : "String"
    }
 };

  ec2_networkinterfaceattachment={
    "Type" : "AWS::EC2::NetworkInterfaceAttachment",
    "Properties" : {
       "DeleteOnTermination": "Whether to delete the network interface when the instance terminates. By default, this value is set to True.",
       "DeviceIndex": "*The network interface's position in the attachment order. For example, the first attached network interface has a DeviceIndex of 0.",
       "InstanceId": "*The ID of the instance to which you will attach the ENI.",
       "NetworkInterfaceId": "*The ID of the ENI that you want to attach."
    }
 };

  ec2_networkinterfacepermission={
    "Type" : "AWS::EC2::NetworkInterfacePermission",
    "Properties" : {
      "AwsAccountId" : "*Aws account id",
      "NetworkInterfaceId" : "*The ID of the network interface.",
      "Permission" : "*The type of permission to grant: INSTANCE-ATTACH or EIP-ASSOCIATE."
    }
  };

  ec2_placementgroup={
    "Type" : "AWS::EC2::PlacementGroup",
    "Properties" : {
      "Strategy" : "The placement strategy, which relates to the instance types that can be added to the placement group. For example, for the cluster strategy, you can cluster C4 instance types but not T2 instance types. Valid Values: cluster | spread | partition"
    }
  };

  ec2_route={
    "Type" : "AWS::EC2::Route",
    "Properties" : {
      "DestinationCidrBlock" : "**The IPv4 CIDR address block used for the destination match. For example, 0.0.0.0/0. Routing decisions are based on the most specific match. You must specify the DestinationCidrBlock or DestinationIpv6CidrBlock property.",
      "DestinationIpv6CidrBlock" : "**The IPv6 CIDR address block used for the destination match. For example, ::/0. Routing decisions are based on the most specific match. You must specify the DestinationCidrBlock or DestinationIpv6CidrBlock property.",
      "EgressOnlyInternetGatewayId" : "**The ID of an egress-only internet gateway that is attached to your VPC (over IPv6 only). Conditional. You must specify only one of the following properties: EgressOnlyInternetGatewayId, GatewayId, InstanceId, NatGatewayId, NetworkInterfaceId, or VpcPeeringConnectionId.",
      "GatewayId" : "**The ID of an internet gateway or virtual private gateway that is attached to your VPC. For example: igw-eaad4883. You must specify only one of the following properties: EgressOnlyInternetGatewayId, GatewayId, InstanceId, NatGatewayId, NetworkInterfaceId, or VpcPeeringConnectionId.",
      "InstanceId" : "**The ID of a NAT instance in your VPC. For example, i-1a2b3c4d. Conditional. You must specify only one of the following properties: EgressOnlyInternetGatewayId, GatewayId, InstanceId, NatGatewayId, NetworkInterfaceId, or VpcPeeringConnectionId.",
      "NatGatewayId" : "**The ID of a NAT gateway. For example, nat-0a12bc456789de0fg.You must specify only one of the following properties: EgressOnlyInternetGatewayId, GatewayId, InstanceId, NatGatewayId, NetworkInterfaceId, or VpcPeeringConnectionId.",
      "NetworkInterfaceId" : "**Allows the routing of network interface IDs.You must specify only one of the following properties: EgressOnlyInternetGatewayId, GatewayId, InstanceId, NatGatewayId, NetworkInterfaceId, or VpcPeeringConnectionId.",
      "RouteTableId" : "*The ID of the route table where the route will be added.",
      "VpcPeeringConnectionId" : "**The ID of a VPC peering connection. You must specify only one of the following properties: EgressOnlyInternetGatewayId, GatewayId, InstanceId, NatGatewayId, NetworkInterfaceId, or VpcPeeringConnectionId."
    }
  };

  ec2_routetable=    {
    "Type" : "AWS::EC2::RouteTable",
    "Properties" : {
       "VpcId" : "*The ID of the VPC where the route table will be created."
    }
 };

  ec2_securitygroupegress={
    "Type" : "AWS::EC2::SecurityGroupEgress",
    "Properties" : {
      "CidrIp" : "**You must specify a destination security group (DestinationPrefixListId or DestinationSecurityGroupId) or a CIDR range (CidrIp or CidrIpv6).",
      "CidrIpv6" : "**You must specify a destination security group (DestinationPrefixListId or DestinationSecurityGroupId) or a CIDR range (CidrIp or CidrIpv6).",
      "Description" : "description",
      "DestinationPrefixListId" : "**The AWS service prefix of an Amazon VPC endpoint.You must specify a destination security group (DestinationPrefixListId or DestinationSecurityGroupId) or a CIDR range (CidrIp or CidrIpv6).",
      "DestinationSecurityGroupId" : "**Specifies the group ID of the destination Amazon VPC security group. You must specify a destination security group (DestinationPrefixListId or DestinationSecurityGroupId) or a CIDR range (CidrIp or CidrIpv6).",
      "FromPort" : "*Start of port range for the TCP and UDP protocols, or an ICMP type number. If you specify icmp for the IpProtocol property, you can specify -1 as a wildcard (i.e., any ICMP type number).",
      "GroupId" : "*ID of the Amazon VPC security group to modify. This value can be a reference to an AWS::EC2::SecurityGroup resource that has a valid VpcId property or the ID of an existing Amazon VPC security group.",
      "IpProtocol" : "*IP protocol name or number.se -1 to specify all protocols. If you specify -1, or a protocol number other than tcp, udp, icmp, or 58 (ICMPv6), traffic on all ports is allowed, regardless of any ports you specify. ",
      "ToPort" : "*Integer. End of port range for the TCP and UDP protocols, or an ICMP code. If you specify icmp for the IpProtocol property, you can specify -1 as a wildcard (i.e., any ICMP code)."
    }
  };

  ec2_securitygroupingress={
    "Type" : "AWS::EC2::SecurityGroupIngress",
    "Properties" : {
      "CidrIp" : "**You must specify a source security group (SourceSecurityGroupName or SourceSecurityGroupId) or a CIDR range (CidrIp or CidrIpv6).",
      "CidrIpv6" : "**You must specify a source security group (SourceSecurityGroupName or SourceSecurityGroupId) or a CIDR range (CidrIp or CidrIpv6).",
      "Description" : "Description",
      "FromPort" : "*Integer. Start of port range for the TCP and UDP protocols, or an ICMP type number. If you specify icmp for the IpProtocol property, you can specify -1 as a wildcard (i.e., any ICMP type number).",
      "GroupId" : "**You must specify the GroupName property or the GroupId property. For security groups that are in a VPC, you must use the GroupId property. For example, EC2-VPC accounts must use the GroupId property.",
      "GroupName" : "**Name of the Amazon EC2 security group (non-VPC security group) to modify. This value can be a reference to an AWS::EC2::SecurityGroup resource or the name of an existing Amazon EC2 security group. You must specify the GroupName property or the GroupId property. For security groups that are in a VPC, you must use the GroupId property. For example, EC2-VPC accounts must use the GroupId property.",
      "IpProtocol" : "*IP protocol name or number.Use -1 to specify all protocols. If you specify -1, or a protocol number other than tcp, udp, icmp, or 58 (ICMPv6), traffic on all ports is allowed, regardless of any ports you specify. ",
      "SourcePrefixListId" : "**The AWS service prefix of an Amazon VPC endpoint. You must specify a source security group (SourcePrefixListId, SourceSecurityGroupId, or SourceSecurityGroupName) or a CIDR range (CidrIp or CidrIpv6).",
      "SourceSecurityGroupName" : "**Specifies the ID of the source security group or uses the Ref intrinsic function to refer to the logical ID of a security group defined in the same template. You must specify a source security group (SourcePrefixListId, SourceSecurityGroupId, or SourceSecurityGroupName) or a CIDR range (CidrIp or CidrIpv6).",
      "SourceSecurityGroupId" : "**Specifies the name of the Amazon EC2 security group (non-VPC security group) to allow access or use the Ref intrinsic function to refer to the logical ID of a security group defined in the same template. You must specify a source security group (SourcePrefixListId, SourceSecurityGroupId, or SourceSecurityGroupName) or a CIDR range (CidrIp or CidrIpv6).",
      "SourceSecurityGroupOwnerId" : "**Specifies the AWS Account ID of the owner of the Amazon EC2 security group specified in the SourceSecurityGroupName property. If you specify SourceSecurityGroupName or SourceSecurityGroupId and that security group is owned by a different account than the account creating the stack, you must specify the SourceSecurityGroupOwnerId; otherwise, this property is optional.",
      "ToPort" : "*Integer. End of port range for the TCP and UDP protocols, or an ICMP code. If you specify icmp for the IpProtocol property, you can specify -1 as a wildcard (i.e., any ICMP code).Required: Yes, for ICMP and any protocol that uses ports."
    }
  };

  ec2_spotfleet={
    "Type" : "AWS::EC2::SpotFleet",
    "Properties" : {
      "SpotFleetRequestConfigData" : {"info":"*Type of SpotFleetRequestConfigData##"}
    }
  };

  ec2_subnet={
    "Type" : "AWS::EC2::Subnet",
    "Properties" : {
      "AssignIpv6AddressOnCreation" : "**Indicates whether a network interface created in this subnet receives an IPv6 address. The default value is false. If you specify a true or false value for AssignIpv6AddressOnCreation, Ipv6CidrBlock must also be specified.",
      "AvailabilityZone" : "The availability zone in which you want the subnet. Default: AWS selects a zone for you (recommended).",
      "CidrBlock" : "*The CIDR block that you want the subnet to cover (for example, '10.0.0.0/24').",
      "Ipv6CidrBlock" : "**The IPv6 network range for the subnet, in CIDR notation. The subnet size must use a /64 prefix length. If you specify a true or false value for AssignIpv6AddressOnCreation, Ipv6CidrBlock must be specified.",
      "MapPublicIpOnLaunch" : "Indicates whether instances that are launched in this subnet receive a public IP address. By default, the value is false.",
      "VpcId" : "*A Ref structure that contains the ID of the VPC on which you want to create the subnet. The VPC ID is provided as the value of the 'Ref' property"
    }
  };

  ec2_subnetcidrblock={
    "Type" : "AWS::EC2::SubnetCidrBlock",
    "Properties" : {
       "Ipv6CidrBlock" : "*The IPv6 CIDR block for the subnet. The CIDR block must have a prefix length of /64.",
       "SubnetId" : "*The ID of the subnet to associate the IPv6 CIDR block with."
    }
 };

  ec2_subnetnetworkaclassociation={
    "Type" : "AWS::EC2::SubnetNetworkAclAssociation",
    "Properties" : {
      "SubnetId" : "*The ID representing the current association between the original network ACL and the subnet.",
      "NetworkAclId" : "*The ID of the new ACL to associate with the subnet."
    }
  };

  ec2_subnetroutetableassociation={
    "Type" : "AWS::EC2::SubnetRouteTableAssociation",
    "Properties" : {
      "RouteTableId" : "*The ID of the route table. This is commonly written as a reference to a route table declared elsewhere in the template.",
      "SubnetId" : "*The ID of the subnet."
    }
  };

  ec2_transitgateway={
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
  };

  ec2_transitgatewayattachment={
    "Type" : "AWS::EC2::TransitGatewayAttachment",
    "Properties" : {
      "SubnetIds" : ["*List of String values.The IDs of one or more subnets. You can specify only one subnet per Availability Zone. You must specify at least one subnet, but we recommend that you specify two subnets for better availability. The transit gateway uses one IP address from each specified subnet." ],
      "TransitGatewayId" : "*The ID of the transit gateway.",
      "VpcId" : "*The ID of the VPC."
    }
  };

  ec2_transitgatewayroute={
    "Type" : "AWS::EC2::TransitGatewayRoute",
    "Properties" : {
      "Blackhole" : "Indicates whether to drop traffic if the target isn't available.",
      "DestinationCidrBlock" : "The CIDR range used for destination matches. Routing decisions are based on the most specific match.",
      "TransitGatewayAttachmentId" : "The ID of the attachment.",
      "TransitGatewayRouteTableId" : "*The ID of the transit gateway route table."
    }
  };

  ec2_transitgatewayroutetable={
    "Type" : "AWS::EC2::TransitGatewayRouteTable",
    "Properties" : {
      "TransitGatewayId" : "*The ID of the transit gateway."
    }
  };

  ec2_transitgatewayroutetableassociation={
    "Type" : "AWS::EC2::TransitGatewayRouteTableAssociation",
    "Properties" : {
      "TransitGatewayAttachmentId" : "*",
      "TransitGatewayRouteTableId" : "*"
    }
  };

  ec2_transitgatewayroutetablepropagation={
    "Type" : "AWS::EC2::TransitGatewayRouteTablePropagation",
    "Properties" : {
      "TransitGatewayAttachmentId" : "*",
      "TransitGatewayRouteTableId" : "*"
    }
  };

  ec2_volumeattachment=    {
    "Type":"AWS::EC2::VolumeAttachment",
    "Properties" : {
       "Device" : "*How the device is exposed to the instance (e.g., /dev/sdh, or xvdh). Note: Before this resource can be deleted (and therefore the volume detached), you must first unmount the volume in the instance. Failure to do so results in the volume being stuck in the busy state while it is trying to detach, which could possibly damage the file system or the data it contains.",
       "InstanceId" : "*The ID of the instance to which the volume attaches. This value can be a reference to an AWS::EC2::Instance resource, or it can be the physical ID of an existing EC2 instance.",
       "VolumeId" : "*The ID of the Amazon EBS volume. The volume and instance must be within the same Availability Zone."
    }
 };

  ec2_vpc={
    "Type" : "AWS::EC2::VPC",
    "Properties" : {
       "CidrBlock" : "*The CIDR block you want the VPC to cover. ",
       "EnableDnsSupport" : "Boolean. Specifies whether DNS resolution is supported for the VPC. If this attribute is true, the Amazon DNS server resolves DNS hostnames for your instances to their corresponding IP addresses; otherwise, it does not. By default the value is set to true.",
       "EnableDnsHostnames" : "Boolean. Specifies whether the instances launched in the VPC get DNS hostnames. If this attribute is true, instances in the VPC get DNS hostnames; otherwise, they do not. You can only set EnableDnsHostnames to true if you also set the EnableDnsSupport attribute to true. By default, the value is set to false.",
       "InstanceTenancy" : "The allowed tenancy of instances launched into the VPC. Valid values: 'default' or 'dedicated'. "
    }
 };

  ec2_vpccidrblock={
    "Type" : "AWS::EC2::VPCCidrBlock",
    "Properties" : {
       "AmazonProvidedIpv6CidrBlock" : "Boolean. Whether to request an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC. You can't specify the range of IPv6 addresses or the size of the CIDR block.",
       "CidrBlock" : "An IPv4 CIDR block to associate with the VPC.",
       "VpcId" : "*vpc id"
    }
 };

  ec2_vpcdhcpoptionsassociation=    { 
    "Type" : "AWS::EC2::VPCDHCPOptionsAssociation",
    "Properties" : {
       "DhcpOptionsId" : "*The ID of the DHCP options you want to associate with the VPC. Specify default if you want the VPC to use no DHCP options.",
       "VpcId" : "*vpc id"
    }
 };

  ec2_vpcendpoint={
    "Type" : "AWS::EC2::VPCEndpoint",
    "Properties" : {
      "VpcId" : "*vpc id",
      "RouteTableIds" : ["List of string values. [Gateway endpoint] One or more route table IDs that are used by the VPC to reach the endpoint."],
      "ServiceName" : "*The name of the service.",
      "PolicyDocument" : {"info":"[Gateway endpoint] A policy to attach to the endpoint that controls access to the service. The policy must be valid JSON. "},
      "VpcEndpointType" : "The type of endpoint. Valid values are Interface and Gateway.",
      "PrivateDnsEnabled" : "Boolean. [Interface endpoint] Indicates whether to associate a private hosted zone with the specified VPC.",
      "SubnetIds" : ["[Interface endpoint] The ID of one or more subnets in which to create an endpoint network interface."],
      "SecurityGroupIds" : ["list of string values. [Interface endpoint] The ID of one or more security groups to associate with the endpoint network interface."]
    }
  };

  ec2_vpcendpointconnectionnotification={
    "Type" : "AWS::EC2::VPCEndpointConnectionNotification",
    "Properties" : {
      "ConnectionEvents" : ["*List of string values. One or more endpoint events for which to receive notifications. Valid values are Accept, Connect, Delete, and Reject."],
      "VPCEndpointId" : "The ID of the endpoint",
      "ServiceId" : "The ID of the endpoint service.",
      "ConnectionNotificationArn" : "*The ARN of the SNS topic for the notifications."
    }
  };

  ec2_vpcendpointservice={
    "Type" : "AWS::EC2::VPCEndpointService",
    "Properties" : {
      "NetworkLoadBalancerArns" : ["list of string values. The Amazon Resource Names (ARNs) of one or more Network Load Balancers for your service."],
      "AcceptanceRequired" : "Boolean. Indicate whether requests from service consumers to create an endpoint to your service must be accepted"
    }
  };

  ec2_vpcendpointservicepermissions={
    "Type" : "AWS::EC2::VPCEndpointServicePermissions",
    "Properties" : {
      "AllowedPrincipals" : ["The Amazon Resource Names (ARN) of one or more principals (IAM users, IAM roles, and AWS accounts). Permissions are granted to the principals in this list. To grant permissions to all principals, specify an asterisk. Permissions are revoked for principals not in this list. If the list is empty, then all permissions are revoked."],
      "ServiceId" : "*The ID of the VPC endpoint service."
    }
  };

  ec2_vpcgatewayattachment=    {
    "Type" : "AWS::EC2::VPCGatewayAttachment",
    "Properties" : {
       "InternetGatewayId" : "**Id of the internet gateway. You must specify either InternetGatewayId or VpnGatewayId, but not both.",
       "VpcId" : "*The ID of the VPC to associate with this gateway.",
       "VpnGatewayId" : "**The ID of the virtual private network (VPN) gateway to attach to the VPC. You must specify either InternetGatewayId or VpnGatewayId, but not both."
    }
 };

  ec2_vpcpeeringconnection={
    "Type" : "AWS::EC2::VPCPeeringConnection",
    "Properties" : {
       "PeerVpcId" : "*The ID of the VPC with which you are creating the peering connection.",
       "VpcId" : "*The ID of the VPC that is requesting a peering connection.",
       "PeerOwnerId" : "The AWS account ID of the owner of the VPC that you want to peer with.",
       "PeerRegion" : "The region code for the accepter VPC, if the accepter VPC is located in a region other than the region in which you make the request. The default is the region in which you make the request.",
       "PeerRoleArn" :  "The Amazon Resource Name (ARN) of the VPC peer role for the peering connection in another AWS account."
    }
 };

  ec2_vpnconnection={
    "Type" : "AWS::EC2::VPNConnection",
    "Properties" : {
       "Type" : "*The type of VPN connection this virtual private gateway supports.e.g. ipsec.1",
       "CustomerGatewayId" : "*The ID of the customer gateway. This can either be an embedded JSON object or a reference to a Gateway ID.",
       "StaticRoutesOnly" : "**Boolean. Conditional. If you are creating a VPN connection for a device that does not support Border Gateway Protocol (BGP), you must specify true.",
       "VpnGatewayId" : "*The ID of the virtual private gateway. This can either be an embedded JSON object or a reference to a Gateway ID.",
       "VpnTunnelOptionsSpecifications" : ["Type: List of VpnTunnelOptionsSpecification. The tunnel options for the VPN connection. Duplicates not allowed.##"]
    }
 };
  ec2_vpnconnectionroute={
    "Type" : "AWS::EC2::VPNConnectionRoute",
    "Properties" : {
       "DestinationCidrBlock" : "*The CIDR block that is associated with the local subnet of the customer network.",
       "VpnConnectionId" : "*"
    }
 };

  ec2_vpngateway=    {
    "Type" : "AWS::EC2::VPNGateway",
    "Properties" : {
       "AmazonSideAsn" : "Long. The private Autonomous System Number (ASN) for the Amazon side of a BGP session.",
       "Type" : "*The type of VPN connection this virtual private gateway supports. The only valid value is 'ipsec.1'."
    }
 };

  ec2_vpngatewayroutepropagation=    {
    "Type" : "AWS::EC2::VPNGatewayRoutePropagation",
    "Properties" : {
       "RouteTableIds" : ["*List of string values of routetable ids. A list of routing table IDs that are associated with a VPC. The routing tables must be associated with the same VPC that the virtual private gateway is attached to."],
       "VpnGatewayId" : "*The ID of the virtual private gateway that is attached to a VPC. The virtual private gateway must be attached to the same VPC that the routing tables are associated with."
    }
 };
 //Ec2 ends...

 //Route53 starts...
 route53_healthcheck={
  "Type" : "AWS::Route53::HealthCheck",
  "Properties" : {
    "HealthCheckConfig" : {"info":"*Type: Route 53 HealthCheck HealthCheckConfig##"},
    "HealthCheckTags" : ["Type: A list of Amazon Route 53 HealthCheck HealthCheckTags##"]
  }
};
 route53_hostedzone={
  "Type" : "AWS::Route53::HostedZone",
  "Properties" : {
    "HostedZoneConfig" : {"info":"Type: Route 53 HostedZoneConfig Property##"},
    "HostedZoneTags" : ["Type: List of Amazon Route 53 HostedZoneTags##"],
    "Name" : "*The name of the domain. For resource record types that include a domain name, specify a fully qualified domain name.",
    "QueryLoggingConfig" : {"info":"Type: Route 53 QueryLoggingConfig##"},
    "VPCs" : ["Type: List of Route 53 HostedZoneVPCs. One or more VPCs that you want to associate with this hosted zone. When you specify this property, AWS CloudFormation creates a private hosted zone.##"]
  }
}
 route53_recordset={
  "Type" : "AWS::Route53::RecordSet",
  "Properties" : {
    "AliasTarget" : {"info":"**Type: AliasTarget. Required if you are creating an alias resource record set. If you specify this property, do not specify the TTL property. The alias uses a TTL value from the alias target record.##"},
    "Comment" : "Any comments that you want to include about the change batch. Important: If the record set is part of a record set group, this property isn't valid. Don't specify this property.",
    "Failover" : "Designates the record set as a PRIMARY or SECONDARY failover record set. When you have more than one resource performing the same function, you can configure Route 53 to check the health of your resources and use only health resources to respond to DNS queries. You cannot create nonfailover resource record sets that have the same Name and Type property values as failover resource record sets. If you specify this property, you must specify the SetIdentifier property.",
    "GeoLocation" : {"info":"Type: Route 53 Record Set GeoLocation Property. Describes how Route 53 responds to DNS queries based on the geographic origin of the query. This property is not compatible with the Region property.##"},
    "HealthCheckId" : "The health check ID that you want to apply to this record set. Route 53 returns this resource record set in response to a DNS query only while record set is healthy.",
    "HostedZoneId" : "**You must specify either the HostedZoneName or HostedZoneId, but you cannot specify both. If this record set is part of a record set group, do not specify this property.",
    "HostedZoneName" : "**You must specify either the HostedZoneName or HostedZoneId, but you cannot specify both. If this record set is part of a record set group, do not specify this property. The name of the domain for the hosted zone where you want to add the record set. When you create a stack using an AWS::Route53::RecordSet that specifies HostedZoneName, AWS CloudFormation attempts to find a hosted zone whose name matches the HostedZoneName. If AWS CloudFormation cannot find a hosted zone with a matching domain name, or if there is more than one hosted zone with the specified domain name, AWS CloudFormation will not create the stack. If you have multiple hosted zones with the same domain name, you must explicitly specify the hosted zone using HostedZoneId.",
    "MultiValueAnswer" : "Boolean. To route traffic approximately randomly to multiple resources, such as web servers, create one multivalue answer record for each resource and specify true for MultiValueAnswer. Note the following: If you associate a health check with a multivalue answer resource record set, Route 53 responds to DNS queries with the corresponding IP address only when the health check is healthy. If you don't associate a health check with a multivalue answer record, Route 53 always considers the record to be healthy. Amazon Route 53 responds to DNS queries with up to eight healthy records; if you have eight or fewer healthy records, Route 53 responds to all DNS queries with all the healthy records. If you have more than eight healthy records, Route 53 responds to different DNS resolvers with different combinations of healthy records. When all records are unhealthy, Route 53 responds to DNS queries with up to eight unhealthy records. If a resource becomes unavailable after a resolver caches a response, client software typically tries another of the IP addresses in the response.",
    "Name" : "*The name of the domain. You must specify a fully qualified domain name that ends with a period as the last label indication. If you omit the final period, Route 53 adds it.",
    "Region" : "Latency resource record sets only: The Amazon EC2 region where the resource that is specified in this resource record set resides. The resource typically is an AWS resource, for example, Amazon EC2 instance or an Elastic Load Balancing load balancer, and is referred to by an IP address or a DNS domain name, depending on the record type. When Route 53 receives a DNS query for a domain name and type for which you have created latency resource record sets, Route 53 selects the latency resource record set that has the lowest latency between the end user and the associated Amazon EC2 region. Route 53 then returns the value that is associated with the selected resource record set. The following restrictions must be followed: You can only specify one resource record per latency resource record set. You can only create one latency resource record set for each Amazon EC2 region. You are not required to create latency resource record sets for all Amazon EC2 regions. Route 53 will choose the region with the best latency from among the regions for which you create latency resource record sets. You cannot create both weighted and latency resource record sets that have the same values for the Name and Type elements. This property is not compatible with the GeoLocation property.",
    "ResourceRecords" : ["**Type: List of String values. If you don't specify the AliasTarget property, you must specify this property. If you are creating an alias resource record set, do not specify this property."],
    "SetIdentifier" : "**Required if you are creating a weighted, latency, failover, or geolocation resource record set. A unique identifier that differentiates among multiple resource record sets that have the same combination of DNS name and type.",
    "TTL" : "**The resource record cache time to live (TTL), in seconds. If you don't specify the AliasTarget property, you must specify this property. If you are creating an alias resource record set, do not specify this property. If you specify this property, do not specify the AliasTarget property.",
    "Type" : "* Valid values for basic resource record sets: A | AAAA | CAA | CNAME | MX | NAPTR | NS | PTR | SOA | SPF | SRV | TXT. Values for weighted, latency, geolocation, and failover resource record sets: A | AAAA | CAA | CNAME | MX | NAPTR | PTR | SPF | SRV | TXT. Valid values for multivalue answer resource record sets: A | AAAA | MX | NAPTR | PTR | SPF | SRV | TXT",
    "Weight" : "**Type: Number. Weight expects integer values. Weighted resource record sets only: Among resource record sets that have the same combination of DNS name and type, a value that determines what portion of traffic for the current resource record set is routed to the associated location."
  }
}
 route53_recordsetgroup={
  "Type" : "AWS::Route53::RecordSetGroup",
  "Properties" : {
     "Comment" : "String",
     "HostedZoneId" : "**You must specify either the HostedZoneName or HostedZoneId, but you cannot specify both.",
     "HostedZoneName" : "**You must specify either the HostedZoneName or HostedZoneId, but you cannot specify both. When you create a stack using an AWS::Route53::RecordSet that specifies HostedZoneName, AWS CloudFormation attempts to find a hosted zone whose name matches the HostedZoneName. If AWS CloudFormation cannot find a hosted zone with a matching domain name, or if there is more than one hosted zone with the specified domain name, AWS CloudFormation will not create the stack.",
     "RecordSets" : ["*Type:: List of AWS::Route53::RecordSet objects, The maximum number of records is 1,000."]
  }
}

 r53_resolver_resolverendpoint={
  "Type" : "AWS::Route53Resolver::ResolverEndpoint",
  "Properties" : {
    "Direction" : "*Valid values:INBOUND | OUTBOUND. Indicates whether the resolver endpoint allows inbound or outbound DNS queries.",
    "IpAddresses" : ["*Type: List of IpAddressRequest property types. The subnets and IP addresses in your VPC that you want DNS queries to pass through on the way from your VPCs to your network (for outbound endpoints) or on the way from your network to your VPCs (for inbound resolver endpoints).##"],
    "Name" : "A friendly name that lets you easily find a configuration in the Resolver dashboard in the Route 53 console.",
    "SecurityGroupIds" : ["*Type: List of String values. The ID of one or more security groups that you want to use to control access to this VPC. The security group that you specify must include one or more inbound rules (for inbound resolver endpoints) or outbound rules (for outbound resolver endpoints)."]
  }
};

 r53_resolver_resolverrule={
  "Type" : "AWS::Route53Resolver::ResolverRule",
  "Properties" : {
    "DomainName" : "*DNS queries for this domain name are forwarded to the IP addresses that are specified in TargetIps. If a query matches multiple resolver rules (example.com and www.example.com), the query is routed using the resolver rule that contains the most specific domain name (www.example.com).",
    "Name" : "A friendly name that lets you easily find a rule in the Resolver dashboard in the Route 53 console.",
    "ResolverEndpointId" : "The ID of the outbound endpoint that the rule is associated with.",
    "RuleType" : "*When you want to forward DNS queries for specified domain name to resolvers on your network, specify FORWARD. When you have a forwarding rule to forward DNS queries for a domain to your network and you want Resolver to process queries for a subdomain of that domain, choose SYSTEM. For example, to forward DNS queries for example.com to resolvers on your network, you create a rule and specify FORWARD for RuleType. To then have Resolver process queries for apex.example.com, you create a rule and specify SYSTEM for RuleType.",
    "TargetIps" : ["Type: List of TargetAddress property types. When a DNS query matches the name that you specify in DomainName, the outbound endpoint forwards the query to the IP addresses that you specify here, typically the IP addresses for DNS resolvers on your network. Specify IPv4 addresses.##"]
  }
};

 r53_resolver_resolverruleassociation={
  "Type" : "AWS::Route53Resolver::ResolverRuleAssociation",
  "Properties" : {
    "Name" : "The name of an association between a resolver rule and a VPC.",
    "ResolverRuleId" : "*The ID of the resolver rule that you associated with the VPC that is specified by VPCId.",
    "VPCId" : "*The ID of the VPC that you associated the resolver rule with."
  }
}
//Route53 ends...

//IAM starts...
iam_accesskey=
{
   "Type": "AWS::IAM::AccessKey",
   "Properties": {
      "Serial": "Integer. This value is specific to AWS CloudFormation and can only be incremented. Incrementing this value notifies AWS CloudFormation that you want to rotate your access key. When you update your stack, AWS CloudFormation will replace the existing access key with a new key.",
      "Status": "Valid values: Active or Inactive. The status of the access key. By default, AWS CloudFormation sets this property value to Active.",
      "UserName": "*The name of the user that the new key will belong to."
   }
};     
iam_group={
  "Type": "AWS::IAM::Group",
  "Properties": {
     "GroupName": "A name for the IAM group. For valid values, see the GroupName parameter for the CreateGroup action in the IAM API Reference. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the group name. Pattern: [\w+=,.@-]+ . Length Constraints: Minimum length of 1. Maximum length of 128.",
     "ManagedPolicyArns": ["Type: List of String values. One or more managed policy ARNs to attach to this group." ],
     "Path": "String",
     "Policies": ["The policies to associate with this group. For information about policies, see Overview of IAM Policies in the IAM User Guide."]
  }
};     
iam_instanceprofile=
{
   "Type": "AWS::IAM::InstanceProfile",
   "Properties": {
      "Path": "By default, AWS CloudFormation specifies / for the path.",
      "Roles": [ "Type: List of String values. The name of an existing IAM role to associate with this instance profile. Currently, you can assign a maximum of one role to an instance profile. "],
      "InstanceProfileName": "The name of the instance profile that you want to create. This parameter allows (per its regex pattern) a string consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: = , . @ -."
   }
}      
iam_managedpolicy={
  "Type": "AWS::IAM::ManagedPolicy",
  "Properties": {
    "Description" : "String",
    "Groups" : ["Type: List of String values" ],
    "Path" : "The path for the IAM policy. By default, the path is /",
    "PolicyDocument" : {"info":"Policies that define the permissions for this managed policy. NOTE: this policy is not available in 'Property Dealer' utility. Please use aws policy generate to do the same"},
    "Roles" : ["If a policy has a Ref to a role and if a resource (such as AWS::ECS::Service) also has a Ref to the same role, add a DependsOn attribute to the resource so that the resource depends on the policy. This dependency ensures that the role's policy is available throughout the resource's lifecycle. For example, when you delete a stack with an AWS::ECS::Service resource, the DependsOn attribute ensures that the AWS::ECS::Service resource can complete its deletion before its role's policy is deleted."],
    "Users" : ["Type: List of String values"],
    "ManagedPolicyName" : "A custom, friendly name for your IAM managed policy. For valid values, see the PolicyName parameter of the CreatePolicy action in the IAM API Reference."
  }
}
iam_policy={
  "Type" : "AWS::IAM::Policy",
  "Properties" : { 
    "Groups" : ["**You must specify at least one of the following properties: Groups, Roles, or Users."],
    "PolicyDocument" :{"info":"*A policy document that contains permissions to add to the specified users or groups. NOTE: this policy is not available in 'Property Dealer' utility. Please use aws policy generate to do the same##"},
    "PolicyName" : "*The name of the policy. If you specify multiple policies for an entity, specify unique names. For example, if you specify a list of policies for an IAM role, each policy must have a unique name.",
    "Roles" : ["**Type: List of String values. If a policy has a Ref to a role and if a resource (such as AWS::ECS::Service) also has a Ref to the same role, add a DependsOn attribute to the resource so that the resource depends on the policy. This dependency ensures that the role's policy is available throughout the resource's lifecycle. For example, when you delete a stack with an AWS::ECS::Service resource, the DependsOn attribute ensures that the AWS::ECS::Service resource can complete its deletion before its role's policy is deleted."],
    "Users" : ["**Type: List of String values. You must specify at least one of the following properties: Groups, Roles, or Users. "]
  }
}
iam_role={
  "Type": "AWS::IAM::Role",
  "Properties": {
    "AssumeRolePolicyDocument": {"info":"*Type: A JSON policy document.The trust policy that is associated with this role. You can associate only one assume role policy with a role." },
    "ManagedPolicyArns": ["Type: List of String values. One or more managed policy ARNs to attach to this role."],
    "MaxSessionDuration": "The maximum session duration (in seconds) for the specified role. Anyone who uses the AWS CLI or API to assume the role can specify the duration using the optional DurationSeconds API parameter or duration-seconds CLI parameter. Minimum value of 3600. Maximum value of 43200.",
    "Path": "The path associated with this role. For information about IAM paths, see Friendly Names and Paths in IAM User Guide.",
    "PermissionsBoundary": "The ARN of the policy that is used to set the permissions boundary for the role. Minimum length of 20. Maximum length of 2048.",
    "Policies": ["Type: List of IAM Policies. "],
    "RoleName": "A name for the IAM role. Warning: Naming an IAM resource can cause an unrecoverable error if you reuse the same template in multiple regions. To prevent this, we recommend using Fn::Join and AWS::Region to create a region-specific name"
  }
}
iam_servicelinkedrole={
  "Type" : "AWS::IAM::ServiceLinkedRole",
  "Properties" : {
    "AWSServiceName" : "*The service principal for the AWS service to which this role is attached. You use a string similar to a URL but without the http:// in front. For example: elasticbeanstalk.amazonaws.com.",
    "CustomSuffix" : "A string that you provide, which is combined with the service-provided prefix to form the complete role name. If you make multiple requests for the same service, then you must supply a different CustomSuffix for each request. Otherwise the request fails with a duplicate role name error. For example, you could add -1 or -debug to the suffix.",
    "Description" : "The description of the role."
  }
}
iam_user={
  "Type": "AWS::IAM::User",
  "Properties": {
    "Groups": ["Type: List of String values"],
    "LoginProfile": {"info":"Type: IAM User LoginProfile##"},
    "ManagedPolicyArns": ["One or more managed policy ARNs to attach to this user."],
    "Path": "The path for the user name.",
    "PermissionsBoundary": "The ARN of the policy that is used to set the permissions boundary for the user. Minimum length of 20. Maximum length of 2048.",   
    "Policies": ["Type: List of IAM Policies##"],
    "UserName": "String. Naming an IAM resource can cause an unrecoverable error if you reuse the same template in multiple regions. To prevent this, we recommend using Fn::Join and AWS::Region to create a region-specific name"
  }
}
iam_usertogroupaddition=
{
   "Type": "AWS::IAM::UserToGroupAddition",
   "Properties": {
      "GroupName": "*The name of group to add users to.",
      "Users": ["*Type: List of users"]
   }
}     

}
