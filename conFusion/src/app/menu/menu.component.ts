import { Component, OnInit } from '@angular/core';
import {Dish} from '../shared/dish';
import {DishService} from '../services/dish.service'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dishes:Dish[];

selectedDish:Dish;

constructor( private dishService:DishService){}

ngOnInit(){

  this.dishes=this.dishService.getDishes();
  console.log("menucompo");
}

onSelect(dish:Dish){
  this.selectedDish=dish;
}}