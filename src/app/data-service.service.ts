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

  

  public CategoryShots:Array<any> = [


      {name: 'Shots', number: '10'}, {name: 'Boosted Shots', number: '0'}, {name:'Collections', number: '0'}, {name: 'Liked Shots' ,number:'4'}, {name: 'About', number: '2'}


  ]


  public MyCollection:Content[] = [


    {author: this.profileName, title:'Prati-Donaduzzi', likes: 2, views: 76, image: 'https://cdn.dribbble.com/users/5021028/screenshots/17887297/media/be33c3f12af5f1ece1fe7af3f3e015c4.png?compress=1&resize=800x600&vertical=top'},
    
    {author: this.profileName, title:'Universidade do Trade', likes: 0, views: 34, image: 'https://cdn.dribbble.com/users/5021028/screenshots/17161214/media/65d205d927760adfc35c8f3265448117.jpg?compress=1&resize=1200x900&vertical=top'},
    
    {author: this.profileName, title:'Agrinvest App', likes: 2, views: 55, image: 'https://cdn.dribbble.com/users/5021028/screenshots/17161127/media/a0d889be3595b47cc1d5d3fbdbe4fb9a.jpg?compress=1&resize=800x600&vertical=top'},

    { author: this.profileName, title:'iBag App', likes: 0, views: 1, image: 'https://cdn.dribbble.com/users/5021028/screenshots/17161058/media/7de1ecb470dcdb4e92c9891ae54a21fe.jpg?compress=1&resize=800x600&vertical=top'},

    { author: this.profileName, title:'iBag App', likes: 0, views: 1, image: 'https://cdn.dribbble.com/users/5021028/screenshots/16352305/media/f68f7413cdee93c93890902beef3916f.png?compress=1&resize=800x600&vertical=top'},
    { author: this.profileName, title:'iBag App', likes: 2, views: 10, image: 'https://cdn.dribbble.com/users/5021028/screenshots/16352885/media/5a0786c5c7629cc408a995dacfa4970f.png?compress=1&resize=1200x900&vertical=top'},
    { author: this.profileName, title:'iBag App', likes: 4, views: 23, image: 'https://cdn.dribbble.com/users/5021028/screenshots/16352613/media/90983b8ffc45c38f5bce6ab1ba8ce35b.png?compress=1&resize=1200x900&vertical=top'},
    { author: this.profileName, title:'iBag App', likes: 0, views: 1, image: 'https://cdn.dribbble.com/users/5021028/screenshots/16352328/media/b272f492e54a712f36a33b4b7ea0882b.jpg?compress=1&resize=800x600&vertical=top'}
  ]





  


}
