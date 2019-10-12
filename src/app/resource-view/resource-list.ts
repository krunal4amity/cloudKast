import { SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER } from 'constants';

export interface SubResource{
    resourcename:string,
    resourcesyntax:string,
    resourcecount:number
}

export interface AWSResource{
    servicename:string,
    subresource:SubResource[]
}

export interface ResourceSyntax{
    Type:string,
    Properties:Object
}

export var RESOURCE_DATA:AWSResource[]=[
    {
        servicename:"EC2",
        subresource:[
            {
                resourcename:"CustomerGateway",
                resourcesyntax:"AWS::EC2::CustomerGateway",
                resourcecount:0
            },
            {
                resourcename:"DHCPOptions",
                resourcesyntax:"AWS::EC2::DHCPOptions",
                resourcecount:0
            },
            {
                resourcename:"EC2Fleet",
                resourcesyntax:"AWS::EC2::EC2Fleet",
                resourcecount:0
            },
            {
                resourcename:"EgressOnlyInternetGateway",
                resourcesyntax:"AWS::EC2::EgressOnlyInternetGateway",
                resourcecount:0
            },
            {
                resourcename:"EIP",
                resourcesyntax:"AWS::EC2::EIP",
                resourcecount:0
            },
            {
                resourcename:"EIPAssociation",
                resourcesyntax:"AWS::EC2::EIPAssociation",
                resourcecount:0
            },
            {
                resourcename:"FlowLog",
                resourcesyntax:"AWS::EC2::FlowLog",
                resourcecount:0
            },
            {
                resourcename:"Host",
                resourcesyntax:"AWS::EC2::Host",
                resourcecount:0
            },
            {
                resourcename:"Instance",
                resourcesyntax:"AWS::EC2::Instance",
                resourcecount:0
            },
            {
                resourcename:"InternetGateway",
                resourcesyntax:"AWS::EC2::InternetGateway",
                resourcecount:0
            },
            {
                resourcename:"LaunchTemplate",
                resourcesyntax:"AWS::EC2::LaunchTemplate",
                resourcecount:0
            },
            {
                resourcename:"NatGateway",
                resourcesyntax:"AWS::EC2::NatGateway",
                resourcecount:0
            },
            {
                resourcename:"NetworkACL",
                resourcesyntax:"AWS::EC2::NetworkAcl",
                resourcecount:0
            },
            {
                resourcename:"NetworkAclEntry",
                resourcesyntax:"AWS::EC2::NetworkAclEntry",
                resourcecount:0
            },
            {
                resourcename:"NetworkInterface",
                resourcesyntax:"AWS::EC2::NetworkInterface",
                resourcecount:0
            },
            {
                resourcename:"NetworkInterfaceAttachment",
                resourcesyntax:"AWS::EC2::NetworkInterfaceAttachment",
                resourcecount:0
            },
            {
                resourcename:"NetworkInterfacePermission",
                resourcesyntax:"AWS::EC2::NetworkInterfacePermission",
                resourcecount:0
            },
            {
                resourcename:"PlacementGroup",
                resourcesyntax:"AWS::EC2::PlacementGroup",
                resourcecount:0
            },
            {
                resourcename:"Route",
                resourcesyntax:"AWS::EC2::Route",
                resourcecount:0
            },
            {
                resourcename:"RouteTable",
                resourcesyntax:"AWS::EC2::RouteTable",
                resourcecount:0
            },
            {
                resourcename:"SecurityGroup",
                resourcesyntax:"AWS::EC2::SecurityGroup",
                resourcecount:0
            },
            {
                resourcename:"SecurityGroupEgress",
                resourcesyntax:"AWS::EC2::SecurityGroupEgress",
                resourcecount:0
            },
            {
                resourcename:"SecurityGroupIngress",
                resourcesyntax:"AWS::EC2::SecurityGroupIngress",
                resourcecount:0
            },
            {
                resourcename:"SpotFleet",
                resourcesyntax:"AWS::EC2::SpotFleet",
                resourcecount:0
            },
            {
                resourcename:"Subnet",
                resourcesyntax:"AWS::EC2::Subnet",
                resourcecount:0
            },
            {
                resourcename:"SubnetCidrBlock",
                resourcesyntax:"AWS::EC2::SubnetCidrBlock",
                resourcecount:0
            },
            {
                resourcename:"SubnetNetworkAclAssociation",
                resourcesyntax:"AWS::EC2::SubnetNetworkAclAssociation",
                resourcecount:0
            },
            {
                resourcename:"SubnetRouteTableAssociation",
                resourcesyntax:"AWS::EC2::SubnetRouteTableAssociation",
                resourcecount:0
            },
            {
                resourcename:"TransitGateway",
                resourcesyntax:"AWS::EC2::TransitGateway",
                resourcecount:0
            },
            {
                resourcename:"TransitGatewayAttachment",
                resourcesyntax:"AWS::EC2::TransitGatewayAttachment",
                resourcecount:0
            },
            {
                resourcename:"TransitGatewayRoute",
                resourcesyntax:"AWS::EC2::TransitGatewayRoute",
                resourcecount:0
            },
            {
                resourcename:"TransitGatewayRouteTable",
                resourcesyntax:"AWS::EC2::TransitGatewayRouteTable",
                resourcecount:0
            },
            {
                resourcename:"TransitGatewayRouteTableAssociation",
                resourcesyntax:"AWS::EC2::TransitGatewayRouteTableAssociation",
                resourcecount:0
            },
            {
                resourcename:"TransitGatewayRouteTablePropagation",
                resourcesyntax:"AWS::EC2::TransitGatewayRouteTablePropagation",
                resourcecount:0
            },
            {
                resourcename:"Volume",
                resourcesyntax:"AWS::EC2::Volume",
                resourcecount:0
            },
            {
                resourcename:"VolumeAttachment",
                resourcesyntax:"AWS::EC2::VolumeAttachment",
                resourcecount:0
            },
            {
                resourcename:"VPC",
                resourcesyntax:"AWS::EC2::VPC",
                resourcecount:0
            },
            {
                resourcename:"VPCCidrBlock",
                resourcesyntax:"AWS::EC2::VPCCidrBlock",
                resourcecount:0
            },
            {
                resourcename:"VPCDHCPOptionsAssociation",
                resourcesyntax:"AWS::EC2::VPCDHCPOptionsAssociation",
                resourcecount:0
            },
            {
                resourcename:"VPCEndpoint",
                resourcesyntax:"AWS::EC2::VPCEndpoint",
                resourcecount:0
            },
            {
                resourcename:"VPCEndpointConnectionNotification",
                resourcesyntax:"AWS::EC2::VPCEndpointConnectionNotification",
                resourcecount:0
            },
            {
                resourcename:"VPCEndpointService",
                resourcesyntax:"AWS::EC2::VPCEndpointService",
                resourcecount:0
            },
            {
                resourcename:"VPCEndpointServicePermissions",
                resourcesyntax:"AWS::EC2::VPCEndpointServicePermissions",
                resourcecount: 0
            },
            {
                resourcename:"VPCGatewayAttachment",
                resourcesyntax:"AWS::EC2::VPCGatewayAttachment",
                resourcecount:0
            },
            {
                resourcename:"VPCPeeringConnection",
                resourcesyntax:"AWS::EC2::VPCPeeringConnection",
                resourcecount:0
            },
            {
                resourcename:"VPNConnection",
                resourcesyntax:"AWS::EC2::VPNConnection",
                resourcecount:0
            },
            {
                resourcename:"VPNConnectionRoute",
                resourcesyntax:"AWS::EC2::VPNConnectionRoute",
                resourcecount:0
            },
            {
                resourcename:"VPNGateway",
                resourcesyntax:"AWS::EC2::VPNGateway",
                resourcecount:0
            },
            {
                resourcename:"VPNGatewayRoutePropagation",
                resourcesyntax:"AWS::EC2::VPNGatewayRoutePropagation",
                resourcecount:0
            }
        ]
    },
    {
        servicename:"Route53",
        subresource:[
            {
                resourcename:"HealthCheck",
                resourcesyntax:"AWS::Route53::HealthCheck",
                resourcecount:0
            },
            {
                resourcename:"HostedZone",
                resourcesyntax:"AWS::Route53::HostedZone",
                resourcecount:0
            },
            {
                resourcename:"RecordSet",
                resourcesyntax:"AWS::Route53::RecordSet",
                resourcecount:0
            },
            {
                resourcename:"RecordSetGroup",
                resourcesyntax:"AWS::Route53::RecordSetGroup",
                resourcecount:0
            }
        ]
    },
    {
        servicename:"Route53Resolver",
        subresource:[
            {
                resourcename:"ResolverEndpoint",
                resourcesyntax:"AWS::Route53Resolver::ResolverEndpoint",
                resourcecount:0
            },
            {
                resourcename:"ResolverRule",
                resourcesyntax:"AWS::Route53Resolver::ResolverRule",
                resourcecount:0
            },
            {
                resourcename:"ResolverRuleAssociation",
                resourcesyntax:"AWS::Route53Resolver::ResolverRuleAssociation",
                resourcecount:0
            }
        ]
    },
    {
        servicename:"IAM",
        subresource:[
            {
                resourcename:"AccessKey",
                resourcesyntax:"AWS::IAM::AccessKey",
                resourcecount:0
            },
            {
                resourcename:"Group",
                resourcesyntax:"AWS::IAM::Group",
                resourcecount:0
            },
            {
                resourcename:"InstanceProfile",
                resourcesyntax:"AWS::IAM::InstanceProfile",
                resourcecount:0
            },
            {
                resourcename:"ManagedPolicy",
                resourcesyntax:"AWS::IAM::ManagedPolicy",
                resourcecount:0
            },
            {
                resourcename:"Policy",
                resourcesyntax:"AWS::IAM::Policy",
                resourcecount:0
            },
            {
                resourcename:"Role",
                resourcesyntax:"AWS::IAM::Role",
                resourcecount:0
            },
            {
                resourcename:"ServiceLinkedRole",
                resourcesyntax:"AWS::IAM::ServiceLinkedRole",
                resourcecount:0
            },
            {
                resourcename:"User",
                resourcesyntax:"AWS::IAM::User",
                resourcecount:0
            },
            {
                resourcename:"UserToGroupAddition",
                resourcesyntax:"AWS::IAM::UserToGroupAddition",
                resourcecount:0
            }
        ]
    },
    {
        servicename:"AutoScaling",
        subresource:[
            {
                resourcename:"AutoScalingGroup",
                resourcesyntax:"AWS::AutoScaling::AutoScalingGroup",
                resourcecount:0
            },
            {
                resourcename:"LaunchConfiguration",
                resourcesyntax:"AWS::AutoScaling::LaunchConfiguration",
                resourcecount:0
            },
            {
                resourcename:"LifecycleHook",
                resourcesyntax:"AWS::AutoScaling::LifecycleHook",
                resourcecount:0
            },
            {
                resourcename:"ScalingPolicy",
                resourcesyntax:"AWS::AutoScaling::ScalingPolicy",
                resourcecount:0
            },
            {
                resourcename:"ScheduledAction",
                resourcesyntax:"AWS::AutoScaling::ScheduledAction",
                resourcecount:0
            }
        ]
    },
    {
        servicename:"ElasticLoadBalancingV2",
        subresource:[
            {
                resourcename:"Listener",
                resourcesyntax:"AWS::ElasticLoadBalancingV2::Listener",
                resourcecount:0
            },
            {
                resourcename:"ListenerCertificate",
                resourcesyntax:"AWS::ElasticLoadBalancingV2::ListenerCertificate",
                resourcecount:0
            },
            {
                resourcename:"ListenerRule",
                resourcesyntax:"AWS::ElasticLoadBalancingV2::ListenerRule",
                resourcecount:0
            },
            {
                resourcename:"LoadBalancer",
                resourcesyntax:"AWS::ElasticLoadBalancingV2::LoadBalancer",
                resourcecount:0
            },
            {
                resourcename:"TargetGroup",
                resourcesyntax:"AWS::ElasticLoadBalancingV2::TargetGroup",
                resourcecount:0
            }
        ]
    },
    {
        servicename:"SQS",
        subresource:[
            {
                resourcename:"Queue",
                resourcesyntax:"AWS::SQS::Queue",
                resourcecount:0
            },
            {
                resourcename:"QueuePolicy",
                resourcesyntax:"AWS::SQS::QueuePolicy",
                resourcecount:0
            }
        ]
    },
    {
        servicename:"SNS",
        subresource:[
            {
                resourcename:"Subscription",
                resourcesyntax:"AWS::SNS::Subscription",
                resourcecount:0
            },
            {
                resourcename:"Topic",
                resourcesyntax:"AWS::SNS::Topic",
                resourcecount:0
            },
            {
                resourcename:"TopicPolicy",
                resourcesyntax:"AWS::SNS::TopicPolicy",
                resourcecount:0
            }
        ]
    },
    {
        servicename:"Certificate Manager",
        subresource:[
            {
                resourcename:"Certificate",
                resourcesyntax:"AWS::CertificateManager::Certificate",
                resourcecount:0
            }
        ]
    },
    {
        servicename:"DynamoDB",
        subresource:[
            {
                resourcename:"Table",
                resourcesyntax:"AWS::DynamoDB::Table",
                resourcecount:0
            }
        ]
    },
    {
        servicename:"ECS",
        subresource:[
            {
                resourcename:"Cluster",
                resourcesyntax:"AWS::ECS::Cluster",
                resourcecount:0
            },
            {
                resourcename:"Service",
                resourcesyntax:"AWS::ECS::Service",
                resourcecount:0
            },
            {
                resourcename:"TaskDefinition",
                resourcesyntax:"AWS::ECS::TaskDefinition",
                resourcecount:0
            }
        ]
    },
    {
        servicename:"CloudTrail",
        subresource:[
            {
                resourcename:"Trail",
                resourcesyntax:"AWS::CloudTrail::Trail",
                resourcecount:0
            }
        ]
    },
    {
        servicename:"CloudWatch",
        subresource:[
            {
                resourcename:"Alarm",
                resourcesyntax:"AWS::CloudWatch::Alarm",
                resourcecount:0
            },
            {
                resourcename:"Dashboard",
                resourcesyntax:"AWS::CloudWatch::Dashboard",
                resourcecount:0
            }
        ]
    },
    {
        servicename:"CloudWatchLogs",
        subresource:[
            {
                resourcename:"Destination",
                resourcesyntax:"AWS::Logs::Destination",
                resourcecount:0
            },
            {
                resourcename:"LogGroup",
                resourcesyntax:"AWS::Logs::LogGroup",
                resourcecount:0
            },
            {
                resourcename:"LogStream",
                resourcesyntax:"AWS::Logs::LogStream",
                resourcecount:0
            },
            {
                resourcename:"MetricFilter",
                resourcesyntax:"AWS::Logs::MetricFilter",
                resourcecount:0
            },
            {
                resourcename:"SubscriptionFilter",
                resourcesyntax:"AWS::Logs::SubscriptionFilter",
                resourcecount:0
            }
        ]
    },
    {
        servicename:"CloudWatchEvents",
        subresource:[
            {
                resourcename:"EventBusPolicy",
                resourcesyntax:"AWS::Events::EventBusPolicy",
                resourcecount:0
            },
            {
                resourcename:"Rule",
                resourcesyntax:"AWS::Events::Rule",
                resourcecount:0
            }
        ]
    },
    {
        servicename:"EKS",
        subresource:[
            {
                resourcename:"Cluster",
                resourcesyntax:"AWS::EKS::Cluster",
                resourcecount:0
            }
        ]
    },
    {
        servicename:"EFS",
        subresource:[
            {
                resourcename:"FileSystem",
                resourcesyntax:"AWS::EFS::FileSystem",
                resourcecount:0
            },
            {
                resourcename:"MountTarget",
                resourcesyntax:"AWS::EFS::MountTarget",
                resourcecount:0
            }
        ]
    },
    {
        servicename:"S3",
        subresource:[
            {
                resourcename:"Bucket",
                resourcesyntax:"AWS::S3::Bucket",
                resourcecount:0
            },
            {
                resourcename:"BucketPolicy",
                resourcesyntax:"AWS::S3::BucketPolicy",
                resourcecount:0
            }
        ]
    },
    {
        servicename:"ECR",
        subresource:[
            {
                resourcename:"Repository",
                resourcesyntax:"AWS::ECR::Repository",
                resourcecount:0
            }
        ]
    },
    {
        servicename:"CloudFormation",
        subresource:[
            {
                resourcename:"CustomResource",
                resourcesyntax:"AWS::CloudFormation::CustomResource",
                resourcecount:0
            },
            {
                resourcename:"Macro",
                resourcesyntax:"AWS::CloudFormation::Macro",
                resourcecount:0
            },
            {
                resourcename:"Stack",
                resourcesyntax:"AWS::CloudFormation::Stack",
                resourcecount:0
            },
            {
                resourcename:"WaitCondition",
                resourcesyntax:"AWS::CloudFormation::WaitCondition",
                resourcecount:0
            },
            {
                resourcename:"WaitConditionHandle",
                resourcesyntax:"AWS::CloudFormation::WaitConditionHandle",
                resourcecount:0
            }
        ]
    },
    {
        servicename:"Lambda",
        subresource:[
            {
                resourcename:"Alias",
                resourcesyntax:"AWS::Lambda::Alias",
                resourcecount:0
            },
            {
                resourcename:"EventSourceMapping",
                resourcesyntax:"AWS::Lambda::EventSourceMapping",
                resourcecount:0
            },
            {
                resourcename:"Function",
                resourcesyntax:"AWS::Lambda::Function",
                resourcecount:0
            },
            {
                resourcename:"LayerVersion",
                resourcesyntax:"AWS::Lambda::LayerVersion",
                resourcecount:0
            },
            {
                resourcename:"LayerVersionPermission",
                resourcesyntax:"AWS::Lambda::LayerVersionPermission",
                resourcecount:0
            },
            {
                resourcename:"Permission",
                resourcesyntax:"AWS::Lambda::Permission",
                resourcecount:0
            },
            {
                resourcename:"Version",
                resourcesyntax:"AWS::Lambda::Version",
                resourcecount:0
            }
        ]
    },
    {
        servicename:"RAM",
        subresource:[
            {
                resourcename:"ResourceShare",
                resourcesyntax:"AWS::RAM::ResourceShare",
                resourcecount:0
            }
        ]
    },
    {
        servicename:"SecretsManager",
        subresource:[
            {
                resourcename:"ResourcePolicy",
                resourcesyntax:"AWS::SecretsManager::ResourcePolicy",
                resourcecount:0
            },
            {
                resourcename:"RotationSchedule",
                resourcesyntax:"AWS::SecretsManager::RotationSchedule",
                resourcecount:0
            },
            {
                resourcename:"Secret",
                resourcesyntax:"AWS::SecretsManager::Secret",
                resourcecount:0
            },
            {
                resourcename:"SecretTargetAttachment",
                resourcesyntax:"AWS::SecretsManager::SecretTargetAttachment",
                resourcecount:0
            }
        ]
    },
    {
        servicename:"CodeBuild",
        subresource:[
            {
                resourcename:"Project",
                resourcesyntax:"AWS::CodeBuild::Project",
                resourcecount:0
            },
            {
                resourcename:"SourceCredential",
                resourcesyntax:"AWS::CodeBuild::SourceCredential",
                resourcecount:0
            }
        ]
    },
    {
        servicename:"MSK",
        subresource:[
            {
                resourcename:"Cluster",
                resourcesyntax:"AWS::MSK::Cluster",
                resourcecount:0
            }
        ]
    }
]