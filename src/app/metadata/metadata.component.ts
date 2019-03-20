import { Component, OnInit } from '@angular/core';
import { JsonResultService } from '../json-result.service';

@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.css']
})
export class MetadataComponent implements OnInit {

  constructor(private result:JsonResultService) {
   }

  ngOnInit() {
  }

}
