import { Component, OnInit } from '@angular/core';
import { UsefulUtilsService } from '../useful-utils.service';

@Component({
  selector: 'app-ec2-init',
  templateUrl: './ec2-init.component.html',
  styleUrls: ['./ec2-init.component.css']
})
export class EC2InitComponent implements OnInit {

  constructor(public util:UsefulUtilsService) { }

  ngOnInit() {
  }
  myobj={
    "AWS::CloudFormation::Init":{
      "config":{
      }
    }
  }
  //sources
  sourceCount=0;  sourceArray=[];
  //packages
  aptCount=0; aptArray=[];
  msiCount=0; msiArray=[];
  pythonCount=0; pythonArray=[];
  rpmCount=0; rpmArray=[];
  rubygemsCount=0; rubygemsArray=[];
  yumCount=0; yumArray=[];

  groupsCount=0;
  groupsArray=[];
  usersCount=0;
  usersArray=[];
  filesCount=0;
  filesArray=[];
  commandsCount=0;
  commandsArray=[];
  servicesCount=0;
  servicesArray=[];

  //packages
  apt="apt packages as a json object. each package is specified as a package name and a list of versions. The version can be a string, a list of versions, or an empty string or list. An empty string or list indicates that you want the latest version. For rpm manager, the version is specified as a path to a file on disk or a URL."
  msi="msi packages as a json object. On Windows systems, the packages key supports only the MSI installer."
  python="python packages."
  rpm="rpm packages as a json object. each package is specified as a package name and a list of versions. The version can be a string, a list of versions, or an empty string or list. An empty string or list indicates that you want the latest version. For rpm manager, the version is specified as a path to a file on disk or a URL."
  rubygems="rubygems as a json object. each package is specified as a package name and a list of versions. The version can be a string, a list of versions, or an empty string or list. An empty string or list indicates that you want the latest version. For rpm manager, the version is specified as a path to a file on disk or a URL."
  yum="yum packages as a json object. each package is specified as a package name and a list of versions. The version can be a string, a list of versions, or an empty string or list. An empty string or list indicates that you want the latest version. For rpm manager, the version is specified as a path to a file on disk or a URL."

  //users
  groups="A list of group names. The user will be added to each group in the list."
  uid="A user ID. The creation process fails if the user name exists with a different user ID. If the user ID is already assigned to an existing user the operating system may reject the creation request."
  homedir="the user's home directory."

  //services
  ensureRunning="Set to true to ensure that the service is running after cfn-init finishes. Set to false to ensure that the service is not running after cfn-init finishes. Omit this key to make no changes to the service state."
  enabled="Set to true to ensure that the service will be started automatically upon boot. Set to false to ensure that the service will not be started automatically upon boot. ";
  files="A list of files. If cfn-init changes one directly via the files block, this service will be restarted"
  sources="A list of directories. If cfn-init expands an archive into one of these directories, this service will be restarted."
  packages="A map of package manager to list of package names. If cfn-init installs or updates one of these packages, this service will be restarted."
  commands="A list of command names. If cfn-init runs the specified command, this service will be restarted."

  //groups
  gid="If a group ID is specified, and the group already exists by name, the group creation will fail. If another group has the specified group ID, the OS may reject the group creation."

  //commands
  command="Required. Either an array or a string specifying the command to run. If you use an array, you do not need to escape space characters or enclose command parameters in quotes. Don't use the array to specify multiple commands."
  env="Optional. Sets environment variables for the command. This property overwrites, rather than appends, the existing environment."
  cwd="Optional. The working directory"
  test="Optional. A test command that determines whether cfn-init runs commands that are specified in the command key. If the test passes, cfn-init runs the commands. The cfn-init script runs the test in a command interpreter, such as Bash or cmd.exe. Whether a test passes depends on the exit code that the interpreter returns. For Linux, the test command must return an exit code of 0 for the test to pass. For Windows, the test command must return an %ERRORLEVEL% of 0."
  ignoreErrors="Optional. A Boolean value that determines whether cfn-init continues to run if the command in contained in the command key fails (returns a non-zero value). Set to true if you want cfn-init to continue running even if the command fails. Set to false if you want cfn-init to stop running if the command fails. The default value is false."
  waitAfterCompletion="Optional. For Windows systems only. Specifies how long to wait (in seconds) after a command has finished in case the command causes a reboot. The default value is 60 seconds and a value of 'forever' directs cfn-init to exit and resume only after the reboot is complete. Set this value to 0 if you do not want to wait for every command."

