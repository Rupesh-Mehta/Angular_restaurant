import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import itemsData from '../../../assets/data/dishes.json';

// import jsonData from '../../data/dishes.json'
// interface Dish{
//       id:number,
//       name:string,
//       category:string,
//       rating:number,
//       price:number,
//       img:string,
//       quantity:number,
//       description:string 
// }
@Component({
  selector: 'app-starter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './starter.component.html',
  styleUrl: './starter.component.css'
})


export class StarterComponent implements OnInit, OnChanges {

  dishes= itemsData.items;
  filterData=this.dishes;

  @Input()
  category!:string;

  constructor() { }

  cartCount = 0;

  addToCart() {
    this.cartCount++;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['category'] && this.category === 'starter') {
      this.getStarterDishes(this.category);
    }
  }

  ngOnInit(): void {
    this.getStarterDishes(this.category);
  }
  getStarterDishes(category:string) {
    // debugger;
   if(category){
    console.log(category);
    this.filterData=this.dishes.filter(item=>item.category===category);
    console.log(this.filterData);
    
   }else{
    this.filterData=this.dishes;
   }
  }

  // filterDishes(): void {
  //   this.starters = this.dishes.filter(dish => dish.category === 'Starter');
  //   this.mainCourses = this.dishes.filter(dish => dish.category === 'Main Course');
  //   this.desserts = this.dishes.filter(dish => dish.category === 'Dessert');
  // }
}
