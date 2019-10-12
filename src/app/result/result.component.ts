import { Component, OnInit } from '@angular/core';
import { JsonResultService } from '../json-result.service';
//import { saveAs } from 'file-saver';
var AWS = require('aws-sdk');
//var FileSaver = require('file-saver');
var yaml = require('js-yaml')

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
  showSpinner=false;
  uploadColor="";
  validateColor="";
  isYamlOn=false;
  isJsonOn=true;
  yamlTemplate;
  

  getDownloadHref(){
    var str = "data:text/json;charset=utf-8,"
    var data =  str + encodeURIComponent(JSON.stringify(this.jsonresult.jsonresult));
    var link = document.createElement('a');
    link.setAttribute('href', data);
    link.setAttribute('download',"cloudkast.json")
    link.click();
    //var blob = new Blob([JSON.stringify(this.jsonresult.jsonresult)], {type: "text/plain;charset=utf-8"});
    //FileSaver.saveAs(blob, "cloudfurner.json");
    //var file = new File([JSON.stringify(this.jsonresult.jsonresult)], "hello world.txt", {type: "text/plain;charset=utf-8"});
    //saveAs(file);
    var data = str + encodeURIComponent(this.yamlTemplate);
    link.setAttribute('href',data);
    link.setAttribute('download',"cloudkast.yaml")
    link.click();
  }

  convertToYaml(){
    this.isYamlOn=true;
    this.isJsonOn=false;
    this.yamlTemplate=yaml.safeDump(this.jsonresult.jsonresult,{"skipInvalid":true})
  }

  copyToClipboardJson(){
    var textArea= document.createElement("textarea");
    textArea.value = JSON.stringify(this.jsonresult.jsonresult);
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  }

  copyToClipboardYaml(){
    var textArea= document.createElement("textarea");
    textArea.value = this.yamlTemplate
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  }

   validateTemplate(value){
     this.showSpinner=true;
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
        this.uploadColor="red";
      }
      else{
        this.s3message="object uploaded successfully on S3";
        this.uploadColor="green"
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
            this.validateColor="red"
          }
          else{
            this.message="Validation successful";
            this.validateColor="green"
          }
        })
      }
    })


   }

  ngOnInit() {
  }  
}