  //files
  content="Either a string or a properly formatted JSON object. If you use a JSON object as your content, the JSON will be written to a file on disk. Any intrinsic functions such as Fn::GetAtt or Ref are evaluated before the JSON object is written to disk. When you create a symlink, specify the symlink target as the content."
  file_source="A URL to load the file from. This option cannot be specified with the content key."
  source="A URL to load the file from. This option cannot be specified with the content key."
  encoding="The encoding format. Only used if the content is a string. Encoding is not applied if you are using a source. Valid values: plain | base64"
  group="The name of the owning group for this file. Not supported for Windows systems."
  owner="The name of the owning user for this file. Not supported for Windows systems."
  mode="A six-digit octal value representing the mode for this file. Not supported for Windows systems. Use the first three digits for symlinks and the last three digits for setting permissions. To create a symlink, specify 120xxx, where xxx defines the permissions of the target file. To specify permissions for a file, use the last three digits, such as 000644."
  authentication="The name of an authentication method to use. This overrides any default authentication. You can use this property to select an authentication method you define with the AWS::CloudFormation::Authentication resource."
  context="Specifies a context for files that are to be processed as Mustache templates. To use this key, you must have installed aws-cfn-bootstrap 1.3-11 or later as well as pystache."

  //Sources
  addSource(){
    this.sourceCount+=1; this.sourceArray.push(this.sourceCount);
  }

  //packages
  addAptPackage(){
    this.aptCount+=1; this.aptArray.push(this.aptCount);
  }

  addMsiPackage(){
    this.msiCount+=1; this.msiArray.push(this.msiCount);
  }

  addPythonPackage(){
    this.pythonCount+=1; this.pythonArray.push(this.pythonCount);
  }

  addRpmPackage(){
    this.rpmCount+=1; this.rpmArray.push(this.rpmCount);
  }

  addRubyGemsPackage(){
    this.rubygemsCount+=1; this.rubygemsArray.push(this.rubygemsCount);
  }

  addYumPackage(){
    this.yumCount+=1; this.yumArray.push(this.yumCount);
  }
  //users
  addUsers(){
    this.usersCount+=1; this.usersArray.push(this.usersCount);
  }

  //services
  addServices(){
    this.servicesCount+=1; this.servicesArray.push(this.servicesCount);
  }

  //group
  addGroups(){
    this.groupsCount+=1; this.groupsArray.push(this.groupsCount);
  }

  //files
  addFiles(){
    this.filesCount+=1; this.filesArray.push(this.filesCount);
  }

  //commands
  addCommands(){
    this.commandsCount+=1; this.commandsArray.push(this.commandsCount);
  }

  // getArray(val){
  //   try {
  //     if((val as String).includes("{")){
  //       //console.log("in array of objects...")
  //       return JSON.parse(val);
  //     }
  //      else{
  //        //console.log("in array of strings...")
  //        return val.length!=0?((val as String).split(",")):[];
  //      } 
  //   } catch (error) {
  //       alert("Oops! An error occurred. Please check the input field type");
  //   }
  // }

  getArray(val){
    try{
      if((val as String).includes("{")){
        var kk=((val as String).split(";"));
        var mm =[]
        kk.forEach((i)=>{
          if((i as String).includes("{")){
            mm.push(JSON.parse(i));
          }
          else{
            mm.push(i);
          }
        })
        return mm;  
      }
      else{
        return val.length!=0?((val as String).split(";")):undefined
      }
    }
    catch(error){
      alert("Oops! An Error occurred. Please check the input field type")
    }    
  }


