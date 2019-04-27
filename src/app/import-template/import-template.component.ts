import { Component, OnInit } from '@angular/core';
import { UsefulUtilsService } from '../useful-utils.service';


@Component({
  selector: 'app-import-template',
  templateUrl: './import-template.component.html',
  styleUrls: ['./import-template.component.css']
})
export class ImportTemplateComponent implements OnInit {

  constructor(public util:UsefulUtilsService) { }

  ngOnInit() {
  }

  selProp={};
  selPropCopy={};
  import_output={};
  fileImported=false;


  onFileAdd(files){
    let reader = new FileReader();
    reader.readAsText(files[0]);
    reader.onload=()=>{
      this.selProp=  JSON.parse(JSON.parse(JSON.stringify(reader.result)));
      this.selPropCopy=this.selProp;
    }
    this.fileImported=true;
  }

  getKeys(value){
    if(value!=undefined){
      return (Object.keys(value)).length==0?undefined:Object.keys(value);
    }
    else{
      return [];
    }
  }

  getSectionCount(value:Object){
    var i=0;
    this.getKeys(value).forEach((j)=>{
      if(value[j]!=undefined){
        i=i+1;
      }
    });
    return i
  }

  getDownloadHref(){
    var str = "data:text/plain;charset=utf-8,"
    var data =  str + encodeURI(JSON.stringify(this.selProp));
    var link = document.createElement('a');
    link.setAttribute('href', data);
    link.setAttribute('download',"cloudkast.json")
    link.click();
  }

  //Parameters:
  addParam(value){
    if(this.selProp["Parameters"]==undefined) this.selProp["Parameters"]={};
    this.selProp["Parameters"][value]={};
  }

  removeParam(value){
    this.selProp["Parameters"][value]=undefined
  }

  isParamRemoved(value){
    if(this.selProp["Parameters"][value]==undefined){
      return false;
    }
    else{
      return true;
    }
  }

  onParamSubmit(value){
    if(this.selProp["Parameters"]==undefined) this.selProp["Parameters"]={};
    var valArray=this.getKeys(value);
    valArray.forEach((i)=>{
      if(value[i]==""){
        this.selProp["Parameters"][i]=this.selPropCopy["Parameters"][i];
      } 
      else{
        this.selProp["Parameters"][i]=this.util.getProperJson(value[i]);
      }
      
    })
  }

  //Mappings:

  addMapping(value){
    if(this.selProp["Mappings"]==undefined) this.selProp["Mappings"]={};
    this.selProp["Mappings"][value]={};
  }

  removeMapping(value){
    this.selProp["Mappings"][value]=undefined
  }

  isMappingRemoved(value){
    if(this.selProp["Mappings"][value]==undefined){
      return false;
    }
    else{
      return true;
    }
  }

  onMappingSubmit(value){
    if(this.selProp["Mappings"]==undefined) this.selProp["Mappings"]={};
    var valArray=this.getKeys(value);
    valArray.forEach((i)=>{
      if(value[i]==""){
        this.selProp["Mappings"][i]=this.selPropCopy["Mappings"][i];
      } 
      else{
        this.selProp["Mappings"][i]=this.util.getProperJson(value[i]);
      }
    });
  }

//Conditions:

addCondition(value){
  if(this.selProp["Conditions"]==undefined) this.selProp["Conditions"]={};
  this.selProp["Conditions"][value]={};
}

removeCondition(value){
  this.selProp["Conditions"][value]=undefined
}

isConditionRemoved(value){
  if(this.selProp["Conditions"][value]==undefined){
    return false;
  }
  else{
    return true;
  }
}

onConditionSubmit(value){
  if(this.selProp["Conditions"]==undefined) this.selProp["Conditions"]={};
  var valArray=this.getKeys(value);
  valArray.forEach((i)=>{
    if(value[i]==""){
      this.selProp["Conditions"][i]=this.selPropCopy["Conditions"][i];
    } 
    else{
      this.selProp["Conditions"][i]=this.util.getProperJson(value[i]);
    }
  });
}

//Resources:
addResource(value){
  if(this.selProp["Resources"]==undefined) this.selProp["Resources"]={};
  this.selProp["Resources"][value]={};
}

removeResource(value){
  this.selProp["Resources"][value]=undefined
}

isResourceRemoved(value){
  if(this.selProp["Resources"][value]==undefined){
    return false;
  }
  else{
    return true;
  }
}

onResourceSubmit(value){
  if(this.selProp["Resources"]==undefined) this.selProp["Resources"]={};
  var valArray=this.getKeys(value);
  valArray.forEach((i)=>{
    if(value[i]==""){
      this.selProp["Resources"][i]=this.selPropCopy["Resources"][i];
    } 
    else{
      this.selProp["Resources"][i]=this.util.getProperJson(value[i]);
    }
  });
}


//Outputs:
addOutput(value){
  if(this.selProp["Outputs"]==undefined) this.selProp["Outputs"]={};
  this.selProp["Outputs"][value]={};
}

removeOutput(value){
  this.selProp["Outputs"][value]=undefined
}

isOutputRemoved(value){
  if(this.selProp["Outputs"][value]==undefined){
    return false;
  }
  else{
    return true;
  }
}

onOutputSubmit(value){
  if(this.selProp["Outputs"]==undefined) this.selProp["Outputs"]={};
  var valArray=this.getKeys(value);
    valArray.forEach((i)=>{
      if(value[i]==""){
        this.selProp["Outputs"][i]=this.selPropCopy["Outputs"][i];
      } 
      else{
        this.selProp["Outputs"][i]=this.util.getProperJson(value[i]);
      }
    });
  }

}
