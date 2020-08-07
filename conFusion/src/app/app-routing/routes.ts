import {Routes} from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import {MatListModule} from '@angular/material/list';
import{MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { DishdetailComponent } from '../dishdetail/dishdetail.component';
import {DishService} from '../services/dish.service';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

export const routes:Routes =[
    {path:'home', component:HomeComponent},
    {path: 'menu', component:MenuComponent},
    {path: 'dishdetail/:id', component:DishdetailComponent},
    {path: 'contact',component:ContactComponent},
    {path: 'about',component:AboutComponent},
    {path:'',redirectTo:'/home',pathMatch:'full'}
];