  onSourcesDone(value){
    this.myobj["AWS::CloudFormation::Init"]["config"]["sources"]={};
    this.sourceArray.forEach((i)=>{
      this.myobj["AWS::CloudFormation::Init"]["config"]["sources"][value[`sourcekey${i}`]]=this.util.getProperJson(value[`sourcevalue${i}`]);
    })
  }

  onAptDone(value){
    if(this.myobj["AWS::CloudFormation::Init"]["config"]["packages"]==undefined) this.myobj["AWS::CloudFormation::Init"]["config"]["packages"]={}
    this.myobj["AWS::CloudFormation::Init"]["config"]["packages"]["apt"]={};
    for(var i=1;i<=this.aptArray.length;i++){
      this.myobj["AWS::CloudFormation::Init"]["config"]["packages"]["apt"][value[`key${i}`]]=this.util.getProperJson(value[`value${i}`]);
    }
  }

  onRpmDone(value){
    if(this.myobj["AWS::CloudFormation::Init"]["config"]["packages"]==undefined) this.myobj["AWS::CloudFormation::Init"]["config"]["packages"]={}
    this.myobj["AWS::CloudFormation::Init"]["config"]["packages"]["rpm"]={};
    for(var i=1;i<=this.rpmArray.length;i++){
      this.myobj["AWS::CloudFormation::Init"]["config"]["packages"]["rpm"][value[`key${i}`]]=this.util.getProperJson(value[`value${i}`]);
    }
  }

  onMsiDone(value){
    if(this.myobj["AWS::CloudFormation::Init"]["config"]["packages"]==undefined) this.myobj["AWS::CloudFormation::Init"]["config"]["packages"]={}
    this.myobj["AWS::CloudFormation::Init"]["config"]["packages"]["msi"]={};
    for(var i=1;i<=this.msiArray.length;i++){
      this.myobj["AWS::CloudFormation::Init"]["config"]["packages"]["msi"][value[`key${i}`]]=this.util.getProperJson(value[`value${i}`]);
    }
  }

  onYumDone(value){
    if(this.myobj["AWS::CloudFormation::Init"]["config"]["packages"]==undefined) this.myobj["AWS::CloudFormation::Init"]["config"]["packages"]={}
    this.myobj["AWS::CloudFormation::Init"]["config"]["packages"]["yum"]={};
    for(var i=1;i<=this.yumArray.length;i++){
      this.myobj["AWS::CloudFormation::Init"]["config"]["packages"]["yum"][value[`key${i}`]]=this.getArray(value[`value${i}`]);
    }
  }

  onPythonDone(value){
    if(this.myobj["AWS::CloudFormation::Init"]["config"]["packages"]==undefined) this.myobj["AWS::CloudFormation::Init"]["config"]["packages"]={}
    this.myobj["AWS::CloudFormation::Init"]["config"]["packages"]["python"]={};
    for(var i=1;i<=this.pythonArray.length;i++){
      this.myobj["AWS::CloudFormation::Init"]["config"]["packages"]["python"][value[`key${i}`]]=this.getArray(value[`value${i}`]);
    }
  }

  onRubyGemsDone(value){
    if(this.myobj["AWS::CloudFormation::Init"]["config"]["packages"]==undefined) this.myobj["AWS::CloudFormation::Init"]["config"]["packages"]={}
    this.myobj["AWS::CloudFormation::Init"]["config"]["packages"]["rubygems"]={};
    for(var i=1;i<=this.rubygemsArray.length;i++){
      this.myobj["AWS::CloudFormation::Init"]["config"]["packages"]["rubygems"][value[`key${i}`]]=this.getArray(value[`value${i}`]);
    }
  }

  //Users
  onUserDone(value){
    //console.log(value);
    this.myobj["AWS::CloudFormation::Init"]["config"]["users"]={};
    for(var i=1;i<=this.usersArray.length;i++){
      this.myobj["AWS::CloudFormation::Init"]["config"]["users"][value[`user${i}`]]={}
      this.myobj["AWS::CloudFormation::Init"]["config"]["users"][value[`user${i}`]]["groups"]=this.util.getArray(value[`groups${i}`]);
      this.myobj["AWS::CloudFormation::Init"]["config"]["users"][value[`user${i}`]]["uid"]=this.util.getProperJson(value[`uid${i}`]);
      this.myobj["AWS::CloudFormation::Init"]["config"]["users"][value[`user${i}`]]["homeDir"]=this.util.getProperJson(value[`homedir${i}`]);
    }
  }

