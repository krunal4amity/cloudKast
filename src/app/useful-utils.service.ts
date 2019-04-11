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

  addCommonProperties(value:ResourceSyntax){
    value["Properties"]["DeletionPolicy"]="With the DeletionPolicy attribute you can preserve or (in some cases) backup a resource when its stack is deleted.Possible values : 'Delete', 'Retain','Snapshot'. Snapshot applies to ec2volume, elasticcache-cachecluster and replication group, rds-dbcluster and dbinstance, redshift-cluster, neptune-dbcluster";
    value["Properties"]["DependsOn"]=["List of strings. When you add a DependsOn attribute to a resource, that resource is created only after the creation of the resource specified in the DependsOn attribute."];
    value["Properties"]["UpdateReplacePolicy"]="If you update a resource property that requires that the resource be replaced, AWS CloudFormation recreates the resource during the update. By default, AWS CloudFormation then deletes the old resource. Using the UpdateReplacePolicy, you can specify that AWS CloudFormation retain or (in some cases) create a snapshot of the old resource. Acceptable values : Retain, Delete, Snapshot";
    value["Properties"]["Condition"]="Use the Condition key and a condition's logical ID to associate it with a resource or output. you can associate the condition with a property so that AWS CloudFormation only sets the property to a specific value if the condition is true. If the condition is false, AWS CloudFormation sets the property to a different value that you specify.";
    return value;
  }

}
