import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsefulUtilsService {

  constructor() { }

  getProperJson(val){
    if((val as String).includes("::"||'\"Ref\"'||'\{') && !(val as String).includes("|") ){
      return JSON.parse(val);
    }
    else {
      if((val as String).includes("|")){
        return (val as String).split("|");
      }
      else{
        return (val as String).length!=0?val:undefined
      }
    }
  };

  
}
