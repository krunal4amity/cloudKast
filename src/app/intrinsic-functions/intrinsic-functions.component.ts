import { Component, OnInit } from '@angular/core';
import { JsonResultService } from '../json-result.service';
import { UsefulUtilsService } from '../useful-utils.service';
import {KeysPipePipe} from '../keys-pipe.pipe'
//import {ResAttributes} from './ResAttributes'


@Component({
  selector: 'app-intrinsic-functions',
  templateUrl: './intrinsic-functions.component.html',
  styleUrls: ['./intrinsic-functions.component.css']
})
export class IntrinsicFunctionsComponent implements OnInit {

  
  constructor(public jsonresult:JsonResultService, public utility:UsefulUtilsService) { }

  funcobj={};
  fnjoinArray=[];
  fnjoinCount=0;
  fnselectArray=[];
  fnselectCount=0;
  fnandArray=[];
  fnandCount=0;
  fnimportvalueTip="The intrinsic function Fn::ImportValue returns the value of an output exported by another stack.You can use the following functions in the Fn::ImportValue function. The value of these functions can't depend on a resource. Fn::Base64, Fn::FindInMap, Fn::If, Fn::Join, Fn:Select, Fn::Split, Fn::Sub, Ref";
  fnjoinTip="e.g. The following example returns: a:b:c. \"Fn::Join\" : [ \":\", [ \"a\", \"b\", \"c\" ] ]. For the Fn::Join delimiter, you cannot use any functions. You must specify a string value. For the Fn::Join list of values, you can use the following functions: Fn::Base64, Fn::FindInMap, Fn::GetAtt, Fn::GetAZs, Fn::If, Fn::ImportValue, Fn::Join, Fn::Split, Fn::Select, Fn::Sub, Ref";
  fnselectTip="e.g. The following example returns: 'grapes'. { \"Fn::Select\" : [ \"1\", [ \"apples\", \"grapes\", \"oranges\", \"mangoes\" ]]}. For the Fn::Select index value, you can use the Ref and Fn::FindInMap functions. For the Fn::Select list of objects, you can use the following functions: Fn::FindInMap, Fn::GetAtt, Fn::GetAZs, Fn::If, Fn::Split, Ref";
  fnsplitTip="e.g. The following example splits a string at each vertical bar (|). The function returns [\"a\", \"b\", \"c\"]. { \"Fn::Split\" : [ \"|\" , \"a|b|c\" ] }. If you split a string with consecutive delimiters, the resulting list will include an empty string. For the Fn::Split delimiter, you cannot use any functions. You must specify a string value. For the Fn::Split list of values, you can use the following functions: Fn::Base64,Fn::FindInMap,Fn::GetAtt,Fn::GetAZs,Fn::If,Fn::ImportValue,Fn::Join,Fn::Select,Fn::Sub,Ref"
  fnsubTip="The intrinsic function Fn::Sub substitutes variables in an input string with values that you specify. e.g. { \"Fn::Sub\": [ \"www.${Domain}\", { \"Domain\": {\"Ref\" : \"RootDomainName\" }} ]}. For the String parameter, you cannot use any functions. You must specify a string value.For the VarName and VarValue parameters, you can use the following functions: Fn::Base64, Fn::FindInMap, Fn::GetAtt,Fn::GetAZs,Fn::If,Fn::ImportValue,Fn::Join,Fn::Select,Ref"
  
