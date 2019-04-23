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
      "BlockDeviceMapping":{
        "DeviceName":"*The name of the device within Amazon EC2. Recommended for EBS Volumes: /dev/sd[f-p], /dev/sd[f-p][1-6](only for paravirtual).",
        "Ebs":{
          "DeleteOnTermination":"Boolean. Determines whether to delete the volume on instance termination. The default value is true.",
          "Encrypted":"Boolean. Indicates whether the volume is encrypted. Encrypted Amazon EBS volumes can only be attached to instance types that support Amazon EBS encryption. Volumes that are created from encrypted snapshots are automatically encrypted. You cannot create an encrypted volume from an unencrypted snapshot or vice versa. If your AMI uses encrypted volumes, you can only launch the AMI on supported instance types.",
          "Iops":"**Number. The number of I/O operations per second (IOPS) that the volume supports. This can be an integer from 100 – 20000.Required when the volume type is io1; not used with other volume types.",
          "SnapshotId":"**If you specify both SnapshotId and VolumeSize, VolumeSize must be equal or greater than the size of the snapshot.",
          "VolumeSize":"**Integer. The size of the volume, in GiBs.Constraints: 1-16,384 for gp2, 4-16,384 for io1, 500-16,384 for st1, 500-16,384 for sc1, and 1-1,024 for standard. If you specify a snapshot, the volume size must be equal to or larger than the snapshot size.Default: If you're creating the volume from a snapshot and don't specify a volume size, the default is the snapshot size.",
          "VolumeType":"The volume type. If you set the type to io1, you must also set the Iops property. The volume type. This can be gp2 for General Purpose SSD, io1 for Provisioned IOPS SSD, st1 for Throughput Optimized HDD, sc1 for Cold HDD, or standard for Magnetic volumes.Defaults: If no volume type is specified, the default is standard in us-east-1, eu-west-1, eu-central-1, us-west-2, us-west-1, sa-east-1, ap-northeast-1, ap-northeast-2, ap-southeast-1, ap-southeast-2, ap-south-1, us-gov-west-1, and cn-north-1. In all other Regions, EBS defaults to gp2. standard | io1 | gp2 | sc1 | st1"
        },
        "NoDevice":"Boolean. This property can be used to unmap a defined device.",
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
      "LaunchTemplateSpecification":{
        "LaunchTemplateId":"**The ID of the launch template.You must specify either LaunchTemplateId or LaunchTemplateName, but not both.",
        "LaunchTemplateName":"**You must specify either LaunchTemplateId or LaunchTemplateName, but not both",
        "Version":"*The version number. AWS CloudFormation does not support specifying $Latest, or $Default for the template version number."
      },
      "LicenseSpecification":{
        "LicenseConfigurationArn":"*The Amazon Resource Name (ARN) of license configuration to associate with the instance."
      },
      "MountPoint":{
        "Device":"*How the device is exposed to the instance (such as /dev/sdh, or xvdh).",
        "VolumeId":"*The ID of the Amazon EBS volume. The volume and instance must be within the same Availability Zone and the instance must be running."
      },
      "NetworkInterface":{
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
      "CreationPolicy":{
        "ResourceSignal" : {    
          "Count" : "Integer. Default :1 . The number of success signals AWS CloudFormation must receive before it sets the resource status as CREATE_COMPLETE. If the resource receives a failure signal or doesn't receive the specified number of signals before the timeout period expires, the resource creation fails and AWS CloudFormation rolls the stack back.",
          "Timeout" : "The length of time that AWS CloudFormation waits for the number of signals that was specified in the Count property. The timeout period starts after AWS CloudFormation starts creating the resource, and the timeout expires no sooner than the time you specify but can occur shortly thereafter. The maximum time that you can specify is 12 hours. The value must be in ISO8601 duration format, in the form: 'PT#H#M#S', where each # is the number of hours, minutes, and seconds, respectively. For best results, specify a period of time that gives your instances plenty of time to get up and running. A shorter timeout can cause a rollback. Default: PT5M (5 minutes)"
        }
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
    }
  }    

}


