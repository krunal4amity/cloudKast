import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsefulUtilsService {

  constructor() { }
  getProperJson(val){
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
    
  };

  getArray(val){
    if((val as String).includes("{")){
      //console.log("in array of objects...")
      return JSON.parse(val);
    }
     else{
       //console.log("in array of strings...")
       return val.length!=0?((val as String).split(",")):undefined;
     }
  }

}
