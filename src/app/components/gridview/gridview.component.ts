import { Component, OnInit } from '@angular/core';
import { IDish } from 'src/app/interfaces/dish/dish.interface';
import { DishService } from 'src/app/services/dish/dish.service';

@Component({
  selector: 'app-gridview',
  templateUrl: './gridview.component.html',
  styleUrls: ['./gridview.component.css']
})
export class GridviewComponent implements OnInit {
  dishes: IDish[];
  constructor(private dishService: DishService) { }

  ngOnInit(): void {
    this.dishes = this.dishService.getAllDishes();
  }

}
