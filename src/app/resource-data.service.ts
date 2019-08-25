import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ResourceDataService {

  constructor() { }

  comProp:Object={
    "AWS::EC2::Instance":{
      "AssociationParameters":{
        "Key":"*The name of an input parameter that is in the associated SSM document.",
        "Value":["*The value of an input parameter. List of String values"]
      },
      "BlockDeviceMapping_ec2":{
        "DeviceName":"*The name of the device within Amazon EC2. Recommended for EBS Volumes: /dev/sd[f-p], /dev/sd[f-p][1-6](only for paravirtual).",
        "Ebs":{
          "DeleteOnTermination":"Boolean. Determines whether to delete the volume on instance termination. The default value is true.",
          "Encrypted":"Boolean. Indicates whether the volume is encrypted. Encrypted Amazon EBS volumes can only be attached to instance types that support Amazon EBS encryption. Volumes that are created from encrypted snapshots are automatically encrypted. You cannot create an encrypted volume from an unencrypted snapshot or vice versa. If your AMI uses encrypted volumes, you can only launch the AMI on supported instance types.",
          "Iops":"**Number. The number of I/O operations per second (IOPS) that the volume supports. This can be an integer from 100 – 20000.Required when the volume type is io1; not used with other volume types.",
          "SnapshotId":"**If you specify both SnapshotId and VolumeSize, VolumeSize must be equal or greater than the size of the snapshot.",
          "VolumeSize":"**Integer. The size of the volume, in GiBs.Constraints: 1-16,384 for gp2, 4-16,384 for io1, 500-16,384 for st1, 500-16,384 for sc1, and 1-1,024 for standard. If you specify a snapshot, the volume size must be equal to or larger than the snapshot size.Default: If you're creating the volume from a snapshot and don't specify a volume size, the default is the snapshot size.",
          "VolumeType":"The volume type. If you set the type to io1, you must also set the Iops property. The volume type. This can be gp2 for General Purpose SSD, io1 for Provisioned IOPS SSD, st1 for Throughput Optimized HDD, sc1 for Cold HDD, or standard for Magnetic volumes.Defaults: If no volume type is specified, the default is standard in us-east-1, eu-west-1, eu-central-1, us-west-2, us-west-1, sa-east-1, ap-northeast-1, ap-northeast-2, ap-southeast-1, ap-southeast-2, ap-south-1, us-gov-west-1, and cn-north-1. In all other Regions, EBS defaults to gp2. standard | io1 | gp2 | sc1 | st1"
        },
        "NoDevice":"This property can be used to unmap a defined device. Suppresses the specified device included in the block device mapping of the AMI. To suppress a device, specify an empty string {}.",
        "VirtualName":"**The name of the virtual device. The name must be in the form ephemeralX where X is a number starting from zero (0); for example, ephemeral0. You can specify either VirtualName or Ebs, but not both."
      },
      "CreditSpecification":{
        "CPUCredits":"The credit option for CPU usage of a T2 or T3 instance. Valid values are unlimited and standard. T3 instances launch as unlimited by default. T2 instances launch as standard by default."
      },
      "ElasticGpuSpecification":{
        "Type":"*The type of Elastic GPU."
      },
      "ElasticInferenceAccelerator":{
        "Type":"*The type of elastic inference accelerator. The possible values are eia1.medium, eia1.large, and eia1.xlarge."
      },
      "LaunchTemplateSpecification_ec2":{
        "LaunchTemplateId":"**The ID of the launch template.You must specify either LaunchTemplateId or LaunchTemplateName, but not both.",
        "LaunchTemplateName":"**You must specify either LaunchTemplateId or LaunchTemplateName, but not both",
        "Version":"*The version number. AWS CloudFormation does not support specifying $Latest, or $Default for the template version number."
      },
      "LicenseSpecification_ec2":{
        "LicenseConfigurationArn":"*The Amazon Resource Name (ARN) of license configuration to associate with the instance."
      },
      "MountPoint_ec2":{
        "Device":"*How the device is exposed to the instance (such as /dev/sdh, or xvdh).",
        "VolumeId":"*The ID of the Amazon EBS volume. The volume and instance must be within the same Availability Zone and the instance must be running."
      },
      "NetworkInterface_ec2":{
        "AssociatePublicIpAddress":"Boolean. Indicates whether the network interface receives a public IP address. You can associate a public IP address with a network interface only if it has a device index of eth0 and if it is a new network interface (not an existing one). In other words, if you specify true, don't specify a network interface ID.",
        "DeleteOnTermination":"Boolean. Whether to delete the network interface when the instance terminates.",
        "Description":"",
        "DeviceIndex":"*The network interface's position in the attachment order.",
        "GroupSet":["List of strings. A list of security group IDs associated with this network interface."],
        "NetworkInterfaceId":"**If you don't specify the SubnetId property, you must specify this property.",
        "Ipv6AddressCount":"Integer. The number of IPv6 addresses to associate with the network interface. Amazon EC2 automatically selects the IPv6 addresses from the subnet range. To specify specific IPv6 addresses, use the Ipv6Addresses property and don't specify this property.",
        "Ipv6Addresses":["List of EC2 NetworkInterface Ipv6Addresses. One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet to associate with the network interface. To specify a number of IPv6 addresses, use the Ipv6AddressCount property and don't specify this property."],
        "PrivateIpAddress":"Assigns a single private IP address to the network interface, which is used as the primary private IP address. If you want to specify multiple private IP address, use the PrivateIpAddresses property.",
        "PrivateIpAddresses":["list of PrivateIpAddressSpecification. Assigns a list of private IP addresses to the network interface. You can specify a primary private IP address by setting the value of the Primary property to true in the PrivateIpAddressSpecification property. If you want Amazon EC2 to automatically assign private IP addresses, use the SecondaryPrivateIpAddressCount property and do not specify this property."],
        "SecondaryPrivateIpAddressCount":"The number of secondary private IP addresses that Amazon EC2 auto assigns to the network interface. Amazon EC2 uses the value of the PrivateIpAddress property as the primary private IP address. If you don't specify that property, Amazon EC2 auto assigns both the primary and secondary private IP addresses.",
        "SubnetId":"**The ID of the subnet to associate with the network interface. If you don't specify the NetworkInterfaceId property, you must specify this property."
      },
      "SsmAssociations":{
        "AssociationParameters":["List of Amazon EC2 Instance SsmAssociations AssociationParameters"],
        "DocumentName":"*The name of an SSM document to associate with the instance."
      },
      "CreationPolicy_ec2":{
        "ResourceSignal" : {    
          "Count" : "Integer. Default :1 . The number of success signals AWS CloudFormation must receive before it sets the resource status as CREATE_COMPLETE. If the resource receives a failure signal or doesn't receive the specified number of signals before the timeout period expires, the resource creation fails and AWS CloudFormation rolls the stack back.",
          "Timeout" : "The length of time that AWS CloudFormation waits for the number of signals that was specified in the Count property. The timeout period starts after AWS CloudFormation starts creating the resource, and the timeout expires no sooner than the time you specify but can occur shortly thereafter. The maximum time that you can specify is 12 hours. The value must be in ISO8601 duration format, in the form: 'PT#H#M#S', where each # is the number of hours, minutes, and seconds, respectively. For best results, specify a period of time that gives your instances plenty of time to get up and running. A shorter timeout can cause a rollback. Default: PT5M (5 minutes)"
        }
      },
      "InstanceIpv6Address_ec2":{
        "Ipv6Address" : "*String, The IPv6 Address."
      },
      "PrivateIpAddressSpecification_ec2":{
        "Primary" : "*Boolean. Indicates whether the private IPv4 address is the primary private IPv4 address. Only one IPv4 address can be designated as primary",
        "PrivateIpAddress" : "*String"
      }           
    },
    "AWS::EC2::SecurityGroup":{
      "SecurityGroupEgress":{
        "CidrIp" : "**",
        "CidrIpv6" : "**",
        "Description" : "**",
        "DestinationPrefixListId" : "**",
        "DestinationSecurityGroupId" : "**",
        "FromPort" : "",
        "IpProtocol" : "*",
        "ToPort" : ""
      },
      "SecurityGroupIngress":{
        "CidrIp" : "**",
        "CidrIpv6" : "**",
        "Description" : "**",
        "FromPort" : "",
        "IpProtocol" : "*",
        "SourceSecurityGroupId" : "**",
        "SourceSecurityGroupName" : "**",
        "SourceSecurityGroupOwnerId" : "**",
        "ToPort" : ""
      }
    },
    "AWS::EC2::EC2Fleet":{
      "FleetLaunchTemplateConfigRequest":{
        "LaunchTemplateSpecification" : {
          "LaunchTemplateId" : "The ID of the launch template.",
          "LaunchTemplateName" : "",
          "Version" : "The version number of the launch template."
        },
        "Overrides" : []
      },
      "FleetLaunchTemplateOverridesRequest":{
        "AvailabilityZone" : "",
        "InstanceType" : "",
        "MaxPrice" : "The maximum price per unit hour that you are willing to pay for a Spot Instance.",
        "Priority" : "The priority for the launch template override. If AllocationStrategy is set to prioritized, EC2 Fleet uses priority to determine which launch template override to use first in fulfilling On-Demand capacity. The highest priority is launched first. Valid values are whole numbers starting at 0. The lower the number, the higher the priority. If no number is set, the launch template override has the lowest priority.",
        "SubnetId" : "",
        "WeightedCapacity" : ""
      },
      "OnDemandOptionsRequest":{
        "AllocationStrategy" : "The order of the launch template overrides to use in fulfilling On-Demand capacity. If you specify lowest-price, EC2 Fleet uses price to determine the order, launching the lowest price first. If you specify prioritized, EC2 Fleet uses the priority that you assigned to each launch template override, launching the highest priority first. If you do not specify a value, EC2 Fleet defaults to lowest-price."
      },
      "SpotOptionsRequest":{
        "AllocationStrategy" : "Indicates how to allocate the target capacity across the Spot pools specified by the Spot Fleet request. The default is lowestPrice.",
        "InstanceInterruptionBehavior" : "The behavior when a Spot Instance is interrupted. The default is terminate.",
        "InstancePoolsToUseCount" : "The number of Spot pools across which to allocate your target Spot capacity. Valid only when Spot AllocationStrategy is set to lowest-price. EC2 Fleet selects the cheapest Spot pools and evenly allocates your target Spot capacity across the number of Spot pools that you specify."
      },
      "TagSpecification":{
        "ResourceType" : "The type of resource to tag. Currently, the resource types that support tagging on creation are fleet, dedicated-host, instance, snapshot, and volume.",
        "Tags" : []
      },
      "TargetCapacitySpecificationRequest":{
        "DefaultTargetCapacityType" : "",
        "OnDemandTargetCapacity" : "",
        "SpotTargetCapacity" : "",
        "TotalTargetCapacity" : "*The number of units to request, filled using DefaultTargetCapacityType."
      }
    },
    "AWS::EC2::LaunchTemplate":{
      "LaunchTemplateData":{
        "SecurityGroups" : ["List of String values."],
        "TagSpecifications" : ["Type: List of TagSpecification"],
        "UserData" : "The Base64-encoded user data to make available to the instance.",
        "InstanceInitiatedShutdownBehavior" : "Valid values include stop and terminate. The default is stop.",
        "BlockDeviceMappings" : ["list of BlockDeviceMapping" ],
        "IamInstanceProfile" : {
          "Arn" : "",
          "Name" : ""
        },
        "KernelId" : "",
        "SecurityGroupIds" : ["Type: List of String values. One or more security group IDs."],
        "EbsOptimized" : "Boolean.Indicates whether the instance is optimized for Amazon EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal Amazon EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS-optimized instance.",
        "KeyName" : "The name of the key pair. If you do not specify a key pair, you can't connect to the instance unless you choose an AMI that is configured to allow users another way to log in.",
        "DisableApiTermination" : "Boolean. If set to true, you can't terminate the instance using the Amazon EC2 console, CLI, or API",
        "ElasticGpuSpecifications" : ["list of ElasticGpuSpecification" ],
        "Placement" : {
          "GroupName" : "String",
          "Tenancy" : "Valid values include default, dedicated, and host.",
          "AvailabilityZone" : "String",
          "Affinity" : "The affinity setting for an instance on a Dedicated Host.",
          "HostId" : "String"
        },
        "InstanceMarketOptions" : {
          "SpotOptions" : {
            "SpotInstanceType" : "Valid values include: one-time and persistent.",
            "InstanceInterruptionBehavior" : "Valid values include: hibernate, stop, and terminate.",
            "MaxPrice" : "The maximum hourly price you're willing to pay for the Spot Instances."
          },
          "MarketType" : "Valid values include: spot"
        },
        "NetworkInterfaces" : [" list of NetworkInterface"],
        "ImageId" : "",
        "InstanceType" : "",
        "RamDiskId" : "",
        "Monitoring" : {
          "Enabled" : "Boolean.Specify true to enable detailed monitoring. Otherwise, basic monitoring is enabled."
        },
        "CreditSpecification" : {
          "CpuCredits" : "The credit option for CPU usage of a T2 instance. Valid values include standard and unlimited."
        }
      },
      "TagSpecification":{
        "ResourceType" : "The type of resource to tag. Currently, the resource types that support tagging on creation are instance and volume.",
        "Tags" : ["The tags to apply to the resource."]
      },
      "Ebs":{
        "SnapshotId" : "String. ",
        "VolumeType" : "String. Valid values include: standard, io1, gp2, sc1, and st1.",
        "KmsKeyId" : "String",
        "Encrypted" : "Boolean",
        "Iops" : "Integer",
        "VolumeSize" : "Integer. If you're creating the volume from a snapshot and don't specify a volume size, the default is the snapshot size.",
        "DeleteOnTermination" : "Boolean"
      },
      "ElasticGpuSpecification":{
        "Type" : "String"
      },
      "NetworkInterface":{
        "Description" : "String",
        "PrivateIpAddress" : "String",
        "PrivateIpAddresses" : [ "list of privateipaddresses" ],
        "SecondaryPrivateIpAddressCount" : "Integer",
        "Ipv6AddressCount" : "Integer",
        "Groups" : ["Type: List of String values. The IDs of one or more security groups."],
        "DeviceIndex" : "Integer",
        "SubnetId" : "String",
        "Ipv6Addresses" : ["Type: List of Ipv6Add"] ,
        "AssociatePublicIpAddress" : "Boolean. Associates a public IPv4 address with eth0 for a new network interface.",
        "NetworkInterfaceId" : "String",
        "DeleteOnTermination" : "Boolean"
      }
    },
    "AWS::EC2::VPNConnection":{
      "VpnTunnelOptionsSpecification":{
        "PreSharedKey" : "The pre-shared key (PSK) to establish initial authentication between the virtual private gateway and customer gateway.",
        "TunnelInsideCidr" : "The range of inside IP addresses for the tunnel. Any specified CIDR blocks must be unique across all VPN connections that use the same virtual private gateway."
      }
    },
    "AWS::EC2::SpotFleet":{
      "SpotFleetRequestConfigData":{
        "AllocationStrategy" : "Indicates how to allocate the target capacity across the Spot pools that you specified in the Spot fleet request.",
        "ExcessCapacityTerminationPolicy" : "Indicates whether running Spot instances are terminated if you decrease the target capacity of the Spot fleet request below the current size of the Spot fleet.",
        "IamFleetRole" : "*The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that grants the Spot fleet the ability to bid on, launch, and terminate instances on your behalf. ",
        "InstanceInterruptionBehavior" : "The behavior when a Spot Instance is interrupted.",
        "LaunchSpecifications" : ["**List of Amazon Elastic Compute Cloud SpotFleet LaunchSpecifications. You must specify either LaunchSpecifications or LaunchTemplateConfigs."],
        "LaunchTemplateConfigs" : ["**List of LaunchTemplateConfig"],
        "LoadBalancersConfig" : {
          "ClassicLoadBalancersConfig" : {
            "ClassicLoadBalancers" : ["*List of Amazon EC2 SpotFleet ClassicLoadBalancer"]
          },
          "TargetGroupsConfig" : {
            "TargetGroups" : ["Type: List of Amazon EC2 SpotFleet TargetGroup"]
          }
        },
        "ReplaceUnhealthyInstances" : "Boolean. Indicates whether the Spot fleet should replace unhealthy instances.",
        "SpotPrice" : "The bid price per unit hour. For more information, see How Spot Fleet Works in the Amazon EC2 User Guide for Linux Instances.",
        "TargetCapacity" : "*The number of units to request for the spot fleet. You can choose to set the target capacity as the number of instances or as a performance characteristic that is important to your application workload, such as vCPUs, memory, or I/O. ",
        "TerminateInstancesWithExpiration" : "Boolean. Indicates whether running Spot instances are terminated when the Spot fleet request expires.",
        "Type" : "The type of request, which indicates whether the fleet will only request the target capacity or also attempt to maintain it.",
        "ValidFrom" : "The start date and time of the request, in UTC format (YYYY-MM-DDTHH:MM:SSZ). By default, Amazon Elastic Compute Cloud (Amazon EC2 ) starts fulfilling the request immediately.",
        "ValidUntil" : "The end date and time of the request, in UTC format (YYYY-MM-DDTHH:MM:SSZ). After the end date and time, Amazon EC2 doesn't request new Spot instances or enable them to fulfill the request."
      },
      "LaunchSpecifications":{
        "BlockDeviceMappings" : [ "BlockDeviceMapping, ... "],
        "EbsOptimized" : "Boolean",
        "IamInstanceProfile" : {
          "Arn":"String"
        },
        "ImageId" : "String",
        "InstanceType" : "String",
        "KernelId" : "String",
        "KeyName" : "String",
        "Monitoring" : "Boolean",
        "NetworkInterfaces" : [" NetworkInterface, ... "],
        "Placement" : {
          "AvailabilityZone" : "String",
          "GroupName" : "String",
          "Tenancy" : "String"
        },
        "RamdiskId" : "String",
        "SecurityGroups" : [ "SecurityGroup, ..." ],
        "SpotPrice" : "String",
        "SubnetId" : "String",
        "TagSpecifications" : [ "SpotFleetTagSpecification, ... "],     
        "UserData" : "String",
        "WeightedCapacity" : "Number"
      },
      "BlockDeviceMappings":{
        "DeviceName" : "String",
        "Ebs" : {
          "DeleteOnTermination" : "Boolean",
          "Encrypted" : "Boolean",
          "Iops" : "Integer",
          "SnapshotId" : "String",
          "VolumeSize" : "Integer",
          "VolumeType" : "String"
        },
        "NoDevice" : "Boolean",
        "VirtualName" : "String"
      },
      "LaunchTemplateConfig":{
        "LaunchTemplateSpecification" : {
          "LaunchTemplateId" : "String",
          "LaunchTemplateName" : "String",
          "Version" : "String"
        },
        "Overrides" : [" LaunchTemplateOverrides, ... "]
      },
      "LaunchTemplateOverrides":{
        "AvailabilityZone" : "String",
        "InstanceType" : "String",
        "SpotPrice" : "String",
        "SubnetId" : "String",
        "WeightedCapacity" : "Double"
      },
      "SpotFleetTagSpecification":{
        "ResourceType" : "String",
        "Tags" : [ "Resource Tag, ... "]
      },
      "SecurityGroups":{
        "GroupId" : "String"
      },
      "NetworkInterfaces":{
        "AssociatePublicIpAddress" : "Boolean",
        "DeleteOnTermination" : "Boolean",
        "Description" : "String",
        "DeviceIndex" : "Integer",
        "Groups" : [" String, ... "],
        "Ipv6AddressCount" : "Integer",
        "Ipv6Addresses" : [" IPv6 Address Type, ... "],
        "NetworkInterfaceId" : "String",
        "PrivateIpAddresses" : [ "PrivateIpAddresses, ..." ],
        "SecondaryPrivateIpAddressCount" : "Integer",
        "SubnetId" : "String"
      },
      "PrivateIpAddresses":{
        "Primary" : "Boolean",
        "PrivateIpAddress" : "String"
      },
      "TargetGroup":{
        "Arn" : "String"
      },
      "TargetGroupsConfig":{
        "TargetGroups" : [ "TargetGroup, ..." ]
      },
      "Monitoring":{
        "Enabled" : "Boolean"
      }
    },
    "AWS::EC2::NetworkAclEntry":{
      "Icmp":{
        "Code" : "** The Internet Control Message Protocol (ICMP) code. You can use -1 to specify all ICMP codes for the given ICMP type. Required if you specify 1 (ICMP) for the CreateNetworkAclEntry protocol parameter.",
        "Type" : "**Integer. The Internet Control Message Protocol (ICMP) type. You can use -1 to specify all ICMP types. Required if you specify 1 (ICMP) for the CreateNetworkAclEntry protocol parameter."
     },
     "PortRange":{
      "From" : "**Integer. The first port in the range. Required if you specify 6 (TCP) or 17 (UDP) for the protocol parameter. ",
      "To" : "**Integer. The last port in the range. Required if you specify 6 (TCP) or 17 (UDP) for the protocol parameter. "
     },
    },
    "AWS::EC2::NetworkInterface":{
      "Ipv6Addresses":{
        "Ipv6Address" : "*The IPv6 address to associate with the network interface."
     },
     "PrivateIpAddressSpecification":{
      "PrivateIpAddress" : "*String. The private IP address of the network interface.",
      "Primary" : "*Boolean. Sets the private IP address as the primary private address. You can set only one primary private IP address. If you don't specify a primary private IP address, Amazon EC2 automatically assigns a primary private IP address. "
      }
    },
    "AWS::Route53::HealthCheck":{
      "AlarmIdentifier":{
        "Name" : "*The name of the Amazon CloudWatch alarm that you want Route 53 health checkers to use to determine whether this health check is healthy.",
        "Region" : "*A complex type that identifies the CloudWatch alarm that you want Route 53 health checkers to use to determine whether this health check is healthy. For example, us-west-2."
      },
      "HealthCheckConfig":{
        "AlarmIdentifier" : {
          "Name" : "The name of the Amazon CloudWatch alarm that you want Route 53 health checkers to use to determine whether this health check is healthy.",
          "Region" : "A complex type that identifies the CloudWatch alarm that you want Route 53 health checkers to use to determine whether this health check is healthy. For example, us-west-2."
        },
        "ChildHealthChecks" : ["Type: List of String values. (CALCULATED Health Checks Only) A complex type that contains one ChildHealthCheck element for each health check that you want to associate with a CALCULATED health check."],
        "EnableSNI" : "Boolean. Specifies whether you want Route 53 to send the value of FullyQualifiedDomainName to the endpoint in the client_hello message during TLS negotiation. This allows the endpoint to respond to HTTPS health check requests with the applicable SSL/TLS certificate.",
        "FailureThreshold" : "Integer. The number of consecutive health checks that an endpoint must pass or fail for Route 53 to change the current status of the endpoint from unhealthy to healthy or healthy to unhealthy.",
        "FullyQualifiedDomainName" : "**If you specified the IPAddress property, the value that you want Route 53 to pass in the host header in all health checks except for TCP health checks. If you don't specify an IP address, the domain that Route 53 sends a DNS request to. Route 53 uses the IP address that the DNS returns to check the health of the endpoint.",
        "HealthThreshold" : "Integer. The number of child health checks that are associated with a CALCULATED health that Route 53 must consider healthy for the CALCULATED health check to be considered healthy.",
        "InsufficientDataHealthStatus" : "When Amazon CloudWatch has insufficient data about the metric to determine the alarm state, the status that you want Route 53 to assign to the health check (Healthy, Unhealthy, or LastKnownStatus).",
        "Inverted" : "Specifies whether you want Route 53 to invert the status of a health check, for example, to consider a health check unhealthy when it otherwise would be considered healthy.",
        "IPAddress" : "The IPv4 IP address of the endpoint on which you want Route 53 to perform health checks. If you don't specify an IP address, Route 53 sends a DNS request to resolve the domain name that you specify in the FullyQualifiedDomainName property.",
        "MeasureLatency" : "Boolean. Specifies whether you want Route 53 to measure the latency between health checkers in multiple AWS regions and your endpoint and display CloudWatch latency graphs on the Health Checks page in the Route 53 console.",
        "Port" : "**Integer. Required when you specify TCP for the Type property.",
        "Regions" : ["Type: List of String values. The regions from which you want Amazon Route 53 health checkers to check the specified endpoint. Duplicates are not allowed."],
        "RequestInterval" : "Integer. The number of seconds between the time that Route 53 gets a response from your endpoint and the time that it sends the next health check request.",
        "ResourcePath" : "The path that you want Route 53 to request when performing health checks. The path can be any value for which your endpoint returns an HTTP status code of 2xx or 3xx when the endpoint is healthy, such as /docs/route53-health-check.html.",
        "SearchString" : "If the value of the Type property is HTTP_STR_MATCH or HTTPS_STR_MATCH, the string that you want Route 53 to search for in the response body from the specified resource. If the string appears in the response body, Route 53 considers the resource healthy.",
        "Type" : "*The type of health check that you want to create. This indicates how Route 53 determines whether an endpoint is healthy. You can specify HTTP, HTTPS, HTTP_STR_MATCH, HTTPS_STR_MATCH, TCP, CLOUDWATCH_METRIC, or CALCULATED."
      },
      "HealthCheckTags":{
        "Key" : "String",
        "Value" : "String"
      }
    },
    "AWS::Route53::HostedZone":{
      "HostedZoneConfig":{
        "Comment" : "String"
      },
      "HostedZoneTags":{
        "Key" : "String",
        "Value" : "String"
      },
      "HostedZoneVPCs":{
        "VPCId" : "String",
        "VPCRegion" : "String"
      },
      "QueryLoggingConfig":{
        "CloudWatchLogsLogGroupArn" : "String"
      }
    },
    "AWS::Route53::RecordSet":{
      "AliasTarget":{
        "DNSName" : "*The DNS name of the load balancer, the domain name of the CloudFront distribution, the website endpoint of the Amazon S3 bucket, or another record set in the same hosted zone that is the target of the alias.",
        "EvaluateTargetHealth" : "Boolean. Whether Route 53 checks the health of the resource record sets in the alias target when responding to DNS queries",
        "HostedZoneId" : "*The hosted zone ID. For load balancers, use the canonical hosted zone ID of the load balancer. For Amazon S3, use the hosted zone ID for your bucket's website endpoint. For CloudFront, use Z2FDTNDATAQYW2. "
      },
      "GeoLocation":{
        "ContinentCode" : "All DNS queries from the continent that you specified are routed to this resource record set. If you specify this property, omit the CountryCode and SubdivisionCode properties.",
        "CountryCode" : "All DNS queries from the country that you specified are routed to this resource record set. If you specify this property, omit the ContinentCode property. To specify the default location, use * for this property.",
        "SubdivisionCode" : "If you specified US for the country code, you can specify a state in the United States. All DNS queries from the state that you specified are routed to this resource record set. If you specify this property, you must specify US for the CountryCode and omit the ContinentCode property."
      }
    },
    "AWS::Route53Resolver::ResolverEndpoint":{
      "IpAddressRequest":{
        "Ip" : "String",
        "SubnetId" : "*The subnet that contains the IP address."
      }
    },
    "AWS::Route53Resolver::ResolverRule":{
      "TargetAddress":{
        "Ip" : "*One IP address that you want to forward DNS queries to. You can specify only IPv4 addresses.",
        "Port" : "*The port at Ip that you want to forward DNS queries to."
      }
    },
    "AWS::IAM::User":{
      "LoginProfile":{
        "Password" : "*The password for the user.",
        "PasswordResetRequired" : "Boolean. Specifies whether the user is required to set a new password the next time the user logs in to the AWS Management Console."
      }
    },
    "AWS::IAM::Policy":{
        "Policies":{
          "PolicyDocument" : "A JSON object. create a policy object using AWS policy generator",
          "PolicyName" : "String"
        }
    },
    "AWS::AutoScaling::AutoScalingGroup":{
      "MixedInstancesPolicy":{
        "InstancesDistribution" : {
          "OnDemandAllocationStrategy" : "String. Indicates how to allocate instance types to fulfill On-Demand capacity. The only valid value is prioritized, which is also the default value. This strategy uses the order of instance types in the Overrides array of LaunchTemplate to define the launch priority of each instance type. The first instance type in the array is prioritized higher than the last. If all your On-Demand capacity cannot be fulfilled using your highest priority instance, then the Auto Scaling groups launches the remaining capacity using the second priority instance type, and so on.",
          "OnDemandBaseCapacity" : "Integer. The minimum amount of the Auto Scaling group's capacity that must be fulfilled by On-Demand Instances. This base portion is provisioned first as your group scales. The default value is 0. If you leave this parameter set to 0, On-Demand Instances are launched as a percentage of the Auto Scaling group's desired capacity, per the OnDemandPercentageAboveBaseCapacity setting.",
          "OnDemandPercentageAboveBaseCapacity" : "Integer. Controls the percentages of On-Demand Instances and Spot Instances for your additional capacity beyond OnDemandBaseCapacity. The range is 0–100. The default value is 100. If you leave this parameter set to 100, the percentages are 100% for On-Demand Instances and 0% for Spot Instances.",
          "SpotAllocationStrategy" : "String. The only valid value is lowest-price, which is also the default value. The Auto Scaling group selects the cheapest Spot pools and evenly allocates your Spot capacity across the number of Spot pools that you specify.",
          "SpotInstancePools" : "Integer. The number of Spot pools to use to allocate your Spot capacity. The range is 1–20 and the default is 2.",
          "SpotMaxPrice" : "String. The maximum price per unit hour that you are willing to pay for a Spot Instance. If you leave this value blank (which is the default), the maximum Spot price is set at the On-Demand price. Minimum length of 1. Maximum length of 255."
        },
        "LaunchTemplate" : {
          "LaunchTemplateSpecification" : {
            "LaunchTemplateId" : "String. The ID of the launch template. You must specify either a template ID or a template name.",
            "LaunchTemplateName" : "String. The name of the launch template. You must specify either a template name or a template ID.",
            "Version" : "String. The version number. AWS CloudFormation does not support specifying $Latest, or $Default for the template version number."
          },
          "Overrides" : ["*Type: List of LaunchTemplateOverrides property types. Any parameters that you specify override the same parameters in the launch template. Currently, the only supported override is instance type. You must specify between 2 and 20 overrides." ]
        }
      },
      "LaunchTemplateOverrides":{
        "InstanceType" : "String"
      },
      "MetricsCollection":{
        "Granularity" : "*String. The frequency at which Amazon EC2 Auto Scaling sends aggregated data to CloudWatch. The only valid value is 1Minute.",
        "Metrics" : ["Type: List of String values. The list of metrics to collect. If you don't specify any metrics, all metrics are enabled."]
      },
      "LifecycleHookSpecification":{
        "DefaultResult" : "The action that the Auto Scaling group should take when the lifecycle hook timeout elapses or if an unexpected failure occurs. Valid values: CONTINUE, ABANDON (default)",
        "HeartbeatTimeout" : "Integer. The maximum time, in seconds, that can elapse before the lifecycle hook times out. If the lifecycle hook times out, Auto Scaling performs the default action.",
        "LifecycleHookName" : "*String. The name of the lifecycle hook.",
        "LifecycleTransition" : "*String. The state of the EC2 instance to attach the lifecycle hook to.",
        "NotificationMetadata" : "String. Additional information to include when Amazon EC2 Auto Scaling sends a message to the notification target. ",
        "NotificationTargetARN" : "String.The Amazon Resource Name (ARN) of the target that Amazon EC2 Auto Scaling sends notifications to when an instance is in the transition state for the lifecycle hook. The notification target can be either an Amazon SQS queue or an Amazon SNS topic.",
        "RoleARN" : "String. The ARN of the IAM role that allows the Auto Scaling group to publish to the specified notification target."
      },
      "LaunchTemplateSpecification":{
        "LaunchTemplateId" : "String. The ID of the launch template. You must specify either a template ID or a template name.",
        "LaunchTemplateName" : "String. The name of the launch template. You must specify either a template name or a template ID.",
        "Version" : "String. The version number. AWS CloudFormation does not support specifying $Latest, or $Default for the template version number."
      },
      "NotificationConfiguration":{
        "NotificationTypes" : ["*list of string values. A list of event types that trigger a notification. Event types can include any of the following types: autoscaling:EC2_INSTANCE_LAUNCH, autoscaling:EC2_INSTANCE_LAUNCH_ERROR, autoscaling:EC2_INSTANCE_TERMINATE, autoscaling:EC2_INSTANCE_TERMINATE_ERROR, and autoscaling:TEST_NOTIFICATION. "],
        "TopicARN" : "*String. The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic."
      },
     "Tags":{
      "Key" : "*String",
      "Value" : "*String",
      "PropagateAtLaunch" : "*Boolean. Set to true if you want AWS CloudFormation to copy the tag to EC2 instances that are launched as part of the Auto Scaling group. Set to false if you want the tag attached only to the Auto Scaling group and not copied to any instances launched as part of the Auto Scaling group."
      },
      "CreationPolicy":{
        "AutoScalingCreationPolicy":{
          "MinSuccessfulInstancesPercent":"Specifies the percentage of instances in an Auto Scaling replacement update that must signal success for the update to succeed. You can specify a value from 0 to 100. AWS CloudFormation rounds to the nearest tenth of a percent. For example, if you update five instances with a minimum successful percentage of 50, three instances must signal success. If an instance doesn't send a signal within the time specified by the Timeout property, AWS CloudFormation assumes that the instance wasn't created. Default: 100"
        },
        "ResourceSignal" : {    
          "Count" : "Integer. Default :1 . The number of success signals AWS CloudFormation must receive before it sets the resource status as CREATE_COMPLETE. If the resource receives a failure signal or doesn't receive the specified number of signals before the timeout period expires, the resource creation fails and AWS CloudFormation rolls the stack back.",
          "Timeout" : "The length of time that AWS CloudFormation waits for the number of signals that was specified in the Count property. The timeout period starts after AWS CloudFormation starts creating the resource, and the timeout expires no sooner than the time you specify but can occur shortly thereafter. The maximum time that you can specify is 12 hours. The value must be in ISO8601 duration format, in the form: 'PT#H#M#S', where each # is the number of hours, minutes, and seconds, respectively. For best results, specify a period of time that gives your instances plenty of time to get up and running. A shorter timeout can cause a rollback. Default: PT5M (5 minutes)"
        }
      },
      "AutoScalingReplacingUpdate(UpdatePolicy)":{
        "AutoScalingReplacingUpdate" : {
          "WillReplace" : "Boolean. Specifies whether an Auto Scaling group and the instances it contains are replaced during an update. During replacement, AWS CloudFormation retains the old group until it finishes creating the new one. If the update fails, AWS CloudFormation can roll back to the old Auto Scaling group and delete the new Auto Scaling group. While AWS CloudFormation creates the new group, it doesn't detach or attach any instances. After successfully creating the new Auto Scaling group, AWS CloudFormation deletes the old Auto Scaling group during the cleanup process. When you set the WillReplace parameter, remember to specify a matching CreationPolicy. If the minimum number of instances (specified by the MinSuccessfulInstancesPercent property) don't signal success within the Timeout period (specified in the CreationPolicy policy), the replacement update fails and AWS CloudFormation rolls back to the old Auto Scaling group. "
        }
      },
      "AutoScalingRollingUpdate(UpdatePolicy)":{
        "AutoScalingRollingUpdate" : {
          "MaxBatchSize" : "Integer. Specifies the maximum number of instances that AWS CloudFormation updates.",
          "MinInstancesInService" : "Integer. Specifies the minimum number of instances that must be in service within the Auto Scaling group while AWS CloudFormation updates old instances. This value must be less than the MaxSize of the Auto Scaling group. ",
          "MinSuccessfulInstancesPercent" : "Integer. Specifies the percentage of instances in an Auto Scaling rolling update that must signal success for an update to succeed. You can specify a value from 0 to 100. AWS CloudFormation rounds to the nearest tenth of a percent. For example, if you update five instances with a minimum successful percentage of 50, three instances must signal success. If an instance doesn't send a signal within the time specified in the PauseTime property, AWS CloudFormation assumes that the instance wasn't updated. If you specify this property, you must also enable the WaitOnResourceSignals and PauseTime properties. The MinSuccessfulInstancesPercent parameter applies only to instances only for signaling purpose. Default: 100",
          "PauseTime" : "String. The amount of time that AWS CloudFormation pauses after making a change to a batch of instances to give those instances time to start software applications. For example, you might need to specify PauseTime when scaling up the number of instances in an Auto Scaling group. If you enable the WaitOnResourceSignals property, PauseTime is the amount of time that AWS CloudFormation should wait for the Auto Scaling group to receive the required number of valid signals from added or replaced instances. If the PauseTime is exceeded before the Auto Scaling group receives the required number of signals, the update fails. For best results, specify a time period that gives your applications sufficient time to get started. If the update needs to be rolled back, a short PauseTime can cause the rollback to fail. Specify PauseTime in the ISO8601 duration format (in the format PT#H#M#S, where each # is the number of hours, minutes, and seconds, respectively). The maximum PauseTime is one hour (PT1H).Default: PT0S (zero seconds). If the WaitOnResourceSignals property is set to true, the default is PT5M.  ",
          "SuspendProcesses" : ["Type: List of Auto Scaling processes. Specifies the Auto Scaling processes to suspend during a stack update. Suspending processes prevents Auto Scaling from interfering with a stack update. For example, you can suspend alarming so that Amazon EC2 Auto Scaling doesn't execute scaling policies associated with an alarm.One or more of the following processes. If you omit this parameter, all processes are specified : Launch, Terminate, HealthCheck, ReplaceUnhealthy, AZRebalance, AlarmNotification, ScheduledActions, AddToLoadBalancer"],
          "WaitOnResourceSignals" : "**Boolean. If you specify the MinSuccessfulInstancesPercent property, you must also enable the WaitOnResourceSignals and PauseTime properties. Specifies whether the Auto Scaling group waits on signals from new instances during an update. Use this property to ensure that instances have completed installing and configuring applications before the Auto Scaling group update proceeds. AWS CloudFormation suspends the update of an Auto Scaling group after new EC2 instances are launched into the group. AWS CloudFormation must receive a signal from each new instance within the specified PauseTime before continuing the update. To have instances wait for an Elastic Load Balancing health check before they signal success, add a health-check verification by using the cfn-init helper script."
        }
      },
      "AutoScalingScheduledAction(UpdatePolicy)":{
        "AutoScalingScheduledAction" : {
          "IgnoreUnmodifiedGroupSizeProperties" : "Boolean. Specifies whether AWS CloudFormation ignores differences in group size properties between your current Auto Scaling group and the Auto Scaling group described in the AWS::AutoScaling::AutoScalingGroup resource of your template during a stack update. If you modify any of the group size property values in your template, AWS CloudFormation uses the modified values and updates your Auto Scaling group. "
        }
      }
    },
    "AWS::AutoScaling::LaunchConfiguration":{
      "BlockDeviceMapping":{
        "DeviceName" : "*String",
        "Ebs" : {
          "DeleteOnTermination" : "Boolean. Indicates whether to delete the volume when the instance is terminated. By default, Amazon EC2 Auto Scaling uses true.",
          "Encrypted" : "Boolean. Indicates whether the volume is encrypted. Encrypted EBS volumes must be attached to instances that support Amazon EBS encryption. Volumes that you create from encrypted snapshots are automatically encrypted. You cannot create an encrypted volume from an unencrypted snapshot or an unencrypted volume from an encrypted snapshot.",
          "Iops" : "Integer. The number of I/O operations per second (IOPS) that the volume supports. The maximum ratio of IOPS to volume size is 30.",
          "SnapshotId" : "**String. If you specify both SnapshotId and VolumeSize, VolumeSize must be equal or greater than the size of the snapshot.",
          "VolumeSize" : "**Integer. If you specify both SnapshotId and VolumeSize, VolumeSize must be equal or greater than the size of the snapshot. The volume size, in Gibibytes (GiB). This can be a number from 1 – 1024. If the volume type is EBS optimized, the minimum value is 10. ",
          "VolumeType" : "String. The volume type. By default, Amazon EC2 Auto Scaling uses the standard volume type. Valid values: standard | io1 | gp2 | st1 | sc1"
        },
        "NoDevice" : "Boolean. Suppresses the device mapping. If NoDevice is set to true for the root device, the instance might fail the Amazon EC2 health check. ",
        "VirtualName" : "**String. The name of the virtual device. The name must be in the form ephemeralX where X is a number starting from zero (0), for example, ephemeral0. You can specify either VirtualName or Ebs, but not both."
     }
    },
    "AWS::AutoScaling::ScalingPolicy":{
      "StepAdjustments":{
        "MetricIntervalLowerBound" : "**Number. you must specify at least one upper or lower bound. The lower bound of the breach size. The lower bound is the difference between the breach threshold and the aggregated CloudWatch metric value. If the metric value is within the lower and upper bounds, Auto Scaling triggers this step adjustment. If the metric value is above the breach threshold, the metric must be greater than or equal to the threshold plus the lower bound to trigger this step adjustment (the metric value is inclusive). If the metric value is below the breach threshold, the metric must be greater than the threshold plus the lower bound to trigger this step adjustment (the metric value is exclusive). A null value indicates negative infinity.",
        "MetricIntervalUpperBound" : "**Number. You must specify at least one upper or lower bound. The upper bound of the breach size. The upper bound is the difference between the breach threshold and the CloudWatch metric value. If the metric value is within the lower and upper bounds, Auto Scaling triggers this step adjustment. If the metric value is above the breach threshold, the metric must be less than the threshold plus the upper bound to trigger this step adjustment (the metric value is exclusive). If the metric value is below the breach threshold, the metric must be less than or equal to the threshold plus the upper bound to trigger this step adjustment (the metric value is inclusive). A null value indicates positive infinity.",
        "ScalingAdjustment" : "*Integer. The amount by which to scale. The adjustment is based on the value that you specified in the AdjustmentType property (either an absolute number or a percentage). A positive value adds to the current capacity and a negative number subtracts from the current capacity."
      },
      "TargetTrackingConfiguration":{
        "CustomizedMetricSpecification" : {
          "Dimensions" : [ "list of MetricDimension"],
          "MetricName" : "*String",
          "Namespace" : "*String",
          "Statistic" : "*String",
          "Unit" : "String"
        },
        "DisableScaleIn" : "Boolean. Indicates whether to disable scale-in for the target tracking policy. If true, the target tracking policy will not scale in the Auto Scaling group. The default value is false.",
        "PredefinedMetricSpecification" : {
          "PredefinedMetricType" : "String",
          "ResourceLabel" : "String"
        },
        "TargetValue" : "*Double"
      },
      "MetricDimension":{
        "Name" : "*String",
        "Value" : "*String"
      }
    },
    "AWS::ElasticLoadBalancingV2::Listener":{
      "Action":{
        "AuthenticateCognitoConfig" : {
          "AuthenticationRequestExtraParams" : "PLEASE NOTE: Type: String to String map. The query parameters (up to 10) to include in the redirect request to the authorization endpoint. ",
          "OnUnauthenticatedRequest" : "String. The behavior if the user is not authenticated. The following are possible values: deny, allow, authenticate",
          "Scope" : "String. The set of user claims to be requested from the IdP. The default is openid.",
          "SessionCookieName" : "The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie." ,
          "SessionTimeout" : "*Number. The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).",
          "UserPoolArn" : "*String. The Amazon Resource Name (ARN) of the Amazon Cognito user pool.",
          "UserPoolClientId" : "*String. The ID of the Amazon Cognito user pool client." ,
          "UserPoolDomain" : "*String. The domain prefix or fully-qualified domain name of the Amazon Cognito user pool."
        },
        "AuthenticateOidcConfig" : {
          "AuthenticationRequestExtraParams" : "PLEASE NOTE: Type: Map of string-to-string values. The query parameters (up to 10) to include in the redirect request to the authorization endpoint.",
          "AuthorizationEndpoint" : "*String. The authorization endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.",
          "ClientId" : "*String. The OAuth 2.0 client identifier.",
          "ClientSecret" : "*String. The OAuth 2.0 client secret.",
          "Issuer" : "*String. The OIDC issuer identifier of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.",
          "OnUnauthenticatedRequest" : "String. The behavior if the user is not authenticated. The following are possible values: allow, deny, authenticate",
          "Scope" : "String. The set of user claims to be requested from the IdP. The default is openid.",
          "SessionCookieName" : "String. The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.",
          "SessionTimeout" : "Number. The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).",
          "TokenEndpoint" : "*String. The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).",
          "UserInfoEndpoint" : "*String. The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days). "
        },
        "FixedResponseConfig" : {
          "ContentType" : "String. Valid Values: text/plain | text/css | text/html | application/javascript | application/json" ,
          "MessageBody" : "String. The message",
          "StatusCode" : "*String. The HTTP response code (2XX, 4XX, or 5XX)."
        },
        "Order" : "Integer. The order for the action. This value is required for rules with multiple actions. The action with the lowest value for order is performed first. The final action to be performed must be a forward or a fixed-response action. Valid Range: Minimum value of 1. Maximum value of 50000.",
        "RedirectConfig" : {
          "Host" : "String. The hostname. This component is not percent-encoded. The hostname can contain #{host}.",
          "Path" : "String. The absolute path, starting with the leading '/'. This component is not percent-encoded. The path can contain #{host}, #{path}, and #{port}.",
          "Port" : "String",
          "Protocol" : "String. The protocol. You can specify HTTP, HTTPS, or #{protocol}. You can redirect HTTP to HTTP, HTTP to HTTPS, and HTTPS to HTTPS. You cannot redirect HTTPS to HTTP.",
          "Query" : "String. The query parameters, URL-encoded when necessary, but not percent-encoded. Do not include the leading '?', as it is automatically added. You can specify any of the reserved keywords.",
          "StatusCode" : "*String. Valid Values: HTTP_301 | HTTP_302"
        },
        "TargetGroupArn" : "String. The Amazon Resource Name (ARN) of the target group to which Elastic Load Balancing routes the traffic. Specify only when Type is forward.",
        "Type" : "*String. The type of action. Each rule must include exactly one of the following types of actions: forward | authenticate-oidc | authenticate-cognito | redirect | fixed-response"
      },
      "Certificate":{
        "CertificateArn" : "String"
      }
    },
    "AWS::ElasticLoadBalancingV2::ListenerCertificate":{
      "Certificate":{
        "CertificateArn" : "String"
      }
    },
    "AWS::ElasticLoadBalancingV2::ListenerRule":{
      "Conditions":{
        "Field" : "String. The name of the condition that you want to define, such as path-pattern (which forwards requests based on the URL of the request). Valid values: host-header | path-pattern",
        "Values" : ["Type: List of String values. If you specified host-header for Field, you can specify a single host name (for example, my.example.com). A host name is case insensitive. If you specified path-pattern for Field, you can specify a single path pattern (for example, /img/*). A path pattern is case-sensitive, can be up to 128 characters in length. The value for the field that you specified in the Field property. "]
      },
      "Action":{
        "AuthenticateCognitoConfig" : {
          "AuthenticationRequestExtraParams" : "PLEASE NOTE: Type: String to String map. The query parameters (up to 10) to include in the redirect request to the authorization endpoint. ",
          "OnUnauthenticatedRequest" : "String. The behavior if the user is not authenticated. The following are possible values: deny, allow, authenticate",
          "Scope" : "String. The set of user claims to be requested from the IdP. The default is openid.",
          "SessionCookieName" : "The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie." ,
          "SessionTimeout" : "*Number. The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).",
          "UserPoolArn" : "*String. The Amazon Resource Name (ARN) of the Amazon Cognito user pool.",
          "UserPoolClientId" : "*String. The ID of the Amazon Cognito user pool client." ,
          "UserPoolDomain" : "*String. The domain prefix or fully-qualified domain name of the Amazon Cognito user pool."
        },
        "AuthenticateOidcConfig" : {
          "AuthenticationRequestExtraParams" : "PLEASE NOTE: Type: Map of string-to-string values. The query parameters (up to 10) to include in the redirect request to the authorization endpoint.",
          "AuthorizationEndpoint" : "*String. The authorization endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.",
          "ClientId" : "*String. The OAuth 2.0 client identifier.",
          "ClientSecret" : "*String. The OAuth 2.0 client secret.",
          "Issuer" : "*String. The OIDC issuer identifier of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.",
          "OnUnauthenticatedRequest" : "String. The behavior if the user is not authenticated. The following are possible values: allow, deny, authenticate",
          "Scope" : "String. The set of user claims to be requested from the IdP. The default is openid.",
          "SessionCookieName" : "String. The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.",
          "SessionTimeout" : "Number. The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).",
          "TokenEndpoint" : "*String. The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).",
          "UserInfoEndpoint" : "*String. The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days). "
        },
        "FixedResponseConfig" : {
          "ContentType" : "String. Valid Values: text/plain | text/css | text/html | application/javascript | application/json" ,
          "MessageBody" : "String. The message",
          "StatusCode" : "*String. The HTTP response code (2XX, 4XX, or 5XX)."
        },
        "Order" : "Integer. The order for the action. This value is required for rules with multiple actions. The action with the lowest value for order is performed first. The final action to be performed must be a forward or a fixed-response action. Valid Range: Minimum value of 1. Maximum value of 50000.",
        "RedirectConfig" : {
          "Host" : "String. The hostname. This component is not percent-encoded. The hostname can contain #{host}.",
          "Path" : "String. The absolute path, starting with the leading '/'. This component is not percent-encoded. The path can contain #{host}, #{path}, and #{port}.",
          "Port" : "String",
          "Protocol" : "String. The protocol. You can specify HTTP, HTTPS, or #{protocol}. You can redirect HTTP to HTTP, HTTP to HTTPS, and HTTPS to HTTPS. You cannot redirect HTTPS to HTTP.",
          "Query" : "String. The query parameters, URL-encoded when necessary, but not percent-encoded. Do not include the leading '?', as it is automatically added. You can specify any of the reserved keywords.",
          "StatusCode" : "*String. Valid Values: HTTP_301 | HTTP_302"
        },
        "TargetGroupArn" : "String. The Amazon Resource Name (ARN) of the target group to which Elastic Load Balancing routes the traffic. Specify only when Type is forward.",
        "Type" : "*String. The type of action. Each rule must include exactly one of the following types of actions: forward | authenticate-oidc | authenticate-cognito | redirect | fixed-response"
      }
    },
    "AWS::ElasticLoadBalancingV2::LoadBalancer":{
      "LoadBalancerAttributes":{
        "Key" : "String. The name of an attribute that you want to configure.The following attributes are supported by both Application Load Balancers and Network Load Balancers:1. access_logs.s3.enabled - Indicates whether access logs are enabled. The value is true or false. The default is false. 2. access_logs.s3.bucket - The name of the S3 bucket for the access logs. This attribute is required if access logs are enabled. The bucket must exist in the same region as the load balancer and have a bucket policy that grants Elastic Load Balancing permissions to write to the bucket. 3. access_logs.s3.prefix - The prefix for the location in the S3 bucket for the access logs. 4.deletion_protection.enabled - Indicates whether deletion protection is enabled. The value is true or false. The default is false.The following attributes are supported by only Application Load Balancers: 1. idle_timeout.timeout_seconds - The idle timeout value, in seconds. The valid range is 1-4000 seconds. The default is 60 seconds. 2. routing.http2.enabled - Indicates whether HTTP/2 is enabled. The value is true orfalse. The default is true.The following attributes are supported by only Network Load Balancers: 1. load_balancing.cross_zone.enabled - Indicates whether cross-zone load balancing is enabled. The value is true or false. The default is false.",
        "Value" : "String"
      },
      "SubnetMappings":{
        "SubnetId" : "*String",
        "AllocationId" : "*String. [Network Load Balancer] The ID that represents the allocation of the Elastic IP address."
      }
    },
    "AWS::ElasticLoadBalancingV2::TargetGroup":{
      "Matcher":{
        "HttpCode" : "String. The HTTP codes that a healthy target must use when responding to a health check, such as 200,202 or 200-399. "
      },
      "TargetDescription":{
        "AvailabilityZone" : "String",
        "Id" : "*String. The ID of the target. If the target type of the target group is instance, specify an instance ID. If the target type is ip, specify an IP address. ",
        "Port" : "Integer. The port number on which the target is listening for traffic."
      },
      "TargetGroupAttributes":{
        "Key" : "The following attribute is supported by both Application Load Balancers and Network Load Balancers: 1. deregistration_delay.timeout_seconds - The amount of time, in seconds, for Elastic Load Balancing to wait before changing the state of a deregistering target from draining to unused. The range is 0-3600 seconds. The default value is 300 seconds. If the target is a Lambda function, this attribute is not supported. The following attributes are supported by Application Load Balancers if the target is not a Lambda function: 1. slow_start.duration_seconds - The time period, in seconds, during which a newly registered target receives a linearly increasing share of the traffic to the target group. After this time period ends, the target receives its full share of traffic. The range is 30-900 seconds (15 minutes). Slow start mode is disabled by default. 2. stickiness.enabled - Indicates whether sticky sessions are enabled. The value is true or false. The default is false. 3. stickiness.type - The type of sticky sessions. The possible value is lb_cookie. 4. stickiness.lb_cookie.duration_seconds - The time period, in seconds, during which requests from a client should be routed to the same target. After this time period expires, the load balancer-generated cookie is considered stale. The range is 1 second to 1 week (604800 seconds). The default value is 1 day (86400 seconds).The following attribute is supported only if the target is a Lambda function. 1. lambda.multi_value_headers.enabled - Indicates whether the request and response headers exchanged between the load balancer and the Lambda function include arrays of values or strings. The value is true or false. The default is false. If the value is false and the request contains a duplicate header field name or query parameter key, the load balancer uses the last value sent by the client. The following attribute is supported only by Network Load Balancers: 1.proxy_protocol_v2.enabled - Indicates whether Proxy Protocol version 2 is enabled. The value is true or false. The default is false.",
        "Value" : "String"
      }
    },
    "AWS::CertificateManager::Certificate":{
      "DomainValidationOption":{
        "DomainName" : "*String. Fully Qualified Domain Name (FQDN) of the Certificate that you are requesting.",
        "ValidationDomain" : "*String. The domain that domain name registrars use to send validation emails. Registrars use this value as the email address suffix when sending emails to verify your identity. This value must be the same as the domain name or a superdomain of the domain name."
      }
    },
    "AWS::DynamoDB::Table":{
      "AttributeDefinition":{
        "AttributeName" : "*String",
        "AttributeType" : "*String. The data type for the attribute. You can specify S for string data, N for numeric data, or B for binary data. "
      },
      "ProvisionedThroughput":{
        "ReadCapacityUnits" : "*Number. Sets the desired minimum number of consistent reads of items (up to 4KB in size) per second for the specified table before Amazon DynamoDB balances the load. ",
        "WriteCapacityUnits" : "*Number. Sets the desired minimum number of consistent writes of items (up to 1KB in size) per second for the specified table before Amazon DynamoDB balances the load. "
      },
     "SSESpecification":{
      "SSEEnabled" : "*Boolean. Whether server-side encryption is enabled or not"
      },
      "StreamSpecification":{
        "StreamViewType" : "*String. Determines the information that the stream captures when an item in the table is modified. Valid Values: NEW_IMAGE | OLD_IMAGE | NEW_AND_OLD_IMAGES | KEYS_ONLY"
      },
      "TimeToLiveSpecification":{
        "AttributeName" : "*String. The name of the TTL attribute that stores the expiration time for items in the table. The name can be 1–255 characters long, and has no character restrictions. ",
        "Enabled" : "*Boolean. Indicates whether to enable (by specifying true) or disable (by specifying false) TTL on the table."
      },
      "KeySchema":{
        "AttributeName" : "*String. The attribute name that is used as the primary key for this table. Primary key element names can be 1 – 255 characters long and have no character restrictions.",
        "KeyType" : "*Represents the attribute data, consisting of the data type and the attribute value itself. You can specify HASH or RANGE."
      },
      "PointInTimeRecoverySpecification":{
        "PointInTimeRecoveryEnabled" : "Boolean. Indicates whether point in time recovery is enabled (true) or disabled (false) on the table. "
      },
      "LocalSecondaryIndex":{
        "IndexName" : "*String",
        "KeySchema" : ["*Type: List of KeySchema. The complete index key schema for the local secondary index, which consists of one or more pairs of attribute names and key types. For local secondary indexes, the hash key must be the same as that of the source table.##"],                           
        "Projection" : {
          "NonKeyAttributes" : ["Type: List of String values. The non-key attribute names that are projected into the index. For local secondary indexes, the total count of NonKeyAttributes summed across all of the local secondary indexes must not exceed 20. If you project the same attribute into two different indexes, this counts as two distinct attributes in determining the total. This limit does not apply for secondary indexes with a ProjectionType of KEYS_ONLY or ALL. "],
          "ProjectionType" : "*String. KEYS_ONLY=Only the index and primary keys are projected into the index. |INCLUDE= Only the specified table attributes are projected into the index. The list of projected attributes are in NonKeyAttributes. |ALL=All of the table attributes are projected into the index.. "
        }
      },
      "GlobalSecondaryIndex":{
        "IndexName" : "*String. The name of the global secondary index. ",
        "KeySchema" : ["*Type: List of KeySchema. The complete index key schema for the local secondary index, which consists of one or more pairs of attribute names and key types. For local secondary indexes, the hash key must be the same as that of the source table.##"],
        "Projection" : {
          "NonKeyAttributes" : ["Type: List of String values. The non-key attribute names that are projected into the index. For local secondary indexes, the total count of NonKeyAttributes summed across all of the local secondary indexes must not exceed 20. If you project the same attribute into two different indexes, this counts as two distinct attributes in determining the total. This limit does not apply for secondary indexes with a ProjectionType of KEYS_ONLY or ALL. "],
          "ProjectionType" : "*String. KEYS_ONLY=Only the index and primary keys are projected into the index. |INCLUDE= Only the specified table attributes are projected into the index. The list of projected attributes are in NonKeyAttributes. |ALL=All of the table attributes are projected into the index.. "
        },
        "ProvisionedThroughput" : {
          "ReadCapacityUnits" : "*Number. Sets the desired minimum number of consistent reads of items (up to 4KB in size) per second for the specified table before Amazon DynamoDB balances the load. ",
          "WriteCapacityUnits" : "*Number. Sets the desired minimum number of consistent writes of items (up to 1KB in size) per second for the specified table before Amazon DynamoDB balances the load. "
        }
      }
    },
    "AWS::SQS::Queue":{
      "RedrivePolicy":{
        "deadLetterTargetArn" : "*String. The Amazon Resource Name (ARN) of the dead-letter queue to which Amazon SQS moves messages after the value of maxReceiveCount is exceeded. ",
        "maxReceiveCount" : "*Integer. The number of times a message is delivered to the source queue before being moved to the dead-letter queue. "
      }
    },
    "AWS::SNS::Topic":{
      "Subscription":{
        "Endpoint" : "*String. The subscription's endpoint (format depends on the protocol).",
        "Protocol" : "*String. The subscription's protocol."
      }
    },
    "AWS::ECS::Service":{
      "NetworkConfiguration":{
        "AwsvpcConfiguration" : {
          "AssignPublicIp" : "String. Allowed Values: DISABLED | ENABLED. Whether the task's elastic network interface receives a public IP address. The default value is DISABLED.",
          "SecurityGroups" : ["Type: List of String. The security groups associated with the task or service. If you do not specify a security group, the default security group for the VPC is used. There is a limit of 5 security groups that can be specified per AwsVpcConfiguration."],
          "Subnets" : ["*Type: List of String. The subnets associated with the task or service. There is a limit of 16 subnets that can be specified per AwsVpcConfiguration." ]
        }
      },
      "DeploymentConfiguration":{
        "MaximumPercent" : "Integer. If a service is using the rolling update (ECS) deployment type, the maximum percent parameter represents an upper limit on the number of tasks in a service that are allowed in the RUNNING or PENDING state during a deployment, as a percentage of the desired number of tasks (rounded down to the nearest integer), and while any container instances are in the DRAINING state if the service contains tasks using the EC2 launch type. This parameter enables you to define the deployment batch size. For example, if your service has a desired number of four tasks and a maximum percent value of 200%, the scheduler may start four new tasks before stopping the four older tasks (provided that the cluster resources required to do this are available). The default value for maximum percent is 200%. If a service is using the blue/green (CODE_DEPLOY) or EXTERNAL deployment types and tasks that use the EC2 launch type, the maximum percent value is set to the default value and is used to define the upper limit on the number of the tasks in the service that remain in the RUNNING state while the container instances are in the DRAINING state. If the tasks in the service use the Fargate launch type, the maximum percent value is not used, although it is returned when describing your service.",
        "MinimumHealthyPercent" : "Integer. If a service is using the rolling update (ECS) deployment type, the minimum healthy percent represents a lower limit on the number of tasks in a service that must remain in the RUNNING state during a deployment, as a percentage of the desired number of tasks (rounded up to the nearest integer), and while any container instances are in the DRAINING state if the service contains tasks using the EC2 launch type. This parameter enables you to deploy without using additional cluster capacity. For example, if your service has a desired number of four tasks and a minimum healthy percent of 50%, the scheduler may stop two existing tasks to free up cluster capacity before starting two new tasks. Tasks for services that do not use a load balancer are considered healthy if they are in the RUNNING state; tasks for services that do use a load balancer are considered healthy if they are in the RUNNING state and they are reported as healthy by the load balancer. The default value for minimum healthy percent is 100%. If a service is using the blue/green (CODE_DEPLOY) or EXTERNAL deployment types and tasks that use the EC2 launch type, the minimum healthy percent value is set to the default value and is used to define the lower limit on the number of the tasks in the service that remain in the RUNNING state while the container instances are in the DRAINING state. If the tasks in the service use the Fargate launch type, the minimum healthy percent value is not used, although it is returned when describing your service."
      },
      "LoadBalancer":{
        "ContainerName" : "String. The name of the container (as it appears in a container definition) to associate with the load balancer.",
        "ContainerPort" : "*Integer. The port on the container to associate with the load balancer. This port must correspond to a containerPort in the service's task definition. Your container instances must allow ingress traffic on the hostPort of the port mapping.",
        "LoadBalancerName" : "String. The name of the load balancer to associate with the Amazon ECS service.",
        "TargetGroupArn" : "String. The full Amazon Resource Name (ARN) of the Elastic Load Balancing target group or groups associated with a service. For services using the ECS deployment controller, you are limited to one target group. For services using the CODE_DEPLOY deployment controller, you are required to define two target groups for the load balancer."
      },
      "PlacementConstraint":{
        "Expression" : "String. A cluster query language expression to apply to the constraint. You cannot specify an expression if the constraint type is distinctInstance.",
        "Type" : "*String. The type of constraint. Use distinctInstance to ensure that each task in a particular group is running on a different container instance. Use memberOf to restrict the selection to a group of valid candidates. The value distinctInstance is not supported in task definitions. Allowed Values: distinctInstance | memberOf. "
      },
      "PlacementStrategy":{
        "Field" : "String. The field to apply the placement strategy against. For the spread placement strategy, valid values are instanceId (or host, which has the same effect), or any platform or custom attribute that is applied to a container instance, such as attribute:ecs.availability-zone. For the binpack placement strategy, valid values are cpu and memory. For the random placement strategy, this field is not used.",
        "Type" : "*String. The type of placement strategy. The random placement strategy randomly places tasks on available candidates. The spread placement strategy spreads placement across available candidates evenly based on the field parameter. The binpack strategy places tasks on available candidates that have the least available amount of the resource that is specified with the field parameter. For example, if you binpack on memory, a task is placed on the instance with the least amount of remaining memory (but still enough to run the task). Allowed Values: binpack | random | spread. "
      },
      "ServiceRegistry":{
        "ContainerName" : "String. The container name value, already specified in the task definition, to be used for your service discovery service. If the task definition that your service task specifies uses the bridge or host network mode, you must specify a containerName and containerPort combination from the task definition. If the task definition that your service task specifies uses the awsvpc network mode and a type SRV DNS record is used, you must specify either a containerName and containerPort combination or a port value, but not both.",
        "ContainerPort" : "Integer. The port value, already specified in the task definition, to be used for your service discovery service. If the task definition your service task specifies uses the bridge or host network mode, you must specify a containerName and containerPort combination from the task definition. If the task definition your service task specifies uses the awsvpc network mode and a type SRV DNS record is used, you must specify either a containerName and containerPort combination or a port value, but not both.",
        "Port" : "Integer. The port value used if your service discovery service specified an SRV record. This field may be used if both the awsvpc network mode and SRV records are used.",
        "RegistryArn" : "String. The Amazon Resource Name (ARN) of the service registry. The currently supported service registry is AWS Cloud Map."
      }
    },
    "AWS::ECS::TaskDefinition":{
      "ContainerDefinition":{
        "Command" : ["Type: List of String. The command that is passed to the container. " ],
        "Cpu" : "Integer. The number of cpu units reserved for the container.",
        "DisableNetworking" : "Boolean. When this parameter is true, networking is disabled within the container.",
        "DnsSearchDomains" : ["list of strings. A list of DNS search domains that are presented to the container. This parameter maps to DnsSearch in the Create a container section of the Docker Remote API and the --dns-search option to docker run. Not supported for windows containers."],
        "DnsServers" : ["List of strings. A list of DNS servers that are presented to the container. This parameter maps to Dns in the Create a container section of the Docker Remote API and the --dns option to docker run."],
        "DockerLabels" : {"info":"Type: Map of String. A key/value map of labels to add to the container. This parameter maps to Labels in the Create a container section of the Docker Remote API and the --label option to docker run. e.g. a:b,c:d "},
        "DockerSecurityOptions" : ["List of strings. A list of strings to provide custom labels for SELinux and AppArmor multi-level security systems. This field is not valid for containers in tasks using the Fargate launch type."],
        "EntryPoint" : ["List of string. The entry point that is passed to the container. This parameter maps to Entrypoint in the Create a container section of the Docker Remote API and the --entrypoint option to docker run. " ],
        "Environment" : ["Type: List of KeyValuePair. The environment variables to pass to a container. This parameter maps to Env in the Create a container section of the Docker Remote API and the --env option to docker run.##"],
        "Essential" : "Boolean. If the essential parameter of a container is marked as true, and that container fails or stops for any reason, all other containers that are part of the task are stopped. If the essential parameter of a container is marked as false, then its failure does not affect the rest of the containers in a task. If this parameter is omitted, a container is assumed to be essential. All tasks must have at least one essential container. If you have an application that is composed of multiple containers, you should group containers that are used for a common purpose into components, and separate the different components into multiple task definitions.",
        "ExtraHosts" : [" Type: List of HostEntry. A list of hostnames and IP address mappings to append to the /etc/hosts file on the container. This parameter maps to ExtraHosts in the Create a container section of the Docker Remote API and the --add-host option to docker run. This parameter is not supported for Windows containers or tasks that use the awsvpc network mode. ##"],
        "HealthCheck" : {
          "Command" : [ "*Type: List of String. A string array representing the command that the container runs to determine if it is healthy. The string array must start with CMD to execute the command arguments directly, or CMD-SHELL to run the command with the container's default shell. " ],
          "Interval" : "Integer. The time period in seconds between each health check execution. You may specify between 5 and 300 seconds. The default value is 30 seconds.",
          "Retries" : "Integer. The number of times to retry a failed health check before the container is considered unhealthy. You may specify between 1 and 10 retries. The default value is 3.",
          "StartPeriod" : "Integer. The optional grace period within which to provide containers time to bootstrap before failed health checks count towards the maximum number of retries. You may specify between 0 and 300 seconds. The startPeriod is disabled by default.",
          "Timeout" : "Integer. The time period in seconds to wait for a health check to succeed before it is considered a failure. You may specify between 2 and 60 seconds. The default value is 5."
        }
        ,
        "Hostname" : "String. The hostname to use for your container. This parameter maps to Hostname in the Create a container section of the Docker Remote API and the --hostname option to docker run.",
        "Image" : "String. The image used to start a container. This string is passed directly to the Docker daemon. Images in the Docker Hub registry are available by default. Other repositories are specified with either repository-url/image:tag or repository-url/image@digest . Up to 255 letters (uppercase and lowercase), numbers, hyphens, underscores, colons, periods, forward slashes, and number signs are allowed. This parameter maps to Image in the Create a container section of the Docker Remote API and the IMAGE parameter of docker run.",
        "Links" : ["List of strings. The link parameter allows containers to communicate with each other without the need for port mappings. Only supported if the network mode of a task definition is set to bridge. The name:internalName construct is analogous to name:alias in Docker links. Up to 255 letters (uppercase and lowercase), numbers, and hyphens are allowed. This parameter maps to Links in the Create a container section of the Docker Remote API and the --link option to docker run ."],
        "LinuxParameters" : {
          "Capabilities" : {
            "Add" : ["List of String. The Linux capabilities for the container that have been added to the default configuration provided by Docker. Valid values: 'ALL' | 'AUDIT_CONTROL' | 'AUDIT_WRITE' | 'BLOCK_SUSPEND' | 'CHOWN' | 'DAC_OVERRIDE' | 'DAC_READ_SEARCH' | 'FOWNER' | 'FSETID' | 'IPC_LOCK' | 'IPC_OWNER' | 'KILL' | 'LEASE' | 'LINUX_IMMUTABLE' | 'MAC_ADMIN' | 'MAC_OVERRIDE' | 'MKNOD' | 'NET_ADMIN' | 'NET_BIND_SERVICE' | 'NET_BROADCAST' | 'NET_RAW' | 'SETFCAP' | 'SETGID' | 'SETPCAP' | 'SETUID' | 'SYS_ADMIN' | 'SYS_BOOT' | 'SYS_CHROOT' | 'SYS_MODULE' | 'SYS_NICE' | 'SYS_PACCT' | 'SYS_PTRACE' | 'SYS_RAWIO' | 'SYS_RESOURCE' | 'SYS_TIME' | 'SYS_TTY_CONFIG' | 'SYSLOG' | 'WAKE_ALARM'"],
            "Drop" : ["List of string. The Linux capabilities for the container that have been removed from the default configuration provided by Docker. Valid values: 'ALL' | 'AUDIT_CONTROL' | 'AUDIT_WRITE' | 'BLOCK_SUSPEND' | 'CHOWN' | 'DAC_OVERRIDE' | 'DAC_READ_SEARCH' | 'FOWNER' | 'FSETID' | 'IPC_LOCK' | 'IPC_OWNER' | 'KILL' | 'LEASE' | 'LINUX_IMMUTABLE' | 'MAC_ADMIN' | 'MAC_OVERRIDE' | 'MKNOD' | 'NET_ADMIN' | 'NET_BIND_SERVICE' | 'NET_BROADCAST' | 'NET_RAW' | 'SETFCAP' | 'SETGID' | 'SETPCAP' | 'SETUID' | 'SYS_ADMIN' | 'SYS_BOOT' | 'SYS_CHROOT' | 'SYS_MODULE' | 'SYS_NICE' | 'SYS_PACCT' | 'SYS_PTRACE' | 'SYS_RAWIO' | 'SYS_RESOURCE' | 'SYS_TIME' | 'SYS_TTY_CONFIG' | 'SYSLOG' | 'WAKE_ALARM'" ]
          },
          "Devices" : ["Type: List of Device. Any host devices to expose to the container. This parameter maps to Devices in the Create a container section of the Docker Remote API and the --device option to docker run. If you are using tasks that use the Fargate launch type, the devices parameter is not supported.##"],
          "InitProcessEnabled" : "Boolean. Run an init process inside the container that forwards signals and reaps processes. This parameter maps to the --init option to docker run. ",
          "SharedMemorySize" : "Integer. The value for the size (in MiB) of the /dev/shm volume. This parameter maps to the --shm-size option to docker run.",
          "Tmpfs" : ["Type: List of Tmpfs. The container path, mount options, and size (in MiB) of the tmpfs mount. This parameter maps to the --tmpfs option to docker run ##. "]
        }
        ,
        "LogConfiguration" : {
          "LogDriver" : "*String. Allowed Values: awslogs | fluentd | gelf | journald | json-file | splunk | syslog. For tasks using the Fargate launch type, the supported log drivers are awslogs and splunk.",
          "Options" : {"info":"Type: Map of String e.g. a:b,c:d,e:f. The configuration options to send to the log driver. This parameter requires version 1.19 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: sudo docker version --format '{{.Server.APIVersion}}'"}
        },
        "Memory" : "Integer. The hard limit (in MiB) of memory to present to the container. If your container attempts to exceed the memory specified here, the container is killed. This parameter maps to Memory in the Create a container section of the Docker Remote API and the --memory option to docker run.If your containers are part of a task using the Fargate launch type, this field is optional and the only requirement is that the total amount of memory reserved for all containers within a task be lower than the task memory value. For containers that are part of a task using the EC2 launch type, you must specify a non-zero integer for one or both of memory or memoryReservation in container definitions. If you specify both, memory must be greater than memoryReservation. If you specify memoryReservation, then that value is subtracted from the available memory resources for the container instance on which the container is placed. Otherwise, the value of memory is used.",
        "MemoryReservation" : "Integer. The soft limit (in MiB) of memory to reserve for the container. When system memory is under heavy contention, Docker attempts to keep the container memory to this soft limit. However, your container can consume more memory when it needs to, up to either the hard limit specified with the memory parameter (if applicable), or all of the available memory on the container instance, whichever comes first. This parameter maps to MemoryReservation in the Create a container section of the Docker Remote API and the --memory-reservation option to docker run.",
        "MountPoints" : ["Type: List of MountPoint. This parameter maps to Volumes in the Create a container section of the Docker Remote API and the --volume option to docker run. Windows containers can mount whole directories on the same drive as $env:ProgramData. Windows containers cannot mount directories on a different drive, and mount point cannot be across drives. ##"],
        "Name" : "String. The name of a container. If you are linking multiple containers together in a task definition, the name of one container can be entered in the links of another container to connect the containers. Up to 255 letters (uppercase and lowercase), numbers, and hyphens are allowed. This parameter maps to name in the Create a container section of the Docker Remote API and the --name option to docker run.",
        "PortMappings" : ["Type: List of PortMapping. The list of port mappings for the container. Port mappings allow containers to access ports on the host container instance to send or receive traffic. Port mappings on Windows use the NetNAT gateway address rather than localhost. There is no loopback for port mappings on Windows, so you cannot access a container's mapped port from the host itself."],
        "Privileged" : "Boolean. When this parameter is true, the container is given elevated privileges on the host container instance (similar to the root user). This parameter maps to Privileged in the Create a container section of the Docker Remote API and the --privileged option to docker run.",
        "ReadonlyRootFilesystem" : "Boolean. When this parameter is true, the container is given read-only access to its root file system. This parameter maps to ReadonlyRootfs in the Create a container section of the Docker Remote API and the --read-only option to docker run.",
        "RepositoryCredentials" : {
          "CredentialsParameter" : "The Amazon Resource Name (ARN) of the secret containing the private repository credentials."
        },
        "Ulimits" : ["Type: List of Ulimit. A list of ulimits to set in the container. This parameter maps to Ulimits in the Create a container section of the Docker Remote API and the --ulimit option to docker run."],
        "User" : "String. The user name to use inside the container. This parameter maps to User in the Create a container section of the Docker Remote API and the --user option to docker run. This parameter is not supported for Windows containers.",
        "VolumesFrom" : ["Type: List of VolumeFrom. Data volumes to mount from another container. This parameter maps to VolumesFrom in the Create a container section of the Docker Remote API and the --volumes-from option to docker run."],
        "WorkingDirectory" : "String. The working directory in which to run commands inside the container. This parameter maps to WorkingDir in the Create a container section of the Docker Remote API and the --workdir option to docker run."
      },
      "Device":{
        "ContainerPath" : "String. The path inside the container at which to expose the host device.",
        "HostPath" : "*String. The path for the device on the host container instance.",
        "Permissions" : ["List of string. The explicit permissions to provide to the container for the device. By default, the container has permissions for read, write, and mknod for the device."]
      },
      "DockerVolumeConfiguration":{
        "Autoprovision" : "Boolean. If this value is true, the Docker volume is created if it does not already exist.",
        "Driver" : "String. The Docker volume driver to use. The driver value must match the driver name provided by Docker because it is used for task placement. If the driver was installed using the Docker plugin CLI, use docker plugin ls to retrieve the driver name from your container instance. If the driver was installed using another method, use Docker plugin discovery to retrieve the driver name. For more information, see Docker plugin discovery. This parameter maps to Driver in the Create a volume section of the Docker Remote API and the xxdriver option to docker volume create .",
        "DriverOpts" : {"info":"Type: Map of String e.g. a:b, c:d, e:f. A map of Docker driver-specific options passed through. This parameter maps to DriverOpts in the Create a volume section of the Docker Remote API and the xxopt option to docker volume create ."},
        "Labels" : {"info":"Type: Map of String e.g. a:b, c:d, e:f. Custom metadata to add to your Docker volume. This parameter maps to Labels in the Create a volume section of the Docker Remote API and the xxlabel option to docker volume create ."},
        "Scope" : "String. Allowed Values: shared | task. The scope for the Docker volume that determines its lifecycle. Docker volumes that are scoped to a task are automatically provisioned when the task starts and destroyed when the task stops. Docker volumes that are scoped as shared persist after the task stops."
      },
      "HostEntry":{
        "Hostname" : "*String. The hostname to use in the /etc/hosts entry.",
        "IpAddress" : "*String. The IP address to use in the /etc/hosts entry."
      },
      "HostVolumeProperties":{
        "SourcePath" : "String. When the host parameter is used, specify a sourcePath to declare the path on the host container instance that is presented to the container. If this parameter is empty, then the Docker daemon has assigned a host path for you. If the host parameter contains a sourcePath file location, then the data volume persists at the specified location on the host container instance until you delete it manually. If the sourcePath value does not exist on the host container instance, the Docker daemon creates it. If the location does exist, the contents of the source path folder are exported. If you are using the Fargate launch type, the sourcePath parameter is not supported."
      },
      "KeyValuePair":{
        "Name" : "String",
        "Value" : "String"
      },
      "MountPoint":{
        "ContainerPath" : "String. The path on the container to mount the host volume at.",
        "ReadOnly" : "Boolean. If this value is true, the container has read-only access to the volume. If this value is false, then the container can write to the volume. The default value is false.",
        "SourceVolume" : "String. The name of the volume to mount. Must be a volume name referenced in the name parameter of task definition volume."
      },
      "PortMapping":{
        "ContainerPort" : "Integer. The port number on the container that is bound to the user-specified or automatically assigned host port.",
        "HostPort" : "Integer. The port number on the container instance to reserve for your container.",
        "Protocol" : "String. Allowed Values: tcp | udp"
      },
      "Tmpfs":{
        "ContainerPath" : "String. The absolute file path where the tmpfs volume is to be mounted.",
        "MountOptions" : ["List of string. Valid values: 'defaults' | 'ro' | 'rw' | 'suid' | 'nosuid' | 'dev' | 'nodev' | 'exec' | 'noexec' | 'sync' | 'async' | 'dirsync' | 'remount' | 'mand' | 'nomand' | 'atime' | 'noatime' | 'diratime' | 'nodiratime' | 'bind' | 'rbind' | 'unbindable' | 'runbindable' | 'private' | 'rprivate' | 'shared' | 'rshared' | 'slave' | 'rslave' | 'relatime' | 'norelatime' | 'strictatime' | 'nostrictatime' | 'mode' | 'uid' | 'gid' | 'nr_inodes' | 'nr_blocks' | 'mpol'"],
        "Size" : "Integer. The size (in MiB) of the tmpfs volume."
      },
      "Ulimit":{
        "HardLimit" : "*Integer",
        "Name" : "*String. Allowed Values: core | cpu | data | fsize | locks | memlock | msgqueue | nice | nofile | nproc | rss | rtprio | rttime | sigpending | stack ",
        "SoftLimit" : "*Integer"
      },
      "Volume":{
        "DockerVolumeConfiguration" : {
          "Autoprovision" : "Boolean. If this value is true, the Docker volume is created if it does not already exist.",
          "Driver" : "String. The Docker volume driver to use. The driver value must match the driver name provided by Docker because it is used for task placement. If the driver was installed using the Docker plugin CLI, use docker plugin ls to retrieve the driver name from your container instance. If the driver was installed using another method, use Docker plugin discovery to retrieve the driver name. For more information, see Docker plugin discovery. This parameter maps to Driver in the Create a volume section of the Docker Remote API and the xxdriver option to docker volume create .",
          "DriverOpts" : {"info":"Type: Map of String e.g. a:b, c:d, e:f. A map of Docker driver-specific options passed through. This parameter maps to DriverOpts in the Create a volume section of the Docker Remote API and the xxopt option to docker volume create ."},
          "Labels" : {"info":"Type: Map of String e.g. a:b, c:d, e:f. Custom metadata to add to your Docker volume. This parameter maps to Labels in the Create a volume section of the Docker Remote API and the xxlabel option to docker volume create ."},
          "Scope" : "String. Allowed Values: shared | task. The scope for the Docker volume that determines its lifecycle. Docker volumes that are scoped to a task are automatically provisioned when the task starts and destroyed when the task stops. Docker volumes that are scoped as shared persist after the task stops."
        },
        "Host" : {
          "SourcePath" : "String. When the host parameter is used, specify a sourcePath to declare the path on the host container instance that is presented to the container. If this parameter is empty, then the Docker daemon has assigned a host path for you. If the host parameter contains a sourcePath file location, then the data volume persists at the specified location on the host container instance until you delete it manually. If the sourcePath value does not exist on the host container instance, the Docker daemon creates it. If the location does exist, the contents of the source path folder are exported. If you are using the Fargate launch type, the sourcePath parameter is not supported."
        },
        "Name" : "String. The name of the volume. Up to 255 letters (uppercase and lowercase), numbers, and hyphens are allowed. This name is referenced in the sourceVolume parameter of container definition mountPoints."
      },
      "VolumeFrom":{
        "ReadOnly" : "Boolean. If this value is true, the container has read-only access to the volume. If this value is false, then the container can write to the volume. The default value is false",
        "SourceContainer" : "String. The name of another container within the same task definition from which to mount volumes."
      } 
    },
    "AWS::CloudTrail::Trail":{
      "EventSelector":{
        "DataResources" : ["Type: List of DataResource. CloudTrail supports data event logging for Amazon S3 objects and AWS Lambda functions. You can specify up to 250 resources for an individual event selector, but the total number of data resources cannot exceed 250 across all event selectors in a trail. This limit does not apply if you configure resource logging for all data events.## "],
        "IncludeManagementEvents" : "Boolean. Specify if you want your event selector to include management events for your trail.",
        "ReadWriteType" : "String. Allowed Values: All | ReadOnly | WriteOnly"
      },
      "DataResource":{
        "Type" : "*String. The resource type in which you want to log data events. You can specify AWS::S3::Object or AWS::Lambda::Function resources. ",
        "Values" : ["Type: List of String. An array of Amazon Resource Name (ARN) strings or partial ARN strings for the specified objects. To log data events for all objects in all S3 buckets in your AWS account, specify the prefix as arn:aws:s3:::. To log data events for all objects in an S3 bucket, specify the bucket and an empty object prefix such as arn:aws:s3:::bucket-1/. The trail logs data events for all objects in this S3 bucket. To log data events for specific objects, specify the S3 bucket and object prefix such as arn:aws:s3:::bucket-1/example-images. The trail logs data events for objects in this S3 bucket that match the prefix.To log data events for all functions in your AWS account, specify the prefix as arn:aws:lambda. To log data events for a specific Lambda function, specify the function ARN."]
      }
    },
    "AWS::CloudWatch::Alarm":{
      "Dimension":{
        "Name" : "*String",
        "Value" : "*String"
      },
      "Metric":{
        "Dimensions" : [ "Type: List of Dimensions##"],
        "MetricName" : "String",
        "Namespace" : "String"
      },
      "MetricDataQuery":{
        "Expression" : "String. The math expression to be performed on the returned data, if this object is performing a math expression. This expression can use the Id of the other metrics to refer to those metrics, and can also use the Id of other expressions to use the result of those expressions.",
        "Id" : "*String. A short name used to tie this object to the results in the response. This name must be unique within a single call to GetMetricData. If you are performing math expressions on this set of data, this name represents that data and can serve as a variable in the mathematical expression. The valid characters are letters, numbers, and underscore. The first character must be a lowercase letter.",
        "Label" : "String. A human-readable label for this metric or expression. This is especially useful if this is an expression, so that you know what the value represents. If the metric or expression is shown in a CloudWatch dashboard widget, the label is shown. If Label is omitted, CloudWatch generates a default.",
        "MetricStat" : {
          "Metric" : "*Type: Metric.## ",
          "Period" : "*Integer. The period, in seconds, to use when retrieving the metric",
          "Stat" : "*String. The statistic to return. It can include any CloudWatch statistic or extended statistic.",
          "Unit" : "String. Allowed Values: Bits | Bits/Second | Bytes | Bytes/Second | Count | Count/Second | Gigabits | Gigabits/Second | Gigabytes | Gigabytes/Second | Kilobits | Kilobits/Second | Kilobytes | Kilobytes/Second | Megabits | Megabits/Second | Megabytes | Megabytes/Second | Microseconds | Milliseconds | None | Percent | Seconds | Terabits | Terabits/Second | Terabytes | Terabytes/Second"
        }
        ,
        "ReturnData" : "Boolean. This option indicates whether to return the timestamps and raw data values of this metric. If you are performing this call just to do math expressions and do not also need the raw data returned, you can specify False. If you omit this, the default of True is used."
      }      
    },
    "AWS::Logs::MetricFilter":{
      "MetricTransformation":{
        "DefaultValue" : "Double. (Optional) The value to emit when a filter pattern does not match a log event. This value can be null.",
        "MetricName" : "*String",
        "MetricNamespace" : "*String",
        "MetricValue" : "*String. The value that is published to the CloudWatch metric. For example, if you're counting the occurrences of a particular term like Error, specify 1 for the metric value. If you're counting the number of bytes transferred, reference the value that is in the log event by using $ followed by the name of the field that you specified in the filter pattern, such as $size."
      }      
    },
    "AWS::Events::EventBusPolicy":{
      "Condition":{
        "Key" : "String. Specifies the key for the condition. Currently the only supported key is aws:PrincipalOrgID.",
        "Type" : "String. Specifies the type of condition. Currently the only supported value is StringEquals.",
        "Value" : "String. Specifies the value for the key. Currently, this must be the ID of the organization."
      }
    },
    "AWS::Events::Rule":{
      "Target":{
        "Arn" : "String",
        "EcsParameters" : {
          "TaskCount" : "Integer. The number of tasks to create based on TaskDefinition. The default is 1.",
          "TaskDefinitionArn" : "*String. The ARN of the task definition to use. If no task revision is supplied, it defaults to the most recent revision at the time of resource creation."
        },
        "Id" : "*String. The ID of the target.",
        "Input" : "String. Valid JSON text passed to the target. If you use this property, nothing from the event text itself is passed to the target.",
        "InputPath" : "String. When you don't want to pass the entire matched event, InputPath describes which part of the event to pass to the target.",
        "InputTransformer" : {
          "InputPathsMap" : "Type: Map of String. {Key : Value, ...}. Map of JSON paths to be extracted from the event. You can then insert these in the template in InputTemplate to produce the output you want to be sent to the target. InputPathsMap is an array key-value pairs, where each value is a valid JSON path. You can have as many as 10 key-value pairs. You must use JSON dot notation, not bracket notation. The keys cannot start with 'AWS'",
          "InputTemplate" : "*String. Input template where you specify placeholders that will be filled with the values of the keys from InputPathsMap to customize the data sent to the target. Enclose each InputPathsMaps value in brackets: <value> The InputTemplate must be valid JSON."
        },
        "KinesisParameters" :{
          "PartitionKeyPath" : "*String. The JSON path to be extracted from the event and used as the partition key. "
        },
        "RoleArn" : "String",
        "RunCommandParameters" : {
          "RunCommandTargets" : ["Type: List of RunCommandTarget. The criteria (either InstanceIds or a tag) that specifies which EC2 instances the command is sent to. ##" ]
        },
        "SqsParameters" : {
          "MessageGroupId" : "*String. The FIFO message group ID to use as the target."
        }        
      },
      "RunCommandTarget":{
        "Key" : "*String. Can be either tag: tag-key or InstanceIds.",
        "Values" : ["*List of strings. If Key is tag: tag-key, Values is a list of tag values. If Key is InstanceIds, Values is a list of Amazon EC2 instance IDs." ]
      }
    },
    "AWS::EKS::Cluster":{
      "ResourcesVpcConfig":{
        "SecurityGroupIds" : ["Type: List of String. Specify one or more security groups for the cross-account elastic network interfaces that Amazon EKS creates to use to allow communication between your worker nodes and the Kubernetes control plane. If you don't specify a security group, the default security group for your VPC is used."],
        "SubnetIds" : ["* Type: List of string. Specify subnets for your Amazon EKS worker nodes. Amazon EKS creates cross-account elastic network interfaces in these subnets to allow communication between your worker nodes and the Kubernetes control plane."]
      }      
    },
    "AWS::EFS::FileSystem":{
      "ElasticFileSystemTag":{
        "Key" : "*String",
        "Value" : "*String"
      }      
    },
    "AWS::S3::Bucket":{
      "AccelerateConfiguration":{
        "AccelerationStatus" : "*String. Allowed Values: Enabled | Suspended. "
      },
      "AnalyticsConfiguration":{
        "Id" : "*String",
        "Prefix" : "String. The prefix that an object must have to be included in the analytics results.",
        "StorageClassAnalysis" : {
          "DataExport" : {
            "Destination" : {
              "BucketAccountId" : "String. The account ID that owns the destination bucket. If no account ID is provided, the owner will not be validated prior to exporting data.",
              "BucketArn" : "*String. The Amazon Resource Name (ARN) of the bucket to which data is exported.",
              "Format" : "*String. Specifies the file format used when exporting data to Amazon S3.",
              "Prefix" : "String. The prefix to use when exporting data. The prefix is prepended to all results."
            },
            "OutputSchemaVersion" : "*String. The version of the output schema to use when exporting data. Must be V_1."
          }          
        },
        "TagFilters" : ["Type: List of TagFilter. The tags to use when evaluating an analytics filter. The analytics only includes objects that meet the filter's criteria. If no filter is specified, all of the contents of the bucket are included in the analysis.##" ]
      },
      "TagFilter":{
        "Key" : "*String",
        "Value" : "*String"
      },
      "BucketEncryption":{
        "ServerSideEncryptionConfiguration" : ["*Type: List of ServerSideEncryptionRule. Specifies the default server-side-encryption configuration.##" ]
      },
      "ServerSideEncryptionRule":{
        "ServerSideEncryptionByDefault" : {
          "KMSMasterKeyID" : "String. KMS master key ID to use for the default encryption. This parameter is allowed if and only if SSEAlgorithm is set to aws:kms.",
          "SSEAlgorithm" : "*String. Allowed Values: AES256 | aws:kms"
        }        
      },
      "CorsConfiguration":{
        "CorsRules" : ["*Type: List of CorsRule. A set of allowed origins and methods." ]
      },
      "CorsRule":{
        "AllowedHeaders" : ["Type: List of String. Headers that are specified in the Access-Control-Request-Headers header. These headers are allowed in a preflight OPTIONS request. In response to any preflight OPTIONS request, Amazon S3 returns any requested headers that are allowed."],
        "AllowedMethods" : ["*Type: List of String. An HTTP method that you allow the origin to execute. Valid values are GET, PUT, HEAD, POST, and DELETE." ],
        "AllowedOrigins" : ["*Type: List of String. One or more origins you want customers to be able to access the bucket from."],
        "ExposedHeaders" : ["Type: List of String. One or more headers in the response that you want customers to be able to access from their applications (for example, from a JavaScript XMLHttpRequest object)."],
        "Id" : "String. A unique identifier for this rule. The value must be no more than 255 characters.",
        "MaxAge" : "Integer. The time in seconds that your browser is to cache the preflight response for the specified resource."
      },
      "InventoryConfiguration":{
        "Destination" : {
          "BucketAccountId" : "String. The account ID that owns the destination bucket. If no account ID is provided, the owner will not be validated prior to exporting data.",
          "BucketArn" : "*String. The Amazon Resource Name (ARN) of the bucket to which data is exported.",
          "Format" : "*String. Specifies the file format used when exporting data to Amazon S3.",
          "Prefix" : "String. The prefix to use when exporting data. The prefix is prepended to all results."
        },
        "Enabled" : "*Boolean. Specifies whether the inventory is enabled or disabled. If set to True, an inventory list is generated. If set to False, no inventory list is generated.",
        "Id" : "*String. The ID used to identify the inventory configuration.",
        "IncludedObjectVersions" : "*String. Allowed Values: All | Current. Object versions to include in the inventory list. If set to All, the list includes all the object versions, which adds the version-related fields VersionId, IsLatest, and DeleteMarker to the list. If set to Current, the list does not contain these version-related fields.",
        "OptionalFields" : ["List of string. Contains the optional fields that are included in the inventory results."],
        "Prefix" : "String. The prefix that is prepended to all inventory results.",
        "ScheduleFrequency" : "*String. Specifies the schedule for generating inventory results."
      },
      "LifecycleConfiguration":{
        "Rules" : ["*Type: List of Rule. ##"]
      },
      "Rule":{
        "AbortIncompleteMultipartUpload" : {
          "DaysAfterInitiation" : "*Integer. Specifies the number of days after which Amazon S3 aborts an incomplete multipart upload."
        },
        "ExpirationDate" : "**Type: Timestamp. Indicates when objects are deleted from Amazon S3 and Amazon S3 Glacier. The date value must be in ISO 8601 format. The time is always midnight UTC. If you specify an expiration and transition time, you must use the same time unit for both properties (either in days or by date). The expiration time must also be later than the transition time. You must specify at least one of the following properties: AbortIncompleteMultipartUpload, ExpirationDate, ExpirationInDays, NoncurrentVersionExpirationInDays, NoncurrentVersionTransition, NoncurrentVersionTransitions, Transition, or Transitions.",
        "ExpirationInDays" : "**Integer. Indicates the number of days after creation when objects are deleted from Amazon S3 and Amazon S3 Glacier. If you specify an expiration and transition time, you must use the same time unit for both properties (either in days or by date). The expiration time must also be later than the transition time.",
        "Id" : "String. Unique identifier for the rule. The value can't be longer than 255 characters.",
        "NoncurrentVersionExpirationInDays" : "**Integer. For buckets with versioning enabled (or suspended), specifies the time, in days, between when a new version of the object is uploaded to the bucket and when old versions of the object expire. When object versions expire, Amazon S3 permanently deletes them. If you specify a transition and expiration time, the expiration time must be later than the transition time.",
        "NoncurrentVersionTransition" : {
          "StorageClass" : "*String. Allowed Values: DEEP_ARCHIVE | GLACIER | INTELLIGENT_TIERING | ONEZONE_IA | STANDARD_IA",
          "TransitionInDays" : "*Integer. Specifies the number of days an object is noncurrent before Amazon S3 can perform the associated action. For information about the noncurrent days calculations."
        },
        "NoncurrentVersionTransitions" : ["**Type: List of NoncurrentVersionTransition. "],
        "Prefix" : "String. Object key prefix that identifies one or more objects to which this rule applies.",
        "Status" : "*String. If Enabled, the rule is currently being applied. If Disabled, the rule is not currently being applied. Allowed Values: Disabled | Enabled",
        "TagFilters" : ["Type: List of TagFilters. "],
        "Transition" : {
          "StorageClass" : "*String. Allowed Values: DEEP_ARCHIVE | GLACIER | INTELLIGENT_TIERING | ONEZONE_IA | STANDARD_IA",
          "TransitionDate" : "**Timestamp. Indicates when objects are transitioned to the specified storage class. The date value must be in ISO 8601 format. The time is always midnight UTC.",
          "TransitionInDays" : "**Integer. Indicates the number of days after creation when objects are transitioned to the specified storage class. The value must be a positive integer."
        },
        "Transitions" : ["Type: List of Transition" ]
      },
      "NoncurrentVersionTransition":{
        "StorageClass" : "*String. Allowed Values: DEEP_ARCHIVE | GLACIER | INTELLIGENT_TIERING | ONEZONE_IA | STANDARD_IA",
        "TransitionInDays" : "*Integer. Specifies the number of days an object is noncurrent before Amazon S3 can perform the associated action. For information about the noncurrent days calculations."
      },
      "Transition": {
        "StorageClass" : "*String. Allowed Values: DEEP_ARCHIVE | GLACIER | INTELLIGENT_TIERING | ONEZONE_IA | STANDARD_IA",
        "TransitionDate" : "**Timestamp. Indicates when objects are transitioned to the specified storage class. The date value must be in ISO 8601 format. The time is always midnight UTC.",
        "TransitionInDays" : "**Integer. Indicates the number of days after creation when objects are transitioned to the specified storage class. The value must be a positive integer."
      },
      "LoggingConfiguration":{
        "DestinationBucketName" : "String. The name of the bucket where Amazon S3 should store server access log files. You can store log files in any bucket that you own. By default, logs are stored in the bucket where the LoggingConfiguration property is defined.",
        "LogFilePrefix" : "String. A prefix for all log object keys. If you store log files from multiple Amazon S3 buckets in a single bucket, you can use a prefix to distinguish which log files came from which bucket."
      },
      "MetricsConfiguration":{
        "Id" : "*String",
        "Prefix" : "String. The prefix that an object must have to be included in the metrics results.",
        "TagFilters" : ["Type: List of TagFilters"]
      },
      "NotificationConfiguration":{
        "LambdaConfigurations" : [ "List of LambdaConfiguration, ..." ],
        "QueueConfigurations" : [ "List of QueueConfiguration"],
        "TopicConfigurations" : [ "List of TopicConfiguration, ..." ]
      },
      "LambdaConfiguration":{
        "Event" : "*String. The Amazon S3 bucket event for which to invoke the AWS Lambda function. s3:ObjectCreated:*, s3:ObjectCreated:Put, s3:ObjectCreated:Post, s3:ObjectCreated:Copy , s3:ObjectCreated:CompleteMultipartUpload, s3:ObjectRemoved:*, s3:ObjectRemoved:Delete, s3:ObjectRemoved:DeleteMarkerCreated, s3:ObjectRestore:Post, s3:ObjectRestore:Completed, s3:ReducedRedundancyLostObject",
        "Filter" : {
          "S3Key" : {
            "Rules" : ["*List of  FilterRule, ..." ]
          }          
        },
        "Function" : "*String. The Amazon Resource Name (ARN) of the AWS Lambda function that Amazon S3 invokes when the specified event type occurs."
      },
      "FilterRule":{
        "Name" : "*String. The object key name prefix or suffix identifying one or more objects to which the filtering rule applies. The maximum length is 1,024 characters. Overlapping prefixes and suffixes are not supported. Allowed Values: prefix | suffix",
        "Value" : "*String. The value that the filter searches for in object key names."
      },
      "QueueConfiguration":{
        "Event" : "*String. The Amazon S3 bucket event about which you want to publish messages to Amazon SQS. s3:ObjectCreated:*, s3:ObjectCreated:Put, s3:ObjectCreated:Post, s3:ObjectCreated:Copy , s3:ObjectCreated:CompleteMultipartUpload, s3:ObjectRemoved:*, s3:ObjectRemoved:Delete, s3:ObjectRemoved:DeleteMarkerCreated, s3:ObjectRestore:Post, s3:ObjectRestore:Completed, s3:ReducedRedundancyLostObject",
        "Filter" : {
          "S3Key" : {
            "Rules" : ["Type: List of FilterRule, ..." ]
          }          
        },
        "Queue" : "*String. The Amazon Resource Name (ARN) of the Amazon SQS queue to which Amazon S3 publishes a message when it detects events of the specified type."
      },
      "TopicConfiguration":{
        "Event" : "*String. The Amazon S3 bucket event about which to send notifications. Available events from s3: s3:ObjectCreated:*, s3:ObjectCreated:Put, s3:ObjectCreated:Post, s3:ObjectCreated:Copy , s3:ObjectCreated:CompleteMultipartUpload, s3:ObjectRemoved:*, s3:ObjectRemoved:Delete, s3:ObjectRemoved:DeleteMarkerCreated, s3:ObjectRestore:Post, s3:ObjectRestore:Completed, s3:ReducedRedundancyLostObject",
        "Filter" : {
          "S3Key" : {
            "Rules" : ["Type: List of FilterRule, ..." ]
          }          
        },
        "Topic" : "*String. The Amazon Resource Name (ARN) of the Amazon SNS topic to which Amazon S3 publishes a message when it detects events of the specified type."
      },
      "PublicAccessBlockConfiguration":{
        "BlockPublicAcls" : "Boolean. Specifies whether Amazon S3 should block public access control lists (ACLs) for this bucket and objects in this bucket. Setting this element to TRUE causes the following behavior: PUT Bucket acl and PUT Object acl calls fail if the specified ACL is public., PUT Object calls fail if the request includes a public ACL.",
        "BlockPublicPolicy" : "Boolean. Specifies whether Amazon S3 should block public bucket policies for this bucket. Setting this element to TRUE causes Amazon S3 to reject calls to PUT Bucket policy if the specified bucket policy allows public access.",
        "IgnorePublicAcls" : "Boolean. Specifies whether Amazon S3 should ignore public ACLs for this bucket and objects in this bucket. Setting this element to TRUE causes Amazon S3 to ignore all public ACLs on this bucket and objects in this bucket.",
        "RestrictPublicBuckets" : "Boolean. Specifies whether Amazon S3 should restrict public bucket policies for this bucket. Setting this element to TRUE restricts access to this bucket to only AWS services and authorized users within this account if the bucket has a public policy. Enabling this setting doesn't affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked."
      },
      "ReplicationConfiguration":{
        "Role" : "*String. The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that Amazon S3 assumes when replicating objects. ",
        "Rules" : ["*Type: List of  ReplicationRule, ..." ]
      },
      "ReplicationRule":{
        "Destination" : {
          "AccessControlTranslation" : {
            "Owner" : "*String. Specifies the replica ownership. Allowed Values: Destination"
          },
          "Account" : "*String. Destination bucket owner account ID. In a cross-account scenario, if you direct Amazon S3 to change replica ownership to the AWS account that owns the destination bucket by specifying the AccessControlTranslation property, this is the account ID of the destination bucket owner. If you specify the AccessControlTranslation property, the Account property is required.",
          "Bucket" : "*String. The Amazon Resource Name (ARN) of the bucket where you want Amazon S3 to store replicas of the object identified by the rule.",
          "EncryptionConfiguration" : {
            "ReplicaKmsKeyID" : "*String. Specifies the AWS KMS Key ID (Key ARN or Alias ARN) for the destination bucket. Amazon S3 uses this key to encrypt replica objects."
          },
          "StorageClass" : "String. Allowed Values: DEEP_ARCHIVE | GLACIER | INTELLIGENT_TIERING | ONEZONE_IA | REDUCED_REDUNDANCY | STANDARD | STANDARD_IA"
        },
        "Id" : "String. A unique identifier for the rule. The maximum value is 255 characters. If you don't specify a value, AWS CloudFormation generates a random ID.",
        "Prefix" : "String. An object keyname prefix that identifies the object or objects to which the rule applies. The maximum prefix length is 1,024 characters. To include all objects in a bucket, specify an empty string.",
        "SourceSelectionCriteria" : {
          "SseKmsEncryptedObjects" : {
            "Status" : "*String. Allowed Values: Disabled | Enabled. Specifies whether Amazon S3 replicates objects created with server-side encryption using an AWS KMS-managed key."
          }          
        },
        "Status" : "*String. Allowed Values: Disabled | Enabled. Specifies whether the rule is enabled or not."
      },
      "VersioningConfiguration":{
        "Status" : "String. Allowed Values: Enabled | Suspended"
      },
      "WebsiteConfiguration":{
        "ErrorDocument" : "String",
        "IndexDocument" : "String",
        "RedirectAllRequestsTo" : {
          "HostName" : "*String. Name of the host where requests are redirected.",
          "Protocol" : "*String. Protocol to use when redirecting requests. The default is the protocol that is used in the original request. Allowed Values: http | https"
        },
        "RoutingRules" : ["Type: List of RoutingRule"]
      },
      "RoutingRule":{
        "RedirectRule" : {
          "HostName" : "String",
          "HttpRedirectCode" : "String. The HTTP redirect code to use on the response. Not required if one of the siblings is present.",
          "Protocol" : "String. Allowed Values: http | https",
          "ReplaceKeyPrefixWith" : "String. The object key prefix to use in the redirect request. For example, to redirect requests for all pages with prefix docs/ (objects in the docs/ folder) to documents/, you can set a condition block with KeyPrefixEquals set to docs/ and in the Redirect set ReplaceKeyPrefixWith to /documents. Not required if one of the siblings is present. Can be present only if ReplaceKeyWith is not provided.",
          "ReplaceKeyWith" : "String. The specific object key to use in the redirect request. For example, redirect request to error.html. Not required if one of the siblings is present. Can be present only if ReplaceKeyPrefixWith is not provided."
        },
        "RoutingRuleCondition" : {
          "HttpErrorCodeReturnedEquals" : "**String. The HTTP error code when the redirect is applied. In the event of an error, if the error code equals this value, then the specified redirect is applied. Required when parent element Condition is specified and sibling KeyPrefixEquals is not specified. If both are specified, then both must be true for the redirect to be applied.",
          "KeyPrefixEquals" : "**String. The object key name prefix when the redirect is applied. For example, to redirect requests for ExamplePage.html, the key prefix will be ExamplePage.html. To redirect request for all pages with the prefix docs/, the key prefix will be /docs, which identifies all objects in the docs/ folder. Required when the parent element Condition is specified and sibling HttpErrorCodeReturnedEquals is not specified. If both conditions are specified, both must be true for the redirect to be applied."
        }        
      }                                                                               
    },
    "AWS::ECR::Repository":{
      "LifecyclePolicy":{
        "LifecyclePolicyText" : "String. The JSON repository policy text to apply to the repository.",
        "RegistryId" : "String. The AWS account ID associated with the registry that contains the repository. If you do not specify a registry, the default registry is assumed."
      }      
    },
    "AWS::CloudFormation::WaitCondition":{
      "CreationPolicy":{
        "ResourceSignal" : {    
          "Count" : "Integer. Default :1 . The number of success signals AWS CloudFormation must receive before it sets the resource status as CREATE_COMPLETE. If the resource receives a failure signal or doesn't receive the specified number of signals before the timeout period expires, the resource creation fails and AWS CloudFormation rolls the stack back.",
          "Timeout" : "The length of time that AWS CloudFormation waits for the number of signals that was specified in the Count property. The timeout period starts after AWS CloudFormation starts creating the resource, and the timeout expires no sooner than the time you specify but can occur shortly thereafter. The maximum time that you can specify is 12 hours. The value must be in ISO8601 duration format, in the form: 'PT#H#M#S', where each # is the number of hours, minutes, and seconds, respectively. For best results, specify a period of time that gives your instances plenty of time to get up and running. A shorter timeout can cause a rollback. Default: PT5M (5 minutes)"
        }
      }
    },
    "AWS::Lambda::Alias":{
      "VersionWeight":{
        "FunctionVersion" : "*String. The name of the second alias",
        "FunctionWeight" : "*Double. The percentage of traffic that's routed to the second alias."
      }      
    },
    "AWS::Lambda::Function":{
      "DeadLetterConfig":{
        "TargetArn" : "String. The Amazon Resource Name (ARN) of an Amazon SQS queue or Amazon SNS topic."
      },
      "Code":{
        "S3Bucket" : "**String. An Amazon S3 bucket in the same AWS Region as your function. The bucket can be in a different AWS account.",
        "S3Key" : "**String. The Amazon S3 key of the deployment package.",
        "S3ObjectVersion" : "**String. For versioned objects, the version of the deployment package object to use.",
        "ZipFile" : "**String. (Node.js and Python) The source code of your Lambda function. If you include your function source inline with this parameter, AWS CloudFormation places it in a file named index and zips it to create a deployment package. For the Handler property, the first part of the handler identifier must be index. For example, index.handler. Your source code can contain up to 4096 characters. For JSON, you must escape quotes and special characters such as newline (\n) with a backslash. f you specify a function that interacts with an AWS CloudFormation custom resource, you don't have to write your own functions to send responses to the custom resource that invoked the function. AWS CloudFormation provides a response module (cfn-response) that simplifies sending responses."
      },
      "Environment":{
        "Variables" : "Map of string. Environment variable key-value pairs."
      },
      "TracingConfig":{
        "Mode" : "String. Allowed Values: Active | PassThrough"
      },
      "VpcConfig":{
        "SecurityGroupIds" : ["List of strings. A list of security group ids"],
        "SubnetIds" : ["list of strings. A list of VPC subnet ids"]
      }
    },
    "AWS::Lambda::LayerVersion":{
      "Content":{
        "S3Bucket" : "*String",
        "S3Key" : "*String",
        "S3ObjectVersion" : "String"
      }      
    },
    "AWS::SecretsManager::RotationSchedule":{
      "RotationRules":{
        "AutomaticallyAfterDays" : "Integer. Specifies the number of days after the previous rotation before Secrets Manager triggers the next automatic rotation."
      }      
    },
    "AWS::SecretsManager::Secret":{
      "GenerateSecretString":{
        "ExcludeCharacters" : "String. A string that includes characters that should not be included in the generated password. The default is that all characters from the included sets can be used. The string can be a minimum length of 0 characters and a maximum length of 7168 characters.",
        "ExcludeLowercase" : "Boolean. Specifies that the generated password should not include lowercase letters. The default if you don't include this switch parameter is False, and the generated password can include lowercase letters.",
        "ExcludeNumbers" : "Boolean. Specifies that the generated password should not include digits. The default if you don't include this switch parameter is False, and the generated password can include digits.",
        "ExcludePunctuation" : "Boolean. Specifies that the generated password should not include punctuation characters. The default if you do not include this switch parameter is that punctuation characters can be included.",
        "ExcludeUppercase" : "Boolean. Specifies that the generated password should not include uppercase letters. The default if you do not include this switch parameter is False, and the generated password can include uppercase letters.",
        "GenerateStringKey" : "String. The JSON key name that's used to add the generated password to the JSON structure specified by the SecretStringTemplateparameter. If you specify this parameter, then you must also specify SecretStringTemplate.",
        "IncludeSpace" : "Boolean. Specifies that the generated password can include the space character. The default if you do not include this switch parameter is False, and the generated password doesn't include space characters.",
        "PasswordLength" : "Integer. The desired length of the generated password. The default value if you do not include this parameter is 32 characters.",
        "RequireEachIncludedType" : "Boolean. Specifies whether the generated password must include at least one of every allowed character type. If you don't include this switch, the default value is True, and the generated password includes at least one of every character type.",
        "SecretStringTemplate" : "String. A properly structured JSON string that the generated password can be added to. If you specify this parameter, then you must also specify GenerateStringKey. That key is combined with the generated random string and inserted into the JSON structure that's specified by this parameter. The merged JSON string is returned as the completed SecretStringof the secret. The default if you don't include this parameter is that the generated random password string is returned by itself, and isn't embeded in a JSON structure."
      }      
    },
    "AWS::CodeBuild::Project":{
      "Artifacts":{
        "ArtifactIdentifier" : "String",
        "EncryptionDisabled" : "Boolean. Set to true if you do not want your output artifacts encrypted. This option is valid only if your artifacts type is Amazon Simple Storage Service (Amazon S3). If this is set with another artifacts type, an invalidInputException is thrown.",
        "Location" : "**String. If type is set to CODEPIPELINE, AWS CodePipeline ignores this value if specified. This is because AWS CodePipeline manages its build output locations instead of AWS CodeBuild. If type is set to NO_ARTIFACTS, this value is ignored if specified, because no build output is produced.If type is set to S3, this is the name of the output bucket. If you specify CODEPIPELINE or NO_ARTIFACTS for the Type property, don't specify this property. For all of the other types, you must specify this property.",
        "Name" : "**String. Along with path and namespaceType, the pattern that AWS CodeBuild uses to name and store the output artifact:",
        "NamespaceType" : "String. Allowed Values: BUILD_ID | NONE. Along with path and name, the pattern that AWS CodeBuild uses to determine the name and location to store the output artifact: If type is set to CODEPIPELINE, AWS CodePipeline ignores this value if specified. This is because AWS CodePipeline manages its build output names instead of AWS CodeBuild. If type is set to NO_ARTIFACTS, this value is ignored if specified, because no build output is produced. If type is set to S3, valid values include:BUILD_ID: Include the build ID in the location of the build output artifact.NONE: Do not include the build ID. This is the default if namespaceType is not specified. ",
        "OverrideArtifactName" : "Boolean. If set to true a name specified in the buildspec file overrides the artifact name. The name specified in a buildspec file is calculated at build time and uses the Shell command language. For example, you can append a date and time to your artifact name so that it is always unique.",
        "Packaging" : "String. Allowed Values: NONE | ZIP. The type of build output artifact to create:",
        "Path" : "String. Along with namespaceType and name, the pattern that AWS CodeBuild uses to name and store the output artifact:",
        "Type" : "*String. Allowed Values: CODEPIPELINE | NO_ARTIFACTS | S3"
      },
      "CloudWatchLogsConfig":{
        "GroupName" : "String",
        "Status" : "*String. Allowed Values: DISABLED | ENABLED. The current status of the logs in Amazon CloudWatch Logs for a build project.",
        "StreamName" : "String. The prefix of the stream name of the Amazon CloudWatch Logs."
      },
      "Environment(CodeBuild)":{
        "Certificate" : "String. The certificate to use with this build project.",
        "ComputeType" : "*String. The type of compute environment. This determines the number of CPU cores and memory the build environment uses. BUILD_GENERAL1_SMALL: Use up to 3 GB memory and 2 vCPUs for builds. BUILD_GENERAL1_MEDIUM: Use up to 7 GB memory and 4 vCPUs for builds. BUILD_GENERAL1_LARGE: Use up to 15 GB memory and 8 vCPUs for builds.",
        "EnvironmentVariables" : ["Type: List of EnvironmentVariable ##"],
        "Image" : "*String. The image tag or image digest that identifies the Docker image to use for this build project. For an image tag: registry/repository:tag. For example, to specify an image with the tag 'latest,' use registry/repository:latest. For an image digest: registry/repository@digest. For example, to specify an image with the digest 'sha256:cbbf2f9a99b47fc460d422812b6a5adff7dfee951d8fa2e4a98caa0382cfbdbf' use registry/repository@sha256:cbbf2f9a99b47fc460d422812b6a5adff7dfee951d8fa2e4a98caa0382cfbdbf.",
        "ImagePullCredentialsType" : "String. Allowed Values: CODEBUILD | SERVICE_ROLE. CODEBUILD specifies that AWS CodeBuild uses its own credentials. This requires that you modify your ECR repository policy to trust AWS CodeBuild's service principal. SERVICE_ROLE specifies that AWS CodeBuild uses your build project's service role.",
        "PrivilegedMode" : "Boolean. Enables running the Docker daemon inside a Docker container. Set to true only if the build project is used to build Docker images. Otherwise, a build that attempts to interact with the Docker daemon fails.",
        "RegistryCredential" : {"info":"Type:RegistryCredential. specifies information about credentials that provide access to a private Docker registry.##"},
        "Type" : "*String. Allowed Values: LINUX_CONTAINER | WINDOWS_CONTAINER"
      },
      "EnvironmentVariable":{
        "Name" : "*String. The name or key of the environment variable.",
        "Type" : "String. Allowed Values: PARAMETER_STORE | PLAINTEXT",
        "Value" : "*String. The value of the environment variable. We strongly discourage the use of environment variables to store sensitive values, especially AWS secret key IDs and secret access keys. Environment variables can be displayed in plain text using the AWS CodeBuild console and the AWS Command Line Interface (AWS CLI)."
      },
      "GitSubmodulesConfig":{
        "FetchSubmodules" : "*Boolean. Set to true to fetch Git submodules for your AWS CodeBuild build project."
      },
      "LogsConfig":{
        "CloudWatchLogs" : "Type: CloudWatchLogsConfig",
        "S3Logs" : "Type: S3LogsConfig"
      },
      "ProjectCache":{
        "Location" : "String. NO_CACHE or LOCAL: This value is ignored. S3: This is the S3 bucket name/prefix.",
        "Modes" : ["Type: List of strings. Allowed Values: LOCAL_SOURCE_CACHE  || LOCAL_DOCKER_LAYER_CACHE  || LOCAL_CUSTOM_CACHE"],
        "Type" : "*String. Allowed Values: LOCAL | NO_CACHE | S3. NO_CACHE: The build project does not use any cache. S3: The build project reads and writes from and to S3.LOCAL: The build project stores a cache locally on a build host that is only available to that build host."
      },
      "ProjectSourceVersion":{
        "SourceIdentifier" : "*String",
        "SourceVersion" : "String"
      },
      "ProjectTriggers":{
        "FilterGroups" : ["Type: List of WebhookFilter ##" ],
        "Webhook" : "Boolean. Specifies whether or not to begin automatically rebuilding the source code every time a code change is pushed to the repository."
      },
      "WebhookFilter":{
        "ExcludeMatchedPattern" : "Boolean. Used to indicate that the pattern determines which webhook events do not trigger a build. If true, then a webhook event that does not match the pattern triggers a build. If false, then a webhook event that matches the pattern triggers a build.",
        "Pattern" : "*String. For a WebHookFilter that uses EVENT type, a comma-separated string that specifies one or more events. For example, the webhook filter PUSH, PULL_REQUEST_CREATED, PULL_REQUEST_UPDATED allows all push, pull request created, and pull request updated events to trigger a build. For a WebHookFilter that uses any of the other filter types, a regular expression pattern. For example, a WebHookFilter that uses HEAD_REF for its type and the pattern ^refs/heads/ triggers a build when the head reference is a branch with a reference name refs/heads/branch-name.",
        "Type" : "*String. Allowed Values: ACTOR_ACCOUNT_ID | BASE_REF | EVENT | FILE_PATH | HEAD_REF"
      },
      "RegistryCredential":{
        "Credential" : "*String. The Amazon Resource Name (ARN) or name of credentials created using AWS Secrets Manager.",
        "CredentialProvider" : "*String. Allowed Values: SECRETS_MANAGER. The service that created the credentials to access a private Docker registry. The valid value, SECRETS_MANAGER, is for AWS Secrets Manager."
      },
      "S3LogsConfig":{
        "EncryptionDisabled" : "Boolean. Set to true if you do not want your S3 build log output encrypted. By default S3 build logs are encrypted.",
        "Location" : "String. The ARN of an S3 bucket and the path prefix for S3 logs. If your Amazon S3 bucket name is my-bucket, and your path prefix is build-log, then acceptable formats are my-bucket/build-log or arn:aws:s3:::my-bucket/build-log.",
        "Status" : "*String. Allowed Values: DISABLED | ENABLED"
      },
      "Source":{
        "Auth" : {
          "Resource" : "String. The resource value that applies to the specified authorization type.",
          "Type" : "*String. The authorization type to use. The only valid value is OAUTH, which represents the OAuth authorization type."
        },
        "BuildSpec" : "String. The build specification for the project. If this value is not provided, then the source code must contain a buildspec file named buildspec.yml at the root level. If this value is provided, it can be either a single string containing the entire build specification, or the path to an alternate buildspec file relative to the value of the built-in environment variable CODEBUILD_SRC_DIR. The alternate buildspec file can have a name other than buildspec.yml, for example myspec.yml or build_spec_qa.yml or similar.",
        "GitCloneDepth" : "Integer. The depth of history to download. Minimum value is 0. If this value is 0, greater than 25, or not provided, then the full history is downloaded with each build project. If your source type is Amazon S3, this value is not supported.",
        "GitSubmodulesConfig" : {
          "FetchSubmodules" : "*Boolean. Set to true to fetch Git submodules for your AWS CodeBuild build project."
        },
        "InsecureSsl" : "Boolean. This is used with GitHub Enterprise only. Set to true to ignore SSL warnings while connecting to your GitHub Enterprise project repository. The default value is false. InsecureSsl should be used for testing purposes only. It should not be used in a production environment.",
        "Location" : "String. Information about the location of the source code to be built. ",
        "ReportBuildStatus" : "Boolean. Set to true to report the status of a build's start and finish to your source provider. This option is valid only when your source provider is GitHub, GitHub Enterprise, or Bitbucket. If this is set and you use a different source provider, an invalidInputException is thrown.",
        "SourceIdentifier" : "String",
        "Type" : "String. Allowed Values: BITBUCKET | CODECOMMIT | CODEPIPELINE | GITHUB | GITHUB_ENTERPRISE | NO_SOURCE | S3"
      },
      "VpcConfig(CodeBuild)":{
        "SecurityGroupIds" : ["List of Strings." ],
        "Subnets" : [ "List of strings." ],
        "VpcId" : "String. The id of the vpc."
      }
    }    
  }    

}


