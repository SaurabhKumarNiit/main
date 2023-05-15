import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  constructor(private service:DataService){

  }

  mainData:any;
  ngOnInit(): void {
    this.mainData = this.service.dataDetails;
  }


}
