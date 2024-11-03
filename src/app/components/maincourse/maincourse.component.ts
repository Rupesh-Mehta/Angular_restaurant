import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import itemsData from '../../../assets/data/dishes.json';

@Component({
  selector: 'app-maincourse',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './maincourse.component.html',
  styleUrl: './maincourse.component.css'
})
export class MaincourseComponent implements OnInit , OnChanges{

  
  dishes= itemsData.items;
  filterData=this.dishes;

  @Input()
  category!:string;
  cartCount = 0;

  addToCart() {
    this.cartCount++;
  }
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['category'] && this.category === 'maincourse') {
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

}