  ResAttributes = {
    "AWS::EC2::Instance":["AvailabilityZone","PrivateDnsName","PublicDnsName","PrivateIp","PublicIp"],
    "AWS::DynamoDB::Table":["Arn","StreamArn"],
    "AWS::EC2::CapacityReservation":["AvailabilityZone","AvailableInstanceCount","InstanceType", "Tenancy", "TotalInstanceCount"],
    "AWS::EC2::EIP":["AllocationId"],
    "AWS::EC2::NetworkInterface":["PrimaryPrivateIpAddress","SecondaryPrivateIpAddresses"],
    "AWS::EC2::SecurityGroup":["VpcId","GroupId"],
    "AWS::EC2::Subnet":["AvailabilityZone","Ipv6CidrBlocks","NetworkAclAssociationId","VpcId"],
    "AWS::EC2::SubnetNetworkAclAssociation":["AssociationId"],
    "AWS::EC2::VPC":["CidrBlock","CidrBlockAssociations","DefaultNetworkAcl","DefaultSecurityGroup","Ipv6CidrBlocks"],
    "AWS::AmazonMQ::Broker":["Arn","ConfigurationId","ConfigurationRevision"],
    "AWS::AmazonMQ::Configuration":["Arn","Revision"],
    "AWS::ApiGateway::DomainName":["DistributionDomainName"],
    "AWS::ApiGateway::RestApi":["RootResourceId"],
    "AWS::ApiGatewayV2::DomainName":["RegionalDomainName","RegionalHostedZoneId"],
    "AWS::AppMesh::Mesh":["Arn","MeshName","Uid"],
    "AWS::AppMesh::Route":["Arn","MeshName","RouteName","Uid","VirtualRouterName"],
    "AWS::AppMesh::VirtualNode":["Arn","MeshName","Uid","VirtualNodeName"],
    "AWS::AppMesh::VirtualRouter":["Arn","MeshName","Uid","VirtualRouterName"],
    "AWS::AppMesh::VirtualService":["Arn","MeshName","Uid","VirtualServiceName"],
    "AWS::AppStream::ImageBuilder":["StreamingUrl"],
    "AWS::Cloud9::EnvironmentEC2":["Arn","Name"],
    "AWS::CloudFormation::WaitCondition":["Data"],
    "AWS::CloudFormation::Stack":["Outputs.NestedStackOutputName"],
    "AWS::CloudFront::Distribution":["DomainName"],
    "AWS::CloudFront::CloudFrontOriginAccessIdentity":["S3CanonicalUserId"],
    "AWS::CloudTrail::Trail":["Arn","SnsTopicArn"],
    "AWS::CloudWatch::Alarm":["Arn"],
    "AWS::CodeBuild::Project":["Arn"],
    "AWS::CodeCommit::Repository":["Arn","CloneUrlHttp","CloneUrlSsh","Name"],
    "AWS::CodePipeline::Pipeline":["Version"],
    "AWS::CodePipeline::Webhook":["Url"],
    "AWS::Config::ConfigRule":["Arn","ConfigRuleId","Compliance.Type"],
    "AWS::DAX::Cluster":["Arn","ClusterDiscoveryEndpoint"],
    "AWS::DirectoryService::MicrosoftAD":["Alias","DnsIpAddresses"],
    "AWS::DirectoryService::SimpleAD":["Alias","DnsIpAddresses"],
    "AWS::DLM::LifecyclePolicy":["Arn"],
    "AWS::DocDB::DBCluster":["ClusterResourceId","Endpoint","ReadEndpoint","Port"],
    "AWS::DocDB::DBInstance":["Endpoint","Port"],
    "AWS::ECR::Repository":["Arn"],
    "AWS::ECS::Cluster":["Arn"],
    "AWS::ECS::Service":["Name"],
    "AWS::EKS::Cluster":["Arn","CertificateAuthorityData","Endpoint"],
    "AWS::ElastiCache::CacheCluster":["ConfigurationEndpoint.Address","ConfigurationEndpoint.Port","RedisEndpoint.Address","RedisEndpoint.Port"],
    "AWS::ElastiCache::ReplicationGroup":["ConfigurationEndPoint.Address","ConfigurationEndPoint.Port","PrimaryEndPoint.Address","PrimaryEndPoint.Port","ReadEndPoint.Addresses","ReadEndPoint.Ports","ReadEndPoint.Addresses.List","ReadEndPoint.Ports.List"],
    "AWS::ElasticBeanstalk::Environment":["EndpointURL"],
    "AWS::ElasticLoadBalancing::LoadBalancer":["CanonicalHostedZoneName","CanonicalHostedZoneNameID","DNSName","SourceSecurityGroup.GroupName","SourceSecurityGroup.OwnerAlias"],
    "AWS::ElasticLoadBalancingV2::LoadBalancer":["DNSName","CanonicalHostedZoneID","LoadBalancerFullName","LoadBalancerName","SecurityGroups"],
    "AWS::ElasticLoadBalancingV2::TargetGroup":["LoadBalancerArns","TargetGroupFullName","TargetGroupName"],
    "AWS::Elasticsearch::Domain":["DomainArn","DomainEndpoint"],
    "AWS::EMR::Cluster":["MasterPublicDNS"],
    "AWS::Events::Rule":["Arn"],
    "AWS::Greengrass::ConnectorDefinition":["Arn","Id","LatestVersionArn","Name"],
    "AWS::Greengrass::CoreDefinition":["Arn","Id","LatestVersionArn","Name"],
    "AWS::Greengrass::DeviceDefinition":["Arn","Id","LatestVersionArn", "Name"],
    "AWS::Greengrass::FunctionDefinition":["Id"],
    "AWS::Greengrass::FunctionDefinitionVersion":["Arn"],
    "AWS::Greengrass::Group":["Arn","Id","LatestVersionArn","Name","RoleArn","RoleAttachedAt"],
    "AWS::Greengrass::LoggerDefinition":["Arn","Id","LatestVersionArn","Name"],
    "AWS::Greengrass::ResourceDefinition":["Arn","Id","LatestVersionArn","Name"],
    "AWS::Greengrass::SubscriptionDefinition":["Arn","Id","LatestVersionArn","Name"],
    "AWS::IAM::AccessKey":["SecretAccessKey"],
    "AWS::IAM::Group":["Arn"],
    "AWS::IAM::InstanceProfile":["Arn"],
    "AWS::IAM::Role":["Arn"],
    "AWS::IAM::User":["Arn"],
    "AWS::IoT::Certificate":["Arn"],
    "AWS::IoT::Policy":["Arn"],
    "AWS::IoT::TopicRule":["Arn"],
    "AWS::IoT1Click::Device":["Arn","DeviceId","Enabled"],
    "AWS::IoT1Click::Placement":["PlacementName","ProjectName"],
    "AWS::IoT1Click::Project":["ProjectName","Arn"],
    "AWS::Kinesis::Stream":["Arn"],
    "AWS::Kinesis::StreamConsumer":["ConsumerARN","ConsumerCreationTimestamp","ConsumerName","ConsumerStatus","StreamARN"],
    "AWS::KinesisFirehose::DeliveryStream":["Arn"],
    "AWS::KMS::Key":["Arn"],
    "AWS::Lambda::Function":["Arn"],
    "AWS::Lambda::Version":["Version"],
    "AWS::Logs::Destination":["Arn"],
    "AWS::Logs::LogGroup":["Arn"],
    "AWS::OpsWorks::Instance":["AvailabilityZone","PrivateDnsName","PrivateIp","PublicDnsName","PublicIp"],
    "AWS::OpsWorks::UserProfile":["SshUserName"],
    "AWS::OpsWorksCM::Server":["Arn","Endpoint"],
    "AWS:RAM::ResourceShare":["Arn"],
    "AWS::Redshift::Cluster":["Endpoint.Address","Endpoint.Port"],
    "AWS::RDS::DBCluster":["Endpoint.Address","Endpoint.Port","ReadEndpoint.Address"],
    "AWS::RDS::DBInstance":["Endpoint.Address","Endpoint.Port"],
    "AWS::RoboMaker::Fleet":["Arn"],
    "AWS::RoboMaker::RobotApplication":["Arn","CurrentRevisionId"],
    "AWS::RoboMaker::SimulationApplication":["Arn","CurrentRevisionId"],
    "AWS::Route53::HostedZone":["NameServers"],
    "AWS::Route53Resolver::ResolverEndpoint":["Arn","Direction","HostedVPCId","IpAddressCount","Name","ResolverEndpointId"],
    "AWS::Route53Resolver::ResolverRule":["Arn","DomainName","ResolverEndpointId","ResolverRuleId","TargetIps"],
    "AWS::Route53Resolver::ResolverRuleAssociation":["Name","ResolverRuleAssociationId","ResolverRuleId","VPCId"],
    "AWS::S3::Bucket":["Arn","DomainName","DualStackDomainName","WebsiteURL"],
    "AWS::Serverless::Function":["Arn"],
    "AWS::ServiceDiscovery::HttpNamespace":["Arn","Id"],
    "AWS::ServiceDiscovery::PrivateDnsNamespace":["Arn","Id"],
    "AWS::ServiceDiscovery::PublicDnsNamespace":["Arn","Id"],
    "AWS::ServiceDiscovery::Service":["Arn","Id","Name"],
    "AWS::SNS::Topic":["TopicName"],
    "AWS::StepFunctions::Activity":["Name"],
    "AWS::StepFunctions::StateMachine":["Name"],
    "AWS::SQS::Queue":["Arn","QueueName"]
  }

  
  ngOnInit() {
   }