  onServiceDone(value){
    this.myobj["AWS::CloudFormation::Init"]["config"]["services"]={};
    for(var i=1;i<=this.servicesArray.length;i++){
      this.myobj["AWS::CloudFormation::Init"]["config"]["services"][value[`type${i}`]]={}
      this.myobj["AWS::CloudFormation::Init"]["config"]["services"][value[`type${i}`]][value[`name${i}`]]={};
      this.myobj["AWS::CloudFormation::Init"]["config"]["services"][value[`type${i}`]][value[`name${i}`]]["ensureRunning"]=this.util.getProperJson(value[`ensureRunning${i}`]);
      this.myobj["AWS::CloudFormation::Init"]["config"]["services"][value[`type${i}`]][value[`name${i}`]]["enabled"]=this.util.getProperJson(value[`enabled${i}`]);
      this.myobj["AWS::CloudFormation::Init"]["config"]["services"][value[`type${i}`]][value[`name${i}`]]["files"]=this.util.getArray(value[`files${i}`]);
      this.myobj["AWS::CloudFormation::Init"]["config"]["services"][value[`type${i}`]][value[`name${i}`]]["sources"]=this.util.getArray(value[`sources${i}`]);
      this.myobj["AWS::CloudFormation::Init"]["config"]["services"][value[`type${i}`]][value[`name${i}`]]["commands"]=this.util.getArray(value[`commands${i}`]);
      this.myobj["AWS::CloudFormation::Init"]["config"]["services"][value[`type${i}`]][value[`name${i}`]]["packages"]=this.util.getProperJson(value[`packages${i}`]);    
    }        
  }

  onGroupDone(value){
    this.myobj["AWS::CloudFormation::Init"]["config"]["groups"]={};
    for(var i=1;i<=this.groupsArray.length;i++){
      this.myobj["AWS::CloudFormation::Init"]["config"]["groups"][value[`key${i}`]]={
        "gid":this.util.getProperJson(value[`value${i}`])
      }

    }
  }

  onFilesDone(value){
    this.myobj["AWS::CloudFormation::Init"]["config"]["files"]={};
    for(var i=1;i<=this.filesArray.length;i++){
      this.myobj["AWS::CloudFormation::Init"]["config"]["files"][value[`filename${i}`]]={
        "content":this.util.doUnescape(this.util.getProperJson(value[`content${i}`])),
        "source":this.util.getProperJson(value[`source${i}`]),
        "encoding":this.util.getProperJson(value[`encoding${i}`]),
        "group":this.util.getProperJson(value[`group${i}`]),
        "owner":this.util.getProperJson(value[`owner${i}`]),
        "mode":this.util.getProperJson(value[`mode${i}`]),
        "authentication":this.util.getProperJson(value[`authentication${i}`]),
        "context":this.util.getProperJson(value[`context${i}`])
      }
    }
  }

  onCommandsDone(value){
    this.myobj["AWS::CloudFormation::Init"]["config"]["commands"]={};
    for(var i=1;i<=this.commandsArray.length;i++){
      this.myobj["AWS::CloudFormation::Init"]["config"]["commands"][value[`commandname${i}`]]={
        "command":this.util.getProperJson(value[`command${i}`]),
        "env":this.util.getProperJson(value[`env${i}`]),
        "cwd":this.util.getProperJson(value[`cwd${i}`]),
        "test":this.util.getProperJson(value[`test${i}`]),
        "ignoreErrors":this.util.getProperJson(value[`ignoreErrors${i}`]),
        "waitAfterCompletion":this.util.getProperJson(value[`wait${i}`])
      }
    }
  }

  onReset(){
    this.myobj["AWS::CloudFormation::Init"]["config"]={}
  }

  copyToClipboard(){
    var textArea= document.createElement("textarea");
    textArea.value = JSON.stringify(this.myobj);
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  }
}
