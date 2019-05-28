import { Injectable } from '@angular/core';
import { ResourceSyntax } from './resource-view/resource-list';

@Injectable({
  providedIn: 'root'
})
export class UsefulUtilsService {

  constructor() { }
  getProperJson(val){
    try{
          //any function, any object, not for array of strings or arrays of objects.
      if((val as String).includes("{") && !(val as String).includes("{{") ){
        return JSON.parse(val);
      }
      else{
        if((val as String).includes("{{")){
          return (val as String).length!=0?val:undefined
        }
        else{
          return (val as String).length!=0?val:undefined
        }
      }
    }
    catch(e){
      alert("Oops! An error occurred. Please check the input field type.");
    }
  };

  getArray(val){
    try {
      if((val as String).includes("{")){
        //console.log("in array of objects...")
        return JSON.parse(val);
      }
       else{
         //console.log("in array of strings...")
         return val.length!=0?((val as String).split(",")):undefined;
       } 
    } catch (error) {
        alert("Oops! An error occurred. Please check the input field type");
    }
  }

  getSemicolonArray(val){
    try{
      if((val as String).includes("{")){
        var kk=((val as String).split(";"));
        var mm =[]
        kk.forEach((i)=>{
          if((i as String).includes("{")){
            mm.push(JSON.parse(i));
          }
          else{
            mm.push(i);
          }
        })
        return mm;  
      }
      else{
        return val.length!=0?((val as String).split(";")):undefined
      }
    }
    catch(error){
      alert("Oops! An Error occurred. Please check the input field type")
    }    
  }

  doUnescape(val){
    //var kk = this.getProperJson(val);
    if(typeof(val)=='string'){
      return val.replace('\\n',"\n")
    }
    else{
      return val;
    }
  }

  addCommonProperties(value:ResourceSyntax){
    value["Properties"]["DeletionPolicy"]="With the DeletionPolicy attribute you can preserve or (in some cases) backup a resource when its stack is deleted.Possible values : 'Delete', 'Retain','Snapshot'. Snapshot applies to ec2volume, elasticcache-cachecluster and replication group, rds-dbcluster and dbinstance, redshift-cluster, neptune-dbcluster";
    value["Properties"]["DependsOn"]=["List of strings. When you add a DependsOn attribute to a resource, that resource is created only after the creation of the resource specified in the DependsOn attribute."];
    value["Properties"]["UpdateReplacePolicy"]="If you update a resource property that requires that the resource be replaced, AWS CloudFormation recreates the resource during the update. By default, AWS CloudFormation then deletes the old resource. Using the UpdateReplacePolicy, you can specify that AWS CloudFormation retain or (in some cases) create a snapshot of the old resource. Acceptable values : Retain, Delete, Snapshot";
    value["Properties"]["Condition"]="Use the Condition key and a condition's logical ID to associate it with a resource or output.  you can create a condition and then associate it with a resource or output so that AWS CloudFormation only creates the resource or output if the condition is true. Similarly you can associate the condition with a property so that AWS CloudFormation only sets the property to a specific value if the condition is true. If the condition is false, AWS CloudFormation sets the property to a different value that you specify.";
    value["Properties"]["Metadata"]= {"info":"The Metadata attribute enables you to associate structured data with a resource. By adding a Metadata attribute to a resource, you can add data in JSON or YAML to the resource declaration. AWS CloudFormation does not validate the syntax within the Metadata attribute. AWS CloudFormation won't recognize some template changes as an update, such as changes to a deletion policy, update policy, condition declaration, or output declaration. If you need to make such changes without making any other change, you can add or modify a metadata attribute for any of your resources. You can retrieve this data using the AWS command aws cloudformation describe-stack-resource. Note: Use the AWS::CloudFormation::Init type to include metadata on an Amazon EC2 instance for the cfn-init helper script. If your template calls the cfn-init script, the script looks for resource metadata rooted in the AWS::CloudFormation::Init metadata key. "}
    return value;
  }

}
