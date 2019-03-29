import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ResourceDataService {

  constructor() { }

  comProp:Object={
    "AWS::EC2::Instance":{
      "Metadata":{
        "AWS::CloudFormation::Init" : {
          "configset":"",
          "config" : "",
          "packages" : "",
          "groups" : "",
          "users" : "",
          "sources" : "",
          "files" : "",
          "commands" : "",
          "services" : "",
        }
      },
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
        "AutoScalingCreationPolicy":{
          "MinSuccessfulInstancesPercent":"Specifies the percentage of instances in an Auto Scaling replacement update that must signal success for the update to succeed. You can specify a value from 0 to 100. AWS CloudFormation rounds to the nearest tenth of a percent. For example, if you update five instances with a minimum successful percentage of 50, three instances must signal success. If an instance doesn't send a signal within the time specified by the Timeout property, AWS CloudFormation assumes that the instance wasn't created. Default: 100"
        },
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
      }
    }
  }    

}


