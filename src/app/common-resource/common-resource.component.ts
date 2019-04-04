import { Component, OnInit, Input, Inject } from '@angular/core';
import { JsonResultService } from '../json-result.service';
import { UsefulUtilsService } from '../useful-utils.service';
import {RESOURCE_DATA,ResourceSyntax} from '../resource-view/resource-list';



@Component({
  selector: 'app-common-resource',
  templateUrl: './common-resource.component.html',
  styleUrls: ['./common-resource.component.css']
})
export class CommonResourceComponent implements OnInit {

  
  @Input('isTagged')   isTagged:Boolean;
  @Input('myresource')  resObject:ResourceSyntax;
  serviceSyntax:String;
  currentService:String;
  currentResource:String;
  resPropkeys;
  reqColor="red";
  conColor="darkorange";
  arrayTip="[Obj1, Obj2..] OR str1,str2.."
  objectTip="{Obj}"

  constructor(public result:JsonResultService, public utility:UsefulUtilsService){
  }

  ngOnInit(){
    this.resObject=this.utility.addCommonProperties(this.resObject);
    this.serviceSyntax=(this.resObject["Type"] as String);
    this.currentService=(this.resObject["Type"] as String).split("::")[1];
    this.currentResource=(this.resObject["Type"] as String).split("::")[2];
    this.resPropkeys=Object.keys(this.resObject["Properties"]);
  }

  tagCount=0;
  tagArray=[];
  isPresent=true;
  isCopyReady:Boolean = false;
  

  addTag(){
      this.tagCount+=1;
      this.tagArray.push(this.tagCount);
    }
  
  getTagArray(value){
      var tags=[];
      this.tagArray.forEach((i)=>{
      tags.push({
          "Key":value[`tagKey${i}`]?value[`tagKey${i}`]:undefined,
          "Value":value[`tagValue${i}`]?value[`tagValue${i}`]:undefined
      })
      });
      return tags.length==0?undefined:tags
  }

  isObjectEmpty(obj:Object){
      return Object.keys(obj).length === 0 && obj.constructor === Object?true:false;
  }

  getTypeOf(value){
    return typeof(value);
  }

  isArray(value){
    return Array.isArray(value);
  }

  isRequired(value){
    if(this.getTypeOf(value)=='object'){
      if(this.isArray(value)){
        if(value[0].includes("*")){
          if(value[0].startsWith("**")){
            return {"color":this.conColor, "required":false};
          }else{
            return {"color":this.reqColor, "required":true};
          }
        }
      }
      else{
        if(value['info'].includes("*")){
          if(value['info'].startsWith("**")){
            return {"color":this.conColor, "required": false};
          }else{
            return {"color":this.reqColor, "required":true};
          }
        }
      }
    }
    else{
      if(value.includes("*")){
        if(value.startsWith("**")){
          return {"color":this.conColor, "required": false};
        }else{
          return {"color":this.reqColor, "required":true};
        }
      }
    }
    return {"color":"grey", "required": false};
  }

  // populateProperty(value):void{
  //   const dialogRef = this.dialog.open(PropertyDealerDialog, {
  //     width: '250px',
  //     data: value
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }
  


  copyToClipboard(value){
    var textArea= document.createElement("textarea");
    textArea.value = JSON.stringify(this.result.jsonresult.Resources[value.resourceName]);
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  }

  onRemove(value){
      this.isPresent=false;
      for(var i=0;i<RESOURCE_DATA.length;i++){
        if(RESOURCE_DATA[i].servicename==this.currentService){
          var myresource=RESOURCE_DATA[i].subresource;
          for(var j=0;j<myresource.length;j++){
            if(myresource[j].resourcename==this.currentResource){
              myresource[j].resourcecount=myresource[j].resourcecount-1;
            }
          }
        }
      }
      this.result.jsonresult.Resources[value.resourceName]=undefined;
    }

  onDone(value){
      //console.log(value);
      this.isCopyReady=true;
      this.result.jsonresult.Resources[value.resourceName]={};
      this.result.jsonresult.Resources[value.resourceName]["Properties"]={}
      this.result.jsonresult.Resources[value.resourceName].Type=this.resObject["Type"];
      Object.keys(this.resObject["Properties"]).forEach((prop)=>{
          if(typeof(this.resObject["Properties"][prop])=="object"){
              if(Array.isArray(this.resObject["Properties"][prop])){
                this.result.jsonresult.Resources[value.resourceName]["Properties"][prop]=this.utility.getArray(value[prop]);
              }
              else {
                  this.result.jsonresult.Resources[value.resourceName]["Properties"][prop]=this.utility.getProperJson(value[prop]);
              }            
          }else{
                  this.result.jsonresult.Resources[value.resourceName]["Properties"][prop]=this.utility.getProperJson(value[prop]);
          }
      })
      this.result.jsonresult.Resources[value.resourceName]["Properties"]["Tags"]=this.getTagArray(value);

      if(this.resObject["Type"]=="AWS::EC2::Instance"){
        this.result.jsonresult.Resources[value.resourceName]["Properties"]["Metadata"]=undefined;
        this.result.jsonresult.Resources[value.resourceName]["Metadata"]=this.utility.getProperJson(value["Metadata"]);

      }
   }
}