  addFnjoinElement(){
    this.fnjoinCount+=1;
    this.fnjoinArray.push(this.fnjoinCount);
  }

  addFnselectElement(){
    this.fnselectCount+=1;
    this.fnselectArray.push(this.fnselectCount);
  }

  addFnAndElement(){
    this.fnandCount+=1;
    this.fnandArray.push(this.fnandCount);
  }

  getKeys(val){
    console.log(Object.keys(val))
    return Object.keys(val);
  }

  retResList(){
    return Object.keys(this.jsonresult.jsonresult.Resources).length > 0 ? Object.keys(this.jsonresult.jsonresult.Resources) : [];
  }

  retReflist(){
    var paramarray=Object.keys(this.jsonresult.jsonresult.Parameters);
    var pseudo=["AWS::Partition", "AWS::Region", "AWS::StackId", "AWS::StackName", "AWS::URLSuffix","AWS::AccountId","AWS::NoValue"];
    return Object.keys(this.jsonresult.jsonresult.Resources).concat(paramarray).concat(pseudo);
    //return pseudo;
  }

  retMaps(){
    return Object.keys(this.jsonresult.jsonresult.Mappings);
  }

  onReset(){
    this.fnjoinArray=[];
    this.fnjoinCount=0;
    this.fnselectArray=[];
    this.fnselectCount=0;
    this.fnandArray=[];
    this.fnandCount=0;
    //this.funcobj={}
    // switch (value.funcname) {      
    //   case "Ref":
    //     value.refvalue=undefined;
    //     break;
    //   case "Fn::Base64":
    //     this.funcobj["Fn::Base64"]=undefined;
    //     break;
    //   case "Fn::Cidr":
    //     value.ipblock=undefined;
    //     value.count=undefined;
    //     value.cidrbits=undefined;
    //     break;
    //   case "Fn::FindInMap":
    //     value.maps=undefined;
    //     value.topkey=undefined;
    //     value.secondkey=undefined;
    //     break;
    //   case "Fn::GetAtt":
    //     value.resname=undefined;
    //     value.propname=undefined;
    //     break;
    //   case "Fn::GetAZs":
    //     value.zone=undefined;
    //     break;
    //   case "Fn::ImportValue":
    //     value.importval=undefined;
    //     break;
    //   case "Fn::Join":
    //     value.delim=undefined;
    //     break;
    //   case "Fn::Select":
    //     value.index=undefined;
    //     break;        
    //   case "Fn::Split":
    //     value.split=undefined;
    //     value.splitvalue=undefined;
    //     break;    
    //   case "Fn::Sub":
    //     value.sub=undefined;
    //     value.subvalue=undefined;
    //     break;                
    //   case "Fn::Transform":
    //     value.trapara=undefined;
    //     break;         
    //   case "Fn::And":
    //     break;  
    //   case "Fn::Equals":
    //     value.equal1=undefined;
    //     value.equal2=undefined;
    //     break;    
    //   case "Fn::If":
    //     value.ifcon=undefined;
    //     value.iftrue=undefined;
    //     value.iffalse=undefined;
    //     break;      
    //   case "Fn::Not":
    //     value.fnnot=undefined;          
    //     break;
    //   case "Fn::Or":
    //     value.fnor=undefined;
    //     break;
    //   default:
    //     break;
    // }
  }

