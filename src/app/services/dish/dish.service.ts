import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { IDish } from 'src/app/interfaces/dish/dish.interface';
import { DishState } from 'src/app/models/dish/dish.redux';

@Injectable({
  providedIn: 'root'
})
export class DishService {
  constructor(private store: Store) { }
  getAllDishes(): IDish[]{
    return this.store.selectSnapshot(DishState.getAllDishes);
  }
}
