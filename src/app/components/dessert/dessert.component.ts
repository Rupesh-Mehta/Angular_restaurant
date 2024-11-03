import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import itemsData from '../../../assets/data/dishes.json';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dessert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dessert.component.html',
  styleUrl: './dessert.component.css'
})
export class DessertComponent implements OnInit, OnChanges {

  dishes = itemsData.items;
  filterData = this.dishes;

  @Input()
  category!: string;
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
  getStarterDishes(category: string) {
    // debugger;
    if (category) {
      console.log(category);
      this.filterData = this.dishes.filter(item => item.category === category);
      console.log(this.filterData);

    } else {
      this.filterData = this.dishes;
    }
  }

}
