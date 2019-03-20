import { Component, OnInit } from '@angular/core';
import {RESOURCE_DATA} from '../resource-view/resource-list';
import { JsonResultService } from '../json-result.service';


@Component({
  selector: 'app-route53-health-check',
  templateUrl: './route53-health-check.component.html',
  styleUrls: ['./route53-health-check.component.css']
})
export class Route53HealthCheckComponent implements OnInit {

  isPresent=true;
  tagCount=0;
  tagArray=[];

  constructor(public result:JsonResultService) { 
  }

  ngOnInit() {
  }

  addTag(){
    this.tagCount+=1;
    this.tagArray.push(this.tagCount);
    console.log(this.tagArray);
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

  onDone(value){
    console.log(JSON.stringify(value));

    var alarmID:Object={
      "Name":value.alarmIdName?value.alarmIdName:undefined,
      "Region":value.alarmIdRegion?value.alarmIdRegion:undefined
    };

    this.result.jsonresult.Resources[value.resourceName]={
      "Type":"AWS::Route53::HealthCheck",
      "Properties":{
        "HealthCheckConfig":{
          "Type":value.type,
          //"AlarmIdentifier":this.isObjectEmpty(alarmID)?undefined:alarmID,
          "EnableSNI":value.enableSNI?value.enableSNI:undefined,
          "Port":value.port?value.port:undefined,
          "FailureThreshold":value.failureThreshold?value.failureThreshold:undefined,
          "FullyQualifiedDomainName":value.fqdn?value.fqdn:undefined,
          "HealthThreshold":value.HealthThreshold?value.HealthThreshold:undefined,
          "InsufficientDataHealthStatus":value.InsufficientDataHealthStatus?value.InsufficientDataHealthStatus:undefined,
          "IpAddress":value.IpAddress?value.IpAddress:undefined,
          "ChildHealthChecks":value.childHealthChecks?(value.childHealthChecks as String).split(","):undefined,
          "Inverted":value.Inverted?value.Inverted:undefined,
          "MeasureLatency":value.MeasureLatency?value.MeasureLatency:undefined,
          "Regions":value.Regions?value.Regions:undefined,
          "ResourcePath":value.ResourcePath?value.ResourcePath:undefined,
          "RequestInterval":value.RequestInterval?value.RequestInterval:undefined,
          "SearchString":value.SearchString?value.SearchString:undefined
        },
        "HealthCheckTags":this.getTagArray(value)
      }
    }
    
  }

  onRemove(value){
    this.isPresent=false;
    for(var i=0;i<RESOURCE_DATA.length;i++){
      if(RESOURCE_DATA[i].servicename=="Route53"){
        var myresource=RESOURCE_DATA[i].subresource;
        for(var j=0;j<myresource.length;j++){
          if(myresource[j].resourcename=="health-check"){
            myresource[j].resourcecount=myresource[j].resourcecount-1;
          }
        }
      }
    }
    
    this.result.jsonresult.Resources[value.resourceName]=undefined;

  }
}