// @Component({
//   selector: 'property-dealer-dialog',
//   templateUrl: 'property-dealer-dialog.html',
// })
// export class PropertyDealerDialog {

//   constructor(
//     public dialogRef: MatDialogRef<PropertyDealerDialog>,@Inject(MAT_DIALOG_DATA) public data, public mainObj:ResourceDataService, public utility:UsefulUtilsService) {
//       this.onDone(data);
//     }

//     resKeys:String[];
//     propKeys:String[];
//     selProp:Object;
//     isCopied:Boolean=false;
//     myobj={}
//     nonStringOutput={};

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

//   getTypeOf(value){
//     return typeof(value);
//   }

//   isArray(value){
//     return Array.isArray(value);
//   }

//   copyToClipboard(value){
//     var textArea= document.createElement("textarea");
//     textArea.value = JSON.stringify(this.myobj);
//     document.body.appendChild(textArea);
//     textArea.select();
//     document.execCommand("copy");
//     document.body.removeChild(textArea);
//     this.myobj={};
//   }

//   getKeys(value){
//     //return Object.keys(Object.values(value)[0])
//     return (Object.keys(value)).length==0?[]:Object.keys(value);
//   }

//   getSelProp(value){
//     var a1=Object.values(this.mainObj.comProp);
//     var a2:Object;
//     a1.forEach((i)=>{
//       if(i.hasOwnProperty(value)){
//         a2=i[value];
//       }
//     })
//     console.log(a2);
//     return a2;
//   }

//   onSubmit(value){
//     //console.log(value);
//     this.getLooper(this.selProp,value,this.myobj);
//     this.isCopied=true;
//   }

//   getLooper(loopval,formval,myobj){
//     this.getKeys(loopval).forEach((j)=>{
//       if(typeof(loopval[j])=="string"){
//         //myobj[j]=formval[j];
//         myobj[j]=this.utility.getProperJson(formval[j]);
//       }
//       else{
//         if(Array.isArray(loopval[j])){
//           //myobj[j]=(formval[j] as String).split("|");
//           myobj[j]=this.utility.getArray(formval[j]);
//         }
//         else{
//           myobj[j]={}
//           this.getLooper(loopval[j],formval,myobj[j])
//         }
//       }
  
//     })
//   }

//   onDone(value){
//     //this.selProp=(Object.values(this.mainObj.comProp)[0])[value.resname];
//     this.selProp=this.getSelProp(value);
//     //console.log(value);
//     //console.log(this.selProp)
//     //this.propSent=true;
//   }

//   getDepth(obj){
//     var level = 1;
//     var key;
//     for(key in obj) {
//         if (!obj.hasOwnProperty(key)) continue;
  
//         if(typeof obj[key] == 'object'){
//             var depth = this.getDepth(obj[key]) + 1;
//             level = Math.max(depth, level);
//         }
//     }
//     return level;
//   }

//   onReset(){
//     //this.propSent=false;
//     this.isCopied=false;
//     this.myobj={};
//   }

// }