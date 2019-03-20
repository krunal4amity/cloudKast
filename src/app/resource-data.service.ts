import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ResourceDataService {

  constructor() { }

  comProp:Object={
    "AWS::EC2::Instance":{
      "AssociationParameters":{
        "Key":"",
        "Value":[]
      },
      "BlockDeviceMapping":{
        "DeviceName":"",
        "Ebs":{
          "DeleteOnTermination":"",
          "Encrypted":"",
          "Iops":"",
          "SnapshotId":"",
          "VolumeSize":"",
          "VolumeType":""
        },
        "NoDevice":"",
        "VirtualName":""
      },
      "CreditSpecification":{
        "CPUCredits":""
      },
      "ElasticGpuSpecification":{
        "Type":""
      },
      "ElasticInferenceAccelerator":{
        "Type":""
      },
      "LaunchTemplateSpecification":{
        "LaunchTemplateId":"",
        "LaunchTemplateName":"",
        "Version":""
      },
      "LicenseSpecification":{
        "LicenseConfigurationArn":""
      },
      "MountPoint":{
        "Device":"",
        "VolumeId":""
      },
      "NetworkInterface":{
        "AssociatePublicIpAddress":"",
        "DeleteOnTermination":"",
        "Description":"",
        "DeviceIndex":"",
        "GroupSet":[],
        "NetworkInterfaceId":"",
        "Ipv6AddressCount":"",
        "Ipv6Addresses":[],
        "PrivateIpAddress":"",
        "PrivateIpAddresses":[],
        "SecondaryPrivateIpAddressCount":"",
        "SubnetId":""
      },
      "SsmAssociations":{
        "AssociationParameters":"",
        "DocumentName":""
      }
    },
    "Krunal":{
      "Name":"",
      "Skills":{
        "IT":"",
        "Arg":""
      }
    }
  }    

}


