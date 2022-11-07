import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  
  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id == id)!; 

  }

  getAllFoodByTag(tag: string): Foods[] {
    return tag == 'All' ?
     this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));

  }

  getAllTag(): Tag[]{
    return[
      { name: 'All', count: 8 },
      { name: 'fastfood', count: 6 },
      { name: 'Pizza', count: 3 },
      { name: 'Lunch', count: 5 },
      { name: 'slowfood', count: 2 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 1 },
      { name: 'Soup', count: 1 },

    ];
  }

  

  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        price: 10,
        cookTime: '10-20',
        favorite: false,
        origins: ['Italy'],
        stars: 4.5,
        imageUrl: '/assets/food_1.jpg',
        tags: ['fastfood', 'Pizza', 'Lunch']
      },

      {
        id: 2,
        name: 'Meatball',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['Persia', 'Middle East', 'China'],
        stars: 1.7,
        imageUrl: '/assets/food_2.jpg',
        tags: ['slowfood', 'Lunch']
      },

      {
        id: 3,
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['Germany', 'US'],
        stars: 3.5,
        imageUrl: '/assets/food_3.jpg',
        tags: ['fastfood', 'Hamburger']
      },

      {
        id: 4,
        name: 'Fried Potatoes',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['Belgium', 'France', 'India'],
        stars: 3.3,
        imageUrl: '/assets/food_4.jpg',
        tags: ['fastfood', 'Fry']
      },

      {
        id: 5,
        name: 'Chicken Soup',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['India', 'Asia'],
        stars: 3.0,
        imageUrl: '/assets/food_5.jpg',
        tags: ['slowfood', 'Soup']
      },

      {
        id: 6,
        name: 'Vegetables Pizza',
        price: 19,
        cookTime: '40-50',
        favorite: false,
        origins: ['Italy'],
        stars: 4.0,
        imageUrl: '/assets/food_6.jpg',
        tags: ['fastfood', 'Pizza', 'Lunch']
      },

      {
        id: 7,
        name: 'Vegetables spicy Pizza',
        price: 10,
        cookTime: '20-30',
        favorite: false,
        origins: ['India'],
        stars: 4.0,
        imageUrl: '/assets/food_7.jpg',
        tags: ['fastfood', 'Pizza', 'Lunch']
      },

      {
        id: 8,
        name: 'Vegetables burger',
        price: 15,
        cookTime: '10-15',
        favorite: true,
        origins: ['India'],
        stars: 4.0,
        imageUrl: '/assets/food_8.jpg',
        tags: ['fastfood', 'Lunch']
      },

    ]
  }
}
