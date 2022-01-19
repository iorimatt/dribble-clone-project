import { Component, OnInit } from '@angular/core';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {


  public inspirationIcons: string = 'rounded-md h-8 w-8 p-2'
  public inspirationColorPallete:Array<string> = ['red', 'yellow', 'purple', 'blue', 'pink']
  public menuOption: number = -1
  public profileImg: string = 'https://cdn.dribbble.com/users/5021028/avatars/normal/6e8a3a7984583a2ed37f537c02fd2592.jpeg?1640775311'

  public menu: any = [

    { name: 'Inspiration' },
    { name: 'Find Work' },
    { name: 'Learn Design' },
    { name: 'Go Pro' },
    { name: 'Marketplace' },
    { name: 'Hire Designers' },

  ]



  

  public inspirationOptions: any = [

    { name: 'Explore Design Work', icon: ` cursor-pointer bg-${this.inspirationColorPallete[0]}-50  ${this.inspirationIcons} ` + 'bg-slate-100', description: 'Trending designs to inspire you' },
    { name: 'News & Nothworthy', icon: `bg-${this.inspirationColorPallete[1]}-50  ${this.inspirationIcons} cursor-pointer`, description: 'Upcoming Designers' },
    { name: 'Playoffs', icon: `bg-${this.inspirationColorPallete[2]}-50 ${this.inspirationIcons} cursor-pointer`, description: 'Designers availble' },
    { name: 'Blog', icon: `bg-${this.inspirationColorPallete[3]}-50  ${this.inspirationIcons} cursor-pointer`, description: 'Contents about design world' },
    { name: 'Weekly Warm-up', icon: `bg-${this.inspirationColorPallete[4]}-50  ${this.inspirationIcons} cursor-pointer`, description: 'Inspirations for you' },


  ]

  public browserCategories: any = [

    { name: 'Animation' },
    { name: 'Branding' },
    { name: 'Ilustration' },
    { name: 'Mobile' },
    { name: 'Print' },
    { name: 'Product Design' },

  ]

  
  openMenu(index: number) {
    this.menuOption = index

  }



  ngOnInit(): void {
  }

}
