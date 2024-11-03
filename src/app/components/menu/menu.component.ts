import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StarterComponent } from "../starter/starter.component";
import { CommonModule } from '@angular/common';
import { MaincourseComponent } from "../maincourse/maincourse.component";
import { DessertComponent } from "../dessert/dessert.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [FormsModule, StarterComponent, CommonModule, MaincourseComponent, DessertComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
// @Output() categorySelected=new EventEmitter<string>();

selectedCategory: string='';
// categories = ['starter', 'main course', 'dessert'];
constructor(private router:Router){

}

  // menuItems: Array<{ category: string; image: string | ArrayBuffer | null }> = [];

  onCategoryChange(category:string) {
    debugger;
    console.log(`Category selected: ${this.selectedCategory}`);
    // this.selectedCategory=(category.target as HTMLSelectElement).value;
    
    this.selectedCategory=category;
    if (this.selectedCategory) {
      this.router.navigate([this.selectedCategory]);
    }
  }

}
