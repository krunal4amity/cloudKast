![CloudKast Logo](src/assets/img/cloudkast-logo.jpg)

**CloudKast** is on online AWS CloudFormation template generator. It is available at [CloudKast](https://krunal4amity.github.io). Note: The tool still lacks test cases.

---
## How to add a new AWS resource
1. Start with the file `src/app/resource-view/resource-list.ts`. For the service and its all resources, append a json as shown below to the *RESOURCE_DATA* array.

```javascript
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
```

2. Create an empty array in the format *resource-short-name_service-name* for each resource of that service in *src/app/resource-view/resource-view.component.ts* as shown below

```javascript
  s3_bucket=[]
  s3_bucketpolicy=[]
```
3. Add a `case` entry under the `switch` block in the same file as shown below.

```javascript
      case "S3":
      if(this.resource_detail[2]=="Bucket") this.s3_bucket.push(subresource.resourcecount);
      if(this.resource_detail[2]=="BucketPolicy") this.s3_bucketpolicy.push(subresource.resourcecount);
        break;
```

4. Open `src/app/aws-resources.service.ts` file and add each resource variable. You can follow the naming convetion as *resource-short-name_service-name*. As its value, you can copy the JSON syntax from AWS CloudFormation document and paste it. Now replace each properties value by its description according to the rules shown below.
  - if the property is of type `string` then just copy the property description starting with *string*.
  - if the property is of type `object` then create an json object with an `info` key and have property description as its value. Start with the word with *Type:Object Type* replacing its respective object type. Each such property is a complex property in most cases (i.e. it's not a primitive property). For each such property you can suffix the property description with double hash (##). This will make a little pencil icon appear next to this property so that its specific object can be created. One case where this is not needed is when the property is a policy document, in which case the user needs to make use of aws policy generator to generate the policy and copy to CloudKast's respective policy document field. See an example snippet below.
  - if the property is of type `array` then create an array with first element of the array as the property description. Start the description with *List of Object type*.
  - if the property is a *required* property then start the description with an asterik (*).
  - if the property is a *conditional* property then start the description with double asterik (**).
  - if the property is a complex property (e.g. another object or an array of objects) , suffix the description with double hash (##).
  - if the resource has `Tags` property then remove it. Tag property is separately insert by an `isTagged` attribute in an html. 

```javascript
  efs_mounttarget={
    "Type" : "AWS::EFS::MountTarget",
    "Properties" : {
        "FileSystemId" : "*String. The ID of the file system for which to create the mount target.",
        "IpAddress" : "String. Valid IPv4 address within the address range of the specified subnet.",
        "SecurityGroups" : ["Type: List of String. Up to five VPC security group IDs, of the form sg-xxxxxxxx. These must be for the same VPC as subnet specified."],
        "SubnetId" : "*String"
      }
  }
```


5. Open `src/app/resource-data.service.ts` file. This files stores property description for each complex property (i.e. properties that are objects themselves and are not of primitve type). Inside `comProp` object variable, create another object with the key being the name of the service and value being another object - the complex property in this case (you can copy the complex property's syntax from the aws cloudformation documentation). Make sure that if the property is another object itself then its syntax is added to the same parent object. If a property is an array of objects, then a create a separate property under the same service. Follow the rules as mentioned in the point above to mark the property required or conditional. There are following caveats though. E.g. in the snippet below, we would call `AccelerateConfiguration`, `AnalyticsConfiguration` and `TagFilters` parent properties. `StorageClassAnalysis` is a separate object, hence its syntax has been added to the syntax of `AnalyticsConfiguration` itself. `TagFilters` is an array of objects, hence a separate parent object has been created for it.

  - If a property is of type object (not array of objects), then marking whether it is required or optional is not supported.
  - if a parent property shares the same name with a property in another service, then it could cause conflicts. In that case, make sure that you name the parent property differently. E.g. `BlockDeviceMapping` is a common parent property for both `AWS::EC2::Instance` and `AWS::AutoScaling::LaunchConfiguration` hence you could choose naming the one under `AWS::EC2::Instance` different such as `BlockDeviceMapping_ec2`. 

```javascript
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
      }
```


6. Add a div element to `src/app/resource-view/resource-view.component.html` as shown below. For resources that don't have Tag property, please assign `isTagged` to `false`.  

```
      <div *ngFor="let i of s3_bucket" >
            <app-common-resource [myresource]="awsresource.s3_bucket" [isTagged]="true" ></app-common-resource>
      </div>                                          
      <div *ngFor="let i of s3_bucketpolicy" >
            <app-common-resource [myresource]="awsresource.s3_bucketpolicy" [isTagged]="false" ></app-common-resource>
      </div>                                          
```

