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
     "AutoEnableIO" : "Boolean. Indicates whether the volume is auto-enabled for I/O operations. By default, Amazon EBS disables I/O to the volume from attached EC2 instances when it determines that a volume's data is potentially inconsistent. If the consistency of the volume is not a concern, and you prefer that the volume be made available immediately if it's impaired, you can configure the volume to automatically enable I/O.",
     "AvailabilityZone" : "*String,Required: Yes",
     "Encrypted" : "**Boolean,Required: Conditional. If you specify the KmsKeyId property, you must enable encryption. Indicates whether the volume is encrypted. You can attach encrypted Amazon EBS volumes only to instance types that support Amazon EBS encryption. Volumes that are created from encrypted snapshots are automatically encrypted. You can't create an encrypted volume from an unencrypted snapshot, or vice versa. If your AMI uses encrypted volumes, you can launch the AMI only on supported instance types.",
     "Iops" : "**Number,Required: Conditional. Required when the volume type is io1; not used with other volume types. The number of I/O operations per second (IOPS) that the volume supports. For Provisioned IOPS SSD volumes, this represents the number of IOPS that are provisioned for the volume. For General Purpose SSD volumes, this represents the baseline performance of the volume and the rate at which the volume accumulates I/O credits for bursting. ",
     "KmsKeyId" : "String,The Amazon Resource Name (ARN) of the AWS Key Management Service master key",
     "Size" : "**Integer,Required: Conditional. If you don't specify a value for the SnapshotId property, you must specify this property. If you specify the SnapshotId property, specify a size that is equal to or greater than the size of the snapshot. If you don't specify a size, EC2 uses the size of the snapshot as the volume size.",
     "SnapshotId" : "String",
     "VolumeType" : "String,Valid Values: standard | io1 | gp2 | sc1 | st1,Required: No"
    }
  }

  ec2_eip={
    "Type" : "AWS::EC2::EIP",
    "Properties" : {
       "Domain" : "**Set to vpc to allocate the address to your Virtual Private Cloud (VPC). No other values are supported. Required when allocating an address to a VPC. Allowed Values: standard | vpc",
       "InstanceId" : "The Instance ID of the Amazon EC2 instance that you want to associate with this Elastic IP address.",
       "PublicIpv4Pool" : "Specifies the ID of an address pool that you own to let Amazon EC2 select an address from the address pool."
    }
  };

  ec2_instance={
    "Type" : "AWS::EC2::Instance",
    "Properties" : {
       //"Metadata":{"info":"This is not a property but rather an attribute. Use the AWS::CloudFormation::Init type to include metadata on an Amazon EC2 instance for the cfn-init helper script. If your template calls the cfn-init script, the script looks for resource metadata rooted in the AWS::CloudFormation::Init metadata key."},
       "Affinity" : "String. Indicates whether Amazon Elastic Compute Cloud (Amazon EC2) always associates the instance with a dedicated host. If you want the instance to always restart on the same host on which it was launched, specify 'host'. If you want the instance to restart on any available host, but try to launch onto the last host it ran on (on a best-effort basis), specify 'default'.",
       "AvailabilityZone" : "String. If not specified, an Availability Zone will be automatically chosen for you based on the load balancing criteria for the region.",
       "BlockDeviceMappings" : ["A list of Amazon EC2 BlockDeviceMapping.##"],
       "CreditSpecification" : {"info":" Type: CreditSpecification. Amazon EC2 Instance CreditSpecification.##"},
       "DisableApiTermination" : "Boolean. Specifies whether the instance can be terminated through the API.",
       "EbsOptimized" : "Boolean. Indicates whether the instance is optimized for Amazon EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal Amazon EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS-optimized instance.",
       "ElasticGpuSpecifications" : ["Type: List of ElasticGpuSpecification. Specifies the Elastic GPUs. An Elastic GPU is a GPU resource that you can attach to your instance to accelerate the graphics performance of your applications.##"],
       "ElasticInferenceAccelerators" : ["Type: List of ElasticInferenceAccelerator. Specify a list of elastic inference accelerators for an instance. ##"],
       "HostId" : "String. The ID of a dedicated host that the instance is associated with",
       "IamInstanceProfile" : "String. The IAM instance profile",
       "ImageId" : "String. The ID of the AMI. An AMI ID is required to launch an instance and must be specified here or in a launch template.",
       "InstanceInitiatedShutdownBehavior" : "String. Indicates whether an instance stops or terminates when you shut down the instance from the instance's operating system shutdown command. Allowed Values: stop | terminate",
       "InstanceType" : "String. Default: m1.small. Allowed Values: a1.2xlarge | a1.4xlarge | a1.large | a1.medium | a1.xlarge | c1.medium | c1.xlarge | c3.2xlarge | c3.4xlarge | c3.8xlarge | c3.large | c3.xlarge | c4.2xlarge | c4.4xlarge | c4.8xlarge | c4.large | c4.xlarge | c5.18xlarge | c5.2xlarge | c5.4xlarge | c5.9xlarge | c5.large | c5.xlarge | c5d.18xlarge | c5d.2xlarge | c5d.4xlarge | c5d.9xlarge | c5d.large | c5d.xlarge | c5n.18xlarge | c5n.2xlarge | c5n.4xlarge | c5n.9xlarge | c5n.large | c5n.xlarge | cc1.4xlarge | cc2.8xlarge | cg1.4xlarge | cr1.8xlarge | d2.2xlarge | d2.4xlarge | d2.8xlarge | d2.xlarge | f1.16xlarge | f1.2xlarge | f1.4xlarge | g2.2xlarge | g2.8xlarge | g3.16xlarge | g3.4xlarge | g3.8xlarge | g3s.xlarge | h1.16xlarge | h1.2xlarge | h1.4xlarge | h1.8xlarge | hi1.4xlarge | hs1.8xlarge | i2.2xlarge | i2.4xlarge | i2.8xlarge | i2.xlarge | i3.16xlarge | i3.2xlarge | i3.4xlarge | i3.8xlarge | i3.large | i3.metal | i3.xlarge | m1.large | m1.medium | m1.small | m1.xlarge | m2.2xlarge | m2.4xlarge | m2.xlarge | m3.2xlarge | m3.large | m3.medium | m3.xlarge | m4.10xlarge | m4.16xlarge | m4.2xlarge | m4.4xlarge | m4.large | m4.xlarge | m5.12xlarge | m5.24xlarge | m5.2xlarge | m5.4xlarge | m5.large | m5.metal | m5.xlarge | m5a.12xlarge | m5a.24xlarge | m5a.2xlarge | m5a.4xlarge | m5a.large | m5a.xlarge | m5ad.12xlarge | m5ad.16xlarge | m5ad.24xlarge | m5ad.2xlarge | m5ad.4xlarge | m5ad.8xlarge | m5ad.large | m5ad.xlarge | m5d.12xlarge | m5d.24xlarge | m5d.2xlarge | m5d.4xlarge | m5d.large | m5d.metal | m5d.xlarge | p2.16xlarge | p2.8xlarge | p2.xlarge | p3.16xlarge | p3.2xlarge | p3.8xlarge | p3dn.24xlarge | r3.2xlarge | r3.4xlarge | r3.8xlarge | r3.large | r3.xlarge | r4.16xlarge | r4.2xlarge | r4.4xlarge | r4.8xlarge | r4.large | r4.xlarge | r5.12xlarge | r5.24xlarge | r5.2xlarge | r5.4xlarge | r5.large | r5.metal | r5.xlarge | r5a.12xlarge | r5a.24xlarge | r5a.2xlarge | r5a.4xlarge | r5a.large | r5a.xlarge | r5ad.12xlarge | r5ad.16xlarge | r5ad.24xlarge | r5ad.2xlarge | r5ad.4xlarge | r5ad.8xlarge | r5ad.large | r5ad.xlarge | r5d.12xlarge | r5d.24xlarge | r5d.2xlarge | r5d.4xlarge | r5d.large | r5d.metal | r5d.xlarge | t1.micro | t2.2xlarge | t2.large | t2.medium | t2.micro | t2.nano | t2.small | t2.xlarge | t3.2xlarge | t3.large | t3.medium | t3.micro | t3.nano | t3.small | t3.xlarge | t3a.2xlarge | t3a.large | t3a.medium | t3a.micro | t3a.nano | t3a.small | t3a.xlarge | u-12tb1.metal | u-6tb1.metal | u-9tb1.metal | x1.16xlarge | x1.32xlarge | x1e.16xlarge | x1e.2xlarge | x1e.32xlarge | x1e.4xlarge | x1e.8xlarge | x1e.xlarge | z1d.12xlarge | z1d.2xlarge | z1d.3xlarge | z1d.6xlarge | z1d.large | z1d.metal | z1d.xlarge",
       "Ipv6AddressCount" : "Integer. The number of IPv6 addresses to associate with the instance's primary network interface. Amazon EC2 chooses the IPv6 addresses from the range of your subnet. You cannot specify this option and the option to assign specific IPv6 addresses in the same request. You can specify this option if you've specified a minimum number of instances to launch. ",
       "Ipv6Addresses" : ["Type: List of InstanceIpv6Address##"],
       "KernelId" : "String. The ID of the kernel. We recommend that you use PV-GRUB instead of kernels and RAM disks.",
       "KeyName" : "String. If you do not specify a key pair, you can't connect to the instance unless you choose an AMI that is configured to allow users another way to log in.",
       "LaunchTemplate" : {"info":" Type: LaunchTemplateSpecification. The launch template to use to launch the instances. Any parameters that you specify in the AWS CloudFormation template override the same parameters in the launch template. You can specify either the name or ID of a launch template, but not both. ##"},
       "LicenseSpecifications" : ["Type: List of LicenseSpecification.  ##"],
       "Monitoring" : "Boolean. Specifies whether detailed monitoring is enabled for the instance.",
       "NetworkInterfaces" : ["Type: List of NetworkInterface. The network interfaces to associate with the instance. If you use this property to point to a network interface, you must terminate the original interface before attaching a new one to allow the update of the instance to succeed. If this resource has a public IP address and is also in a VPC that is defined in the same template, you must use the DependsOn Attribute to declare a dependency on the VPC-gateway attachment.  ##"],
       "PlacementGroupName" : "String. The name of an existing placement group that you want to launch the instance into (for cluster instances).",
       "PrivateIpAddress" : "**String. The private IP address for this instance. By default, Amazon VPC selects an IP address from the subnet for the instance. You cannot specify this option and the network interfaces option in the same request. Only one private IP address can be designated as primary. You can't specify this option if you've specified the option to designate a private IP address as the primary IP address in a network interface specification. You cannot specify this option if you're launching more than one instance in the request. If you make an update to an instance that requires replacement, you must assign a new private IP address. During a replacement, AWS CloudFormation creates a new instance but doesn't delete the old instance until the stack has successfully updated. If the stack update fails, AWS CloudFormation uses the old instance in order to roll back the stack to the previous working state. The old and new instances cannot have the same private IP address.",
       "RamdiskId" : "String. The ID of the RAM disk to select. Some kernels require additional drivers at launch. ",
       "SecurityGroupIds" : ["** List of String. A list that contains the security group IDs for VPC security groups to assign to the Amazon EC2 instance. If you specify a network interface, you must specify any security groups as part of the network interface. "],
       "SecurityGroups" : ["List of string. Valid only for Amazon EC2 security groups. A list that contains the Amazon EC2 security groups to assign to the Amazon EC2 instance."],
       "SourceDestCheck" : "Boolean. Controls whether source/destination checking is enabled on the instance. Also determines if an instance in a VPC will perform network address translation (NAT).For the instance to perform NAT, the value must be false",
       "SsmAssociations" : ["Type: List of SsmAssociation. The SSM document and parameter values in AWS Systems Manager to associate with this instance. To use this property, you must specify an IAM instance profile role for the instance. ##"],
       "SubnetId" : "** String. You cannot specify this option and the network interfaces option in the same request.",
       "Tenancy" : "String. Allowed Values: dedicated | default | host. The tenancy of the instance (if the instance is running in a VPC). An instance with a tenancy of dedicated runs on single-tenant hardware.",
       "UserData" : "String. The user data to make available to the instance. For more information, see Running Commands on Your Linux Instance at Launch (Linux) and Adding User Data (Windows). If you are using a command line tool, base64-encoding is performed for you, and you can load the text from a file. Otherwise, you must provide base64-encoded text. User data is limited to 16 KB.",
       "Volumes" : ["A list of EC2 MountPoints.##"],
       "AdditionalInfo" : "",
       "CreationPolicy":{"info":"Use the CreationPolicy attribute when you want to wait on resource configuration actions before stack creation proceeds. For example, if you install and configure software applications on an EC2 instance, you might want those applications to be running before proceeding. In such cases, you can add a CreationPolicy attribute to the instance, and then send a success signal to the instance after the applications are installed and configured.##"}       
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
    "PolicyDocument" :{"info":"*A policy document that contains permissions to add to the specified users or groups. NOTE: this policy is not available in 'Property Dealer' utility. Please use aws policy generate to do the same"},
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
    "Policies": ["Type: List of IAM Policies.## "],
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

//ec2 autoscaling starts
ag_agGroup=
{
   "Type" : "AWS::AutoScaling::AutoScalingGroup",
   "Properties" : {
      "AutoScalingGroupName" : "String",
      "AvailabilityZones" : ["**list of string values. If you don't specify the VPCZoneIdentifier property, you must specify this property."],
      "Cooldown" : "The number of seconds after a scaling activity is completed before any further scaling activities can start.",
      "DesiredCapacity" : "If SpotPrice is not set in the AWS::AutoScaling::LaunchConfiguration for this Auto Scaling group, then Auto Scaling will begin to bring instances online based on DesiredCapacity. CloudFormation will not mark the Auto Scaling group as successful (by setting its status to CREATE_COMPLETE) until the desired capacity is reached. If SpotPrice is set, then DesiredCapacity will not be used as a criteria for success, since instances will only be started when the spot price has been matched. After the spot price has been matched, however, Amazon EC2 Auto Scaling uses DesiredCapacity as the target capacity for the group.",
      "HealthCheckGracePeriod" : "The length of time in seconds after a new EC2 instance comes into service that Amazon EC2 Auto Scaling starts checking its health.",
      "HealthCheckType" : "The service you want the health status from, Amazon EC2 or Elastic Load Balancer. Valid values are EC2 or ELB.",
      "InstanceId" : "**You must specify one of the following: InstanceId, LaunchConfigurationName, LaunchTemplate, or MixedInstancesPolicy. The ID of the Amazon EC2 instance you want to use to create the Auto Scaling group. Use this property if you want to create an Auto Scaling group that uses an existing Amazon EC2 instance instead of a launch configuration. When you use an Amazon EC2 instance to create an Auto Scaling group, a new launch configuration is first created and then associated with the Auto Scaling group. The new launch configuration derives all its properties from the instance, with the exception of BlockDeviceMapping and AssociatePublicIpAddress.",
      "LaunchConfigurationName" : "**You must specify one of the following: InstanceId, LaunchConfigurationName, LaunchTemplate, or MixedInstancesPolicy. If this resource has a public IP address and is also in a VPC that is defined in the same template, you must use the DependsOn attribute to declare a dependency on the VPC-gateway attachment. For more information. When you update the LaunchConfigurationName, existing Amazon EC2 instances continue to run with the configuration that they were originally launched with. To update existing instances, specify an update policy attribute for this Auto Scaling group.  ",
      "LaunchTemplate" : {"info":"**Type: LaunchTemplateSpecification. You must specify one of the following: InstanceId, LaunchConfigurationName, LaunchTemplate, or MixedInstancesPolicy.##"},
      "LifecycleHookSpecificationList" : ["List of LifecycleHookSpecification. The lifecycle hooks for the group, which specify actions to perform when Amazon EC2 Auto Scaling launches or terminates instances. ##"],
      "LoadBalancerNames" : [ "list of string values. A list of Classic Load Balancers associated with this Auto Scaling group. To specify Application Load Balancers or Network Load Balancers, use TargetGroupARNs instead."],
      "MaxSize" : "*The maximum size of the Auto Scaling group.",
      "MetricsCollection" : [ "A list of Amazon EC2 Auto Scaling AutoScalingGroup MetricsCollection##"],
      "MinSize" : "*String",
      "MixedInstancesPolicy" : {"info":"**Type: MixedInstancesPolicy. You must specify one of the following: InstanceId, LaunchConfigurationName, LaunchTemplate, or MixedInstancesPolicy."},
      "NotificationConfigurations" : ["Type: List of Amazon EC2 Auto Scaling AutoScalingGroup NotificationConfiguration. An embedded property that configures an Auto Scaling group to send notifications when specified events take place.##"],
      "PlacementGroup" : "String. The name of an existing cluster placement group into which you want to launch your instances. A placement group is a logical grouping of instances within a single Availability Zone. You cannot specify multiple Availability Zones and a placement group.",
      "ServiceLinkedRoleARN" : "String. The Amazon Resource Name (ARN) of the service-linked role that the Auto Scaling group uses to call other AWS services on your behalf. By default, Auto Scaling uses a service-linked role named AWSServiceRoleForAutoScaling, which it creates if it does not exist.",
      "TargetGroupARNs" : ["list of string values. A list of Amazon Resource Names (ARN) of target groups to associate with the Auto Scaling group."],
      "TerminationPolicies" : ["list of string values. A policy or a list of policies that are used to select the instances to terminate. The policies are executed in the order that you list them."],
      "VPCZoneIdentifier" : ["**If you don't specify the AvailabilityZones property, you must specify this property. A list of subnet identifiers of Amazon Virtual Private Cloud (Amazon VPCs)."],
      "Tags":["Type: List of Amazon EC2 Auto Scaling AutoScalingGroup TagProperty##"],
      "CreationPolicy":{"info":"Associate the CreationPolicy attribute with a resource to prevent its status from reaching create complete until AWS CloudFormation receives a specified number of success signals or the timeout period is exceeded.Use the CreationPolicy attribute when you want to wait on resource configuration actions before stack creation proceeds. For example, if you install and configure software applications on an EC2 instance, you might want those applications to be running before proceeding. In such cases, you can add a CreationPolicy attribute to the instance, and then send a success signal to the instance after the applications are installed and configured.##"},
      "UpdatePolicy":{"info":"For AWS::AutoScaling::AutoScalingGroup resources, AWS CloudFormation invokes one of three update policies depending on the type of change you make or whether a scheduled action is associated with the Auto Scaling group. The AutoScalingReplacingUpdate and AutoScalingRollingUpdate policies apply only when you do one or more of the following: 1. Change the Auto Scaling group's AWS::AutoScaling::LaunchConfiguration. 2. Change the Auto Scaling group's VPCZoneIdentifier property 3. Change the Auto Scaling group's LaunchTemplate property 4. Update an Auto Scaling group that contains instances that don't match the current LaunchConfiguration. If both the AutoScalingReplacingUpdate and AutoScalingRollingUpdate policies are specified, setting the WillReplace property to true gives AutoScalingReplacingUpdate precedence. The AutoScalingScheduledAction policy applies when you update a stack that includes an Auto Scaling group with an associated scheduled action. ##"}
   }
}     

ag_launchConfiguration=
{
   "Type" : "AWS::AutoScaling::LaunchConfiguration",
   "Properties" : {
      "AssociatePublicIpAddress" : "Boolean. For Amazon EC2 instances in a VPC, indicates whether instances in the Auto Scaling group receive public IP addresses. If you specify true, each instance in the Auto Scaling group receives a unique public IP address.",
      "BlockDeviceMappings" : ["Type: A list of BlockDeviceMapping.##"],
      "ClassicLinkVPCId" : "String. The ID of a ClassicLink-enabled VPC to link your EC2-Classic instances to. You can specify this property only for EC2-Classic instances. ",
      "ClassicLinkVPCSecurityGroups" : ["**list of string values. If you specified the ClassicLinkVPCId property, you must specify this property."],
      "EbsOptimized" : "Boolean. Specifies whether the launch configuration is optimized for EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal EBS I/O performance. By default false.",
      "IamInstanceProfile" : "String. Provides the name or the Amazon Resource Name (ARN) of the instance profile associated with the IAM role for the instance. The instance profile contains the IAM role.",
      "ImageId" : "*String. Provides the unique ID of the Amazon Machine Image (AMI) that was assigned during registration.",
      "InstanceId" : "String. The ID of the Amazon EC2 instance you want to use to create the launch configuration. Use this property if you want the launch configuration to use settings from an existing Amazon EC2 instance.",
      "InstanceMonitoring" : "Boolean. Indicates whether detailed instance monitoring is enabled for the Auto Scaling group. By default, this property is set to true (enabled).",
      "InstanceType" : "*String. Specifies the instance type of the EC2 instance.",
      "KernelId" : "Provides the ID of the kernel associated with the EC2 AMI.",
      "KeyName" : "String. Provides the name of the EC2 key pair.",
      "LaunchConfigurationName" : "String. The name of the launch configuration. This name must be unique within the scope of your AWS account.",
      "PlacementTenancy" : "String. The tenancy of the instance. An instance with a tenancy of dedicated runs on single-tenant hardware and can only be launched in a VPC.",
      "RamDiskId" : "The ID of the RAM disk to select. Some kernels require additional drivers at launch. Check the kernel requirements for information about whether you need to specify a RAM disk. To find kernel requirements, refer to the AWS Resource Center and search for the kernel ID.",
      "SecurityGroups" : ["Type: A list of security groups. The list can contain the IDs of existing EC2 security groups or references to AWS::EC2::SecurityGroup resources created in the template."],
      "SpotPrice" : "String. The spot price for this Auto Scaling group. If a spot price is set, then the Auto Scaling group will launch when the current spot price is less than the amount specified in the template. When you have specified a spot price for an Auto Scaling group, the group will only launch when the spot price has been met, regardless of the setting in the Auto Scaling group's DesiredCapacity.",
      "UserData" : "The user data available to the launched EC2 instances."
   }
}     

ag_lifecyclehook={
  "Type" : "AWS::AutoScaling::LifecycleHook",
  "Properties" : {
    "AutoScalingGroupName" : "*String",
    "DefaultResult" : "The action the Auto Scaling group takes when the lifecycle hook timeout elapses or if an unexpected failure occurs. Valid values are CONTINUE and ABANDON (default).",
    "HeartbeatTimeout" : "The amount of time (in seconds) that can elapse before the lifecycle hook times out. When the lifecycle hook times out, Amazon EC2 Auto Scaling performs the action that you specified in the DefaultResult property.",
    "LifecycleHookName" : "String",
    "LifecycleTransition" : "*String. The state of the Amazon EC2 instance to which you want to attach the lifecycle hook. autoscaling:EC2_INSTANCE_LAUNCHING| autoscaling:EC2_INSTANCE_TERMINATING. This parameter is required for new lifecycle hooks, but optional when updating existing hooks. ",
    "NotificationMetadata" : "String. Additional information that you want to include when Amazon EC2 Auto Scaling sends a message to the notification target.",
    "NotificationTargetARN" : "String. The Amazon resource name (ARN) of the notification target that Amazon EC2 Auto Scaling uses to notify you when an instance is in the transition state for the lifecycle hook. You can specify an Amazon SQS queue or an Amazon SNS topic. The notification message includes the following information: lifecycle action token, user account ID, Auto Scaling group name, lifecycle hook name, instance ID, lifecycle transition, and notification metadata.",
    "RoleARN" : "String. The ARN of the IAM role that allows the Auto Scaling group to publish to the specified notification target. The role requires permissions to Amazon SNS and Amazon SQS."
  }
}

ag_scalingpolicy=
{
   "Type" : "AWS::AutoScaling::ScalingPolicy",
   "Properties" : {
      "AdjustmentType" : "String. Specifies whether the ScalingAdjustment is an absolute number or a percentage of the current capacity. Valid values are ChangeInCapacity, ExactCapacity, and PercentChangeInCapacity.",
      "AutoScalingGroupName" : "*String. The name or Amazon Resource Name (ARN) of the Auto Scaling group that you want to attach the policy to.",
      "Cooldown" : "String. The amount of time, in seconds, after a scaling activity completes before any further trigger-related scaling activities can start. Do not specify this property if you are using the StepScaling policy type.",
      "EstimatedInstanceWarmup" : "Integer. The estimated time, in seconds, until a newly launched instance can send metrics to CloudWatch. By default, Amazon EC2 Auto Scaling uses the cooldown period, as specified in the Cooldown property. Do not specify this property if you are using the SimpleScaling policy type.",
      "MetricAggregationType" : "String. The aggregation type for the CloudWatch metrics. You can specify Minimum, Maximum, or Average. By default, AWS CloudFormation specifies Average. Do not specify this property if you are using the SimpleScaling policy type.",
      "MinAdjustmentMagnitude" : "Integer. For the PercentChangeInCapacity adjustment type, the minimum number of instances to scale. The scaling policy changes the desired capacity of the Auto Scaling group by a minimum of this many instances. This property replaces the MinAdjustmentStep property.",
      "PolicyType" : "String. An Auto Scaling policy type. You can specify SimpleScaling, StepScaling, or TargetTrackingScaling. By default, AWS CloudFormation specifies SimpleScaling. ",
      "ScalingAdjustment" : "**Integer. This property is required if the policy type is SimpleScaling. This property is not supported with any other policy type. The number of instances by which to scale. The AdjustmentType property determines if AWS CloudFormation interprets this number as an absolute number (when the ExactCapacity value is specified), increase or decrease capacity by a specified number (when the ChangeInCapacity value is specified), or increase or decrease capacity as a percentage of the existing Auto Scaling group size (when the PercentChangeInCapacity value is specified). A positive value adds to the current capacity and a negative value subtracts from the current capacity. For exact capacity, you must specify a positive value.",
      "StepAdjustments" : ["**Type: List of Amazon EC2 Auto Scaling ScalingPolicy StepAdjustments. This property is required if the policy type is StepScaling. This property is not supported with any other policy type.##"],
      "TargetTrackingConfiguration" : {"info":"**Type: Amazon EC2 Auto Scaling ScalingPolicy TargetTrackingConfiguration This property is required if the policy type is TargetTrackingScaling. This property is not supported with any other policy type. ##"}
   }
}      

ag_scheduledAction= {
  "Type" : "AWS::AutoScaling::ScheduledAction",
  "Properties" : {
    "AutoScalingGroupName" : "*String",
    "DesiredCapacity" : "**Integer. The number of Amazon EC2 instances that should be running in the Auto Scaling group. At least one of MaxSize, MinSize, or DesiredCapacity must be specified.",
    "EndTime" : "The time in UTC for this schedule to end. For example, 2010-06-01T00:00:00Z",
    "MaxSize" : "**Integer. The maximum number of Amazon EC2 instances in the Auto Scaling group. At least one of MaxSize, MinSize, or DesiredCapacity must be specified.",
    "MinSize" : "**Integer. The minimum number of Amazon EC2 instances in the Auto Scaling group. At least one of MaxSize, MinSize, or DesiredCapacity must be specified.",
    "Recurrence" : "String. Specifying the StartTime and EndTime properties with Recurrence property forms the start and stop boundaries of the recurring action.",
    "StartTime" : "The time in UTC for this schedule to start. For example, 2010-06-01T00:00:00Z."
  }
}

elbv2_listener={
  "Type" : "AWS::ElasticLoadBalancingV2::Listener",
  "Properties" : {
    "Certificates" : ["**Type: List of Elastic Load Balancing V2 Certificate##"],
    "DefaultActions" : ["*Type: List of Elastic Load Balancing V2 Action##"],
    "LoadBalancerArn" : "*String",
    "Port" : "*Integer. Valid Range: Minimum value of 1. Maximum value of 65535.",
    "Protocol" : "*String. Valid Values: HTTP | HTTPS | TCP | TLS",
    "SslPolicy" : "String. [HTTPS and TLS listeners] The security policy that defines the ciphers and protocols that the listener supports. The default is the current predefined security policy."
  }
}

elbv2_listenercertificate={
  "Type" : "AWS::ElasticLoadBalancingV2::ListenerCertificate",
  "Properties" : {
    "Certificates" : ["* Type: List of Certificate##"],
    "ListenerArn" : "*String. The Amazon Resource Name (ARN) of the listener."
  }
};
elbv2_listenerrule={
  "Type" : "AWS::ElasticLoadBalancingV2::ListenerRule",
  "Properties" : {
    "Actions" : [ "*Type: List of Elastic Load Balancing V2 Actions##" ],
    "Conditions" : ["*Type: List of Elastic Load Balancing V2 Conditions##"],
    "ListenerArn" : "*String. The Amazon Resource Name (ARN) of the listener.",
    "Priority" : "*Integer. The priority for the rule. Elastic Load Balancing evaluates rules in priority order, from the lowest value to the highest value. If a request satisfies a rule, Elastic Load Balancing ignores all subsequent rules. Valid Range: Minimum value of 1. Maximum value of 50000."
  }
};
elbv2_loadbalancer={
  "Type" : "AWS::ElasticLoadBalancingV2::LoadBalancer",
  "Properties" : {    
    "IpAddressType" : "String. [Application Load Balancers] The type of IP addresses that are used by the load balancer's subnets, such as ipv4 (for IPv4 addresses) or dualstack (for IPv4 and IPv6 addresses).The default value is ipv4. If Scheme is internal, then IpAddressType must be ipv4. Valid Values: ipv4 | dualstack ",
    "LoadBalancerAttributes" : ["Type: A list of Elastic Load Balancing V2 LoadBalancerAttributes##."],
    "Name" : "String. A name for the load balancer. This name must be unique within your AWS account and can have a maximum of 32 alphanumeric characters and hyphens. A name can't begin or end with a hyphen. ",
    "Scheme" : "String. Specifies whether the load balancer is internal or Internet-facing. Valid values are internet-facing and internal. The default is internet-facing. The nodes of an Internet-facing load balancer have public IP addresses. The DNS name of an Internet-facing load balancer is publicly resolvable to the public IP addresses of the nodes. Therefore, Internet-facing load balancers can route requests from clients over the Internet. The nodes of an internal load balancer have only private IP addresses. The DNS name of an internal load balancer is publicly resolvable to the private IP addresses of the nodes. Therefore, internal load balancers can only route requests from clients with access to the VPC for the load balancer. ",
    "SecurityGroups" : ["Type: List of String values. [Application Load Balancers] The IDs of the security groups to assign to the load balancer."],
    "SubnetMappings" : ["Type: List of Elastic Load Balancing V2 SubnetMapping. The subnets to attach to the load balancer, specified as a list of SubnetMapping property types. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings. [Application Load Balancers] You must specify subnets from at least two Availability Zones. You cannot specify your own Elastic IP addresses. [Network Load Balancers] You can specify subnets from one or more Availability Zones. You can specify one Elastic IP address per subnet. ##"],
    "Subnets" : ["Type: List of String values. The subnets to attach to the load balancer, specified as a list of subnet IDs. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings. [Application Load Balancers] You must specify subnets from at least two Availability Zones."],
    "Type" : "String. The type of load balancer to create. Valid values are application and network. The default is application. "
  }
};
elbv2_targetgroup={
  "Type" : "AWS::ElasticLoadBalancingV2::TargetGroup",
  "Properties" : {
    "HealthCheckIntervalSeconds" : "Integer. The approximate number of seconds between health checks for an individual target. Valid Range: Minimum value of 5. Maximum value of 300.",
    "HealthCheckPath" : "[HTTP/HTTPS health checks] The ping path destination where Elastic Load Balancing sends health check requests. The default is /. ",
    "HealthCheckPort" : "String. The port that the load balancer uses when performing health checks on the targets. The default is traffic-port, which is the port on which each target receives traffic from the load balancer. ",
    "HealthCheckProtocol" : "String. Valid Values: HTTP | HTTPS | TCP | TLS. The protocol the load balancer uses when performing health checks on targets. For Application Load Balancers, the default is HTTP. For Network Load Balancers, the default is TCP. The TCP protocol is supported for health checks only if the protocol of the target group is TCP or TLS. The TLS protocol is not supported for health checks. ",
    "HealthCheckTimeoutSeconds" : "Integer. The number of seconds to wait for a response before considering that a health check has failed. For Application Load Balancers, the range is 2–60 seconds and the default is 5 seconds. For Network Load Balancers, this value is 10 seconds for TCP and HTTPS health checks and 6 seconds for HTTP health checks. ",
    "HealthyThresholdCount" : "Integer. The number of consecutive successful health checks that are required before an unhealthy target is considered healthy. ",
    "Matcher" : {"info": " Type: Elastic Load Balancing V2 Matcher. [HTTP/HTTPS health checks] The HTTP codes that a healthy target uses when responding to a health check. ##"},
    "Name" : "String. This name must be unique per account, per region.",
    "Port" : "*Integer. The port on which the targets receive traffic.",
    "Protocol" : "*String. The protocol to use for routing traffic to the targets.",
    "TargetGroupAttributes" : ["Type: List of Elastic Load Balancing V2 TargetGroupAttributes ##"],
    "Targets" : ["Type: List of Elastic Load Balancing V2 TargetDescription##"],
    "TargetType" : "String. The type of targets that you must specify when registering targets with this target group. ",
    "UnhealthyThresholdCount" : "Integer. The number of consecutive failed health checks that are required before a target is considered unhealthy.",
    "VpcId" : "String"
  }
};

  //certificate manager
  acm_certificate={
    "Type" : "AWS::CertificateManager::Certificate",
    "Properties" : {
      "DomainName" : "*String. Fully qualified domain name (FQDN), such as www.example.com, of the site that you want to secure with the ACM certificate. To protect several sites in the same domain, use an asterisk (*) to specify a wildcard. For example, *.example.com protects www.example.com, site.example.com, and images.example.com. ",
      "DomainValidationOptions" : ["Type: List of AWS Certificate Manager Certificate DomainValidationOption.  ##" ],
      "SubjectAlternativeNames" : ["Type: List of String values. FQDNs to be included in the Subject Alternative Name extension of the ACM certificate. For example, you can add www.example.net to a certificate for the www.example.com domain name so that users can reach your site by using either name. "],
      "ValidationMethod" : "String. The method you want to use if you are requesting a public certificate to validate that you own or control a domain. Valid values include EMAIL or DNS. We recommend that you use DNS validation. The default is EMAIL. ACM uses CNAME (Canonical Name) records to validate that you own or control a domain. When you choose DNS validation, ACM provides you one or more CNAME records to insert into your DNS database. During stack creation, CloudFormation emits a CREATE_IN_PROGRESS event which lists these CNAME records. They are displayed in the Status reason column on the Events page for the stack. "
    }
  };

  //dynamodb
  dynamodb_table={
    "Type" : "AWS::DynamoDB::Table",
    "Properties" : {
      "AttributeDefinitions" : ["*Type: List of AttributeDefinition.A list of attributes that describe the key schema for the table and indexes. Duplicates are allowed ##"],
      "BillingMode" : "String. Specify how you are charged for read and write throughput and how you manage capacity. If not specified, the default is PROVISIONED. PROVISIONED: Sets the billing mode to PROVISIONED. We recommend using PROVISIONED for predictable workloads. PAY_PER_REQUEST: Sets the billing mode to PAY_PER_REQUEST. We recommend using PAY_PER_REQUEST for unpredictable workloads.",
      "GlobalSecondaryIndexes" : ["Type: List of GlobalSecondaryIndex. Global secondary indexes to be created on the table. You can create up to 20 global secondary indexes. If you update a table to include a new global secondary index, AWS CloudFormation initiates the index creation and then proceeds with the stack update. AWS CloudFormation doesn't wait for the index to complete creation because the backfilling phase can take a long time, depending on the size of the table. You can't use the index or update the table until the index's status is ACTIVE. You can track its status by using the DynamoDB DescribeTable command. If you add or delete an index during an update, we recommend that you don't update any other resources. If your stack fails to update and is rolled back while adding a new index, you must manually delete the index. Updates are not supported. The following are exceptions: 1. If you update only the provisioned throughput values of global secondary indexes, you can update the table without interruption. 2. You can delete or add one global secondary index without interruption. If you do both in the same update (for example, by changing the index's logical ID), the update fails ##" ],
      "KeySchema" : ["*Type: List of KeySchema. Specifies the attributes that make up the primary key for the table. The attributes in the KeySchema property must also be defined in the AttributeDefinitions property. ##"],
      "LocalSecondaryIndexes" : ["Type: List of LocalSecondaryIndex. Local secondary indexes to be created on the table. You can create up to 5 local secondary indexes. Each index is scoped to a given hash key value. The size of each hash key can be up to 10 gigabytes##"],
      "PointInTimeRecoverySpecification" : {"info":"Type: PointInTimeRecoverySpecification. The settings used to enable point in time recovery.##"},
      "ProvisionedThroughput" : {"info":"**Type: ProvisionedThroughput. Throughput for the specified table, which consists of values for ReadCapacityUnits and WriteCapacityUnits.Conditional. If you set BillingMode as PROVISIONED, you must specify this property. If you set BillingMode as PAY_PER_REQUEST, you cannot specify this property. ##"},
      "SSESpecification" : {"info":"Type: DynamoDB Table SSESpecification##"},
      "StreamSpecification" : {"info":"Type: StreamSpecification##"},
      "TableName" : "String. A name for the table. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the table name. If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name. ",
      "TimeToLiveSpecification" : {"info":"Type: TimeToLiveSpecification##"}
    }
  };

  //sqs
  sqs_queue=
  {
     "Type" : "AWS::SQS::Queue",
     "Properties" : {
        "ContentBasedDeduplication" : "Boolean. For first-in-first-out (FIFO) queues, specifies whether to enable content-based deduplication. During the deduplication interval, Amazon SQS treats messages that are sent with identical content as duplicates and delivers only one copy of the message.",
        "DelaySeconds": "Integer. The time in seconds that the delivery of all messages in the queue is delayed. You can specify an integer value of 0 to 900 (15 minutes). The default value is 0. ",
        "FifoQueue" : "Boolean. If set to true, creates a FIFO queue. If you don't specify this property, Amazon SQS creates a standard queue. ",
        "KmsMasterKeyId": "String. The ID of an AWS managed customer master key (CMK) for Amazon SQS or a custom CMK. To use the AWS managed CMK for Amazon SQS, specify the alias alias/aws/sqs. ",
        "KmsDataKeyReusePeriodSeconds": "Integer. The length of time in seconds that Amazon SQS can reuse a data key to encrypt or decrypt messages before calling AWS KMS again. The value must be an integer between 60 (1 minute) and 86,400 (24 hours). The default is 300 (5 minutes). ",
        "MaximumMessageSize": "Integer. The limit of how many bytes that a message can contain before Amazon SQS rejects it. You can specify an integer value from 1024 bytes (1 KiB) to 262144 bytes (256 KiB). The default value is 262144 (256 KiB). ",
        "MessageRetentionPeriod": "Integer. The number of seconds that Amazon SQS retains a message. You can specify an integer value from 60 seconds (1 minute) to 1209600 seconds (14 days). The default value is 345600 seconds (4 days). ",
        "QueueName": "String. A name for the queue. To create a FIFO queue, the name of your FIFO queue must end with the .fifo suffix. If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.",
        "ReceiveMessageWaitTimeSeconds": "Integer. Specifies the duration, in seconds, that the ReceiveMessage action call waits until a message is in the queue in order to include it in the response, as opposed to returning an empty response if a message isn't yet available. You can specify an integer from 1 to 20. ",
        "RedrivePolicy": {"info":"Specifies an existing dead letter queue to receive messages after the source queue (this queue) fails to process a message a specified number of times. ##"},
        "VisibilityTimeout": "Integer. The length of time during which a message will be unavailable after a message is delivered from the queue. This blocks other components from receiving the same message and gives the initial component time to process and delete the message from the queue. "
     }
  }     ;
  sqs_queuepolicy=
  {
     "Type" : "AWS::SQS::QueuePolicy",
     "Properties" : {
        "PolicyDocument" : {"info":"*A policy document that contains the permissions for the specified Amazon SQS queues. Use AWS policy generator to create one."},
        "Queues" : ["*Type: List of String values . The URLs of the queues to which you want to add the policy. "]
     }
  };

  //sns
  sns_subscription={
    "Type" : "AWS::SNS::Subscription",
    "Properties" : {
      "DeliveryPolicy" : {"info":"The JSON serialization of the subscription's delivery policy. Use AWS policy generator to create the policy."},
      "Endpoint" : "String. The endpoint that receives notifications from the Amazon SNS topic. The endpoint value depends on the protocol that you specify. For the http protocol, the endpoint is an URL beginning with 'https://' For the https protocol, the endpoint is a URL beginning with 'https://' .For the email protocol, the endpoint is an email address. For the email-json protocol, the endpoint is an email address. For the sms protocol, the endpoint is a phone number of an SMS-enabled device. For the sqs protocol, the endpoint is the ARN of an Amazon SQS queue. For the application protocol, the endpoint is the EndpointArn of a mobile app and device. For the lambda protocol, the endpoint is the ARN of an AWS Lambda function.",
      "FilterPolicy" : {"info":"The filter policy JSON that is assigned to the subscription. Use AWS policy generator to create the policy."},
      "Protocol" : "*String. http – delivery of JSON-encoded message via HTTP POST. https – delivery of JSON-encoded message via HTTPS POST . email – delivery of message via SMTP. email-json – delivery of JSON-encoded message via SMTP. sms – delivery of message via SMS. sqs – delivery of JSON-encoded message to an Amazon SQS queue. application – delivery of JSON-encoded message to an EndpointArn for a mobile app and device.   lambda – delivery of JSON-encoded message to an AWS Lambda function.",
      "RawMessageDelivery" : "Boolean. true if raw message delivery is enabled for the subscription. Raw messages are free of JSON formatting and can be sent to HTTP/S and Amazon SQS endpoints.",
      "Region" : "String. For cross-region subscriptions, the region in which the topic resides. ",
      "TopicArn" : "*String. The Amazon Resource Name (ARN) of the topic to subscribe to."
    }
  };
  sns_topic={
    "Type" : "AWS::SNS::Topic",
    "Properties" : {
      "DisplayName" : "A developer-defined string that can be used to identify this SNS topic.",
      "KmsMasterKeyId" : "String. An AWS KMS key identifier. This can be a key ID, key ARN, or key alias.",
      "Subscription" : ["Type: List of SNS Subscriptions##"],
      "TopicName" : "A name for the topic. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the topic name. If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name. "
    }
  };
  sns_topicpolicy={
    "Type" : "AWS::SNS::TopicPolicy",
    "Properties" :
      {
        "PolicyDocument" : {"info":"A JSON policy document. Please use aws policy generator to create the policy."},
        "Topics" : ["Type: A list of Amazon SNS topics ARNs"]
      }
  }

  // serverless_function={
  //   "Type":"AWS::Serverless::Function",
  //   "Properties":{
  //     "Globals":{"info":"Note: Globals is NOT a property but a section. in your SAM template to define properties common to all your Serverless Function and APIs ##"},
  //     "Handler":"**String. Function within your code that is called to begin execution. It can be specified in Globals or overridden here.",
  //     "Runtime":"**String. The runtime environment. It can be specified in Globals or overridden here.",
  //     "CodeUri":"** string | S3 Location Object. Either CodeUri or InlineCode must be specified. S3 Uri or location to the function code. The S3 object this Uri references MUST be a Lambda deployment package.##. Either InlineCode or CodeUri must be specified. ",
  //     "InlineCode": "** string. Either CodeUri or InlineCode must be specified. The inline code for the lambda.",
  //     "FunctionName": "string. A name for the function. If you don't specify a name, a unique name will be generated for you.",
  //     "Description": "string",
  //     "MemorySize": "Number. Size of the memory allocated per invocation of the function in MB. Defaults to 128.",
  //     "Timeout": "**Number. Maximum time that the function can run before it is killed in seconds. Defaults to 3. It can be specified in Globals or overridden here.",
  //     "Role":"string. ARN of an IAM role to use as this function's execution role. If omitted, a default role is created for this function.",
  //     "Policies":["list of strings | list of iam policy document objects | list of SAM policy templates. Names of AWS managed IAM policies or IAM policy documents or SAM Policy Templates that this function needs, which should be appended to the default role for this function. If the Role property is set, this property has no meaning.##"],
  //     "PermissionsBoundary":"**string. ARN of a permissions boundary to use for this function's execution role.",
  //     "Environment":" ** Function environment object. Configuration for the runtime environment.##",
  //     "VpcConfig": "VPC config object. Configuration to enable this function to access private resources within your VPC.##",
  //   }
  // }


  //ecs

  ecs_cluster={
    "Type" : "AWS::ECS::Cluster",
    "Properties" : {
        "ClusterName" : "String. A user-generated string that you use to identify your cluster. If you don't specify a name, AWS CloudFormation generates a unique physical ID for the name. Update requires: Replacement"
      }
  }
  
  ecs_service={
    "Type" : "AWS::ECS::Service",
    "Properties" : {
        "Cluster" : "String. The short name or full Amazon Resource Name (ARN) of the cluster on which to run your service. If you do not specify a cluster, the default cluster is assumed.",
        "DeploymentConfiguration" : {"info":"Type: DeploymentConfiguration. Optional deployment parameters that control how many tasks run during the deployment and the ordering of stopping and starting tasks.##"},
        "DesiredCount" : "Integer. The number of instantiations of the specified task definition to place and keep running on your cluster.",
        "HealthCheckGracePeriodSeconds" : "Integer. The period of time, in seconds, that the Amazon ECS service scheduler should ignore unhealthy Elastic Load Balancing target health checks after a task has first started. This is only valid if your service is configured to use a load balancer. If your service's tasks take a while to start and respond to Elastic Load Balancing health checks, you can specify a health check grace period of up to 2,147,483,647 seconds. During that time, the ECS service scheduler ignores health check status. This grace period can prevent the ECS service scheduler from marking tasks as unhealthy and stopping them before they have time to come up.",
        "LaunchType" : "String. Allowed Values: EC2 | FARGATE",
        "LoadBalancers" : ["Type: List of LoadBalancer. A list of load balancer objects to associate with the cluster. If you specify the Role property, LoadBalancers must be specified as well.##"],
        "NetworkConfiguration" : {"info":" Type: NetworkConfiguration. The network configuration for the service. This parameter is required for task definitions that use the awsvpc network mode to receive their own elastic network interface, and it is not supported for other network modes. ##"},
        "PlacementConstraints" : ["Type: List of PlacementConstraint. An array of placement constraint objects to use for tasks in your service. You can specify a maximum of 10 constraints per task (this limit includes constraints in the task definition and those specified at runtime).##"],
        "PlacementStrategies" : ["Type: List of PlacementStrategy. The placement strategy objects to use for tasks in your service. You can specify a maximum of five strategy rules per service.##"],
        "PlatformVersion" : "String. The platform version that your tasks in the service are running on. A platform version is specified only for tasks using the Fargate launch type. If one isn't specified, the LATEST platform version is used by default.",
        "Role" : "String. The name or full Amazon Resource Name (ARN) of the IAM role that allows Amazon ECS to make calls to your load balancer on your behalf. This parameter is only permitted if you are using a load balancer with your service and your task definition does not use the awsvpc network mode. If you specify the role parameter, you must also specify a load balancer object with the loadBalancers parameter. Important: If your account has already created the Amazon ECS service-linked role, that role is used by default for your service unless you specify a role here. The service-linked role is required if your task definition uses the awsvpc network mode, in which case you should not specify a role here. If your specified role has a path other than /, then you must either specify the full role ARN (this is recommended) or prefix the role name with the path. ",
        "SchedulingStrategy" : "String. Allowed Values: DAEMON | REPLICA . REPLICA-The replica scheduling strategy places and maintains the desired number of tasks across your cluster. By default, the service scheduler spreads tasks across Availability Zones. You can use task placement strategies and constraints to customize task placement decisions. This scheduler strategy is required if the service is using the CODE_DEPLOY or EXTERNAL deployment controller types. DAEMON-The daemon scheduling strategy deploys exactly one task on each active container instance that meets all of the task placement constraints that you specify in your cluster. When you're using this strategy, you don't need to specify a desired number of tasks, a task placement strategy, or use Service Auto Scaling policies. Tasks using the Fargate launch type or the CODE_DEPLOY or EXTERNAL deployment controller types don't support the DAEMON scheduling strategy.",
        "ServiceName" : "String. The name of your service. Up to 255 letters (uppercase and lowercase), numbers, and hyphens are allowed. Service names must be unique within a cluster, but you can have similarly named services in multiple clusters within a Region or across multiple Regions.",
        "ServiceRegistries" : ["Type: List of ServiceRegistry. The details of the service discovery registries to assign to this service. Service discovery is supported for Fargate tasks if you are using platform version v1.1.0 or later.##"],
        "TaskDefinition" : "*String. The family and revision (family:revision) or full ARN of the task definition to run in your service. If a revision is not specified, the latest ACTIVE revision is used. A task definition must be specified if the service is using the ECS deployment controller."
      }
  }

  ecs_taskdefinition={
    "Type" : "AWS::ECS::TaskDefinition",
    "Properties" : {
        "ContainerDefinitions" : ["Type: List of ContainerDefinition. A list of container definitions in JSON format that describe the different containers that make up your task.##"],
        "Cpu" : "String. The number of cpu units used by the task. If you are using the EC2 launch type, this field is optional and any value can be used. If you are using the Fargate launch type, this field is required and you must use one of the following values, which determines your range of valid values for the memory parameter: 256 (.25 vCPU) - Available memory values: 512 (0.5 GB), 1024 (1 GB), 2048 (2 GB). 512 (.5 vCPU) - Available memory values: 1024 (1 GB), 2048 (2 GB), 3072 (3 GB), 4096 (4 GB). 1024 (1 vCPU) - Available memory values: 2048 (2 GB), 3072 (3 GB), 4096 (4 GB), 5120 (5 GB), 6144 (6 GB), 7168 (7 GB), 8192 (8 GB). 2048 (2 vCPU) - Available memory values: Between 4096 (4 GB) and 16384 (16 GB) in increments of 1024 (1 GB). 4096 (4 vCPU) - Available memory values: Between 8192 (8 GB) and 30720 (30 GB) in increments of 1024 (1 GB).",
        "ExecutionRoleArn" : "String. The Amazon Resource Name (ARN) of the task execution role that containers in this task can assume. All containers in this task are granted the permissions that are specified in this role.",
        "Family" : "String. The name of a family that this task definition is registered to. A family groups multiple versions of a task definition. Amazon ECS gives the first task definition that you registered to a family a revision number of 1. Amazon ECS gives sequential revision numbers to each task definition that you add. To use revision numbers when you update a task definition, specify this property. If you don't specify a value, AWS CloudFormation generates a new task definition each time that you update it.",
        "Memory" : "String. The amount (in MiB) of memory used by the task. If using the EC2 launch type, this field is optional and any value can be used. If using the Fargate launch type, this field is required and you must use one of the following values, which determines your range of valid values for the cpu parameter: 512 (0.5 GB), 1024 (1 GB), 2048 (2 GB) - Available cpu values: 256 (.25 vCPU) | 1024 (1 GB), 2048 (2 GB), 3072 (3 GB), 4096 (4 GB) - Available cpu values: 512 (.5 vCPU) | 2048 (2 GB), 3072 (3 GB), 4096 (4 GB), 5120 (5 GB), 6144 (6 GB), 7168 (7 GB), 8192 (8 GB) - Available cpu values: 1024 (1 vCPU) | Between 4096 (4 GB) and 16384 (16 GB) in increments of 1024 (1 GB) - Available cpu values: 2048 (2 vCPU) | Between 8192 (8 GB) and 30720 (30 GB) in increments of 1024 (1 GB) - Available cpu values: 4096 (4 vCPU)",
        "NetworkMode" : "String. Allowed Values: awsvpc | bridge | host | none. The Docker networking mode to use for the containers in the task. The valid values are none, bridge, awsvpc, and host. The default Docker network mode is bridge. If you are using the Fargate launch type, the awsvpc network mode is required. If you are using the EC2 launch type, any network mode can be used. If the network mode is set to none, you cannot specify port mappings in your container definitions, and the tasks containers do not have external connectivity. The host and awsvpc network modes offer the highest networking performance for containers because they use the EC2 network stack instead of the virtualized network stack provided by the bridge mode. With the host and awsvpc network modes, exposed container ports are mapped directly to the corresponding host port (for the host network mode) or the attached elastic network interface port (for the awsvpc network mode), so you cannot take advantage of dynamic host port mappings. If the network mode is awsvpc, the task is allocated an elastic network interface, and you must specify a NetworkConfiguration value when you create a service or run a task with the task definition. Currently, only Amazon ECS-optimized AMIs, other Amazon Linux variants with the ecs-init package, or AWS Fargate infrastructure support the awsvpc network mode. If the network mode is host, you cannot run multiple instantiations of the same task on a single container instance when port mappings are used. Docker for Windows uses different network modes than Docker for Linux. When you register a task definition with Windows containers, you must not specify a network mode. If you use the console to register a task definition with Windows containers, you must choose the <default> network mode object.",
        "PlacementConstraints" : [ "Type: List of TaskDefinitionPlacementConstraint. An array of placement constraint objects to use for tasks. This field is not valid if you are using the Fargate launch type for your task. ##"],
        "RequiresCompatibilities" : [ "list of strings. The launch type the task requires. If no value is specified, it will default to EC2. Valid values include EC2 and FARGATE."],
        "TaskRoleArn" : "String. IAM roles for tasks on Windows require that the -EnableTaskIAMRole option is set when you launch the Amazon ECS-optimized Windows AMI. Your containers must also run some configuration code in order to take advantage of the feature.",
        "Volumes" : ["Type: List of Volume. If your tasks are using the Fargate launch type, the host and sourcePath parameters are not supported. ##"]
      }
  }
  
  cloudtrail_trail={
    "Type" : "AWS::CloudTrail::Trail",
    "Properties" : {
        "CloudWatchLogsLogGroupArn" : "**String. Specifies a log group name using an Amazon Resource Name (ARN), a unique identifier that represents the log group to which CloudTrail logs will be delivered. Not required unless you specify CloudWatchLogsRoleArn.",
        "CloudWatchLogsRoleArn" : "**String. Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group.",
        "EnableLogFileValidation" : "Boolean. Specifies whether log file validation is enabled. The default is false. When you disable log file integrity validation, the chain of digest files is broken after one hour. CloudTrail will not create digest files for log files that were delivered during a period in which log file integrity validation was disabled. For example, if you enable log file integrity validation at noon on January 1, disable it at noon on January 2, and re-enable it at noon on January 10, digest files will not be created for the log files delivered from noon on January 2 to noon on January 10. The same applies whenever you stop CloudTrail logging or delete a trail.",
        "EventSelectors" : ["Type: List of EventSelector. Use event selectors to further specify the management and data event settings for your trail. By default, trails created without specific event selectors will be configured to log all read and write management events, and no data events. When an event occurs in your account, CloudTrail evaluates the event selector for all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event.  ##"],
        "IncludeGlobalServiceEvents" : "Boolean. Specifies whether the trail is publishing events from global services such as IAM to the log files.",
        "IsLogging" : "*Boolean. Whether the CloudTrail is currently logging AWS API calls.",
        "IsMultiRegionTrail" : "Boolean. Specifies whether the trail applies only to the current region or to all regions. The default is false. If the trail exists only in the current region and this value is set to true, shadow trails (replications of the trail) will be created in the other regions. If the trail exists in all regions and this value is set to false, the trail will remain in the region where it was created, and its shadow trails in other regions will be deleted. As a best practice, consider using trails that log events in all regions.",
        "KMSKeyId" : "String. Specifies the KMS key ID to use to encrypt the logs delivered by CloudTrail. The value can be an alias name prefixed by 'alias/', a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier. ",
        "S3BucketName" : "*String. Specifies the name of the Amazon S3 bucket designated for publishing log files.",
        "S3KeyPrefix" : "String. Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery. ",
        "SnsTopicName" : "String. Specifies the name of the Amazon SNS topic defined for notification of log file delivery. The maximum length is 256 characters.",
        "TrailName" : "String. Specifies the name of the trail or trail ARN. e.g. arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail"
      }
  }
  
  cw_alarm={
    "Type" : "AWS::CloudWatch::Alarm",
    "Properties" : {
        "ActionsEnabled" : "Boolean. Indicates whether actions should be executed during any changes to the alarm state.",
        "AlarmActions" : ["Type: List of String. Maximum : 5. The list of actions to execute when this alarm transitions into an ALARM state from any other state. Specify each action as an Amazon Resource Name (ARN). "],
        "AlarmDescription" : "String. Description of the alarm.",
        "AlarmName" : "String. The name of the alarm. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the alarm name. If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.",
        "ComparisonOperator" : "*String. Allowed Values: GreaterThanOrEqualToThreshold | GreaterThanThreshold | LessThanOrEqualToThreshold | LessThanThreshold. The arithmetic operation to use when comparing the specified statistic and threshold. The specified statistic value is used as the first operand.",
        "DatapointsToAlarm" : "Integer. The number of datapoints that must be breaching to trigger the alarm. This is used only if you are setting an 'M out of N' alarm. In that case, this value is the M. ",
        "Dimensions" : ["Type: List of Dimension. The dimensions for the metric associated with the alarm. For an alarm based on a math expression, you can't specify Dimensions. Instead, you use Metrics.  ## "],
        "EvaluateLowSampleCountPercentile" : "String. Used only for alarms based on percentiles. If ignore, the alarm state does not change during periods with too few data points to be statistically significant. If evaluate or this parameter is not used, the alarm is always evaluated and possibly changes state no matter how many data points are available.",
        "EvaluationPeriods" : "*Integer. The number of periods over which data is compared to the specified threshold.",
        "ExtendedStatistic" : "String. The percentile statistic for the metric associated with the alarm. Specify a value between p0.0 and p100. Pattern: p(\\d{1,2}(\\.\\d{0,2})?|100)",
        "InsufficientDataActions" : ["List of string. The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state. Each action is specified as an Amazon Resource Name (ARN)."],
        "MetricName" : "String. The name of the metric associated with the alarm. This is required for an alarm based on a metric. For an alarm based on a math expression, you use Metrics instead and you can't specify MetricName.",
        "Metrics" : [ "Type: List of MetricDataQuery. An array that enables you to create an alarm based on the result of a metric math expression. Each item in the array either retrieves a metric or performs a math expression. If you specify the Metrics parameter, you cannot specify MetricName, Dimensions, Period, Namespace, Statistic, or ExtendedStatistic.  ##"],
        "Namespace" : "String. The namespace of the metric associated with the alarm. This is required for an alarm based on a metric. For an alarm based on a math expression, you can't specify Namespace and you use Metrics instead.",
        "OKActions" : ["List of string. The actions to execute when this alarm transitions to the OK state from any other state. Each action is specified as an Amazon Resource Name (ARN)." ],
        "Period" : "Integer. The period, in seconds, over which the statistic is applied. This is required for an alarm based on a metric. For an alarm based on a math expression, you can't specify Period, and instead you use the Metrics parameter.",
        "Statistic" : "String. Allowed Values: Average | Maximum | Minimum | SampleCount | Sum. The statistic for the metric associated with the alarm, other than percentile. For percentile statistics, use ExtendedStatistic.",
        "Threshold" : "*Double. The value to compare with the specified statistic.",
        "TreatMissingData" : "String. Sets how this alarm is to handle missing data points. Valid values are breaching, notBreaching, ignore, and missing. If you omit this parameter, the default behavior of missing is used.",
        "Unit" : "Allowed Values: Bits | Bits/Second | Bytes | Bytes/Second | Count | Count/Second | Gigabits | Gigabits/Second | Gigabytes | Gigabytes/Second | Kilobits | Kilobits/Second | Kilobytes | Kilobytes/Second | Megabits | Megabits/Second | Megabytes | Megabytes/Second | Microseconds | Milliseconds | None | Percent | Seconds | Terabits | Terabits/Second | Terabytes | Terabytes/Second"
      }
  }
  cw_dashboard={
    "Type" : "AWS::CloudWatch::Dashboard",
    "Properties" : {
        "DashboardBody" : "*String. The detailed information about the dashboard in JSON format, including the widgets to include and their location on the dashboard. This parameter is required.",
        "DashboardName" : "String. The name of the dashboard. The name must be between 1 and 255 characters. If you do not specify a name, one will be generated automatically."
      }
  }

  cwlogs_destination={
    "Type" : "AWS::Logs::Destination",
    "Properties" : {
        "DestinationName" : "*String",
        "DestinationPolicy" : {"info":"*An IAM policy document that governs which AWS accounts can create subscription filters against this destination. Please use IAM policy generator to generate the policy."},
        "RoleArn" : "*String. The ARN of an IAM role that permits CloudWatch Logs to send data to the specified AWS resource.",
        "TargetArn" : "*String. The Amazon Resource Name (ARN) of the physical target to where the log events are delivered (for example, a Kinesis stream)."
      }
  }
  
  
  cwlogs_loggroup={
    "Type" : "AWS::Logs::LogGroup",
    "Properties" : {
        "LogGroupName" : "String. The name of the log group. If you don't specify a name, AWS CloudFormation generates a unique ID for the log group.",
        "RetentionInDays" : "Integer. The number of days to retain the log events in the specified log group. Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1827, and 3653."
      }
  }

  cwlogs_logstream={
    "Type" : "AWS::Logs::LogStream",
    "Properties" : {
        "LogGroupName" : "*String",
        "LogStreamName" : "String"
      }
  }
  

  cwlogs_metricfilter={
    "Type" : "AWS::Logs::MetricFilter",
    "Properties" : {
        "FilterPattern" : "*String. A filter pattern for extracting metric data out of ingested log events.",
        "LogGroupName" : "*String. The name of an existing log group that you want to associate with this metric filter. ",
        "MetricTransformations" : ["Type: List of MetricTransformation##"]
      }
  }

  cwlogs_subscriptionfilter={
    "Type" : "AWS::Logs::SubscriptionFilter",
    "Properties" : {
        "DestinationArn" : "*String",
        "FilterPattern" : "*String. The filtering expressions that restrict what gets delivered to the destination AWS resource. ",
        "LogGroupName" : "*String. The log group to associate with the subscription filter. All log events that are uploaded to this log group are filtered and delivered to the specified AWS resource if the filter pattern matches the log events.",
        "RoleArn" : "String. The ARN of an IAM role that grants CloudWatch Logs permissions to deliver ingested log events to the destination stream."
      }
  }
  
  cwevents_eventbuspolicy={
    "Type" : "AWS::Events::EventBusPolicy",
    "Properties" : {
        "Action" : "*String. The action that you are enabling the other account to perform. Currently, this must be events:PutEvents.",
        "Condition" : {"info":"Condition is a JSON string that you can use to limit the event bus permissions that you're granting only to accounts that fulfill the condition. Currently, the only supported condition is membership in a certain AWS organization. If you specify Condition with an AWS organization ID and specify '*' as the value for Principal, you grant permission to all the accounts in the named organization. ##"},
        "Principal" : "*String. The 12-digit AWS account ID that you are permitting to put events to your default event bus. Specify '*' to permit any account to put events to your default event bus. If you specify '*'' without specifying Condition, avoid creating rules that may match undesirable events. To create more secure rules, make sure that the event pattern for each rule contains an account field with a specific account ID from which to receive events. Rules with an account field do not match any events sent from other accounts.",
        "StatementId" : "*String. An identifier string for the external account that you're granting permissions to. If you later want to revoke the permission for this external account, you must specify this StatementId."
      }
  }
  
  cwevents_rule={
    "Type" : "AWS::Events::Rule",
    "Properties" : {
        "Description" : "String",
        "EventPattern" : {"info":"Describes which events CloudWatch Events routes to the specified target. For more information, see Event Patterns in CloudWatch Events in the Amazon CloudWatch Events User Guide. "},
        "Name" : "String. The name of the rule. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the rule name. If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.",
        "RoleArn" : "String. The Amazon Resource Name (ARN) of the role that is used for target invocation.",
        "ScheduleExpression" : "String. The scheduling expression that determines when and how often the rule runs.",
        "State" : "String. Indicates whether the rule is enabled. Allowed Values: DISABLED | ENABLED",
        "Targets" : ["Type: List of Target. The resources that CloudWatch Events routes events to and invokes when the rule is triggered.  If you're setting the event bus of another account as the target and that account granted permission to your account through an organization instead of directly by the account ID, you must specify a RoleArn with proper permissions in the Target structure. ##" ]
      }
  }
  
  eks_cluster={
    "Type" : "AWS::EKS::Cluster",
    "Properties" : {
        "Name" : "String",
        "ResourcesVpcConfig" : {"info":"*Type: ResourcesVpcConfig. The VPC configuration used by the cluster control plane. Amazon EKS VPC resources have specific requirements to work properly with Kubernetes. You must specify at least two subnets. You can specify up to five security groups, but we recommend that you use a dedicated security group for your cluster control plane. ##"},
        "RoleArn" : "*String. The Amazon Resource Name (ARN) of the IAM role that provides permissions for Amazon EKS to make calls to other AWS API operations on your behalf. ",
        "Version" : "String. The desired Kubernetes version for your cluster. If you don't specify a value here, the latest version available in Amazon EKS is used."
      }
  }

  efs_filesystem={
    "Type" : "AWS::EFS::FileSystem",
    "Properties" : {
        "Encrypted" : "**Boolean. A Boolean value that, if true, creates an encrypted file system. When creating an encrypted file system, you have the option of specifying a KmsKeyId for an existing AWS Key Management Service (AWS KMS) customer master key (CMK). If you don't specify a CMK, then the default CMK for Amazon EFS, /aws/elasticfilesystem, is used to protect the encrypted file system.",
        "FileSystemTags" : ["Type: List of ElasticFileSystemTag. A value that specifies to create one or more tags associated with the file system. Each tag is a user-defined key-value pair. Name your file system on creation by including a 'Key':'Name','Value':'{value}' key-value pair. ##"],
        "KmsKeyId" : "String. The ID of the AWS KMS CMK to be used to protect the encrypted file system. This parameter is only required if you want to use a nondefault CMK. If this parameter is not specified, the default CMK for Amazon EFS is used. If KmsKeyId is specified, the Encrypted parameter must be set to true.",
        "PerformanceMode" : "String. The performance mode of the file system. We recommend generalPurpose performance mode for most file systems. File systems using the maxIO performance mode can scale to higher levels of aggregate throughput and operations per second with a tradeoff of slightly higher latencies for most file operations. The performance mode can't be changed after the file system has been created. Allowed Values: generalPurpose | maxIO",
        "ProvisionedThroughputInMibps" : "**Double. The throughput, measured in MiB/s, that you want to provision for a file system that you're creating. Valid values are 1-1024. Required if ThroughputMode is set to provisioned. The upper limit for throughput is 1024 MiB/s. You can get this limit increased by contacting AWS Support.",
        "ThroughputMode" : "String. The throughput mode for the file system to be created. There are two throughput modes to choose from for your file system: bursting and provisioned. If you set ThroughputMode to provisioned, you must also set a value for ProvisionedThroughPutInMibps. You can decrease your file system's throughput in Provisioned Throughput mode or change between the throughput modes as long as it’s been more than 24 hours since the last decrease or throughput mode change. Allowed Values: bursting | provisioned"
      }
  }

  efs_mounttarget={
    "Type" : "AWS::EFS::MountTarget",
    "Properties" : {
        "FileSystemId" : "*String. The ID of the file system for which to create the mount target.",
        "IpAddress" : "String. Valid IPv4 address within the address range of the specified subnet.",
        "SecurityGroups" : ["Type: List of String. Up to five VPC security group IDs, of the form sg-xxxxxxxx. These must be for the same VPC as subnet specified."],
        "SubnetId" : "*String"
      }
  }
  
  s3_bucket={
    "Type" : "AWS::S3::Bucket",
    "Properties" : {
        "AccelerateConfiguration" : {"info":"Type: AccelerateConfiguration. Configures the transfer acceleration state for an Amazon S3 bucket.##"},
        "AccessControl" : "String. A canned access control list (ACL) that grants predefined permissions to the bucket. valid values : private | public-read | public-read-write | aws-exec-read | authenticated-read | bucket-owner-read | bucket-owner-full-control | log-delivery-write",
        "AnalyticsConfigurations" : ["Type: List of AnalyticsConfiguration. Specifies the configuration and any analyses for the analytics filter of an Amazon S3 bucket. ##"],
        "BucketEncryption" : {"info":"Type: BucketEncryption. Specifies default encryption for a bucket using server-side encryption with Amazon S3-managed keys (SSE-S3) or AWS KMS-managed keys (SSE-KMS) bucket. ##"},
        "BucketName" : "String. A name for the bucket. If you don't specify a name, AWS CloudFormation generates a unique ID and uses that ID for the bucket name.",
        "CorsConfiguration" : {"info":"Type: CorsConfiguration. Describes the cross-origin access configuration for objects in an Amazon S3 bucket. ##"},
        "InventoryConfigurations" : ["Type: List of InventoryConfiguration. Specifies the inventory configuration for an Amazon S3 bucket.##"],
        "LifecycleConfiguration" : {"info":"Type: LifecycleConfiguration. Specifies the lifecycle configuration for objects in an Amazon S3 bucket.##"},
        "LoggingConfiguration" : {"info":"Type: LoggingConfiguration. Settings that define where logs are stored. ##"},
        "MetricsConfigurations" : ["List of MetricsConfiguration,Specifies a metrics configuration for the CloudWatch request metrics (specified by the metrics configuration ID) from an Amazon S3 bucket. If you're updating an existing metrics configuration, note that this is a full replacement of the existing metrics configuration.##"],
        "NotificationConfiguration" : {"info":"Type: NotificationConfiguration. Configuration that defines how Amazon S3 handles bucket notifications.##"},
        "PublicAccessBlockConfiguration" : {"info":"Type: PublicAccessBlockConfiguration. Configuration that defines how Amazon S3 handles public access.##"},
        "ReplicationConfiguration" : {"info":"Type: ReplicationConfiguration. Configuration for replicating objects in an S3 bucket. To enable replication, you must also enable versioning by using the VersioningConfiguration property. Amazon S3 can store replicated objects in only one destination bucket. The destination bucket must already exist and be in a different AWS Region than your source bucket.##"},
        "VersioningConfiguration" : {"info":"Type: VersioningConfiguration. Enables multiple versions of all objects in this bucket. You might enable versioning to prevent objects from being deleted or overwritten by mistake or to archive objects so that you can retrieve previous versions of them.##"},
        "WebsiteConfiguration" : {"info":"Type: WebsiteConfiguration. Information used to configure the bucket as a static website. ##"}
      }
  }

  s3_bucketpolicy={
    "Type" : "AWS::S3::BucketPolicy",
    "Properties" : {
        "Bucket" : "*String. The name of the Amazon S3 bucket to which the policy applies.",
        "PolicyDocument" : {"info":"*Type: Json. A policy document containing permissions to add to the specified bucket. Please use AWS Policy Generator to generate policies."}
      }
  }  


  ecr_repository={
    "Type" : "AWS::ECR::Repository",
    "Properties" : {
        "LifecyclePolicy" : {"info":"Lifecycle Policy ##"},
        "RepositoryName" : "String. The name to use for the repository. The repository name may be specified on its own (such as nginx-web-app) or it can be prepended with a namespace to group the repository into a category (such as project-a/nginx-web-app). If you don't specify a name,",
        "RepositoryPolicyText" : {"info":"Type : Json. Create a policy using AWS IAM policy generator"}
      }
  }
  
  cfn_customresource={
    "Type" : "AWS::CloudFormation::CustomResource",
    "Properties" : {
        "ServiceToken" : "*String, The service token that was given to the template developer by the service provider to access the service, such as an Amazon SNS topic ARN or Lambda function ARN. The service token must be from the same region in which you are creating the stack."
      }
  }
  
  cfn_macro={
    "Type" : "AWS::CloudFormation::Macro",
    "Properties" : {
        "Description" : "String. A description of the macro.",
        "FunctionName" : "*String. The Amazon Resource Name (ARN) of the underlying AWS Lambda function that you want AWS CloudFormation to invoke when the macro is run.",
        "LogGroupName" : "String. The Amazon CloudWatch log group to which AWS CloudFormation sends error logging information when invoking the macro's underlying AWS Lambda function.",
        "LogRoleARN" : "String. The ARN of the role AWS CloudFormation should assume when sending log entries to CloudWatch logs.",
        "Name" : "*String. The name of the macro. The name of the macro must be unique across all macros in the account."
      }
  }
  
  cfn_stack={
    "Type" : "AWS::CloudFormation::Stack",
    "Properties" : {
        "NotificationARNs" : ["List of strings. The Simple Notification Service (SNS) topic ARNs to publish stack related events. You can find your SNS topic ARNs using the SNS console or your Command Line Interface (CLI). Maximum : 5"],
        "Parameters" : {"info":"** Type: map of string. The set value pairs that represent the parameters passed to CloudFormation when this nested stack is created. Each parameter has a name corresponding to a parameter defined in the embedded template and a value representing the value that you want to set for the parameter. Note: If you use the Ref function to pass a parameter value to a nested stack, comma-delimited list parameters must be of type String. In other words, you cannot pass values that are of type CommaDelimitedList to nested stacks. Whether an update causes interruptions depends on the resources that are being updated. An update never causes a nested stack to be replaced."},
        "TemplateURL" : "*String, Location of file containing the template body. The URL must point to a template (max size: 460,800 bytes) that is located in an Amazon S3 bucket.",
        "TimeoutInMinutes" : "Integer, The length of time, in minutes, that CloudFormation waits for the nested stack to reach the CREATE_COMPLETE state. The default is no timeout. When CloudFormation detects that the nested stack has reached the CREATE_COMPLETE state, it marks the nested stack resource as CREATE_COMPLETE in the parent stack and resumes creating the parent stack. If the timeout period expires before the nested stack reaches CREATE_COMPLETE, CloudFormation marks the nested stack as failed and rolls back both the nested stack and parent stack."
      }
  }

  cfn_waitcondition={
    "Type" : "AWS::CloudFormation::WaitCondition",
    "Properties" : {
        "Count" : "Integer. The number of success signals that CloudFormation must receive before it continues the stack creation process. When the wait condition receives the requisite number of success signals, CloudFormation resumes the creation of the stack. If the wait condition does not receive the specified number of success signals before the Timeout period expires, CloudFormation assumes that the wait condition has failed and rolls the stack back.",
        "Handle" : "String. A reference to the wait condition handle used to signal this wait condition. Use the Ref intrinsic function to specify an AWS::CloudFormation::WaitConditionHandle resource. Anytime you add a WaitCondition resource during a stack update, you must associate the wait condition with a new WaitConditionHandle resource. Do not reuse an old wait condition handle that has already been defined in the template. If you reuse a wait condition handle, the wait condition might evaluate old signals from a previous create or update stack command.",
        "Timeout" : "String. The length of time (in seconds) to wait for the number of signals that the Count property specifies. Timeout is a minimum-bound property, meaning the timeout occurs no sooner than the time you specify, but can occur shortly thereafter. The maximum time that can be specified for this property is 12 hours (43200 seconds).",
        "CreationPolicy":{"info":"Use the CreationPolicy attribute when you want to wait on resource configuration actions before stack creation proceeds. For example, if you install and configure software applications on an EC2 instance, you might want those applications to be running before proceeding. In such cases, you can add a CreationPolicy attribute to the instance, and then send a success signal to the instance after the applications are installed and configured. ## "} 
      }
  }

  cfn_waitconditionhandle={
    "Type" : "AWS::CloudFormation::WaitConditionHandle",
    "Properties" : {
      }
  }
  
  lambda_alias={
    "Type" : "AWS::Lambda::Alias",
    "Properties" : {
        "Description" : "String",
        "FunctionName" : "*String. Name formats = 1. Function name - MyFunction  2. Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction  3. Partial ARN - 123456789012:function:MyFunction. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.  ",
        "FunctionVersion" : "*String. The function version that the alias invokes.",
        "Name" : "*String. The name of the alias",
        "RoutingConfig" : ["List of VersionWeight."]
      }
  }

  lambda_eventsourcemapping={
    "Type" : "AWS::Lambda::EventSourceMapping",
    "Properties" : {
        "BatchSize" : "Integer. The maximum number of items to retrieve in a single batch. Amazon Kinesis - Default 100. Max 10,000. Amazon DynamoDB Streams - Default 100. Max 1,000. Amazon Simple Queue Service - Default 10. Max 10.",
        "Enabled" : "Boolean. Disables the event source mapping to pause polling and invocation.",
        "EventSourceArn" : "*String. The Amazon Resource Name (ARN) of the event source. Amazon Kinesis - The ARN of the data stream or a stream consumer. Amazon DynamoDB Streams - The ARN of the stream. Amazon Simple Queue Service - The ARN of the queue.",
        "FunctionName" : "*String. The name of the Lambda function. Name formats = 1. Function name - MyFunction  2. Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction  3. Partial ARN - 123456789012:function:MyFunction. 4. Version or Alias ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD.  The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.  ",
        "StartingPosition" : "String. The position in a stream from which to start reading. Required for Amazon Kinesis and Amazon DynamoDB Streams sources. AT_TIMESTAMP is only supported for Amazon Kinesis streams. Allowed Values: AT_TIMESTAMP | LATEST | TRIM_HORIZON"
      }
  }
  
  lambda_function={
    "Type" : "AWS::Lambda::Function",
    "Properties" : {
        "Code" : {"info":"Type:Code ##"},
        "DeadLetterConfig" : {"info":"Type : DeadLetterConfig.  A dead letter queue configuration that specifies the queue or topic where Lambda sends asynchronous events when they fail processing. ##"},
        "Description" : "String",
        "Environment" : {"info":"Type: Environment. Environment variables that are accessible from function code during execution.##"},
        "FunctionName" : "String. The name of the Lambda function, up to 64 characters in length. If you don't specify a name, AWS CloudFormation generates one. If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.",
        "Handler" : "*String. The name of the method within your code that Lambda calls to execute your function. The format includes the file name.",
        "KmsKeyArn" : "String. The ARN of the AWS Key Management Service (AWS KMS) key that's used to encrypt your function's environment variables. If it's not provided, AWS Lambda uses a default service key.",
        "Layers" : ["List of strings. A list of function layers to add to the function's execution environment. Specify each layer by its ARN, including the version."],
        "MemorySize" : "Integer. The amount of memory that your function has access to. Increasing the function's memory also increases its CPU allocation. The default value is 128 MB. The value must be a multiple of 64 MB.",
        "ReservedConcurrentExecutions" : "Integer. The number of simultaneous executions to reserve for the function.",
        "Role" : "*String. The Amazon Resource Name (ARN) of the function's execution role.",
        "Runtime" : "*String. Allowed Values: dotnetcore1.0 | dotnetcore2.1 | go1.x | java8 | nodejs10.x | nodejs8.10 | provided | python2.7 | python3.6 | python3.7 | ruby2.5",
        "Timeout" : "Integer. The amount of time that Lambda allows a function to run before stopping it. The default is 3 seconds. The maximum allowed value is 900 seconds.",
        "TracingConfig" : {"info":"Type: TracingConfig. Set Mode to Active to sample and trace a subset of incoming requests with AWS X-Ray.##"},
        "VpcConfig" : {"info":"Type: VpcConfig. For network connectivity to AWS resources in a VPC, specify a list of security groups and subnets in the VPC. When you connect a function to a VPC, it can only access resources and the internet through that VPC. "}
      }
  }

  lambda_layerversion={
    "Type" : "AWS::Lambda::LayerVersion",
    "Properties" : {
        "CompatibleRuntimes" : ["List of strings. A list of compatible function runtimes. Used for filtering with ListLayers and ListLayerVersions." ],
        "Content" : {"info":"*Type: Content ##"},
        "Description" : "String",
        "LayerName" : "String. The name or Amazon Resource Name (ARN) of the layer.",
        "LicenseInfo" : "String. The layer's software license. It can be any of the following: 1. An SPDX license identifier. For example, MIT. 2. The URL of a license hosted on the internet. For example, https://opensource.org/licenses/MIT. 3. The full text of the license. Maximum:512"
      }
  }

  lambda_layerversionpermission={
    "Type" : "AWS::Lambda::LayerVersionPermission",
    "Properties" : {
        "Action" : "*String. The API action that grants access to the layer. For example, lambda:GetLayerVersion.",
        "LayerVersionArn" : "*String. The Amazon Resource Name (ARN) of the layer.",
        "OrganizationId" : "String. With the principal set to *, grant permission to all accounts in the specified organization.",
        "Principal" : "*String. An account ID, or * to grant permission to all AWS accounts."
      }
  }
  
  lambda_permission={
    "Type" : "AWS::Lambda::Permission",
    "Properties" : {
        "Action" : "*String. The action that the principal can use on the function. For example, lambda:InvokeFunction or lambda:GetFunction.",
        "EventSourceToken" : "String. For Alexa Smart Home functions, a token that must be supplied by the invoker.",
        "FunctionName" : "*String. The name of the Lambda function, version, or alias. The name of the Lambda function. Name formats = 1. Function name - MyFunction  2. Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction  3. Partial ARN - 123456789012:function:MyFunction. 4. Version or Alias ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD.  The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.  ",
        "Principal" : "*String. The AWS service or account that invokes the function. If you specify a service, use SourceArn or SourceAccount to limit who can invoke the function through that service.",
        "SourceAccount" : "String. For AWS services, the ID of the account that owns the resource. Use this instead of SourceArn to grant permission to resources that are owned by another account (for example, all of an account's Amazon S3 buckets). Or use it together with SourceArn to ensure that the resource is owned by the specified account. For example, an Amazon S3 bucket could be deleted by its owner and recreated by another account.",
        "SourceArn" : "String. For AWS services, the ARN of the AWS resource that invokes the function. For example, an Amazon S3 bucket or Amazon SNS topic."
      }
  }
    
  lambda_version={
    "Type" : "AWS::Lambda::Version",
    "Properties" : {
        "CodeSha256" : "String. Only publish a version if the hash value matches the value that's specified. Use this option to avoid publishing a version if the function code has changed since you last updated it.",
        "Description" : "String",
        "FunctionName" : "String. The name of the Lambda function, version, or alias. The name of the Lambda function. Name formats = 1. Function name - MyFunction  2. Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction  3. Partial ARN - 123456789012:function:MyFunction. 4. Version or Alias ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD.  The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length."
      }
  }
    
  ram_resourceshare={
    "Type" : "AWS::RAM::ResourceShare",
    "Properties" : {
        "AllowExternalPrincipals" : "Boolean. Indicates whether principals outside your AWS organization can be associated with a resource share.",
        "Name" : "String. The name of the resource share",
        "Principals" : ["Type: List of String. The principals to associate with the resource share. The possible values are IDs of AWS accounts, the ARN of an OU or organization from AWS Organizations."],
        "ResourceArns" : ["Type: List of String. The Amazon Resource Names (ARN) of the resources to associate with the resource share."]
      }
  }
  
  sm_resourcepolicy={
    "Type" : "AWS::SecretsManager::ResourcePolicy",
    "Properties" : {
        "ResourcePolicy" : {"info":"*Specifies a JSON object that's constructed according to the grammar and syntax for a resource-based policy. The policy identifies who can access or manage this secret and its versions. Please use aws policy generator to generate this policy."},
        "SecretId" : "*String. Specifies the Amazon Resource Name (ARN) or the friendly name of the secret that you want to attach a resource-based permissions policy to. If you use this property to change the SecretId for an existing resource-based policy, it removes the policy from the original secret, and then attaches the policy to the secret with the specified SecretId. This results in changing the permissions for two secrets."
      }
  }

  sm_rotationschedule={
    "Type" : "AWS::SecretsManager::RotationSchedule",
    "Properties" : {
        "RotationLambdaARN" : "String. Specifies the ARN of the Lambda function that can rotate the secret. If you don't specify this parameter, then the secret must already have the ARN of a Lambda function configured.",
        "RotationRules" : {"info":"Type: RotationRules. Specifies a structure that defines the rotation schedule for this secret.##"},
        "SecretId" : "*String. Specifies the Amazon Resource Name (ARN) or the friendly name of the secret that you want to rotate."
      }
  }

  sm_secret={
    "Type" : "AWS::SecretsManager::Secret",
    "Properties" : {
        "Description" : "String",
        "GenerateSecretString" : {"info":"Type: GenerateSecretString. You can return that string directly to use as the secret value, or you can specify both the SecretStringTemplate and the GenerateSecretKeyparameters. Secrets Manager uses the value in GenerateSecretKeyparameters. Secrets Manager uses the value in GenerateSecretKey as the key name and combines it with the randomly generated password to make a JSON key-value pair. It then inserts that pair into the JSON structure that's specified in the SecretStringTemplateparameter.##"},
        "KmsKeyId" : "String. Specifies the ARN, Key ID, or alias of the AWS KMS customer master key (CMK) that's used to encrypt the SecretString or SecretBinary values for versions of this secret. If you don't specify this value, then Secrets Manager defaults to the AWS account's CMK (the one named aws/secretsmanager). If an AWS KMS CMK with that name doesn't yet exist, Secrets Manager creates it for you automatically the first time it needs to encrypt a version's SecretString or SecretBinary fields.",
        "Name" : "String. The friendly name of the secret. You can use forward slashes in the name to represent a path hierarchy. For example, /prod/databases/dbserver1 could represent the secret for a server named dbserver1 in the folder databases in the folder prod.",
        "SecretString" : "String. Specifies a literal string to use as the secret value for the secret. You can use any text you like, but remember that Lambda rotation functions require a specific JSON structure to be present in this field. Alternatively, instead of hardcoding the password in this string parameter, we recommend that you use the GenerateSecretString parameter instead."
      }
  }
  
  sm_secrettargetattachment={
    "Type" : "AWS::SecretsManager::SecretTargetAttachment",
    "Properties" : {
        "SecretId" : "*String. The Amazon Resource Name (ARN) or the friendly name of the secret that contains the credentials that you want to use with the specified service or database. To reference a secret that's also created in this template, use the see Ref function with the secret's logical ID.",
        "TargetId" : "*String. The ARN of the service or database whose credentials are stored in the specified secret.",
        "TargetType" : "*String. A string used by the Secrets Manager console to determine how to parse the structure of the secret text and place the values in the proper fields of the console user interface. If you created this secret using the Secrets Manager console then we recommend that you do not modify this value. If this is a custom secret, then this field is available for your use. As a best practice, do not store any sensitive information in this field. Instead, store sensitive information in the SecretString or SecretBinary fields to ensure that it is encrypted."
      }
  }
  
  cb_project={
    "Type" : "AWS::CodeBuild::Project",
    "Properties" : {
        "Artifacts" : {"info":"*Artifacts is a property of the AWS::CodeBuild::Project resource that specifies output settings for artifacts generated by an AWS CodeBuild build.##"} ,
        "BadgeEnabled" : "**Boolean. Indicates whether AWS CodeBuild generates a publicly accessible URL for your project's build badge. Including build badges with your project is currently not supported if the source type is CodePipeline. If you specify CODEPIPELINE for the Source property, do not specify the BadgeEnabled property.",
        "Cache" : {"info":"Type:ProjectCache. Settings that AWS CodeBuild uses to store and reuse build dependencies.##"},
        "Description" : "String",
        "EncryptionKey" : "String. The alias or Amazon Resource Name (ARN) of the AWS Key Management Service (AWS KMS) customer master key (CMK) that CodeBuild uses to encrypt the build output. If you don't specify a value, CodeBuild uses the AWS-managed CMK for Amazon Simple Storage Service (Amazon S3).",
        "Environment" : {"info":"*Type:Environment. The build environment settings for the project, such as the environment type or the environment variables to use for the build environment.##"},
        "LogsConfig" : {"info":"Type:LogsConfig. Information about logs for the build project. A project can create logs in Amazon CloudWatch Logs, an S3 bucket, or both.##"},
        "Name" : "String. The name of the build project. The name must be unique across all of the projects in your AWS account.",
        "QueuedTimeoutInMinutes" : "Integer. The number of minutes a build is allowed to be queued before it times out.",
        "SecondaryArtifacts" : ["List of Artifacts. A list of Artifacts objects. Each artifacts object specifies output settings that the project generates during a build.##"],
        "SecondarySources" : ["List of Source. ##" ],
        "SecondarySourceVersions" : ["Type: List of ProjectSourceVersion. An array of ProjectSourceVersion objects. If secondarySourceVersions is specified at the build level, then they take over these secondarySourceVersions (at the project level).##"],
        "ServiceRole" : "*String. The ARN of the AWS Identity and Access Management (IAM) role that enables AWS CodeBuild to interact with dependent AWS services on behalf of the AWS account.",
        "Source" : {"info":"*The source code settings for the project, such as the source code's repository type and location.##"},
        "SourceVersion" : "String. A version of the build input to be built for this project. If not specified, the latest version is used. If specified, it must be one of: 1. For AWS CodeCommit: the commit ID to use 2.For GitHub: the commit ID, pull request ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a pull request ID is specified, it must use the format pr/pull-request-ID (for example pr/25). If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used 3.For Bitbucket: the commit ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used 4.For Amazon Simple Storage Service (Amazon S3): the version ID of the object that represents the build input ZIP file to use.",
        "TimeoutInMinutes" : "Integer. How long, in minutes, from 5 to 480 (8 hours), for AWS CodeBuild to wait before timing out any related build that did not get marked as completed. The default is 60 minutes.",
        "Triggers" : {"info":"Type: ProjectTriggers. For an existing AWS CodeBuild build project that has its source code stored in a GitHub repository, enables AWS CodeBuild to begin automatically rebuilding the source code every time a code change is pushed to the repository.##"},
        "VpcConfig" : {"info":"VpcConfig specifies settings that enable AWS CodeBuild to access resources in an Amazon VPC. ##"}
      }
  }

  cb_sourcecredential={
    "Type" : "AWS::CodeBuild::SourceCredential",
    "Properties" : {
        "AuthType" : "*String. The type of authentication used by the credentials. Valid options are OAUTH, BASIC_AUTH, or PERSONAL_ACCESS_TOKEN. Allowed Values: BASIC_AUTH | OAUTH | PERSONAL_ACCESS_TOKEN",
        "ServerType" : "*String. Allowed Values: BITBUCKET | GITHUB | GITHUB_ENTERPRISE",
        "Token" : "*String. For GitHub or GitHub Enterprise, this is the personal access token. For Bitbucket, this is the app password.",
        "Username" : "String. The Bitbucket username when the authType is BASIC_AUTH. This parameter is not valid for other types of source providers or connections."
      }
  }

  msk_cluster={
    "Type" : "AWS::MSK::Cluster",
    "Properties" : {
        "BrokerNodeGroupInfo" : {"info": "*Type: BrokerNodeGroupInfo. The setup to be used for brokers in the cluster. ##"},
        "ClientAuthentication" : {"info": "Type: ClientAuthentication. Includes information related to client authentication. ##"},
        "ClusterName" : "*Type: String",
        "ConfigurationInfo" : {"info": "Type: ConfigurationInfo ##"},
        "EncryptionInfo" :  {"info": "Type: EncryptionInfo ##"},
        "EnhancedMonitoring" : "String. Specifies the level of monitoring for the MSK cluster. The possible values are DEFAULT, PER_BROKER, and PER_TOPIC_PER_BROKER.",
        "KafkaVersion" : "*String",
        "NumberOfBrokerNodes" : "*Integer. The number of broker nodes you want in the Amazon MSK cluster."
      }
  }
 
  //elasticsearch_domain
  es_domain={
    "Type" : "AWS::Elasticsearch::Domain",
    "Properties" : {
        "AccessPolicies" : {"info":"Type: JSON object. An AWS Identity and Access Management (IAM) policy document that specifies who can access the Amazon ES domain and their permissions."},
        "AdvancedOptions" : "Type: Map of string. Additional options to specify for the Amazon ES domain. rest.action.multi.allow_explicit_index= Specifies whether explicit references to indices are allowed inside the body of HTTP requests. Setting this property to false prevents users from bypassing access control for subresources. indices.fielddata.cache.size= Specifies the percentage of Java heap space that is allocated to field data. By default, this setting is unbounded. indices.query.bool.max_clause_count=Specifies the maximum number of clauses allowed in a Lucene Boolean query. The default is 1024. ",
        "DomainName" : "String. A name for the Amazon ES domain. ",
        "EBSOptions" : {"info":"The configurations of Amazon Elastic Block Store (Amazon EBS) volumes that are attached to data nodes in the Amazon ES domain.##"},
        "ElasticsearchClusterConfig" : {"info":"Type: ElasticsearchClusterConfig. ElasticsearchClusterConfig is a property of the AWS::Elasticsearch::Domain resource that configures the cluster of an Amazon Elasticsearch Service (Amazon ES) domain.##"},
        "ElasticsearchVersion" : "String. The version of Elasticsearch to use, such as 2.3. If not specified, 1.5 is used as the default.",
        "EncryptionAtRestOptions" : {"info":"Type: EncryptionAtRestOptions. Whether the domain should encrypt data at rest, and if so, the AWS Key Management Service (KMS) key to use. Can only be used to create a new domain, not update an existing one.##"},
        "NodeToNodeEncryptionOptions" : {"info":"Type: NodeToNodeEncryptionOptions. Specifies whether node-to-node encryption is enabled.##"},
        "SnapshotOptions" : {"info":"Type: SnapshotOptions. The automated snapshot configuration for the Amazon ES domain indices.##"},
        "VPCOptions" : {"info":"Type: VPCOptions. The virtual private cloud (VPC) configuration for the Amazon ES domain.##"}
      }
  }
  
  //RDS
  rds_dbcluster={
    "Type" : "AWS::RDS::DBCluster",
    "Properties" : {
        "AssociatedRoles" : ["List of DBClusterRole. Provides a list of the AWS Identity and Access Management (IAM) roles that are associated with the DB cluster. IAM roles that are associated with a DB cluster grant permission for the DB cluster to access other AWS services on your behalf.##" ],
        "AvailabilityZones" : ["List of string. A list of Availability Zones (AZs) where instances in the DB cluster can be created."],
        "BacktrackWindow" : "Type:Long. The target backtrack window, in seconds. To disable backtracking, set this value to 0. If specified, this value must be set to a number from 0 to 259,200 (72 hours).",
        "BackupRetentionPeriod" : "Integer. The number of days for which automated backups are retained. Must be a value from 1 to 35",
        "DatabaseName" : "String. The name of your database. If you don't provide a name, then Amazon RDS won't create a database in this DB cluster.",
        "DBClusterIdentifier" : "String. The DB cluster identifier. This parameter is stored as a lowercase string.",
        "DBClusterParameterGroupName" : "String. The name of the DB cluster parameter group to associate with this DB cluster.",
        "DBSubnetGroupName" : "String. A DB subnet group that you want to associate with this DB cluster.",
        "DeletionProtection" : "Boolean. A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled.",
        "EnableCloudwatchLogsExports" : ["List of string. The list of log types that need to be enabled for exporting to CloudWatch Logs. The values in the list depend on the DB engine being used. "],
        "EnableIAMDatabaseAuthentication" : "Boolean. A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled.",
        "Engine" : "*String. The name of the database engine to be used for this DB cluster. aurora | aurora-mysql | aurora-postgresql",
        "EngineMode" : "String. provisioned | serverless| parallelquery| global| multimaster.",
        "EngineVersion" : "String. The version number of the database engine to use. Use this command to get it 'aws rds describe-db-engine-versions --engine aurora --query 'DBEngineVersions[].EngineVersion''",
        "KmsKeyId" : "String. The Amazon Resource Name (ARN) of the AWS Key Management Service master key that is used to encrypt the database instances in the DB cluster, such as arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef. If you enable the StorageEncrypted property but don't specify this property, the default master key is used. If you specify this property, you must set the StorageEncrypted property to true.",
        "MasterUsername" : "String. The name of the master user for the DB cluster.",
        "MasterUserPassword" : "String. The master password for the DB instance.",
        "Port" : "Integer. The port number on which the instances in the DB cluster accept connections. Default: 3306 if engine is set as aurora or 5432 if set to aurora-postgresql.",
        "PreferredBackupWindow" : "String. The daily time range during which automated backups are created if automated backups are enabled using the BackupRetentionPeriod parameter. Must be in the format hh24:mi-hh24:mi. Must be in Universal Coordinated Time (UTC). Must not conflict with the preferred maintenance window. Must be at least 30 minutes.",
        "PreferredMaintenanceWindow" : "String. The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC). Format: ddd:hh24:mi-ddd:hh24:mi. Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun. Constraints: Minimum 30-minute window.",
        "ReplicationSourceIdentifier" : "String. The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster is created as a Read Replica.",
        "RestoreType" : "String. The type of restore to be performed. You can specify one of the following values: full-copy - The new DB cluster is restored as a full copy of the source DB cluster. copy-on-write - The new DB cluster is restored as a clone of the source DB cluster.",
        "ScalingConfiguration" : {"info":"Type: ScalingConfiguration. The ScalingConfiguration property type specifies the scaling configuration of an Aurora Serverless DB cluster.##"},
        "SnapshotIdentifier" : "String. The identifier for the DB snapshot or DB cluster snapshot to restore from. You can use either the name or the Amazon Resource Name (ARN) to specify a DB cluster snapshot. However, you can use only the ARN to specify a DB snapshot. After you restore a DB cluster with a SnapshotIdentifier property, you must specify the same SnapshotIdentifier property for any future updates to the DB cluster. When you specify this property for an update, the DB cluster is not restored from the snapshot again, and the data in the database is not changed. However, if you don't specify the SnapshotIdentifier property, an empty DB cluster is created, and the original DB cluster is deleted. If you specify a property that is different from the previous snapshot restore property, the DB cluster is restored from the specified SnapshotIdentifier property, and the original DB cluster is deleted.",
        "SourceDBClusterIdentifier" : "String. The identifier of the source DB cluster from which to restore. Must match the identifier of an existing DBCluster.",
        "SourceRegion" : "String. The AWS Region which contains the source DB cluster when replicating a DB cluster. For example, us-east-1.",
        "StorageEncrypted" : "Boolean. Indicates whether the DB instance is encrypted. ",
        "UseLatestRestorableTime" : "Boolean. A value that indicates whether to restore the DB cluster to the latest restorable backup time. By default, the DB cluster is not restored to the latest restorable backup time.",
        "VpcSecurityGroupIds" : ["List of string. A list of EC2 VPC security groups to associate with this DB cluster."]
      }
  }
  
  rds_dbclusterparametergroup={
    "Type" : "AWS::RDS::DBClusterParameterGroup",
    "Properties" : {
        "Description" : "*String. A friendly description for this DB cluster parameter group.",
        "Family" : "*String. The DB cluster parameter group family name. A DB cluster parameter group can be associated with one and only one DB cluster parameter group family, and can be applied only to a DB cluster running a DB engine and engine version compatible with that DB cluster parameter group family. Use the command : aws rds describe-db-engine-versions --query 'DBEngineVersions[].DBParameterGroupFamily'",
        "Parameters" : "*Json. Provides a list of parameters for the DB cluster parameter group.",
      }
  }
  
  rds_dbinstance={
    "Type" : "AWS::RDS::DBInstance",
    "Properties" : {
        "AllocatedStorage" : "String. The amount of storage (in gigabytes) to be initially allocated for the database instance.",
        "AllowMajorVersionUpgrade" : "Boolean. A value that indicates whether major version upgrades are allowed. Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible. Constraints: Major version upgrades must be allowed when specifying a value for the EngineVersion parameter that is a different major version than the DB instance's current version.",
        "AssociatedRoles" : ["Type: List of DBInstanceRole##" ],
        "AutoMinorVersionUpgrade" : "Boolean. A value that indicates whether minor engine upgrades are applied automatically to the DB instance during the maintenance window. By default, minor engine upgrades are applied automatically.",
        "AvailabilityZone" : "String. The Availability Zone (AZ) where the database will be created.",
        "BackupRetentionPeriod" : "Integer. The number of days for which automated backups are retained. Setting this parameter to a positive number enables backups. Setting this parameter to 0 disables automated backups.",
        "CharacterSetName" : "String. For supported engines, indicates that the DB instance should be associated with the specified CharacterSet.",
        "CopyTagsToSnapshot" : "Boolean. A value that indicates whether to copy tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.",
        "DBClusterIdentifier" : "String. The identifier of the DB cluster that the instance will belong to.",
        "DBInstanceClass" : "*String. The compute and memory capacity of the DB instance, for example, db.m4.large. Not all DB instance classes are available in all AWS Regions, or for all database engines. ",
        "DBInstanceIdentifier" : "String. A name for the DB instance. If you specify a name, AWS CloudFormation converts it to lowercase. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the DB instance. ",
        "DBName" : "String. MySQL = The name of the database to create when the DB instance is created. If this parameter is not specified, no database is created in the DB instance. MariaDB= The name of the database to create when the DB instance is created. If this parameter is not specified, no database is created in the DB instance. PostgreSQL=The name of the database to create when the DB instance is created. If this parameter is not specified, the default 'postgres' database is created in the DB instance. Oracle=The Oracle System ID (SID) of the created DB instance. If you specify null, the default value ORCL is used. You can't specify the string NULL, or any other reserved word, for DBName. Default: ORCL. SQL Server=Not applicable. Must be null. Amazon Aurora=The name of the database to create when the primary instance of the DB cluster is created. If this parameter is not specified, no database is created in the DB instance. ",
        "DBParameterGroupName" : "String. The name of an existing DB parameter group or a reference to an AWS::RDS::DBParameterGroup resource created in the template.",
        "DBSecurityGroups" : ["List of string. A list of the DB security groups to assign to the DB instance. The list can include both the name of existing DB security groups or references to AWS::RDS::DBSecurityGroup resources created in the template."],
        "DBSnapshotIdentifier" : "String. The name or Amazon Resource Name (ARN) of the DB snapshot that's used to restore the DB instance. If you're restoring from a shared manual DB snapshot, you must specify the ARN of the snapshot. Some DB instance properties aren't valid when you restore from a snapshot, such as the MasterUsername and MasterUserPassword properties.",
        "DBSubnetGroupName" : "String. A DB subnet group to associate with the DB instance. If you update this value, the new subnet group must be a subnet group in a new VPC.",
        "DeleteAutomatedBackups" : "Boolean. A value that indicates whether to remove automated backups immediately after the DB instance is deleted. This parameter isn't case-sensitive. The default is to remove automated backups immediately after the DB instance is deleted.",
        "DeletionProtection" : "Boolean. A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled.",
        "Domain" : "String. The Active Directory directory ID to create the DB instance in. Currently, only Microsoft SQL Server and Oracle DB instances can be created in an Active Directory Domain.",
        "DomainIAMRoleName" : "String. Specify the name of the IAM role to be used when making API calls to the Directory Service.",
        "EnableCloudwatchLogsExports" : ["List of string. The list of log types that need to be enabled for exporting to CloudWatch Logs. The values in the list depend on the DB engine being used."],
        "EnableIAMDatabaseAuthentication" : "Boolean. A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled.",
        "EnablePerformanceInsights" : "Boolean. A value that indicates whether to enable Performance Insights for the DB instance.",
        "Engine" : "String. The name of the database engine that you want to use for this DB instance.",
        "EngineVersion" : "String. The version number of the database engine to use.",
        "Iops" : "Integer. The number of I/O operations per second (IOPS) that the database provisions. The value must be equal to or greater than 1000.",
        "KmsKeyId" : "String. The ARN of the AWS Key Management Service (AWS KMS) master key that's used to encrypt the DB instance, such as arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef. If you enable the StorageEncrypted property but don't specify this property, AWS CloudFormation uses the default master key. If you specify this property, you must set the StorageEncrypted property to true.",
        "LicenseModel" : "String. License model information for this DB instance.",
        "MasterUsername" : "String. The master user name for the DB instance.",
        "MasterUserPassword" : "String",
        "MonitoringInterval" : "Integer. The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0. Valid Values: 0, 1, 5, 10, 15, 30, 60",
        "MonitoringRoleArn" : "String. The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, arn:aws:iam:123456789012:role/emaccess. ",
        "MultiAZ" : "Boolean. Specifies whether the database instance is a multiple Availability Zone deployment. You can't set the AvailabilityZone parameter if the MultiAZ parameter is set to true. Amazon Aurora storage is replicated across all the Availability Zones and doesn't require the MultiAZ option to be set.",
        "OptionGroupName" : "String. Indicates that the DB instance should be associated with the specified option group.",
        "PerformanceInsightsKMSKeyId" : "String. The AWS KMS key identifier for encryption of Performance Insights data. The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key.",
        "PerformanceInsightsRetentionPeriod" : "Integer. The amount of time, in days, to retain Performance Insights data. Valid values are 7 or 731 (2 years).",
        "Port" : "String. The port number on which the database accepts connections.",
        "PreferredBackupWindow" : "String. The daily time range during which automated backups are created if automated backups are enabled, using the BackupRetentionPeriod parameter.",
        "PreferredMaintenanceWindow" : "String. The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).",
        "ProcessorFeatures" : [ "List of ProcessFeature. The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.##" ],
        "PromotionTier" : "Integer. A value that specifies the order in which an Aurora Replica is promoted to the primary instance after a failure of the existing primary instance. Valid Values: 0 - 15",
        "PubliclyAccessible" : "Boolean. Indicates whether the DB instance is an internet-facing instance. If you specify true, AWS CloudFormation creates an instance with a publicly resolvable DNS name, which resolves to a public IP address. If you specify false, AWS CloudFormation creates an internal instance with a DNS name that resolves to a private IP address.",
        "SourceDBInstanceIdentifier" : "String. If you want to create a Read Replica DB instance, specify the ID of the source DB instance. Each DB instance can have a limited number of Read Replicas. ",
        "SourceRegion" : "String. The ID of the region that contains the source DB instance for the Read Replica.",
        "StorageEncrypted" : "Boolean. A value that indicates whether the DB instance is encrypted. By default, it is not encrypted.",
        "StorageType" : "String. Valid values: standard | gp2 | io1",
        "Timezone" : "String. The time zone of the DB instance.",
        "UseDefaultProcessorFeatures" : "Boolean. A value that indicates whether the DB instance class of the DB instance uses its default processor features.",
        "VPCSecurityGroups" : ["List of string. A list of the VPC security group IDs to assign to the DB instance. The list can include both the physical IDs of existing VPC security groups and references to AWS::EC2::SecurityGroup resources created in the template."]
      }
  }

  rds_dbparametergroup = {
    "Type" : "AWS::RDS::DBParameterGroup",
    "Properties" : {
        "Description" : "*String",
        "Family" : "*String. The DB parameter group family name. A DB parameter group can be associated with one and only one DB parameter group family, and can be applied only to a DB instance running a DB engine and engine version compatible with that DB parameter group family.",
        "Parameters" : "Type: Map of string. An array of parameter names, values, and the apply method for the parameter update. At least one parameter name, value, and apply method must be supplied; subsequent arguments are optional",
      }
  }

  rds_dbsecuritygroup = {
    "Type" : "AWS::RDS::DBSecurityGroup",
    "Properties" : {
        "DBSecurityGroupIngress" : ["*Type: List of Ingress ##"],
        "EC2VpcId" : "String. The identifier of an Amazon VPC. This property indicates the VPC that this DB security group belongs to.",
        "GroupDescription" : "*String. Provides the description of the DB security group.",
      }
  }

  rds_dbsecuritygroupingress = {
    "Type" : "AWS::RDS::DBSecurityGroupIngress",
    "Properties" : {
        "CIDRIP" : "String",
        "DBSecurityGroupName" : "*String",
        "EC2SecurityGroupId" : "String. Id of the EC2 security group to authorize. For VPC DB security groups, EC2SecurityGroupId must be provided. Otherwise, EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId must be provided.",
        "EC2SecurityGroupName" : "String. Name of the EC2 security group to authorize. For VPC DB security groups, EC2SecurityGroupId must be provided. Otherwise, EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId must be provided.",
        "EC2SecurityGroupOwnerId" : "String. AWS account number of the owner of the EC2 security group specified in the EC2SecurityGroupName parameter. The AWS Access Key ID is not an acceptable value. For VPC DB security groups, EC2SecurityGroupId must be provided. Otherwise, EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId must be provided."
      }
  }

  rds_dbsubnetgroup = {
    "Type" : "AWS::RDS::DBSubnetGroup",
    "Properties" : {
        "DBSubnetGroupDescription" : "*String",
        "DBSubnetGroupName" : "String. The name for the DB subnet group. This value is stored as a lowercase string.",
        "SubnetIds" : ["*List of string. The EC2 Subnet IDs for the DB subnet group."],
      }
  }
  
  rds_eventsubscription={
    "Type" : "AWS::RDS::EventSubscription",
    "Properties" : {
        "Enabled" : "Boolean. A value that indicates whether to activate the subscription. If the event notification subscription is not activated, the subscription is created but not active.",
        "EventCategories" : ["List of string. A list of event categories for a SourceType that you want to subscribe to. "],
        "SnsTopicArn" : "*String. The Amazon Resource Name (ARN) of the SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it.",
        "SourceIds" : ["List of string. The list of identifiers of the event sources for which events are returned. If not specified, then all sources are included in the response. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens."],
        "SourceType" : "String. The type of source that is generating the events. For example, if you want to be notified of events generated by a DB instance, you would set this parameter to db-instance. if this value is not specified, all events are returned. Valid values: db-instance | db-cluster | db-parameter-group | db-security-group | db-snapshot | db-cluster-snapshot"
      }
  }
  
  rds_optiongroup={
    "Type" : "AWS::RDS::OptionGroup",
    "Properties" : {
        "EngineName" : "*String. Specifies the name of the engine that this option group should be associated with.",
        "MajorEngineVersion" : "*String. Specifies the major version of the engine that this option group should be associated with.",
        "OptionConfigurations" : ["*Type: List of OptionConfiguration##"],
        "OptionGroupDescription" : "*String. The description of the option group.",
      }
  }
    
  
}
