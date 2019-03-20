import { Injectable } from '@angular/core';

export interface CloudFormation{
  AWSTemplateFormatVersion:string,
  Description:string,
  Parameters:object,
  Mappings:object,
  Conditions:object,
  Transform:object,
  Resources:object,
  Outputs:object
}

@Injectable({
  providedIn: 'root'
})
export class JsonResultService {

  jsonresult:CloudFormation={
    AWSTemplateFormatVersion:"2010-09-09",
    Description:"please provide description of the template",
    Parameters:{},
    Mappings:undefined,
    Conditions:undefined,
    Transform:undefined,
    Resources:{},
    Outputs:undefined
  }

}