  retResource(){
    //console.log(Object.keys(this.jsonresult.jsonresult.Resources))
    return (Object.keys(this.jsonresult.jsonresult.Resources).length!=0)?Object.keys(this.jsonresult.jsonresult.Resources):[];
  }

  retResProps(rname){
    //return Object.keys(this.jsonresult.jsonresult.Resources[rname]);
    return (Object.keys(this.jsonresult.jsonresult.Resources[rname]["Properties"]).length!=0)?Object.keys(this.jsonresult.jsonresult.Resources[rname]["Properties"]):[];
  }

  retArray(num){
    var joinarr = []
    for(var i=0;i<num;i=i+1){
      joinarr.push(i);
    }
    return joinarr;
  }

  copyToClipboard(){
    var textArea= document.createElement("textarea");
    textArea.value = JSON.stringify(this.funcobj);
    document.body.appendChild(textArea);
    //textArea.focus();
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  }

  // doUnescape(value){
  //   if((value as String).includes('/\\n')){
  //     return (value as String).replace('/\\n',"\n");
  //   }
  // }

  doFunc(value){
    switch (value.funcname) {
      case "Ref":
        this.funcobj={
          "Ref":value.refvalue
        }
        break;
      case "Fn::Base64":
        this.funcobj={
          "Fn::Base64": this.utility.getProperJson(value.b64value)
        }
        break;
      case "Fn::Cidr":
        this.funcobj={
          "Fn::Cidr":[value.ipblock, value.count, value.cidrbits]
        }
        break;
      case "Fn::FindInMap":
        //var val2 = (value.topkey as String).includes("::")?JSON.parse(value.topkey):value.topkey;
        //var val3 = (value.secondkey as String).includes("::")?JSON.parse(value.secondkey):value.secondkey;
        this.funcobj={
          "Fn::FindInMap":[value.maps,this.utility.getProperJson(value.topkey),this.utility.getProperJson(value.secondkey)]
        }
        break;
      case "Fn::GetAtt":
        this.funcobj={
          "Fn::GetAtt":[value.resname, value.propname]
        }
        break;
      case "Fn::GetAZs":
        this.funcobj={
          "Fn::GetAZs":this.utility.getProperJson(value.zone)
        }
        break;
      case "Fn::ImportValue":
        this.funcobj={
          "Fn::ImportValue":this.utility.getProperJson(value.importval)
        }
        break;
      case "Fn::Join":
        var joinArr = [];
        var joinElements=[];
        this.fnjoinArray.forEach((i)=>{
          joinElements.push(this.utility.doUnescape(this.utility.getProperJson( value[`element${i}`])));
        });
        joinArr.push(value.delim);
        joinArr.push(joinElements);
        this.funcobj={
          "Fn::Join": this.utility.getProperJson(joinArr)
        }
        break;
      case "Fn::Select":
        var selectArr=[];
        var selectElements=[];
        this.fnselectArray.forEach((i)=>{
          selectElements.push(this.utility.getProperJson(value[`element${i}`]));
        });
        selectArr.push(value.index);
        selectArr.push(selectElements);
        this.funcobj={
          "Fn::Select": this.utility.getProperJson(selectArr)
        }
        break;        

      case "Fn::Split":
        var splitArr=[];
        splitArr.push(value.split);
        splitArr.push(value.splitvalue);
        this.funcobj={
          "Fn::Split": this.utility.getProperJson(splitArr)
        }
        break;    

      case "Fn::Sub":
        var subArr=[];
        subArr.push(value.sub);
        if(value.subvalue!=''){
          subArr.push(this.utility.getProperJson(value.subvalue))
        }

        this.funcobj={
          "Fn::Sub": this.utility.getProperJson(subArr)
        }
        break;                

      case "Fn::Transform":
        this.funcobj={
          "Fn::Transform": {
            "Name":value.traname,
            "Parameters":this.utility.getProperJson(value.trapara)
          } 
        }
        break; 
        
      case "Fn::And":
          var andArray=[];
          this.fnandArray.forEach((i)=>{
            andArray.push(this.utility.getProperJson(value[`element${i}`]));
          });
          this.funcobj={
            "Fn::And": this.utility.getProperJson(andArray)
          }
        break;
      
      case "Fn::Equals":
          var equalArray=[];
          equalArray.push(value.equal1);
          equalArray.push(value.equal2);
          this.funcobj={
            "Fn::Equals":this.utility.getProperJson(equalArray)
          }
        break;
      
      case "Fn::If":
          var ifArray=[];
          ifArray.push(value.ifcon);
          ifArray.push(this.utility.getProperJson(value.iftrue));
          ifArray.push(this.utility.getProperJson(value.iffalse));
          this.funcobj={
            "Fn::If":this.utility.getProperJson(ifArray)
          }
        break;
      
      case "Fn::Not":
          var fnnotArray=[];
          fnnotArray.push(this.utility.getProperJson(value.fnnot));
          this.funcobj={
            "Fn::Not":this.utility.getProperJson(fnnotArray)
          };
          
        break;

      case "Fn::Or":
          var fnorarray=[];
          fnorarray.push(this.utility.getProperJson(value.fnor));
          this.funcobj={
            "Fn::Or":this.utility.getProperJson(fnorarray)
          }
        break;
  
      default:
        break;
    }
  }


}
