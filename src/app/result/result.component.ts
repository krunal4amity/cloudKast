import { Component, OnInit } from '@angular/core';
import { JsonResultService, CloudFormation } from '../json-result.service';
//import { saveAs } from 'file-saver';
var AWS = require('aws-sdk');
//var FileSaver = require('file-saver');

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(public jsonresult:JsonResultService) {  
   }

  s3message:String="";
  message:String="";
  

  getDownloadHref(){
    var str = "data:text/plain;charset=utf-8,"
    var data =  str + encodeURI(JSON.stringify(this.jsonresult.jsonresult));
    var link = document.createElement('a');
    link.setAttribute('href', data);
    link.setAttribute('download',"cloudfurner.json")
    link.click();
    //var blob = new Blob([JSON.stringify(this.jsonresult.jsonresult)], {type: "text/plain;charset=utf-8"});
    //FileSaver.saveAs(blob, "cloudfurner.json");
    //var file = new File([JSON.stringify(this.jsonresult.jsonresult)], "hello world.txt", {type: "text/plain;charset=utf-8"});
    //saveAs(file);
  }

   validateTemplate(value){
    var s3params={
      Body: JSON.stringify(this.jsonresult.jsonresult),
      ACL: "authenticated-read",
      Bucket:value.bucket,
      Key:value.filename
    }
    
    var s3=new AWS.S3({
      region:value.region,
      accessKeyId:value.access_key,
      secretAccessKey:value.secret_access_key
    });
    s3.putObject(s3params,(err,data)=>{
      if(err){
        console.log(err, err.stack);
        this.s3message=err;
      }
      else{
        this.s3message="object uploaded successfully on S3";
        var url="https://s3-" + value.region + ".amazonaws.com/" + value.bucket + "/"+value.filename;
        var cloudformation = new AWS.CloudFormation({
          region:value.region,
          accessKeyId:value.access_key,
          secretAccessKey:value.secret_access_key
        });
        var cloudformationParams={
          TemplateURL: url
        }
        cloudformation.validateTemplate(cloudformationParams, (err, data)=>{
          if(err){
            console.log(err,err.stack);
            this.message=err;
          }
          else{
            this.message="Validation successful"
          }
        })
      }
    })


   }

  ngOnInit() {
  }  
}
