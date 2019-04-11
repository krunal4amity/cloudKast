import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-property-dialog-tab',
  templateUrl: './property-dialog-tab.component.html',
  styleUrls: ['./property-dialog-tab.component.css']
})
export class PropertyDialogTabComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PropertyDialogTabComponent>,@Inject(MAT_DIALOG_DATA) public data) { }

  tagCount=1;
  tagArray=[1];

  ngOnInit() {
  }

  addParam(){
    this.tagCount+=1;
    this.tagArray.push(this.tagCount);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
