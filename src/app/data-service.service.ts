import { Injectable } from '@angular/core';
import {Content} from '../app/models/models'

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  public inspirationIcons: string = 'rounded-md h-8 w-8 p-2'
  public profileImg: string = 'https://cdn.dribbble.com/users/5021028/avatars/normal/6e8a3a7984583a2ed37f537c02fd2592.jpeg?1640775311'
  public profileName: string = 'Mateus franco'
  public menuOptions: Array<any> = [
    {
      name: 'Inspiration', 
      options: [
        { name: 'Explore Design Work', icon: `cursor-pointer bg-red-50  ${this.inspirationIcons}`, description: 'Trending designs to inspire you' },
        { name: 'News & Nothworthy', icon: `bg-yellow-50 ${this.inspirationIcons} `, description: 'Upcoming Designers' },
        { name: 'Playoffs', icon: `bg-blue-50 ${this.inspirationIcons} cursor-pointer`, description: 'Designers availble' },
        { name: 'Blog', icon: `bg-purple-50  ${this.inspirationIcons} cursor-pointer`, description: 'Contents about design world' },
        { name: 'Weekly Warm-up', icon: `bg-pink-50  ${this.inspirationIcons} cursor-pointer`, description: 'Inspirations for you' },
      ],

      categories: [

        { name: 'Animation' },
        { name: 'Branding' },
        { name: 'Ilustration' },
        { name: 'Mobile' },
        { name: 'Print' },
        { name: 'Product Design' },


      ]

    },


    { name: 'Find Work', options: [

      { name: 'Job Board', icon: `cursor-pointer bg-red-50  ${this.inspirationIcons}`, description: 'Trending designs to inspire you' },
      { name: 'Freelance Projects', icon: `bg-yellow-50 ${this.inspirationIcons} `, description: 'Upcoming Designers' },
      { name: 'Search Freelancers', icon: `bg-blue-50 ${this.inspirationIcons} cursor-pointer`, description: 'Designers availble' },
      { name: 'Personalize your profile', icon: `bg-purple-50  ${this.inspirationIcons} cursor-pointer`, description: 'Contents about design world' },


    ]}
    
    ,

    { name: 'Learn Design' },
    { name: 'Go Pro' },
    { name: 'Marketplace' },
    { name: 'Hire Designers' },

  ]

  public contentList:Content[] = [

    {title:'teste', image:'teste',  likes:1,  views:1, author:this.profileName },
    {title:'teste', image:'teste',  likes:1,  views:1, author:this.profileName },
    {title:'teste', image:'teste',  likes:1,  views:1, author:this.profileName },   

  ]
  


}
