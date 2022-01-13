import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {

  public menuOption:number = -1
  public profileImg:string = 'https://cdn.dribbble.com/users/5021028/avatars/normal/6e8a3a7984583a2ed37f537c02fd2592.jpeg?1640775311'
   
  public  menu:any = [

    {name:'Inspiration'},
    {name:'Find Work'},
    {name:'Learn Design'},
    {name:'Go Pro'},
    {name:'Marketplace'},
    {name:'Hire Designers'},

  ]

  public  browserCategories:any = [

    {name:'Animation'},
    {name:'Branding'},
    {name:'Ilustration'},
    {name:'Mobile'},
    {name:'Print'},
    {name:'Product Design'},

  ]

  constructor() { }


  openMenu(index:number){
        this.menuOption = index
        console.log(this.menuOption) 
      }



  ngOnInit(): void {
  }

}
