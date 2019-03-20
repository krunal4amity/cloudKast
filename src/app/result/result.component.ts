import { Component, OnInit } from '@angular/core';
import { JsonResultService, CloudFormation } from '../json-result.service';
var AWS = require('aws-sdk');


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  //jresult:CloudFormation;
  constructor(public jsonresult:JsonResultService) {  
   }


  cloudformation = new AWS.CloudFormation({
    region:"us-west-2",
    accessKeyId:"AKIAIWSUDFU23LIII5YA",
    secretAccessKey:"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"
  });

  params={
    TemplateBody: JSON.stringify(this.jsonresult.jsonresult)
  }



   validateTemplate(){
    var request = this.cloudformation.validateTemplate(this.params);
    request.
      on('success', function(response) {
        console.log("Success!");
      }).
      on('error', function(response) {
        console.log(response);
      }).
      on('complete', function(response) {
        console.log("Always!");
      }).
      send();
   }

  ngOnInit() {
  }  
}
