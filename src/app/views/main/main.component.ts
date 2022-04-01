import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private data: DataServiceService) { }


  public profilePic:string = this.data.profileImg
  public profileName: string = this.data.profileName
  public CategoryShots: Array<any> = this.data.CategoryShots
  public MyCollection: Array<any> = this.data.MyCollection
  
  

  ngOnInit(): void {

  }

}
