import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {


  constructor(private data: DataServiceService){}
  

  // show/hide menu flag
  public menuOption: number = -1


// data provider to menu 

  public profileImg: string = this.data.profileImg
  
  
  // Menu Options 

    public menu: Array<any> = this.data.menuOptions



//first option submenu

  public firstOption: Array<any> = this.data.menuOptions[0].options
  public firstOptionCategories: Array<any>  = this.data.menuOptions[0].categories
  
  
//second option submenu

public secondOption: Array<any>= this.data.menuOptions[1].options
  

  
  //parameters for show specify option 

  openMenu(index: number) {
    this.menuOption = index

  }


  ngOnInit(): void { }

}
