import { Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { MaincourseComponent } from './components/maincourse/maincourse.component';
import { DessertComponent } from './components/dessert/dessert.component';
import { StarterComponent } from './components/starter/starter.component';

export const routes: Routes = [
    {
        path:"menu",
        component:MenuComponent,
        pathMatch:'full'
    },
    { path: 'starter', component: StarterComponent },
  { path: 'maincourse', component: MaincourseComponent },
  { path: 'dessert', component: DessertComponent },
  // { path: '', redirectTo: '/starter', pathMatch: 'full' }, // Redirect to 'starter' as default
  { path: '**', redirectTo: '/starter' } 
];
